import MusicAnalysisClient from '@/components/analysis/music-analysis-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, FileAudio, Sparkles } from 'lucide-react';

export default function AnalysisPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary">AI Music Analysis</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload an audio file of a piano piece and let our AI provide you with structural insights.
        </p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Analyze Your Music</CardTitle>
           <CardDescription className="text-center">
            Supported formats: MP3, WAV, OGG. Max file size: 10MB.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MusicAnalysisClient />
        </CardContent>
      </Card>

      <section className="grid md:grid-cols-3 gap-8">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <UploadCloud className="w-10 h-10 text-accent" />
            <CardTitle>Easy Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Simply drag and drop or select your audio file to begin the analysis.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <FileAudio className="w-10 h-10 text-accent" />
            <CardTitle>Comprehensive Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the key, chord progressions, and tempo of your uploaded piece.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <Sparkles className="w-10 h-10 text-accent" />
            <CardTitle>AI-Powered</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Leverage cutting-edge AI to understand the structure of piano music.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
