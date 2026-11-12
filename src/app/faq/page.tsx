import React from 'react';
import type { Metadata } from 'next';
import FaqKnowledgeBase from '@/components/faq/FaqKnowledgeBase';
import { FAQ_ITEMS } from '@/lib/faq-data';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Knowledge Base — SoSpark Design',
  description:
    'Comprehensive answers regarding our services, 5-stage process, Next.js tech stack, IP ownership, pricing models, and proprietary ventures. Led by Soahim Rahman Tasin.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/faq',
  },
  openGraph: {
    title: 'FAQ & Knowledge Base — SoSpark Design',
    description:
      'Clear, honest answers about working with our creative technology studio and venture lab.',
    url: 'https://sosparkdesigns.com/faq',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Section A: Editorial Hero ── */}
      <section
        className="pt-28 pb-12 md:pt-36 md:pb-16 relative overflow-hidden bg-white border-b border-slate-200/80 text-center"
        aria-labelledby="faq-title"
      >
        {/* Ambient Blue Radial Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="brand" dot className="text-xs">
              Knowledge Base &amp; Transparency
            </Badge>
          </div>

          <h1
            id="faq-title"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Frequently asked questions, <br />
            <span className="text-blue-600">transparently answered.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our capabilities, technical standards, 5-stage process, intellectual property
            ownership, and digital venture ecosystem.
          </p>
        </div>
      </section>

      {/* ── Section B: Interactive Categorized Knowledge Base ── */}
      <Reveal direction="up" threshold={0.05}>
        <FaqKnowledgeBase />
      </Reveal>
    </>
  );
}
