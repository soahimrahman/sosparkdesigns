import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isStaging =
    process.env.NEXT_PUBLIC_APP_ENV === 'staging' ||
    process.env.VERCEL_ENV === 'preview';
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://sosparkdesign.com').replace(/\/+$/, '');

  if (isStaging) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
