import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactFormExperience from '@/components/contact/ContactFormExperience';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Start a Project & Contact Studio — SoSpark Design',
  description:
    'Initiate a project consultation with Founder & Architect Soahim Rahman Tasin. Inquire regarding brand identity, UI/UX systems, production Next.js development, or digital ventures.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/contact',
  },
  openGraph: {
    title: 'Start a Project & Contact Studio — SoSpark Design',
    description:
      'Direct communication with studio leadership. Inquire about brand systems, Next.js engineering, or venture partnerships.',
    url: 'https://sosparkdesigns.com/contact',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact SoSpark Design Studio',
    description:
      'Direct inquiry portal for brand identity, UI/UX systems, and Next.js engineering projects.',
    url: 'https://sosparkdesigns.com/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'SoSpark Design',
      founder: {
        '@type': 'Person',
        name: 'Soahim Rahman Tasin',
        email: 'soahimrahman2024@gmail.com',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BD',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section A: Editorial Hero ── */}
      <section
        className="pt-28 pb-12 md:pt-36 md:pb-16 relative overflow-hidden bg-white border-b border-slate-200/80 text-center"
        aria-labelledby="contact-heading"
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[300px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="brand" dot className="text-xs">
              Initiate Collaboration &bull; 2026–2027 Sprints
            </Badge>
          </div>

          <h1
            id="contact-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Let&apos;s build something <br />
            <span className="text-blue-600">unforgettable.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about your brand vision, technical requirements, and target timeline. Every inquiry is reviewed
            directly by studio leadership with a response within 24–48 business hours.
          </p>
        </div>
      </section>

      {/* ── Section B: Interactive Contact Experience & Deep-Link Preselection ── */}
      <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" threshold={0.05}>
            <Suspense
              fallback={
                <div className="p-12 text-center text-xs font-mono text-slate-400">
                  Loading inquiry parameters...
                </div>
              }
            >
              <ContactFormExperience />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
