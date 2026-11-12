import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStoryTimeline from '@/components/about/AboutStoryTimeline';
import FounderMonograph from '@/components/about/FounderMonograph';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutDisciplinesSummary from '@/components/about/AboutDisciplinesSummary';
import AboutVenturesEcosystem from '@/components/about/AboutVenturesEcosystem';
import AboutWorkingPrinciples from '@/components/about/AboutWorkingPrinciples';
import AboutCta from '@/components/about/AboutCta';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'About Us & Leadership Monograph — SoSpark Design',
  description:
    'Learn about SoSparkDesigns: an independent creative technology studio and venture lab founded by Soahim Rahman Tasin. Explore our 2021–Present history, design philosophy, and digital ventures.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/about',
  },
  openGraph: {
    title: 'About Us & Leadership Monograph — SoSpark Design',
    description:
      'We build what we believe should exist. Independent creative technology studio bringing together design, engineering, and digital entrepreneurship.',
    url: 'https://sosparkdesigns.com/about',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About SoSpark Design & Leadership Monograph',
    description:
      'Independent creative technology studio and venture lab founded by Soahim Rahman Tasin.',
    url: 'https://sosparkdesigns.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'SoSpark Design',
      url: 'https://sosparkdesigns.com',
      foundingDate: '2021',
      founder: {
        '@type': 'Person',
        name: 'Soahim Rahman Tasin',
        jobTitle: 'Founder & Creative Director',
        email: 'soahimrahman2024@gmail.com',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section A: Editorial Introduction & Hero ── */}
      <AboutHero />

      {/* ── Section B: Studio Evolution & Chronicle (2021–Present) ── */}
      <Reveal direction="up" threshold={0.06}>
        <AboutStoryTimeline />
      </Reveal>

      {/* ── Section C: Founder & Leadership Monograph (Soahim Rahman Tasin) ── */}
      <Reveal direction="up" threshold={0.05}>
        <FounderMonograph />
      </Reveal>

      {/* ── Section D: Foundational Philosophy ── */}
      <Reveal direction="up" threshold={0.08}>
        <AboutPhilosophy />
      </Reveal>

      {/* ── Section E: What We Do (The 6 Verified Disciplines) ── */}
      <Reveal direction="up" threshold={0.08}>
        <AboutDisciplinesSummary />
      </Reveal>

      {/* ── Section F: Our Venture Ecosystem (SparkForge & Subz Empire) ── */}
      <Reveal direction="up" threshold={0.08}>
        <AboutVenturesEcosystem />
      </Reveal>

      {/* ── Section G: Operating & Working Principles ── */}
      <Reveal direction="up" threshold={0.08}>
        <AboutWorkingPrinciples />
      </Reveal>

      {/* ── Section H: Final Conversion CTA ── */}
      <Reveal direction="up" threshold={0.08}>
        <AboutCta />
      </Reveal>
    </>
  );
}
