import React from 'react';
import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/lib/portfolio-data';
import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Subz Empire Digital Marketplace — Technical Case Study | SoSpark Design',
  description:
    'Case study: Creator subscription gateway and digital licensing marketplace with frictionless 2-step checkout, webhook license delivery, and responsive UI architecture. Engineered by SoSparkDesigns.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/portfolio/subz-empire',
  },
  openGraph: {
    title: 'Subz Empire Digital Marketplace — Case Study | SoSpark Design',
    description:
      'Curated digital licensing, subscription gateway, and automated creative asset distribution marketplace. Architecture and engineering case study.',
    url: 'https://sosparkdesigns.com/portfolio/subz-empire',
    siteName: 'SoSpark Design',
    locale: 'en_US',
    type: 'article',
  },
};

export default function SubzEmpireCaseStudyPage() {
  const caseStudy = CASE_STUDIES['subz-empire'];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Subz Empire Digital Marketplace — Technical Case Study',
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
      name: 'Subz Empire',
      applicationCategory: 'CommerceApplication',
      operatingSystem: 'Cloud / Web',
      url: 'https://subzempire.com',
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
