'use server';

import { personalizePortfolio, type PersonalizePortfolioInput } from '@/ai/flows/personalize-portfolio';

export async function getPersonalizedPortfolio(viewerProfileUrl: string, portfolioContent: string) {
  if (!viewerProfileUrl || !viewerProfileUrl.startsWith('http')) {
    return { success: false, error: 'Please enter a valid URL (e.g., LinkedIn profile).' };
  }
  try {
    const input: PersonalizePortfolioInput = {
      viewerProfileUrl,
      portfolioContent,
    };
    const result = await personalizePortfolio(input);
    if (result && result.personalizedContent) {
      return { success: true, personalizedContent: result.personalizedContent };
    }
    return { success: false, error: 'Failed to generate personalized content.' };
  } catch (error) {
    console.error('Error personalizing portfolio:', error);
    let errorMessage = 'Failed to personalize portfolio due to an unexpected error.';
    if (error instanceof Error) {
      errorMessage = `Failed to personalize portfolio: ${error.message}`;
    }
    return { success: false, error: errorMessage };
  }
}
