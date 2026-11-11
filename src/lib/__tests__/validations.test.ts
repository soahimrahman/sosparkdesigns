import { describe, it, expect } from 'vitest';
import { contactFormSchema, validateContactForm } from '../validations';

describe('Contact Form Validation Schema', () => {
  it('accepts valid contact form inputs', () => {
    const payload = {
      name: 'Sarah Connor',
      email: 'sarah@example.com',
      company: 'Cyberdyne Resistance',
      service: 'Web Development (Next.js)',
      budget: '$6,000 - $12,000',
      message: 'We require a full Next.js rebuild of our public platform.',
    };

    const result = validateContactForm(payload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('Sarah Connor');
      expect(result.data.email).toBe('sarah@example.com');
      expect(result.data.budget).toBe('$6,000 - $12,000');
    }
  });

  it('rejects empty or single-character names', () => {
    const payload = {
      name: 'A',
      email: 'valid@example.com',
      service: 'Brand Identity',
      message: 'Need complete branding identity system.',
    };

    const result = validateContactForm(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path.includes('name'));
      expect(issue).toBeDefined();
    }
  });

  it('rejects malformed email addresses', () => {
    const payload = {
      name: 'John Doe',
      email: 'not-an-email',
      service: 'UI/UX & Web Design',
      message: 'Looking for a product design sprint for our mobile app.',
    };

    const result = validateContactForm(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path.includes('email'));
      expect(issue).toBeDefined();
    }
  });

  it('rejects messages shorter than 10 characters', () => {
    const payload = {
      name: 'John Doe',
      email: 'john@example.com',
      service: 'Graphic Design',
      message: 'Too short',
    };

    const result = validateContactForm(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path.includes('message'));
      expect(issue).toBeDefined();
    }
  });

  it('defaults budget to Flexible when omitted', () => {
    const payload = {
      name: 'Alex Turner',
      email: 'alex@example.com',
      service: 'Video & Motion',
      message: 'Looking to produce a cinematic commercial product reel.',
    };

    const result = validateContactForm(payload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.budget).toBe('Flexible / Not Sure');
    }
  });
});
