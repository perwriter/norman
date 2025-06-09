
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Newspaper, UserCircle, Mic, Send, CalendarDays, Video } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center text-white overflow-hidden shadow-xl -mt-8 w-screen left-1/2 -ml-[50vw]">
      <Image
        src="/norman-lu-hero.jpeg" 
        alt="Norman Lu performing at the piano"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="Norman Lu piano performance"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 p-6 animate-slide-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg font-headline">
          Norman Lu
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md font-body">
          Pianist | Performer | Artist
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/news">Explore My Performances</Link>
        </Button>
      </div>
    </section>
  );
}

const aboutPreview = {
  icon: UserCircle,
  title: "About Me",
  description: "Hello, I'm Norman Lu, an award-winning pianist known for my captivating performances and profound musicality. I've had the privilege of gracing stages worldwide, bringing classical masterpieces to life with passion and precision...",
  link: "/about",
  cta: "Read My Full Biography"
};

const newsPreviewItems = [
  {
    icon: CalendarDays,
    title: "My Upcoming Concert: An Evening with Norman Lu",
    date: "October 26, 2024",
    description: "Join me for an unforgettable evening of music featuring works by Chopin, Liszt, and Beethoven.",
    link: "/news/carnegie-hall-review#upcoming-concert", // Example link, adjust slug as needed
    cta: "More Details"
  },
  {
    icon: Newspaper,
    title: "My New Album 'Reflections' Coming Soon",
    date: "September 15, 2024",
    description: "I'm thrilled to announce my latest album, 'Reflections,' is set to release next month. It features a collection of introspective piano pieces close to my heart.",
    link: "/news/art-of-practice#reflections-album", // Example link, adjust slug as needed
    cta: "Learn More"
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />

      <section className="py-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image 
                src="/norman-lu-hero.jpeg" 
                alt="Norman Lu portrait" 
                width={600} 
                height={800} 
                className="object-cover h-full w-full"
                data-ai-hint="professional portrait musician" 
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <aboutPreview.icon className="w-16 h-16 mb-6 text-accent" />
              <h2 className="text-4xl font-bold mb-4 text-primary font-headline">{aboutPreview.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {aboutPreview.description}
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 self-start">
                <Link href={aboutPreview.link}>{aboutPreview.cta}</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary font-headline">My Latest News & Performances</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {newsPreviewItems.map((item) => (
            <Card key={item.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <item.icon className="w-10 h-10 text-accent" />
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="text-primary p-0">
                  <Link href={item.link}>{item.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/news">View All My News & Media</Link>
          </Button>
        </div>
      </section>
      
      <section className="py-12 text-center bg-muted/50 rounded-lg shadow-md">
        <Mic className="w-16 h-16 mb-6 text-accent mx-auto" />
        <h2 className="text-4xl font-bold mb-4 text-primary font-headline">Experience My Music</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore a curated collection of my performances, from intimate solo recitals to grand orchestral collaborations. I pour my heart into every note.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/news#videos">Watch My Performances</Link>
        </Button>
      </section>

      <section className="py-12 text-center">
        <Send className="w-16 h-16 mb-6 text-accent mx-auto" />
        <h2 className="text-4xl font-bold mb-4 text-primary font-headline">Get in Touch</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'd love to hear from you! For bookings, collaborations, or any inquiries, please feel free to reach out.
        </p>
        <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </section>
    </div>
  );
}
