'use client';

import React from 'react';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export interface MilestoneItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

export const MILESTONES: MilestoneItem[] = [
  {
    year: '2021',
    badge: 'Inception',
    title: 'The Studio Thesis',
    description:
      'Founded by Soahim Rahman Tasin with a clear thesis: design and engineering should not exist in separate silos. High-end visual craft and modern full-stack code should live seamlessly under one roof.',
    highlights: [
      'Establishment of SoSpark design studio',
      'Initial brand identity and vector typography commissions',
      'Integration of modern responsive frontend principles',
    ],
  },
  {
    year: '2023',
    badge: 'Expansion',
    title: 'Systems & International Engagements',
    description:
      'Expanded client engagements across North America, Europe, the Middle East, and Asia. Focused on comprehensive brand architecture, typographic design systems, and conversion-focused web specifications.',
    highlights: [
      'International async collaboration frameworks established',
      'Modular Figma design system workflows',
      'Multi-device responsive design standards',
    ],
  },
  {
    year: '2024',
    badge: 'Architecture',
    title: 'Next.js Engineering & Serverless Focus',
    description:
      'Pioneered full-stack Next.js App Router engineering, strict TypeScript pipelines, and serverless edge architectures. Transitioned away from commodity CMS platforms toward custom high-performance web applications.',
    highlights: [
      'Next.js 14 App Router adoption across all client builds',
      'Strict TypeScript and Zod validation integration',
      'Sub-second First Contentful Paint performance standards',
    ],
  },
  {
    year: '2025',
    badge: 'Venture Lab',
    title: 'Proprietary Product Architecture: Subz Empire',
    description:
      'Transitioned the studio into a dual agency and venture lab. Conceived, architected, and launched Subz Empire—a digital subscription management and automated creator licensing marketplace.',
    highlights: [
      'Launch of Subz Empire (https://subzempire.com)',
      'Automated webhook-driven digital license fulfillment',
      'High-conversion 2-step checkout architecture',
    ],
  },
  {
    year: '2026 (Present)',
    badge: 'Current Era',
    title: 'Deliverability Infrastructure: SparkForge & Sovereign Tokens',
    description:
      'Engineered and deployed SparkForge—an RFC 5321/5322 compliant email deliverability verification engine. Codified the studio’s official #0069EA design token system and established strict zero-fabrication standards.',
    highlights: [
      'Deployment of SparkForge Engine (https://sparkfroge.pro.bd)',
      'Direct DNS MX socket handshake telemetry',
      'SoSpark Master Design Token System release',
    ],
  },
];

export function AboutStoryTimeline() {
  return (
    <section
      id="studio-story"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="story-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="story-heading"
          eyebrow="Chronicle & Evolution"
          title={
            <>
              Five years of continuous craft, <br className="hidden sm:inline" />
              <span className="text-blue-600">from 2021 to the present.</span>
            </>
          }
          description="A documented record of how an independent creative practice evolved into a full-stack digital product studio and venture lab."
          align="center"
        />

        {/* Vertical Connected Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-200 space-y-12 md:space-y-16">
          {MILESTONES.map((item, idx) => {
            const isPresent = item.year.includes('Present');

            return (
              <div key={item.year} className="relative group">
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                    isPresent ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-400'
                  }`}
                  aria-hidden="true"
                />

                {/* Milestone Content Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-sm sm:text-base font-mono font-extrabold text-blue-600">
                      {item.year}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isPresent
                          ? 'bg-blue-100/80 text-blue-800 border border-blue-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Factual Highlights Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      Documented Milestones:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutStoryTimeline;
