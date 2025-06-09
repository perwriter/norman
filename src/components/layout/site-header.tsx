
'use client';

import Link from 'next/link';
import { Music2, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/news', label: 'News & Media' },
];

const contactNavItem = { href: '/contact', label: 'Contact' };

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Exact match for home, startsWith for others to catch sub-pages
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 md:py-2 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Music2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-3xl font-headline text-primary shrink-0">Norman Lu</span>
        </Link>
        
        {/* Centered Main Navigation (Desktop) */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8 text-md font-semibold">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                isActive(item.href) ? "text-primary font-bold" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex items-center ml-4 ring-1 ring-primary rounded-md"> {/* Added ml-4 for spacing */}
          <Button asChild variant={isActive(contactNavItem.href) ? "default" : "outline"} size="sm">
            <Link href={contactNavItem.href} className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              {contactNavItem.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
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
                {/* Render main items first */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-primary py-2 flex items-center",
                      isActive(item.href) ? "text-primary font-bold" : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Render contact item last, styled as a button */}
                 <Button asChild variant={isActive(contactNavItem.href) ? "default" : "outline"} className="w-full ring-1 ring-primary rounded-md mt-4">
                    <Link href={contactNavItem.href} className="flex items-center justify-center">
                        <Phone className="mr-2 h-5 w-5" />
                        {contactNavItem.label}
                    </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
