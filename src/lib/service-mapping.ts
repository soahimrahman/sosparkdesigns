import { SERVICES_DISCIPLINES } from './services-data';

export const OFFICIAL_SERVICES = [
  ...SERVICES_DISCIPLINES.map((s) => s.title),
  'Other / Custom Partnership',
] as const;

export type OfficialService = (typeof OFFICIAL_SERVICES)[number];

export const CANONICAL_SERVICE_SLUG_MAP: Record<string, OfficialService> = {
  // 01 Brand Identity & Systems
  'brand-identity': 'Brand Identity & Systems',
  'brand-identity-systems': 'Brand Identity & Systems',
  'identity': 'Brand Identity & Systems',
  'branding': 'Brand Identity & Systems',

  // 02 UI/UX & Web Design
  'web-design': 'UI/UX & Web Design',
  'ui-ux': 'UI/UX & Web Design',
  'ui-ux-design': 'UI/UX & Web Design',
  'ui-ux-web-design': 'UI/UX & Web Design',

  // 03 Full-Stack Web Development
  'web-dev': 'Full-Stack Web Development',
  'web-development': 'Full-Stack Web Development',
  'development': 'Full-Stack Web Development',
  'full-stack-web-development': 'Full-Stack Web Development',
  'nextjs': 'Full-Stack Web Development',

  // 04 Graphic & Marketing Collateral
  'graphic-design': 'Graphic & Marketing Collateral',
  'graphics': 'Graphic & Marketing Collateral',
  'marketing-collateral': 'Graphic & Marketing Collateral',
  'graphic-marketing-collateral': 'Graphic & Marketing Collateral',

  // 05 Video & Motion Graphics
  'video-editing': 'Video & Motion Graphics',
  'video-motion': 'Video & Motion Graphics',
  'video-motion-graphics': 'Video & Motion Graphics',
  'video': 'Video & Motion Graphics',
  'motion': 'Video & Motion Graphics',

  // 06 Page & Growth Management
  'page-management': 'Page & Growth Management',
  'growth-management': 'Page & Growth Management',
  'growth-retainer': 'Page & Growth Management',
  'retainer': 'Page & Growth Management',
  'page-growth-management': 'Page & Growth Management',
};

/**
 * Resolves a URL parameter (slug or title) to the canonical official service dropdown value.
 * Falls back safely to 'Other / Custom Partnership' if missing, empty, or unrecognized,
 * preventing accidental misattribution of user inquiry intent.
 */
export function resolveServiceFromQuery(rawService: string | null | undefined): string {
  if (!rawService || !rawService.trim()) {
    return 'Other / Custom Partnership';
  }

  // Handle URL decoding safely
  let decoded = rawService.trim();
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // Keep trimmed if decoding fails
  }

  // 1. Exact match with official title
  if (OFFICIAL_SERVICES.includes(decoded as OfficialService)) {
    return decoded;
  }

  // 2. Normalized slug match
  const normalized = decoded
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (CANONICAL_SERVICE_SLUG_MAP[normalized]) {
    return CANONICAL_SERVICE_SLUG_MAP[normalized];
  }

  // 3. Partial substring matching for resilient user queries (e.g., 'nextjs', 'branding')
  for (const [slugKey, officialTitle] of Object.entries(CANONICAL_SERVICE_SLUG_MAP)) {
    if (normalized.includes(slugKey) || slugKey.includes(normalized)) {
      return officialTitle;
    }
  }

  // 4. Safe fallback for unknown values to avoid misrepresenting client intent
  return 'Other / Custom Partnership';
}
