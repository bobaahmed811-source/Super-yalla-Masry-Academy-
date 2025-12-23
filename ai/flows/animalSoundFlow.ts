'use server';

import { ai } from '@/ai/index';
import { googleAI } from '@genkit-ai/google-genai';
import { z } from 'zod';

export async function getAnimalSoundFlow({ animalName }: { animalName: string }) {
  try {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-1.5-flash'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Puck' }, // صوت مرح للأطفال
          },
        },
      },
      prompt: `انطق اسم الحيوان التالي بوضوح وتشويق للأطفال: "${animalName}".`,
    });

    return {
      audioDataUri: media?.url || null
    };
  } catch (error) {
    console.error("AI Flow Error:", error);
    return { audioDataUri: null };
  }
}
