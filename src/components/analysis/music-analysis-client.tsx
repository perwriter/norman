'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertCircle, CheckCircle, Music, BarChart3, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzeMusicAction } from '@/app/analysis/actions';
import type { AnalyzeMusicStructureOutput } from '@/ai/flows/analyze-music-structure';

export default function MusicAnalysisClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeMusicStructureOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        setFile(null);
        event.target.value = ''; // Clear the input
        return;
      }
      setFile(selectedFile);
      setAnalysisResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an audio file to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (e) => {
        const audioDataUri = e.target?.result as string;
        if (!audioDataUri) {
          throw new Error("Failed to read file.");
        }
        
        const result = await analyzeMusicAction({ audioDataUri });

        if (result.error) {
          throw new Error(result.error);
        }
        
        if (result.data) {
           setAnalysisResult(result.data);
           toast({
            title: "Analysis Complete",
            description: "Music structure insights are ready.",
            variant: "default",
            action: <CheckCircle className="text-green-500" />,
          });
        } else {
          throw new Error("Analysis did not return data.");
        }
      };
      reader.onerror = () => {
        throw new Error("Error reading file.");
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="audioFile" className="block text-sm font-medium text-foreground mb-1">
            Upload Audio File
          </label>
          <Input
            id="audioFile"
            type="file"
            accept="audio/mpeg, audio/wav, audio/ogg"
            onChange={handleFileChange}
            className="file:text-primary file:font-semibold hover:file:bg-primary/10"
            disabled={isLoading}
          />
          {file && <p className="mt-2 text-sm text-muted-foreground">Selected: {file.name}</p>}
        </div>
        <Button type="submit" disabled={isLoading || !file} className="w-full sm:w-auto">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Analyze Music'
          )}
        </Button>
      </form>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-destructive">Analysis Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {analysisResult && (
        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Music Analysis Results</CardTitle>
            <CardDescription>Insights into the uploaded piano piece.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysisResult.keyInformation && (
               <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-md">
                <Music className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">Key Information</h4>
                  <p className="text-foreground/80">{analysisResult.keyInformation}</p>
                </div>
              </div>
            )}
            {analysisResult.chordProgressions && (
              <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-md">
                <BarChart3 className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">Chord Progressions</h4>
                  <p className="text-foreground/80">{analysisResult.chordProgressions}</p>
                </div>
              </div>
            )}
            {analysisResult.tempo && (
              <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-md">
                <Clock className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">Tempo</h4>
                  <p className="text-foreground/80">{analysisResult.tempo}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
