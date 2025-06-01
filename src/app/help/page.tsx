import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search, LifeBuoy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is VoteChain?",
        a: "VoteChain is a decentralized voting platform that allows communities and organizations to conduct secure and transparent polls and elections using blockchain technology."
      },
      {
        q: "How do I connect my wallet?",
        a: "On the homepage or dashboard, click the 'Connect Wallet' button. You'll be prompted to choose between supported wallets like MetaMask or WalletConnect. Follow the on-screen instructions provided by your wallet provider."
      },
      {
        q: "Do I need cryptocurrency to vote?",
        a: "This depends on the specific poll or DAO configuration. Some polls may require a nominal gas fee for transaction processing on the blockchain, while others might use gasless voting mechanisms or specific governance tokens."
      }
    ]
  },
  {
    category: "Voting Process",
    questions: [
      {
        q: "How do I cast a vote?",
        a: "Navigate to the 'Active Polls' section, select a poll you wish to participate in. On the poll details page, review the proposal and options, then select your choice and click 'Submit Vote'. You may need to confirm the transaction in your connected wallet."
      },
      {
        q: "Can I change my vote?",
        a: "In most decentralized voting systems, once a vote is cast and confirmed on the blockchain, it is immutable and cannot be changed. Please review your selection carefully before submitting."
      },
      {
        q: "Where can I see poll results?",
        a: "Poll results are typically displayed on the poll details page. Some polls may show real-time results, while others will display final results after the voting period ends."
      }
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My wallet connection failed. What should I do?",
        a: "Ensure your wallet extension or app is up to date. Try disconnecting and reconnecting. Check your internet connection and ensure you have selected the correct network in your wallet (e.g., Ethereum Mainnet, or a specific testnet)."
      },
      {
        q: "I encountered an error while voting.",
        a: "Note down any error messages. Common issues include insufficient gas funds in your wallet or network congestion. Try again after a few minutes or with a higher gas fee if applicable. If the problem persists, contact support."
      }
    ]
  }
];

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <LifeBuoy className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Help Center</h1>
        <p className="text-xl text-muted-foreground mt-2">Find answers to your questions about VoteChain.</p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search FAQs..." className="pl-10 w-full text-base py-3 rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {faqs.map((categoryItem) => (
            <section key={categoryItem.category} className="mb-10">
              <h2 className="font-headline text-2xl font-semibold mb-4 pb-2 border-b">{categoryItem.category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {categoryItem.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${categoryItem.category}-${index}`} className="bg-card border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-base text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
        
        <aside className="md:col-span-1">
            <Card className="shadow-lg sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Can't find an answer?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        If you can't find what you're looking for in our FAQs, please feel free to reach out to our support team or join our community forum.
                    </p>
                    <div className="space-y-3">
                        <Button className="w-full" >Contact Support</Button>
                        <Button variant="outline" className="w-full">Join Community Forum</Button>
                    </div>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
