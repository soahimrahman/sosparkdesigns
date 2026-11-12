import React from 'react';
import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/lib/portfolio-data';
import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'SparkForge Deliverability Engine — Technical Case Study | SoSpark Design',
  description:
    'Case study: High-throughput email verification engine with strict RFC 5321/5322 syntax validation, live DNS MX socket telemetry, and automated honeypot bot trap defense. Engineered by SoSparkDesigns.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/portfolio/sparkforge',
  },
  openGraph: {
    title: 'SparkForge Deliverability Engine — Case Study | SoSpark Design',
    description:
      'High-throughput RFC-compliant email verification engine protecting sender reputation. Architecture and engineering case study.',
    url: 'https://sosparkdesigns.com/portfolio/sparkforge',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'article',
  },
};

export default function SparkForgeCaseStudyPage() {
  const caseStudy = CASE_STUDIES.sparkforge;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'SparkForge Deliverability Engine — Technical Case Study',
    description: caseStudy.overview,
    author: {
      '@type': 'Person',
      name: 'Soahim Rahman Tasin',
      jobTitle: 'Founder & Creative Director',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SoSpark Design',
      url: 'https://sosparkdesigns.com',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'SparkForge',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud / Web',
      url: 'https://sparkfroge.pro.bd',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout caseStudy={caseStudy} />
    </>
  );
}
