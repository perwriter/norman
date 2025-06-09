
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, ChevronLeft } from 'lucide-react';

// This is a placeholder data source. In a real application, you would fetch this
// data from a CMS, database, or local files based on the slug.
const allBlogPosts = [
  {
    id: "1",
    slug: "reflections-on-chopin",
    title: "Reflections on Chopin: A Journey Through Nocturnes",
    date: "October 15, 2024",
    excerpt: "Exploring the emotional depth and technical brilliance of Chopin's Nocturnes, and their enduring appeal to pianists and audiences alike.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image for this post
    aiHint: "piano sheet music Chopin",
    content: `
      <p>The Nocturnes of Frédéric Chopin stand as a pinnacle of Romantic piano literature. Their intimate melodies, rich harmonies, and expressive depth continue to captivate both performers and listeners. In this article, I delve into my personal journey with these masterpieces, exploring the technical challenges and profound emotional landscapes they offer.</p>
      <p>Chopin's ability to convey a vast range of human emotion within a relatively concise form is nothing short of genius. From the melancholic yearning of Op. 9 No. 1 to the dramatic intensity of Op. 48 No. 1, each Nocturne tells a unique story.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Technical Considerations</h3>
      <p>Beyond their expressive beauty, the Nocturnes present significant technical demands. Achieving the delicate cantabile (singing) lines, mastering the intricate ornamentation, and balancing the often complex polyphony requires meticulous practice and a deep understanding of Chopin's style.</p>
      <ul class="list-disc list-inside my-4 space-y-2 text-muted-foreground">
        <li>Legato and Phrasing: Essential for the "singing" quality.</li>
        <li>Rubato: Chopin's use of rhythmic flexibility is key to interpretation.</li>
        <li>Pedaling: Sophisticated pedaling is crucial for color and resonance.</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Enduring Appeal</h3>
      <p>The enduring appeal of Chopin's Nocturnes lies in their universal emotional language. They speak to the heart, offering solace, reflection, and moments of exquisite beauty. As a pianist, performing these works is always a deeply rewarding experience, a chance to connect with the composer's spirit and share his timeless music with the world.</p>
    `
  },
  {
    id: "2",
    slug: "art-of-practice",
    title: "The Art of Practice: Strategies for Musicians",
    date: "September 28, 2024",
    excerpt: "Insights into effective practice techniques, maintaining motivation, and achieving artistic growth as a performing musician.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image
    aiHint: "musician practicing focused",
    content: `
      <p>Effective practice is the cornerstone of musical development. It's not merely about repetition, but about focused, intelligent work. In this article, I share some strategies that have helped me throughout my career.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Goal-Oriented Practice</h3>
      <p>Every practice session should have clear goals. Are you working on a specific technical passage, memorization, or overall interpretation? Defining your objectives helps maintain focus and measure progress.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Mindful Repetition</h3>
      <p>Instead of mindless repetition, engage in mindful practice. This means actively listening, analyzing, and making adjustments with each repetition. Slow practice is invaluable for building accuracy and control.</p>
      <ul class="list-disc list-inside my-4 space-y-2 text-muted-foreground">
        <li><strong>Chunking:</strong> Break down difficult passages into smaller, manageable sections.</li>
        <li><strong>Varied Rhythms:</strong> Practice with different rhythmic patterns to solidify evenness and precision.</li>
        <li><strong>Mental Practice:</strong> Visualize yourself playing the piece perfectly, away from the instrument.</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Maintaining Motivation</h3>
      <p>Motivation can ebb and flow. Setting short-term and long-term goals, celebrating small victories, and regularly listening to inspiring performances can help maintain enthusiasm. Remember why you started your musical journey.</p>
    `
  },
  {
    id: "3",
    slug: "carnegie-hall-review",
    title: "Concert Review: An Evening at Carnegie Hall",
    date: "August 05, 2024",
    excerpt: "A personal account and review of a recent memorable performance at the legendary Carnegie Hall.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image
    aiHint: "Carnegie Hall interior",
    content: `
      <p>Performing at Carnegie Hall is a dream for many musicians, and my recent concert there was an unforgettable experience. The acoustics of Stern Auditorium are legendary, and feeling the history within those walls is truly inspiring.</p>
      <p>The program included works by Beethoven, Liszt, and a contemporary piece by a young American composer. The audience was incredibly warm and responsive, which always elevates a performance.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">The Repertoire</h3>
      <p>Opening with Beethoven's "Waldstein" Sonata set a powerful tone. Its technical demands and profound emotional arc make it a challenging yet rewarding piece to perform. Liszt's "Mephisto Waltz No. 1" provided a thrilling contrast with its demonic energy and virtuosic fireworks.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Connecting with the Audience</h3>
      <p>One of the most magical aspects of performing live is the connection with the audience. Sharing the music I love with so many attentive listeners in such an iconic venue was a profound moment in my career. I am immensely grateful for the opportunity and the enthusiastic reception.</p>
    `
  },
  {
    id: "4",
    slug: "reflections-on-chopin",
    title: "Reflections on Chopin: A Journey Through Nocturnes",
    date: "October 15, 2024",
    excerpt: "Exploring the emotional depth and technical brilliance of Chopin's Nocturnes, and their enduring appeal to pianists and audiences alike.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image for this post
    aiHint: "piano sheet music Chopin",
    content: `
      <p>The Nocturnes of Frédéric Chopin stand as a pinnacle of Romantic piano literature. Their intimate melodies, rich harmonies, and expressive depth continue to captivate both performers and listeners. In this article, I delve into my personal journey with these masterpieces, exploring the technical challenges and profound emotional landscapes they offer.</p>
      <p>Chopin's ability to convey a vast range of human emotion within a relatively concise form is nothing short of genius. From the melancholic yearning of Op. 9 No. 1 to the dramatic intensity of Op. 48 No. 1, each Nocturne tells a unique story.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Technical Considerations</h3>
      <p>Beyond their expressive beauty, the Nocturnes present significant technical demands. Achieving the delicate cantabile (singing) lines, mastering the intricate ornamentation, and balancing the often complex polyphony requires meticulous practice and a deep understanding of Chopin's style.</p>
      <ul class="list-disc list-inside my-4 space-y-2 text-muted-foreground">
        <li>Legato and Phrasing: Essential for the "singing" quality.</li>
        <li>Rubato: Chopin's use of rhythmic flexibility is key to interpretation.</li>
        <li>Pedaling: Sophisticated pedaling is crucial for color and resonance.</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Enduring Appeal</h3>
      <p>The enduring appeal of Chopin's Nocturnes lies in their universal emotional language. They speak to the heart, offering solace, reflection, and moments of exquisite beauty. As a pianist, performing these works is always a deeply rewarding experience, a chance to connect with the composer's spirit and share his timeless music with the world.</p>
    `
  },
  {
    id: "5",
    slug: "art-of-practice",
    title: "The Art of Practice: Strategies for Musicians",
    date: "September 28, 2024",
    excerpt: "Insights into effective practice techniques, maintaining motivation, and achieving artistic growth as a performing musician.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image
    aiHint: "musician practicing focused",
    content: `
      <p>Effective practice is the cornerstone of musical development. It's not merely about repetition, but about focused, intelligent work. In this article, I share some strategies that have helped me throughout my career.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Goal-Oriented Practice</h3>
      <p>Every practice session should have clear goals. Are you working on a specific technical passage, memorization, or overall interpretation? Defining your objectives helps maintain focus and measure progress.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Mindful Repetition</h3>
      <p>Instead of mindless repetition, engage in mindful practice. This means actively listening, analyzing, and making adjustments with each repetition. Slow practice is invaluable for building accuracy and control.</p>
      <ul class="list-disc list-inside my-4 space-y-2 text-muted-foreground">
        <li><strong>Chunking:</strong> Break down difficult passages into smaller, manageable sections.</li>
        <li><strong>Varied Rhythms:</strong> Practice with different rhythmic patterns to solidify evenness and precision.</li>
        <li><strong>Mental Practice:</strong> Visualize yourself playing the piece perfectly, away from the instrument.</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Maintaining Motivation</h3>
      <p>Motivation can ebb and flow. Setting short-term and long-term goals, celebrating small victories, and regularly listening to inspiring performances can help maintain enthusiasm. Remember why you started your musical journey.</p>
    `
  },
  {
    id: "6",
    slug: "carnegie-hall-review",
    title: "Concert Review: An Evening at Carnegie Hall",
    date: "August 05, 2024",
    excerpt: "A personal account and review of a recent memorable performance at the legendary Carnegie Hall.",
    imageUrl: "/norman-lu-hero.jpeg", // Replace with actual image
    aiHint: "Carnegie Hall interior",
    content: `
      <p>Performing at Carnegie Hall is a dream for many musicians, and my recent concert there was an unforgettable experience. The acoustics of Stern Auditorium are legendary, and feeling the history within those walls is truly inspiring.</p>
      <p>The program included works by Beethoven, Liszt, and a contemporary piece by a young American composer. The audience was incredibly warm and responsive, which always elevates a performance.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">The Repertoire</h3>
      <p>Opening with Beethoven's "Waldstein" Sonata set a powerful tone. Its technical demands and profound emotional arc make it a challenging yet rewarding piece to perform. Liszt's "Mephisto Waltz No. 1" provided a thrilling contrast with its demonic energy and virtuosic fireworks.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-primary">Connecting with the Audience</h3>
      <p>One of the most magical aspects of performing live is the connection with the audience. Sharing the music I love with so many attentive listeners in such an iconic venue was a profound moment in my career. I am immensely grateful for the opportunity and the enthusiastic reception.</p>
    `
  }
];


interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = allBlogPosts.find(p => p.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Article Not Found</h1>
        <p className="text-muted-foreground mt-2">The article you are looking for does not exist.</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/news">Back to News</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="relative">
        <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={article.aiHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
          <CardTitle className="text-3xl md:text-5xl font-bold drop-shadow-md font-headline">{article.title}</CardTitle>
          <CardDescription className="text-lg text-slate-200 mt-2 drop-shadow-sm flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" /> Published on {article.date}
          </CardDescription>
        </div>
      </header>
      
      <div className="container mx-auto max-w-6xl">
         <Button asChild variant="outline" className="mb-8">
          <Link href="/news">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>

        <Card className="shadow-xl">
          <CardContent className="p-6 md:p-8">
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-primary prose-p:text-foreground/90 prose-li:text-muted-foreground prose-a:text-accent hover:prose-a:text-accent/80">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Add basic styling for prose if not already present in globals.css or tailwind.config.ts
// For example, in tailwind.config.ts, you might need:
// plugins: [require('@tailwindcss/typography')]
// This example assumes you might add Tailwind Typography plugin later.
// For now, the classes are added and would work once the plugin is installed and configured.
// Basic prose classes like prose-lg will provide some default styling.
