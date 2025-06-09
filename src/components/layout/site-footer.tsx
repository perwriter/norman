import Link from 'next/link';
import { Youtube, Instagram, Facebook, Twitter, Mail } from 'lucide-react'; // Using common social media icons

export default function SiteFooter() {
  const socialLinks = [
    { Icon: Instagram, href: "https://instagram.com/normanlu", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com/normanlu", label: "YouTube" },
    { Icon: Facebook, href: "https://facebook.com/normanlu", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com/normanlu", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border/40 bg-card py-12">
      <div className="container text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="h-6 w-6" />
            </Link>
          ))}
          <Link href="mailto:contact@normanlu.com" aria-label="Email Norman Lu"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6 text-sm">
          <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
          <Link href="/news" className="text-muted-foreground hover:text-primary">News & Media</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link> 
          {/* Add privacy policy page if needed */}
          <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
           {/* Add terms page if needed */}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Norman Lu. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
