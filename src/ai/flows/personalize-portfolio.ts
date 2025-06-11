// use server'

/**
 * @fileOverview Personalizes the portfolio presentation based on the viewer's public online profile.
 *
 * - personalizePortfolio - A function that personalizes the portfolio based on the viewer's online profile.
 * - PersonalizePortfolioInput - The input type for the personalizePortfolio function.
 * - PersonalizePortfolioOutput - The return type for the personalizePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizePortfolioInputSchema = z.object({
  viewerProfileUrl: z
    .string()
    .describe('The URL of the viewer\u2019s public online profile (e.g., LinkedIn).'),
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to be personalized.'),
});
export type PersonalizePortfolioInput = z.infer<typeof PersonalizePortfolioInputSchema>;

const PersonalizePortfolioOutputSchema = z.object({
  personalizedContent: z
    .string()
    .describe('The portfolio content personalized for the viewer.'),
});
export type PersonalizePortfolioOutput = z.infer<typeof PersonalizePortfolioOutputSchema>;

export async function personalizePortfolio(input: PersonalizePortfolioInput): Promise<PersonalizePortfolioOutput> {
  return personalizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizePortfolioPrompt',
  input: {schema: PersonalizePortfolioInputSchema},
  output: {schema: PersonalizePortfolioOutputSchema},
  prompt: `You are an AI expert in personalizing portfolio content based on a viewer's online profile.

  Analyze the viewer's profile and tailor the portfolio content to highlight the most relevant projects, skills, and experiences.

  Viewer Profile URL: {{{viewerProfileUrl}}}
  Portfolio Content: {{{portfolioContent}}}

  Personalized Content:`,
});

const personalizePortfolioFlow = ai.defineFlow(
  {
    name: 'personalizePortfolioFlow',
    inputSchema: PersonalizePortfolioInputSchema,
    outputSchema: PersonalizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
