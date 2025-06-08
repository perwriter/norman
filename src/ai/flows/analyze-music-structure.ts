'use server';

/**
 * @fileOverview An AI agent to analyze the structure of a music piece.
 *
 * - analyzeMusicStructure - A function that handles the music analysis process.
 * - AnalyzeMusicStructureInput - The input type for the analyzeMusicStructure function.
 * - AnalyzeMusicStructureOutput - The return type for the analyzeMusicStructure function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMusicStructureInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      'An audio file of a piano piece, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type AnalyzeMusicStructureInput = z.infer<typeof AnalyzeMusicStructureInputSchema>;

const AnalyzeMusicStructureOutputSchema = z.object({
  keyInformation: z.string().describe('The key of the music piece.'),
  chordProgressions: z.string().describe('The chord progressions in the music piece.'),
  tempo: z.string().describe('The tempo of the music piece in BPM.'),
});
export type AnalyzeMusicStructureOutput = z.infer<typeof AnalyzeMusicStructureOutputSchema>;

export async function analyzeMusicStructure(
  input: AnalyzeMusicStructureInput
): Promise<AnalyzeMusicStructureOutput> {
  return analyzeMusicStructureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeMusicStructurePrompt',
  input: {schema: AnalyzeMusicStructureInputSchema},
  output: {schema: AnalyzeMusicStructureOutputSchema},
  prompt: `You are a professional music analyst. Analyze the music piece provided and provide the following information:

- Key Information: Provide the key of the music piece.
- Chord Progressions: Identify the chord progressions used in the music piece.
- Tempo: Determine the tempo of the music piece in BPM.

Audio: {{media url=audioDataUri}}`,
});

const analyzeMusicStructureFlow = ai.defineFlow(
  {
    name: 'analyzeMusicStructureFlow',
    inputSchema: AnalyzeMusicStructureInputSchema,
    outputSchema: AnalyzeMusicStructureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
