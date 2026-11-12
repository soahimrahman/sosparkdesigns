'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

export function AboutWorkingPrinciples() {
  const approaches = [
    {
      num: '01',
      title: 'Discovery & Diagnosis',
      desc: 'We examine your business model, target audience, and existing codebase before proposing solutions. Understanding the exact operational bottleneck prevents wasteful rewrites and misaligned design.',
    },
    {
      num: '02',
      title: 'Editorial Design Systems',
      desc: 'Every brand identity and user interface is authored from first principles in Figma using scalable design tokens, WCAG 2.1 AA accessibility standards, and deliberate typography hierarchies.',
    },
    {
      num: '03',
      title: 'Disciplined Engineering',
      desc: 'We build exclusively with modern frameworks: Next.js 14 App Router, strict TypeScript, and serverless APIs. Code is tested with automated suites (Vitest) and verified with zero compiler warnings.',
    },
    {
      num: '04',
      title: 'Direct Communication',
      desc: 'Clients communicate directly with Founder & Architect Soahim Rahman Tasin. We eliminate account management layers so technical, aesthetic, and architectural decisions happen without dilution.',
    },
    {
      num: '05',
      title: 'Production Verification & Delivery',
      desc: 'We verify our work with empirical multi-device browser testing, cross-browser validation, and lighthouse performance audits. Clients receive 100% intellectual property ownership upon completion.',
    },
  ];

  return (
    <section
      id="principles"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="principles-heading"
          eyebrow="Studio Execution Approach"
          title={
            <>
              How we approach discovery, <br className="hidden sm:inline" />
              <span className="text-blue-600">design, engineering, and delivery.</span>
            </>
          }
          description="A structured, disciplined methodology built to eliminate ambiguity and deliver production-grade results."
          align="center"
        />

        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90 bg-white rounded-2xl overflow-hidden shadow-sm">
          {approaches.map((p) => (
            <div
              key={p.num}
              className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex items-center gap-3 md:w-1/3 shrink-0">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-600">
                  {p.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {p.title}
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutWorkingPrinciples;
