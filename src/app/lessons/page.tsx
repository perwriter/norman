import InteractivePiano from '@/components/lessons/interactive-piano';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Music, CheckCircle } from 'lucide-react';

export default function LessonsPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary">Interactive Piano Lessons</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn to play the piano with our interactive keyboard. Click on the keys to hear the notes and see their names.
        </p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Virtual Piano Keyboard</CardTitle>
          <CardDescription className="text-center">
            Practice playing notes and chords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePiano />
        </CardContent>
      </Card>

      <section className="grid md:grid-cols-3 gap-8">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <Lightbulb className="w-10 h-10 text-accent" />
            <CardTitle>Learn Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Familiarize yourself with the names and sounds of each note on the piano.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <Music className="w-10 h-10 text-accent" />
            <CardTitle>Practice Chords</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experiment with different combinations of notes to form basic chords.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <CheckCircle className="w-10 h-10 text-accent" />
            <CardTitle>Instant Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <p>See the note name instantly as you play, reinforcing your learning.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
