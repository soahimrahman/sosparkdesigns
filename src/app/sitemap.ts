import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://sosparkdesigns.com').replace(/\/+$/, '');

  // 10 Canonical Public Routes
  const publicRoutes = [
    '',
    '/services',
    '/portfolio',
    '/portfolio/sparkforge',
    '/portfolio/subz-empire',
    '/about',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const priorityMap: Record<string, number> = {
    '': 1.0,
    '/services': 0.9,
    '/portfolio': 0.9,
    '/portfolio/sparkforge': 0.8,
    '/portfolio/subz-empire': 0.8,
    '/about': 0.8,
    '/contact': 0.8,
    '/faq': 0.7,
    '/privacy': 0.5,
    '/terms': 0.5,
  };

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-11-12'),
    changeFrequency: route === '' || route === '/portfolio' ? 'weekly' : 'monthly',
    priority: priorityMap[route] ?? 0.7,
  }));
}
