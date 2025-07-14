import Link from 'next/link';
import { ApexCloudLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ApexCloudLogo className="h-6 w-6" />
            <span className="font-headline font-bold sm:inline-block">
              ApexCloud
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#products"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Products
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Testimonials
            </Link>
            <Link
              href="#ai-tool"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              AI Tool
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
