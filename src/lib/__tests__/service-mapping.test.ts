import { describe, it, expect } from 'vitest';
import {
  OFFICIAL_SERVICES,
  resolveServiceFromQuery,
  CANONICAL_SERVICE_SLUG_MAP,
} from '../service-mapping';

describe('Service Query Parameter Resolution', () => {
  it('resolves official titles directly without mutation', () => {
    for (const title of OFFICIAL_SERVICES) {
      expect(resolveServiceFromQuery(title)).toBe(title);
    }
  });

  it('resolves canonical slugs to exact official titles', () => {
    expect(resolveServiceFromQuery('brand-identity')).toBe('Brand Identity & Systems');
    expect(resolveServiceFromQuery('web-design')).toBe('UI/UX & Web Design');
    expect(resolveServiceFromQuery('web-dev')).toBe('Full-Stack Web Development');
    expect(resolveServiceFromQuery('web-development')).toBe('Full-Stack Web Development');
    expect(resolveServiceFromQuery('graphic-design')).toBe('Graphic & Marketing Collateral');
    expect(resolveServiceFromQuery('video-editing')).toBe('Video & Motion Graphics');
    expect(resolveServiceFromQuery('video-motion')).toBe('Video & Motion Graphics');
    expect(resolveServiceFromQuery('page-management')).toBe('Page & Growth Management');
    expect(resolveServiceFromQuery('growth-retainer')).toBe('Page & Growth Management');
  });

  it('safely handles partial and case-insensitive query variations', () => {
    expect(resolveServiceFromQuery('nextjs')).toBe('Full-Stack Web Development');
    expect(resolveServiceFromQuery('BRANDING')).toBe('Brand Identity & Systems');
    expect(resolveServiceFromQuery('ui-ux')).toBe('UI/UX & Web Design');
  });

  it('falls back safely to default service on empty, null, or unrecognized queries', () => {
    expect(resolveServiceFromQuery(null)).toBe('Brand Identity & Systems');
    expect(resolveServiceFromQuery('')).toBe('Brand Identity & Systems');
    expect(resolveServiceFromQuery('unrecognized-random-slug-xyz')).toBe('Brand Identity & Systems');
  });
});
