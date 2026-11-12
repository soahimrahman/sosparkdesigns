import React from 'react';
import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverviewRows from '@/components/services/ServicesOverviewRows';
import ServiceDetailSection from '@/components/services/ServiceDetailSection';
import ServicesProcess from '@/components/services/ServicesProcess';
import EngagementModels from '@/components/services/EngagementModels';
import ServicesFaq from '@/components/services/ServicesFaq';
import ServicesCta from '@/components/services/ServicesCta';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Services & Core Disciplines — SoSpark Design',
  description:
    'Comprehensive creative agency disciplines: Brand Identity, UI/UX Design, Production Next.js 14 Development, Graphic Collateral, 3D Video & Growth Management. Led by Soahim Rahman Tasin.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/services',
  },
  openGraph: {
    title: 'Services & Core Disciplines — SoSpark Design',
    description:
      'Brand architecture, high-performance Next.js engineering, and strategic design systems built to move ambitious companies forward.',
    url: 'https://sosparkdesigns.com/services',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SoSpark Design',
    description:
      'Multidisciplinary creative agency and venture lab specializing in brand architecture, UI/UX systems, and Next.js engineering.',
    url: 'https://sosparkdesigns.com/services',
    founder: {
      '@type': 'Person',
      name: 'Soahim Rahman Tasin',
      jobTitle: 'Founder & Creative Director',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Creative Agency Disciplines',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Identity & Systems',
            description:
              'Mathematical vector logo suites, brand guideline manuals, typographic hierarchy, and contrast matrices.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX & Web Design',
            description:
              'Editorial interfaces, mobile-first design, WCAG 2.1 AA accessibility, and Figma design tokens.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Web Development',
            description:
              'Next.js 14 App Router, strict TypeScript, serverless APIs, Zod validation, and sub-second Lighthouse scores.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Graphic & Marketing Collateral',
            description:
              'Investor pitch decks, luxury product packaging, vector iconography, and marketing campaigns.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Video & Motion Graphics',
            description:
              'Cinematic brand launch films, kinetic typography, 3D animation, and professional color grading.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Page & Growth Management',
            description:
              'Monthly editorial calendars, high-resolution social assets, copywriting, and growth telemetry.',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section A: Animated Hero ── */}
      <ServicesHero />

      {/* ── Section B: Six Core Disciplines Overview (Jump Navigation) ── */}
      <Reveal direction="up" threshold={0.08}>
        <ServicesOverviewRows />
      </Reveal>

      {/* ── Section C: Deep-Dive Service Detail Experiences ── */}
      <Reveal direction="up" threshold={0.05}>
        <ServiceDetailSection />
      </Reveal>

      {/* ── Section D: 5-Stage Process Methodology ── */}
      <Reveal direction="up" threshold={0.08}>
        <ServicesProcess />
      </Reveal>

      {/* ── Section E: Transparent Engagement Models ── */}
      <Reveal direction="up" threshold={0.08}>
        <EngagementModels />
      </Reveal>

      {/* ── Section F: Service-Specific FAQ Accordion ── */}
      <Reveal direction="up" threshold={0.08}>
        <ServicesFaq />
      </Reveal>

      {/* ── Section G: Final Conversion CTA ── */}
      <Reveal direction="up" threshold={0.08}>
        <ServicesCta />
      </Reveal>
    </>
  );
}
