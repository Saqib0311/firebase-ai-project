import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-black text-primary-foreground cursor-rainbow">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-base leading-loose md:text-left">
            &copy; {new Date().getFullYear()} VoteChain. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center space-x-6 text-base font-medium">
          <Link href="/terms" className="transition-colors hover:text-primary-foreground/80">
            Terms of Service
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-primary-foreground/80">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
