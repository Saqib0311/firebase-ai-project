
"use client";

import Link from 'next/link';
import { Layers, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Polls', href: '/polls' },
  { label: 'Help', href: '/help' },
];

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: true;
      request: (args: { method: string; params?: Array<any> }) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (event: string, handler: (...args: any[]) => void) => void;
      removeAllListeners?: (event?: string) => void; // Optional, for cleanup robustness
    };
  }
}

export function SiteHeader() {
  const [account, setAccount] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const { toast } = useToast();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        toast({
          title: "Account Switched",
          description: `Switched to account: ${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`,
        });
      } else {
        setAccount(null);
        toast({ title: "Disconnected", description: "MetaMask account disconnected." });
      }
    };

    const handleChainChanged = (_chainId: string) => {
      toast({ title: "Network Changed", description: "Please ensure you are on the correct network. Reloading..." });
      setTimeout(() => window.location.reload(), 1500);
    };

    if (typeof window.ethereum !== 'undefined') {
      setIsMetaMaskInstalled(true);
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      const checkIfWalletIsConnected = async () => {
        try {
          const accounts = await window.ethereum!.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking for connected accounts:", error);
        }
      };
      checkIfWalletIsConnected();
    } else {
      setIsMetaMaskInstalled(false);
    }

    return () => {
      if (typeof window.ethereum !== 'undefined' && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [toast]);

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask browser extension.",
        variant: "destructive",
      });
      return;
    }

    try {
      const accounts = await window.ethereum!.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        toast({
          title: "Wallet Connected",
          description: `Connected to: ${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`,
        });
        setIsSheetOpen(false); // Close mobile menu if open
      }
    } catch (error: any) {
      console.error("Error connecting to MetaMask:", error);
      if (error.code === 4001) { // User rejected the request
        toast({
          title: "Connection Rejected",
          description: "You rejected the connection request in MetaMask.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Connection Error",
          description: error.message || "Failed to connect to MetaMask.",
          variant: "destructive",
        });
      }
    }
  };

  const displayAddress = account
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : "Connect Wallet";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black text-primary-foreground cursor-rainbow">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">VoteChain</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-primary-foreground/70 hover:text-primary-foreground/80 hover:text-lg transition-all duration-200 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
           <Button
             variant="outline"
             size="sm"
             className="text-foreground hover:text-accent-foreground" // text-foreground makes text black (from theme) on the button's light bg
             onClick={connectWallet}
           >
             {displayAddress}
           </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden text-foreground hover:text-accent-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setIsSheetOpen(false)}>
                <Layers className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold text-foreground">VoteChain</span>
              </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary text-foreground"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                    variant="outline"
                    className="mt-4 text-foreground" // text-foreground makes text black (from theme) on the button's light bg
                    onClick={connectWallet}
                >
                    {displayAddress}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
