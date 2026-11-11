import React from 'react';
import Link from 'next/link';
import HeroCanvas from '@/components/HeroCanvas';
import HeroSaaSOrbits from '@/components/HeroSaaSOrbits';
import HeroArcDeck from '@/components/HeroArcDeck';
import FrostedPocketDeck from '@/components/FrostedPocketDeck';
import RadialOrbitCommunity from '@/components/RadialOrbitCommunity';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Zap,
  Palette,
  Layers,
  Layout,
  Code2,
  Video,
  Repeat,
  Star,
} from 'lucide-react';

export const metadata = {
  title: 'SoSpark Design — Creative Agency & Digital Lab',
  description:
    'Full-service creative agency offering graphic design, branding systems, Next.js web development, video editing, and page management. Led by Soahim Rahman Tasin.',
};

export default function HomePage() {
  const servicesList = [
    {
      num: '01',
      icon: <Palette size={22} className="text-blue-600" />,
      title: 'Graphic Design',
      desc: 'Campaign visuals, print collateral, pitch decks, and digital assets crafted to stop the scroll and demand attention.',
      backDesc: 'High-impact social media creative, packaging design, publication layout, exhibition graphics, and vector illustration.',
      link: '/services#graphic-design',
    },
    {
      num: '02',
      icon: <Layers size={22} className="text-blue-600" />,
      title: 'Branding Systems',
      desc: 'Complete identity systems from logo to type, colour theory to brand architecture — built to endure for decades.',
      backDesc: 'Logo suites, brand guidelines, typography pairings, color palettes, tone of voice, and master design libraries.',
      link: '/services#branding',
    },
    {
      num: '03',
      icon: <Layout size={22} className="text-blue-600" />,
      title: 'Web Design',
      desc: 'Editorial-precision interfaces. Mobile-first, conversion-focused, and built to reflect exactly who you are.',
      backDesc: 'UX research, wireframes, high-fidelity Figma mockups, and documented design systems ready for development.',
      link: '/services#web-design',
    },
    {
      num: '04',
      icon: <Code2 size={22} className="text-blue-600" />,
      title: 'Web Development',
      desc: 'Clean, fast, accessible code. We turn great designs into high-performance production websites and web applications.',
      backDesc: 'Custom Next.js App Router, React, TypeScript, headless CMS, robust API integrations, and sub-second load times.',
      link: '/services#web-dev',
    },
    {
      num: '05',
      icon: <Video size={22} className="text-blue-600" />,
      title: 'Video Editing',
      desc: 'Brand films, reels, and product ads edited with cinematic pacing, precision colour grading, and kinetic motion.',
      backDesc: 'Commercial launch films, social reels, 3D motion graphics, audio mastering, sound design, and color grading.',
      link: '/services#video',
    },
    {
      num: '06',
      icon: <Repeat size={22} className="text-blue-600" />,
      title: 'Page Management',
      desc: 'Your dedicated always-on creative team — delivering consistent, on-brand content across social and web every single week.',
      backDesc: 'Weekly content calendars, branded graphics, caption copywriting, multi-platform scheduling, and analytics reports.',
      link: '/services#page-mgmt',
    },
  ];

  const clientReviewsRow1 = [
    {
      name: 'Marcus Sterling',
      role: 'CEO, Nova Labs',
      text: 'SoSpark completely re-architected our visual identity and digital web experience. Our institutional investor engagement doubled within two weeks of launch.',
      avatar: 'MS',
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Marketing, Pulse Healthcare',
      text: 'Working with Soahim and the SoSpark team felt effortless. They delivered our Next.js web application ahead of schedule with flawless animations and 99+ Lighthouse performance.',
      avatar: 'ER',
    },
    {
      name: 'James Thornton',
      role: 'Founder, Maison d’Aethel',
      text: 'The packaging and brand guidelines crafted by SoSpark elevated our cosmetics brand from boutique to luxury department store standard. Truly exceptional artistry.',
      avatar: 'JT',
    },
    {
      name: 'Marcus Vance',
      role: 'Founder, Rift Studio',
      text: 'They don’t just design — they understand how a brand moves through the real world. Remarkable speed, taste level, and execution quality.',
      avatar: 'MV',
    },
  ];

  const clientReviewsRow2 = [
    {
      name: 'Elena Chen',
      role: 'Marketing Director, Kroma Labs',
      text: 'Our conversion rate jumped 42% after the rebrand. Clean, modern, editorial, and delivered ahead of schedule.',
      avatar: 'EC',
    },
    {
      name: 'David Rees',
      role: 'CTO, Threadline',
      text: 'Worth every penny. The web development was clean, fast, and exceptionally well documented for our in-house engineering team.',
      avatar: 'DR',
    },
    {
      name: 'Sophia Laurent',
      role: 'Creative Director, Laurent Paris',
      text: 'Every single asset delivered was museum-grade. They took our heritage aesthetic and injected modern digital vitality into it.',
      avatar: 'SL',
    },
    {
      name: 'Amir Okafor',
      role: 'Co-Founder, Okafor Hospitality',
      text: 'From vector signage to customer-facing web apps, SoSpark brought cohesion and high luxury to all four of our venue launches.',
      avatar: 'AO',
    },
  ];

  const clientLogos = [
    'GOOGLE', 'AIRBNB', 'COINBASE', 'NOTION', 'GUMROAD', 'PAYPAL',
    'STRIPE', 'FIGMA', 'VERCEL', 'SUPABASE', 'LINEAR', 'NEXT.JS'
  ];

  return (
    <>
      {/* ── 1. Hero Section (Super SaaS Animated Experience) ── */}
      <section className="hero" id="rail-hero" aria-labelledby="hero-headline" style={{ position: 'relative', overflow: 'hidden' }}>
        <HeroCanvas />
        <HeroSaaSOrbits />

        {/* Ambient Subtle Whitish & Celestial Sky Glows */}
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className="hero__content" style={{ position: 'relative', zIndex: 10 }}>
          {/* Top Trust Ratings Indicator (Deflexai Inspired) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'var(--font-ui)',
              color: 'var(--ink-2)',
              marginBottom: '1rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 800, color: '#2563eb' }}>G</span> 4.9 Google
            </span>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Star size={13} fill="#eab308" className="text-amber-500" /> 4.9 Trustpilot
            </span>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>•</span>
            <span style={{ color: 'var(--ink-3)' }}>140+ Projects Shipped</span>
          </div>

          <h1 className="hero__headline" id="hero-headline" style={{ marginBottom: '1.25rem' }}>
            Building brands that <br />
            <span className="hero__headline-accent">refuse to fade</span>
          </h1>

          <p className="hero__desc" style={{ marginBottom: '1.75rem' }}>
            SoSpark Design is a full-service creative studio led by <strong>Soahim Rahman Tasin</strong> — delivering world-class branding systems, high-performance Next.js web applications, and high-converting creative automation.
          </p>

          <div className="hero__actions" style={{ marginBottom: '1.25rem' }}>
            <Link href="/contact" className="btn-primary">
              Get Started Free <ArrowUpRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              Explore Selected Work
            </Link>
          </div>
        </div>

        {/* 3D Arc Deck Carousel (Aeline Perspective Curved Deck with Drag & Infinite Auto-Loop) */}
        <HeroArcDeck />

        {/* Animated Scroll Indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-track">
            <div className="hero__scroll-dot" />
          </div>
          <span className="hero__scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── 2. Client Logos Strip (Aeline Grayscale Monochrome Band) ── */}
      <section className="logos-strip" aria-labelledby="logos-title">
        <div className="container">
          <p className="logos-strip__label" data-scrollfx="fade" id="logos-title">
            Trusted by founders and high-growth brands worldwide
          </p>
        </div>
        <div className="marquee-rows logos-strip__rows">
          <div className="marquee-row marquee-row--left logos-row">
            <div className="marquee-track">
              {clientLogos.concat(clientLogos).map((l, i) => (
                <span key={`logo1-${i}`} className="logo-mark" aria-hidden={i >= clientLogos.length}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. About Us Section (Aeline-Style Asymmetric Bento Grid) ── */}
      <section className="about-bento" id="rail-about" aria-labelledby="about-bento-title">
        <div className="container">
          <div className="about-bento__header">
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: 'var(--sp-3)' }}>
              <Sparkles size={13} className="text-blue-600" />
              About SoSpark
            </span>
            <h2 className="about-bento__headline" id="about-bento-title" data-scrollfx="blur-up">
              A global creative partner dedicated to building{' '}
              <span className="headline-chip headline-chip--blue">
                <Sparkles size={12} className="text-blue-600" /> smarter
              </span>{' '}
              and{' '}
              <span className="headline-chip headline-chip--lime">
                <Zap size={12} className="text-lime-700" /> high-converting
              </span>{' '}
              brands
            </h2>
          </div>

          <div className="bento-grid">
            {/* Card 1: Royal Blue Card (Founder & Project Scale) */}
            <article className="bento-card bento-card--blue" data-scrollfx="rise">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.05em' }}>
                  SOSPARK
                </span>
                <span style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '16px' }}>
                  <span style={{ width: '3px', height: '60%', background: '#ffffff', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '100%', background: '#ffffff', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '40%', background: '#ffffff', borderRadius: '2px' }} />
                </span>
              </div>

              <div style={{ marginBlock: '2.5rem 1.5rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  marginBottom: '1rem',
                }}>
                  ST
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9, fontWeight: 500 }}>
                  Led by Soahim Rahman Tasin
                </div>
              </div>

              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  140+
                </div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Collaborating with forward-thinking AI, tech, and luxury brands to build indelible digital authority.
                </p>
              </div>
            </article>

            {/* Card 2: Crisp White Card (Measurable Results & Testimonial) */}
            <article className="bento-card bento-card--white" data-scrollfx="rise">
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Commitment to Measurable Results
                </div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, marginTop: '0.5rem' }}>
                  100%
                </div>
              </div>

              <div style={{ marginBlock: '1.5rem' }}>
                <div className="bento-avatar-stack" style={{ marginBottom: '1rem' }}>
                  <div className="bento-avatar">MS</div>
                  <div className="bento-avatar">ER</div>
                  <div className="bento-avatar">JT</div>
                  <div className="bento-avatar">AO</div>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--ink-3)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  “Their automation and branding architecture completely reshaped how we launch. It’s efficient, razor-sharp, and seamless.”
                </p>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--ink-light)', fontWeight: 600 }}>
                Verified Founder Reviews
              </div>
            </article>

            {/* Card 3: Neon Lime Card (Data & Impressions) */}
            <article className="bento-card bento-card--lime" data-scrollfx="rise">
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Audience Impact
              </div>
              <div style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1, marginBlock: '0.5rem' }}>
                520k+
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.45, fontWeight: 500 }}>
                Analyzed and engaged monthly across high-converting client channels.
              </p>
            </article>

            {/* Card 4: Obsidian Black Card (Global Footprint) */}
            <article className="bento-card bento-card--dark" data-scrollfx="rise">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>
                  Continents Serviced
                </span>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff' }}>
                  4+
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                From North America to Europe, Australia, and Asia.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4. Services (3D Flippable Cards with Custom Vector Icons) ── */}
      <section className="section" id="rail-services" aria-labelledby="services-title">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: 'var(--sp-12)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: 'var(--sp-3)' }}>
              Full-Spectrum Creative
            </span>
            <h2 className="works-teaser__title" id="services-title" data-scrollfx="blur-up">
              Everything your brand needs to dominate.
            </h2>
            <p style={{ color: 'var(--ink-3)', marginTop: 'var(--sp-4)', fontSize: 'var(--text-base)' }} data-scrollfx="fade">
              From initial vector geometry to complete full-stack Next.js web ecosystems and commercial motion graphics.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((s, idx) => (
              <article
                key={s.num}
                className="service-card"
                data-scrollfx="rise"
                style={{ ['--fx-i' as string]: idx, ['--card-i' as string]: idx }}
              >
                <div className="service-card__flip">
                  {/* Front Face */}
                  <div className="service-card__face service-card__face--front">
                    <div className="service-card__glow" aria-hidden="true" />
                    <div className="service-card__top">
                      <div className="service-card__num">{s.num}</div>
                      <span className="service-card__icon">{s.icon}</span>
                    </div>
                    <h3 className="service-card__title">{s.title}</h3>
                    <p className="service-card__desc">{s.desc}</p>
                    <button
                      className="service-card__flip-btn"
                      type="button"
                      aria-label={`Show more about ${s.title}`}
                    >
                      <span className="service-card__arrow" aria-hidden="true">→</span>
                    </button>
                  </div>

                  {/* Back Face */}
                  <div className="service-card__face service-card__face--back">
                    <div>
                      <h3 className="service-card__title">{s.title}</h3>
                      <p className="service-card__desc">{s.backDesc}</p>
                    </div>
                    <Link href={s.link} className="service-card__back-link">
                      Explore this service →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Works Teaser (Bento Layout + Frosted Pocket Deck Showcase) ── */}
      <section className="works-teaser" id="rail-work" aria-labelledby="works-title">
        <div className="container">
          <div className="works-teaser__header">
            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--sp-2)' }}>Portfolio Showcase</span>
              <h2 className="works-teaser__title" id="works-title" data-scrollfx="blur-up">
                Selected work.
              </h2>
            </div>
            <Link href="/portfolio" className="btn-ghost" data-scrollfx="slide-left">
              Full Portfolio →
            </Link>
          </div>

          <div className="works-grid works-grid--featured">
            {/* Featured Item 01 */}
            <article
              className="work-item work-item--nova work-item--featured"
              data-scrollfx="rise"
              style={{ ['--fx-i' as string]: 0 }}
              aria-label="Nova Identity System"
            >
              <Link href="/portfolio#nova-identity" className="work-item__link" aria-label="View Nova Identity System" />
              <div className="work-item__bg-anim" aria-hidden="true" />
              <div className="work-item__index" aria-hidden="true">01</div>
              <div className="work-item__letter" aria-hidden="true">N</div>
              <div className="work-item__overlay" aria-hidden="true" />
              <div className="work-item__info">
                <div className="work-item__tag">Branding • Identity System</div>
                <h3 className="work-item__title">Nova Identity System</h3>
                <p className="work-item__desc">
                  A full rebrand for a fintech challenger — logo, type system, and a component library that shipped across web and product in three weeks.
                </p>
              </div>
              <div className="work-item__cursor-label" aria-hidden="true">View Project</div>
            </article>

            {/* Side Items 02 and 03 */}
            <div className="works-grid__side">
              <article
                className="work-item work-item--pulse"
                data-scrollfx="slide-left"
                style={{ ['--fx-i' as string]: 1 }}
                aria-label="Pulse App Interface"
              >
                <Link href="/portfolio#pulse-app" className="work-item__link" aria-label="View Pulse App Interface" />
                <div className="work-item__bg-anim" aria-hidden="true" />
                <div className="work-item__index" aria-hidden="true">02</div>
                <div className="work-item__letter" aria-hidden="true">P</div>
                <div className="work-item__overlay" aria-hidden="true" />
                <div className="work-item__info">
                  <div className="work-item__tag">Web Design • Next.js</div>
                  <h3 className="work-item__title">Pulse App Interface</h3>
                </div>
                <div className="work-item__cursor-label" aria-hidden="true">View Project</div>
              </article>

              <article
                className="work-item work-item--ember"
                data-scrollfx="slide-right"
                style={{ ['--fx-i' as string]: 2 }}
                aria-label="Ember Campaign"
              >
                <Link href="/portfolio#ember-campaign" className="work-item__link" aria-label="View Ember Campaign" />
                <div className="work-item__bg-anim" aria-hidden="true" />
                <div className="work-item__index" aria-hidden="true">03</div>
                <div className="work-item__letter" aria-hidden="true">E</div>
                <div className="work-item__overlay" aria-hidden="true" />
                <div className="work-item__info">
                  <div className="work-item__tag">Video • Graphic Design</div>
                  <h3 className="work-item__title">Ember Campaign</h3>
                </div>
                <div className="work-item__cursor-label" aria-hidden="true">View Project</div>
              </article>
            </div>
          </div>

          {/* Frosted Pocket Deck Showcase (Reference 5 Inspired) */}
          <FrostedPocketDeck />
        </div>
      </section>

      {/* ── 6. Radial Orbit Community Sphere (Reference 1 & 3 Inspired, Zero Emojis) ── */}
      <RadialOrbitCommunity />

      {/* ── 7. Client Reviews Marquee (Continuous Wobble Motion) ── */}
      <section className="reviews-marquee" id="rail-reviews" aria-labelledby="reviews-title">
        <div className="container">
          <div className="reviews-marquee__header">
            <span className="eyebrow" data-scrollfx="fade">Client Testimonials</span>
            <h2 className="reviews-marquee__title" id="reviews-title" data-scrollfx="blur-up">
              What Founders Say.
            </h2>
          </div>
        </div>

        <div className="marquee-rows">
          {/* Row 1 (Leftwards Marquee) */}
          <div className="marquee-row marquee-row--left">
            <div className="marquee-track">
              {clientReviewsRow1.concat(clientReviewsRow1).map((rev, idx) => (
                <div key={`r1-${idx}`} className="review-card" aria-hidden={idx >= clientReviewsRow1.length}>
                  <div>
                    <div className="review-card__stars" style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '0.75rem' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="review-card__text">"{rev.text}"</p>
                  </div>
                  <div className="review-card__author">
                    <div className="review-card__avatar">{rev.avatar}</div>
                    <div>
                      <div className="review-card__name">{rev.name}</div>
                      <div className="review-card__role">{rev.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Rightwards Marquee) */}
          <div className="marquee-row marquee-row--right">
            <div className="marquee-track">
              {clientReviewsRow2.concat(clientReviewsRow2).map((rev, idx) => (
                <div key={`r2-${idx}`} className="review-card" aria-hidden={idx >= clientReviewsRow2.length}>
                  <div>
                    <div className="review-card__stars" style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '0.75rem' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="review-card__text">"{rev.text}"</p>
                  </div>
                  <div className="review-card__author">
                    <div className="review-card__avatar">{rev.avatar}</div>
                    <div>
                      <div className="review-card__name">{rev.name}</div>
                      <div className="review-card__role">{rev.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 'var(--sp-10)', textAlign: 'center' }}>
          <Link href="/reviews" className="btn-ghost" data-scrollfx="fade">
            Read all client reviews →
          </Link>
        </div>
      </section>
    </>
  );
}
