import React from 'react';
import type { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FeaturedVenturesShowcase from '@/components/portfolio/FeaturedVenturesShowcase';
import PortfolioFilterableGrid from '@/components/portfolio/PortfolioFilterableGrid';
import StudioConceptsSection from '@/components/portfolio/StudioConceptsSection';
import PortfolioTechMatrix from '@/components/portfolio/PortfolioTechMatrix';
import PortfolioCta from '@/components/portfolio/PortfolioCta';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — SoSpark Design',
  description:
    'Selected digital products, proprietary ventures, and technical case studies: SparkForge deliverability engine, Subz Empire digital commerce, design systems, and transparent concept studies.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio & Case Studies — SoSpark Design',
    description:
      'Real engineering and ambitious ideas. Explore our proprietary platforms and authentic digital solutions.',
    url: 'https://sosparkdesigns.com/portfolio',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SoSpark Design Portfolio & Case Studies',
    description:
      'Authentic proprietary ventures, full-stack Next.js platforms, and transparent studio concept studies.',
    url: 'https://sosparkdesigns.com/portfolio',
    hasPart: [
      {
        '@type': 'SoftwareApplication',
        name: 'SparkForge Deliverability Engine',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://sparkfroge.pro.bd',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Subz Empire Creator Marketplace',
        applicationCategory: 'CommerceApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://subzempire.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section A: Editorial Portfolio Hero ── */}
      <PortfolioHero />

      {/* ── Section B: Featured Proprietary Ventures (SparkForge & Subz Empire) ── */}
      <Reveal direction="up" threshold={0.05}>
        <FeaturedVenturesShowcase />
      </Reveal>

      {/* ── Section C: Interactive Curated Filterable Directory ── */}
      <Reveal direction="up" threshold={0.08}>
        <PortfolioFilterableGrid />
      </Reveal>

      {/* ── Section D: Studio Concept Studies (Transparently Delineated) ── */}
      <Reveal direction="up" threshold={0.08}>
        <StudioConceptsSection />
      </Reveal>

      {/* ── Section E: Technical Capabilities & Verified Stack Matrix ── */}
      <Reveal direction="up" threshold={0.08}>
        <PortfolioTechMatrix />
      </Reveal>

      {/* ── Section F: Closing Conversion CTA ── */}
      <Reveal direction="up" threshold={0.08}>
        <PortfolioCta />
      </Reveal>
    </>
  );
}
