import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

// Placeholder for form handling logic
// For a real form, you'd use react-hook-form, Zod, and a server action.

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary font-headline">Contact Norman Lu</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          For bookings, collaborations, media inquiries, or general questions, please get in touch.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center"><Send className="mr-3 w-8 h-8 text-accent" /> Send a Message</CardTitle>
            <CardDescription>Fill out the form below, and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Inquiry about performance booking" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>
              <Button type="submit" className="w-full sm:w-auto" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Direct Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-accent" />
                <Link href="mailto:contact@normanlu.com" className="text-lg hover:underline">
                  contact@normanlu.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg text-muted-foreground">(123) 456-7890 (Management)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-lg text-muted-foreground">Based in New York, NY (Available Worldwide)</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Management & Bookings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-semibold">Jane Smith Artist Management</p>
              <p className="text-muted-foreground">123 Music Row, Suite 500</p>
              <p className="text-muted-foreground">Nashville, TN 37203, USA</p>
              <p className="text-muted-foreground">
                <Link href="mailto:bookings@jsmithmanagement.com" className="hover:underline">
                  bookings@jsmithmanagement.com
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Separator />

      {/* Placeholder for a map. You could embed Google Maps here. */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary font-headline">Location</h2>
        <Card className="shadow-md overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            {/* <Image src="https://placehold.co/1200x600.png?text=Map+Placeholder" alt="Map" layout="fill" objectFit="cover" data-ai-hint="world map location" /> */}
            <p className="text-muted-foreground">Map integration coming soon.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
