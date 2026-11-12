import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AmbientBlobs from '@/components/AmbientBlobs';
import InteractiveEffects from '@/components/InteractiveEffects';
import SectionRail from '@/components/SectionRail';
import AiChatWidget from '@/components/AiChatWidget';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://sosparkdesign.com').replace(/\/+$/, '');
const isStaging =
  process.env.NEXT_PUBLIC_APP_ENV === 'staging' || process.env.VERCEL_ENV === 'preview';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SoSpark Design — Creative Agency & Digital Lab',
    template: '%s | SoSpark Design',
  },
  description:
    'SoSpark Design is an independent creative technology studio and digital venture lab delivering brand architecture, UI/UX systems, and production Next.js engineering.',
  openGraph: {
    title: 'SoSpark Design — Creative Agency & Digital Lab',
    description:
      'We build what we believe should exist. Brand architecture, Next.js engineering, and digital venture platforms.',
    url: siteUrl,
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoSpark Design — Creative Agency & Digital Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoSpark Design — Creative Agency & Digital Lab',
    description:
      'We build what we believe should exist. Brand architecture, Next.js engineering, and digital venture platforms.',
    images: ['/assets/og-image.png'],
  },
  icons: {
    icon: '/assets/logo-dark.svg',
  },
  robots: isStaging
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AmbientBlobs />
        <InteractiveEffects />
        <SectionRail />
        <Navbar />
        <main id="main-content" style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <AiChatWidget />
      </body>
    </html>
  );
}
