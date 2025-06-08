import Link from 'next/link';
import { Music2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/news', label: 'News & Media' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Music2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl font-headline text-primary">Norman Lu</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Music2 className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl font-headline text-primary">Norman Lu</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-primary py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
