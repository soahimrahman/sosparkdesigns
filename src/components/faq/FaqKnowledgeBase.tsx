'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight, ArrowUpRight, HelpCircle, X } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES, FaqCategory, FaqItem } from '@/lib/faq-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export function FaqKnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All Questions' || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchAnswer = item.answer.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));

      return matchQuestion || matchAnswer || matchKeywords;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (cat: FaqCategory) => {
    setActiveCategory(cat);
    setOpenId(null); // Cleanly reset open state on category switch to prevent stale indices
  };

  return (
    <section
      id="faq-accordion"
      className="py-16 md:py-24 bg-white relative border-b border-slate-200/80"
      aria-labelledby="faq-knowledge-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <label htmlFor="faq-search" className="sr-only">
            Search Frequently Asked Questions
          </label>
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              id="faq-search"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenId(null);
              }}
              placeholder="Search questions by topic, stack, pricing, or process..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
                aria-label="Clear search query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
          role="tablist"
          aria-label="FAQ Categories"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion Questions List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5" role="region" aria-label="Questions and Answers">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const contentId = `faq-answer-${faq.id}`;
              const buttonId = `faq-question-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-blue-50/20 border-blue-200/90 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="pt-2 border-t border-slate-100/90 space-y-3">
                      <p>{faq.answer}</p>
                      {faq.referenceLink && (
                        <div className="pt-1">
                          <Link
                            href={faq.referenceLink.href}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            <span>{faq.referenceLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No questions found
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6">
              We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Tell us what you&apos;re looking
              for and we will answer directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Clear Search
              </button>
              <Link href="/contact">
                <Button size="sm" variant="primary">
                  Ask Directly
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Closing Quick Help Band */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/90 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Contact studio leadership directly for project consultations and technical evaluations.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact Us Directly
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FaqKnowledgeBase;
