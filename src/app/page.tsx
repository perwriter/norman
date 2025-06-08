import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Piano, Sparkles, Users } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-10rem)] min-h-[500px] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl -mt-8 -mx-4 sm:-mx-0">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Person playing piano"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="piano playing"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 p-6 animate-slide-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to Virtuoso Keys
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md font-body">
          Unlock your musical potential with interactive lessons and AI-powered insights.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/lessons">Start Learning Now</Link>
        </Button>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Piano,
    title: "Interactive Lessons",
    description: "Engage with hands-on lessons designed to make learning piano fun and effective. Practice notes, chords, and melodies with instant visual feedback.",
    link: "/lessons",
    cta: "Explore Lessons"
  },
  {
    icon: Sparkles,
    title: "AI Music Analysis",
    description: "Upload your piano recordings and let our advanced AI provide you with detailed analysis, including key information, chord progressions, and tempo.",
    link: "/analysis",
    cta: "Analyze Music"
  },
  {
    icon: Users,
    title: "Join Our Community",
    description: "Connect with fellow music enthusiasts, share your progress, and get inspired. Virtuoso Keys is more than an app; it's a musical journey.",
    link: "#", // Placeholder for community or contact page
    cta: "Learn More"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />

      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Discover Your Inner Musician</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <feature.icon className="w-16 h-16 mb-4 text-accent" />
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardContent className="text-center">
                 <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href={feature.link}>{feature.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
