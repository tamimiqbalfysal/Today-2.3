'use server';

import { generateHeadline as generateHeadlineFlow } from '@/ai/flows/generate-headline';
import { z } from 'zod';

const headlineSchema = z.object({
  businessValues: z.string().min(10, {
    message: 'Please describe your business values in at least 10 characters.',
  }),
});

interface FormState {
  headline?: string | null;
  error?: {
    businessValues?: string[];
    _form?: string[];
  };
}

export async function generateHeadline(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = headlineSchema.safeParse({
    businessValues: formData.get('businessValues'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateHeadlineFlow({
      businessValues: validatedFields.data.businessValues,
    });
    return {
      headline: result.headline,
    };
  } catch (e) {
    console.error(e);
    return {
      error: { _form: ['An unexpected error occurred. Please try again.'] },
    };
  }
}
