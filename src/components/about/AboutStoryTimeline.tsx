'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export interface StoryChapter {
  period: string;
  badge: string;
  title: string;
  narrative: string;
  focusPoints: string[];
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    period: '2021',
    badge: 'Founding',
    title: 'The Studio Inception',
    narrative:
      'SoSparkDesigns was founded in 2021 by Soahim Rahman Tasin with a clear thesis: design and software engineering should not be disconnected silos. The studio was established to unite high-end visual brand craft and modern code under a single disciplined practice.',
    focusPoints: [
      'Establishment of the independent studio practice',
      'Unified brand architecture and frontend engineering',
      'Direct collaboration between founder and clients',
    ],
  },
  {
    period: 'Evolution',
    badge: 'Craft & Systems',
    title: 'The Systems Evolution',
    narrative:
      'As digital expectations matured, the studio moved away from template-driven workflows toward custom Next.js App Router architecture and scalable design token systems. Every project began with first-principles Figma design systems translated directly into production TypeScript code.',
    focusPoints: [
      'Transition to strict TypeScript and Next.js App Router',
      'Bespoke design token architectures and WCAG accessibility standards',
      'Elimination of third-party template bloat across all deliveries',
    ],
  },
  {
    period: '2025–Present',
    badge: 'Venture Lab',
    title: 'The Venture Ecosystem',
    narrative:
      'Rather than remaining strictly an agency service provider, SoSparkDesigns expanded into an active digital venture lab. The studio began engineering, launching, and operating proprietary platforms—most notably the Subz Empire marketplace and the SparkForge email deliverability engine.',
    focusPoints: [
      'Architecture and operation of Subz Empire (https://subzempire.com)',
      'Engineering and deployment of SparkForge (https://sparkfroge.pro.bd)',
      'Codification of the studio’s official #0069EA sovereign design tokens',
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
              An honest account of <br className="hidden sm:inline" />
              <span className="text-blue-600">how our studio evolved.</span>
            </>
          }
          description="Documented facts from our 2021 founding to our present focus on design systems and proprietary venture software."
          align="center"
        />

        {/* 3-Stage Documented Story Pipeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-200 space-y-12 md:space-y-16">
          {STORY_CHAPTERS.map((chapter) => {
            const isPresent = chapter.period.includes('Present');

            return (
              <div key={chapter.period} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                    isPresent ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-400'
                  }`}
                  aria-hidden="true"
                />

                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-sm sm:text-base font-mono font-extrabold text-blue-600">
                      {chapter.period}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isPresent
                          ? 'bg-blue-100/80 text-blue-800 border border-blue-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {chapter.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {chapter.narrative}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {chapter.focusPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{point}</span>
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
