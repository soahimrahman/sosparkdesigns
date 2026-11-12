'use client';

import React from 'react';
import { Sparkles, Compass, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import SectionHeader from '@/components/ui/SectionHeader';

export function StudioConceptsSection() {
  const concepts = PORTFOLIO_PROJECTS.filter((p) => p.classification === 'concept');

  return (
    <section
      id="studio-concepts"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="concepts-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="concepts-heading"
          eyebrow="Research &amp; Exploration"
          title={
            <>
              Studio Concept Studies &amp; <br className="hidden sm:inline" />
              <span className="text-blue-600">Speculative Prototypes</span>
            </>
          }
          description="We believe in total transparency. The projects below represent self-initiated studio explorations, experimental prototypes, and design exercises. They demonstrate our range and craft without masquerading as commercial client contracts."
          align="center"
        />

        {/* Notice of Classification */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            Transparent Classification Notice
          </div>
          <p className="mt-1 text-xs text-amber-900/80 leading-relaxed">
            Every entry in this section is an internal exploratory concept. We do not claim commercial partnerships or
            fabricated client outcomes for speculative work.
          </p>
        </div>

        {/* Concept Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 md:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {concept.classificationBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {concept.category} &bull; {concept.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  {concept.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm font-medium text-blue-600">
                  {concept.tagline}
                </p>

                <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {concept.shortDescription}
                </p>

                {/* Conceptual Deliverables */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Exploration Deliverables:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {concept.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-1.5">
                {concept.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/80 text-[10px] font-mono font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioConceptsSection;
