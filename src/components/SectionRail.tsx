'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface RailItem {
  id: string;
  label: string;
}

const RAIL_ITEMS: RailItem[] = [
  { id: 'rail-hero', label: 'Home' },
  { id: 'rail-stats', label: 'Stats' },
  { id: 'rail-services', label: 'Services' },
  { id: 'rail-work', label: 'Work' },
  { id: 'rail-reviews', label: 'Reviews' },
  { id: 'rail-cta', label: 'Contact' },
];

export default function SectionRail() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState('rail-hero');

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = RAIL_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  if (pathname !== '/') return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <nav className="section-rail" aria-label="Page section navigation">
      {RAIL_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`section-rail__item ${activeId === item.id ? 'active' : ''}`}
          onClick={() => scrollToSection(item.id)}
          aria-label={`Go to ${item.label} section`}
        >
          <span className="section-rail__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
