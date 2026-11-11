'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { DEFAULT_FAQS } from '@/lib/seedData';

const CATEGORIES = ['All', 'General', 'Process', 'Technical'];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeCategory === 'All'
      ? DEFAULT_FAQS
      : DEFAULT_FAQS.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ position: 'relative' }}>
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-12)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Knowledge Base
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Frequently Asked <span style={{ color: 'var(--blue-light)' }}>Questions</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            Everything you need to know about our process, timelines, deliverables, and partnership terms.
          </p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section style={{ paddingBottom: 'var(--sp-8)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  background: activeCategory === cat ? 'var(--blue)' : 'var(--glass-bg)',
                  color: activeCategory === cat ? '#fff' : 'var(--ink-3)',
                  border: activeCategory === cat ? '1px solid var(--blue)' : '1px solid var(--glass-border-2)',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accordion List ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                    borderColor: isOpen ? 'rgba(37,99,235,0.4)' : 'var(--glass-border)',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: '#fff',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      color="var(--blue-light)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.75rem 1.5rem',
                        color: 'var(--ink-2)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '1rem',
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="glass-strong" style={{ marginTop: '4rem', padding: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.5rem' }}>
              Have a question not covered here?
            </h3>
            <p style={{ color: 'var(--ink-3)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Reach out directly and our team will answer all your project queries.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us Directly <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
