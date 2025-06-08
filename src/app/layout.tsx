import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Norman Lu - Pianist',
  description: 'The official portfolio website of Norman Lu, showcasing performances, news, and biography.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
