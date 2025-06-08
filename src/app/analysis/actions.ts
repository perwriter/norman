'use server';

import { analyzeMusicStructure, type AnalyzeMusicStructureInput, type AnalyzeMusicStructureOutput } from '@/ai/flows/analyze-music-structure';
import { z } from 'zod';

const ActionInputSchema = z.object({
  audioDataUri: z.string().refine(val => val.startsWith('data:audio/'), {
    message: "Audio data URI must start with 'data:audio/'"
  }),
});

export async function analyzeMusicAction(
  input: AnalyzeMusicStructureInput
): Promise<{ data?: AnalyzeMusicStructureOutput; error?: string }> {
  try {
    const validatedInput = ActionInputSchema.safeParse(input);
    if (!validatedInput.success) {
      return { error: validatedInput.error.errors.map(e => e.message).join(', ') };
    }

    const result = await analyzeMusicStructure(validatedInput.data);
    return { data: result };
  } catch (error) {
    console.error("Error in analyzeMusicAction:", error);
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred during music analysis.' };
  }
}
