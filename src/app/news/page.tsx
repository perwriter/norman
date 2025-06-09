
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Video, Rss, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const blogPosts = [
  {
    id: "1",
    slug: "reflections-on-chopin", // Added slug for dynamic routing
    title: "Reflections on Chopin: A Journey Through Nocturnes",
    date: "October 15, 2024",
    excerpt: "Exploring the emotional depth and technical brilliance of Chopin's Nocturnes, and their enduring appeal to pianists and audiences alike.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "piano sheet music",
    link: "/news/reflections-on-chopin" 
  },
  {
    id: "2",
    slug: "art-of-practice", // Added slug
    title: "The Art of Practice: Strategies for Musicians",
    date: "September 28, 2024",
    excerpt: "Insights into effective practice techniques, maintaining motivation, and achieving artistic growth as a performing musician.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "musician practicing",
    link: "/news/art-of-practice"
  },
  {
    id: "3",
    slug: "carnegie-hall-review", // Added slug
    title: "Concert Review: An Evening at Carnegie Hall",
    date: "August 05, 2024",
    excerpt: "A personal account and review of a recent memorable performance at the legendary Carnegie Hall.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "concert hall stage",
    link: "/news/carnegie-hall-review"
  },
  {
    id: "4",
    slug: "reflections-on-chopin", // Added slug for dynamic routing
    title: "Reflections on Chopin: A Journey Through Nocturnes",
    date: "October 15, 2024",
    excerpt: "Exploring the emotional depth and technical brilliance of Chopin's Nocturnes, and their enduring appeal to pianists and audiences alike.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "piano sheet music",
    link: "/news/reflections-on-chopin" 
  },
  {
    id: "5",
    slug: "art-of-practice", // Added slug
    title: "The Art of Practice: Strategies for Musicians",
    date: "September 28, 2024",
    excerpt: "Insights into effective practice techniques, maintaining motivation, and achieving artistic growth as a performing musician.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "musician practicing",
    link: "/news/art-of-practice"
  },
  {
    id: "6",
    slug: "carnegie-hall-review", // Added slug
    title: "Concert Review: An Evening at Carnegie Hall",
    date: "August 05, 2024",
    excerpt: "A personal account and review of a recent memorable performance at the legendary Carnegie Hall.",
    imageUrl: "/norman-lu-hero.jpeg",
    aiHint: "concert hall stage",
    link: "/news/carnegie-hall-review"
  }
];

const videoPerformances = [
  {
    id: "v1",
    title: "Norman Lu plays Liszt - La Campanella",
    description: "Live performance from the International Music Festival, 2023.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "piano concert stage",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "v2",
    title: "Beethoven Piano Sonata No. 14 'Moonlight'",
    description: "Studio recording, offering a serene and intimate interpretation.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "grand piano dramatic",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "v3",
    title: "Interview: Norman Lu on Musical Interpretation",
    description: "A discussion on artistic choices, historical context, and personal connection to music.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "musician interview setup",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "v4",
    title: "Norman Lu plays Liszt - La Campanella",
    description: "Live performance from the International Music Festival, 2023.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "piano concert stage",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "v5",
    title: "Beethoven Piano Sonata No. 14 'Moonlight'",
    description: "Studio recording, offering a serene and intimate interpretation.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "grand piano dramatic",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: "v6",
    title: "Interview: Norman Lu on Musical Interpretation",
    description: "A discussion on artistic choices, historical context, and personal connection to music.",
    thumbnailUrl: "/norman-lu-hero.jpeg",
    aiHint: "musician interview setup",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  }
];

export default function NewsPage() {
  return (
    <div className="space-y-16">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary font-headline">News & Media</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with my latest articles, performances, and media appearances.
        </p>
      </header>

      <section id="articles">
        <div className="flex items-center mb-8">
          <Rss className="w-10 h-10 text-accent mr-4" />
          <h2 className="text-3xl font-bold text-primary font-headline">Latest Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={post.link}>Read More <ExternalLink className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section id="videos">
        <div className="flex items-center mb-8">
          <Video className="w-10 h-10 text-accent mr-4" />
          <h2 className="text-3xl font-bold text-primary font-headline">Featured Videos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoPerformances.map((video) => (
            <Card key={video.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video group">
                <Image src={video.thumbnailUrl} alt={video.title} layout="fill" objectFit="cover" data-ai-hint={video.aiHint} />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircleIcon className="w-16 h-16 text-white" />
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="text-xl">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{video.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default">
                  <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video <ExternalLink className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper PlayCircleIcon for video cards
function PlayCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor" // Changed fill to currentColor to make it solid white
      stroke="currentColor"
      strokeWidth="1" // Adjusted stroke width
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="var(--background)" /> {/* Polygon fill to background */}
    </svg>
  )
}
