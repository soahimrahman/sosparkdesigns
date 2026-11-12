import { z } from 'zod';

export const serviceDisciplines = [
  'Brand Identity & Systems',
  'UI/UX & Web Design',
  'Full-Stack Web Development',
  'Graphic & Marketing Collateral',
  'Video & Motion Graphics',
  'Page & Growth Management',
  'Other / Custom Partnership',
  // Backwards compatibility entries
  'Brand Identity',
  'Web Development (Next.js)',
  'Graphic Design',
  'Page Management',
  'Other / Custom Inquiry',
] as const;

export const budgetTiers = [
  '<$1,500',
  '$1,500 - $3,000',
  '$3,000 - $6,000',
  '$6,000 - $12,000',
  '$12,000+',
  'Flexible / Not Sure',
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please provide a valid email address.' })
    .max(254, { message: 'Email address is too long.' }),
  company: z
    .string()
    .trim()
    .max(100, { message: 'Company name must not exceed 100 characters.' })
    .optional()
    .default(''),
  service: z
    .string()
    .min(1, { message: 'Please select a discipline or service.' }),
  budget: z
    .string()
    .optional()
    .default('Flexible / Not Sure'),
  hp_website: z
    .string()
    .optional()
    .default(''),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Project overview must be at least 10 characters.' })
    .max(3000, { message: 'Project message must not exceed 3000 characters.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function validateContactForm(input: unknown) {
  return contactFormSchema.safeParse(input);
}
