import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Music, Users, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  const achievements = [
    { icon: Award, text: "Winner, International Piano Competition XYZ (2023)" },
    { icon: Star, text: "Soloist, New York Philharmonic (2022)" },
    { icon: Award, text: "First Prize, National Chopin Competition (2021)" },
  ];

  const influences = ["Frédéric Chopin", "Franz Liszt", "Sergei Rachmaninoff", "Martha Argerich", "Vladimir Horowitz"];

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary font-headline">About Norman Lu</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the journey, inspirations, and passion behind the music of Norman Lu.
        </p>
      </header>

      <Card className="shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
            <Image
              src="/norman-lu-hero.jpeg"
              alt="Norman Lu"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              data-ai-hint="professional musician portrait"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader>
              <CardTitle className="text-3xl text-primary font-headline">A Life in Music</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <p>
                Norman Lu is an acclaimed pianist celebrated for his profound musical sensitivity, virtuosic technique, and captivating stage presence. From a young age, Norman demonstrated an extraordinary aptitude for music, beginning his piano studies at the age of five. His dedication and passion quickly set him on a path towards a distinguished career in classical music.
              </p>
              <p>
                Throughout his formative years, Norman studied with renowned pedagogues, honing his skills and deepening his understanding of the vast piano repertoire. He has since performed in prestigious concert halls across North America, Europe, and Asia, earning accolades for his interpretations of works ranging from Bach to contemporary composers.
              </p>
               <p>
                Norman's performances are characterized by their emotional depth and intellectual rigor. He strives to connect with audiences on a personal level, sharing the timeless beauty and power of classical music.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>

      <Separator />

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary font-headline">Musical Philosophy</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Music className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground italic">
              "Music, for me, is the most profound form of human expression. It transcends language and connects us to our deepest emotions. My goal as an artist is to serve the composer's intent while bringing my own unique voice to each performance, creating a meaningful and memorable experience for the listener."
            </p>
          </CardContent>
        </Card>
      </section>
      
      <Separator />

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary font-headline">Achievements & Milestones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center space-x-4">
                <achievement.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <p className="text-md">{achievement.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />
      
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary font-headline">Influences & Inspirations</h2>
        <Card className="shadow-lg">
           <CardContent className="p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {influences.map((name) => (
                <span key={name} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm shadow-sm">
                  {name}
                </span>
              ))}
            </div>
           </CardContent>
        </Card>
      </section>

    </div>
  );
}
