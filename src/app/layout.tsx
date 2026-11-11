import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AmbientBlobs from '@/components/AmbientBlobs';
import InteractiveEffects from '@/components/InteractiveEffects';
import SectionRail from '@/components/SectionRail';
import AiChatWidget from '@/components/AiChatWidget';

export const metadata: Metadata = {
  title: 'SoSpark Design — Creative Agency & Digital Lab',
  description:
    'SoSpark Design is a full-service creative agency delivering graphic design, branding, web design, web development, video editing, and page management.',
  openGraph: {
    title: 'SoSpark Design — Creative Agency',
    description: 'We build brands that refuse to fade. Graphic design, branding, web, video — all under one roof.',
    url: 'https://sosparkdesign.com',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/logo-dark.svg',
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
