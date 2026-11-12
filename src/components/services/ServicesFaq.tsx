'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SERVICES_FAQS, ServiceFaqItem } from '@/lib/services-data';
import SectionHeader from '@/components/ui/SectionHeader';

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Engagement', 'Process', 'Technical', 'Pricing'];

  const filteredFaqs =
    activeCategory === 'All'
      ? SERVICES_FAQS
      : SERVICES_FAQS.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="faq-heading"
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Everything you need to know <br className="hidden sm:inline" />
              <span className="text-blue-600">about partnering with us.</span>
            </>
          }
          description="Transparent answers to common questions about our technical capabilities, revision workflows, intellectual property ownership, and payment structures."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Services FAQ Accordion">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="pt-2 border-t border-slate-100">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesFaq;
