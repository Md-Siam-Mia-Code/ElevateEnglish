'use server';
/**
 * @fileOverview Suggests relevant learning materials based on user's current content and history.
 *
 * - suggestLearningMaterials - A function that suggests learning materials.
 * - SuggestLearningMaterialsInput - The input type for the suggestLearningMaterials function.
 * - SuggestLearningMaterialsOutput - The return type for the suggestLearningMaterials function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getYouTubeVideoDetails} from '@/services/youtube';
import {getFileMetadata} from '@/services/file-metadata';

const SuggestLearningMaterialsInputSchema = z.object({
  currentContent: z.string().describe('The content the user is currently viewing.'),
  searchHistory: z.string().describe('The user search history.'),
});
export type SuggestLearningMaterialsInput = z.infer<typeof SuggestLearningMaterialsInputSchema>;

const SuggestedMaterialSchema = z.object({
  title: z.string().describe('The title of the suggested material.'),
  link: z.string().describe('The link to the suggested material.'),
  description: z.string().describe('A brief description of the suggested material.'),
  type: z.enum(['text', 'image', 'video', 'link']).describe('The type of suggested material.'),
});

const SuggestLearningMaterialsOutputSchema = z.array(SuggestedMaterialSchema).describe('An array of suggested learning materials.');
export type SuggestLearningMaterialsOutput = z.infer<typeof SuggestLearningMaterialsOutputSchema>;

export async function suggestLearningMaterials(input: SuggestLearningMaterialsInput): Promise<SuggestLearningMaterialsOutput> {
  return suggestLearningMaterialsFlow(input);
}

const fetchYouTubeVideoDetails = ai.defineTool({
  name: 'fetchYouTubeVideoDetails',
  description: 'Fetches details for a given YouTube video ID.',
  inputSchema: z.object({
    videoId: z.string().describe('The ID of the YouTube video.'),
  }),
  outputSchema: z.object({
    title: z.string().describe('The title of the video.'),
    description: z.string().describe('The description of the video.'),
    thumbnailUrl: z.string().describe('The URL of the video thumbnail.'),
  }),
  async execute(input) {
    return getYouTubeVideoDetails(input.videoId);
  },
});

const fetchFileMetadata = ai.defineTool({
  name: 'fetchFileMetadata',
  description: 'Fetches metadata for a file given its URL.',
  inputSchema: z.object({
    fileUrl: z.string().describe('The URL of the file.'),
  }),
  outputSchema: z.object({
    name: z.string().describe('The name of the file.'),
    sizeBytes: z.number().describe('The size of the file in bytes.'),
    lastModified: z.string().describe('The last modified date of the file, in ISO 8601 format.'),
  }),
  async execute(input) {
    return getFileMetadata(input.fileUrl);
  },
});

const prompt = ai.definePrompt({
  name: 'suggestLearningMaterialsPrompt',
  input: {
    schema: z.object({
      currentContent: z.string().describe('The content the user is currently viewing.'),
      searchHistory: z.string().describe('The user search history.'),
    }),
  },
  output: {
    schema: z.array(SuggestedMaterialSchema),
  },
  tools: [fetchYouTubeVideoDetails, fetchFileMetadata],
  prompt: `You are an AI learning assistant for Bangladeshi students learning English.

  Based on the student's current content and search history, suggest relevant learning materials.
  Consider various content types such as text posts, images, YouTube videos, and links to external documents.

  Current Content: {{{currentContent}}}
  Search History: {{{searchHistory}}}

  Provide an array of suggested learning materials, each with a title, link, description, and type (text, image, video, link).
  If suggesting a Youtube video, be sure to use the fetchYouTubeVideoDetails tool to populate the title and description.  If the suggested learning material is a link to a file, use the fetchFileMetadata tool to populate the title and description.
  Do not suggest resources that are not related to learning English.
  Keep the descriptions concise and relevant.
  `,
});

const suggestLearningMaterialsFlow = ai.defineFlow<
  typeof SuggestLearningMaterialsInputSchema,
  typeof SuggestLearningMaterialsOutputSchema
>({
  name: 'suggestLearningMaterialsFlow',
  inputSchema: SuggestLearningMaterialsInputSchema,
  outputSchema: SuggestLearningMaterialsOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
