'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Layers, Sparkles, Code2, Palette, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '@/lib/portfolio-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export function PortfolioFilterableGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');

  const categories = [
    'All Work',
    'Digital Products',
    'Web Development',
    'Brand Identity',
    'Graphic Design',
    'Studio Concepts',
  ];

  const filteredProjects =
    activeCategory === 'All Work'
      ? PORTFOLIO_PROJECTS
      : activeCategory === 'Studio Concepts'
      ? PORTFOLIO_PROJECTS.filter((p) => p.classification === 'concept')
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const getIcon = (name: PortfolioItem['iconName']) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="portfolio-directory"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="directory-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="directory-heading"
          eyebrow="Curated Project Archive"
          title={
            <>
              Explore our complete <br className="hidden sm:inline" />
              <span className="text-blue-600">work &amp; research directory.</span>
            </>
          }
          description="Filter through operational platforms, studio architectures, and transparently classified conceptual explorations."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Filterable Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((p) => {
              const isVenture = p.classification === 'venture';
              const isConcept = p.classification === 'concept';

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border p-6 md:p-7 flex flex-col justify-between transition-all duration-200 ${
                    isVenture
                      ? 'bg-blue-50/30 border-blue-200/80 shadow-sm hover:border-blue-300 hover:shadow-md'
                      : isConcept
                      ? 'bg-slate-50/60 border-slate-200/80 hover:border-slate-300 shadow-sm'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header: Icon + Classification Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                        {getIcon(p.iconName)}
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                          isVenture
                            ? 'bg-blue-100/80 text-blue-800 border border-blue-200'
                            : isConcept
                            ? 'bg-amber-50 text-amber-800 border border-amber-200/80'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {p.classificationBadge}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-500 font-semibold mb-1">
                      {p.category} &bull; {p.year}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                      {p.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white border border-slate-200/80 text-[10px] font-mono font-semibold text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Metric & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold text-slate-900 font-mono block">
                        {p.heroMetric.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {p.heroMetric.label}
                      </span>
                    </div>

                    {p.internalCaseStudyUrl ? (
                      <Link
                        href={p.internalCaseStudyUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : p.externalUrl ? (
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <span>Live Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400">
                        Concept Study
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioFilterableGrid;
