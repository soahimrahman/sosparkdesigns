'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Star,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface StoryItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  tag: string;
  metric: string;
  metricLabel: string;
  quote: string;
  subtext: string;
  accent: string;
  accentGlow: string;
  pillLink: string;
  pillText: string;
  audioDuration: string;
}

const STORIES: StoryItem[] = [
  {
    id: 's1',
    author: 'Marcus Sterling',
    role: 'CEO & Founder',
    company: 'Nova Labs',
    avatarInitials: 'MS',
    tag: 'Fintech UI & Identity',
    metric: '$14M',
    metricLabel: 'Series A Raised',
    quote:
      'SoSpark completely re-architected our visual identity and digital web experience. Our institutional investor engagement doubled within two weeks of launch.',
    subtext:
      'Delivered custom Next.js App Router engineering with sub-second page loads and 99+ Lighthouse scores.',
    accent: '#2563eb',
    accentGlow: 'rgba(37, 99, 235, 0.22)',
    pillLink: '/portfolio',
    pillText: 'Explore Nova Labs Case Study',
    audioDuration: '0:24',
  },
  {
    id: 's2',
    author: 'Elena Rostova',
    role: 'VP of Marketing',
    company: 'Pulse Healthcare',
    avatarInitials: 'ER',
    tag: 'Brand Systems & Web',
    metric: '+42%',
    metricLabel: 'Conversion Surge',
    quote:
      'Working with Soahim and the SoSpark team felt effortless. They operate with rare aesthetic clarity, cinematic motion design, and extraordinary development speed.',
    subtext:
      'Every single asset was delivered ahead of schedule with flawless responsive layouts and documented design tokens.',
    accent: '#0284c7',
    accentGlow: 'rgba(2, 132, 199, 0.22)',
    pillLink: '/services#branding',
    pillText: 'View Branding Architecture',
    audioDuration: '0:31',
  },
  {
    id: 's3',
    author: 'James Thornton',
    role: 'Creative Director',
    company: 'Maison d’Aethel',
    avatarInitials: 'JT',
    tag: 'Packaging & Video Campaign',
    metric: '4 Flagships',
    metricLabel: 'Global Retail Launch',
    quote:
      'The packaging, identity systems, and 4K video campaign elevated our boutique brand into luxury department store flagships across Paris, London, and Tokyo.',
    subtext:
      'Artistry meets precision engineering in a way few creative agencies worldwide can ever achieve.',
    accent: '#6366f1',
    accentGlow: 'rgba(99, 102, 241, 0.22)',
    pillLink: '/services#video',
    pillText: 'Explore Motion & Video Reels',
    audioDuration: '0:28',
  },
  {
    id: 's4',
    author: 'Amir Okafor',
    role: 'Co-Founder',
    company: 'Okafor Hospitality',
    avatarInitials: 'AO',
    tag: 'Digital Venue Ecosystem',
    metric: '3.8x',
    metricLabel: 'Booking Velocity',
    quote:
      'From vector environmental signage to high-converting customer-facing web applications, SoSpark brought cohesion and high luxury to all four venue launches.',
    subtext:
      'A true full-service creative partner that thinks like an owner and executes like a master artisan.',
    accent: '#059669',
    accentGlow: 'rgba(5, 150, 105, 0.22)',
    pillLink: '/contact',
    pillText: 'Start Your Creative Project',
    audioDuration: '0:35',
  },
];

export default function RadialOrbitCommunity() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const story = STORIES[activeTab];

  // 3D Card Parallax Tilt & Mouse Specular Spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage for spotlight
    setMousePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });

    // Tilt angle
    const centerX = x - rect.width / 2;
    const centerY = y - rect.height / 2;
    setTilt({
      x: -centerY / 28,
      y: centerX / 36,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  // 7-second auto-cycle timer with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // ms
    const total = 7000;
    const step = (interval / total) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((cur) => (cur + 1) % STORIES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab, isPaused]);

  // Switch stories
  const selectStory = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + STORIES.length) % STORIES.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % STORIES.length);
    setProgress(0);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <section
      id="radial-orbit-section"
      className="radial-orbit-section"
      aria-labelledby="community-headline"
    >
      {/* ── Dynamic Background Concentric Cosmic Orbits & Glows ── */}
      <div className="radial-orbit-bg" aria-hidden="true">
        {/* Dynamic Accent Ambient Aura */}
        <div
          className="radial-orbit-glow"
          style={{
            background: `radial-gradient(circle, ${story.accentGlow} 0%, rgba(255,255,255,0) 70%)`,
            transition: 'background 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Orbit Ring 1 (Inner) with orbiting comet */}
        <div className="radial-orbit-ring radial-orbit-ring--1">
          <div className="orbit-comet orbit-comet--1" style={{ borderColor: story.accent }}>
            <span className="orbit-comet-core" style={{ background: story.accent, boxShadow: `0 0 12px 2px ${story.accent}` }} />
          </div>
        </div>

        {/* Orbit Ring 2 (Middle Dashed) with opposite orbiting comets */}
        <div className="radial-orbit-ring radial-orbit-ring--2">
          <div className="orbit-comet orbit-comet--2" style={{ borderColor: story.accent }}>
            <span className="orbit-comet-core" style={{ background: story.accent, boxShadow: `0 0 14px 2px ${story.accent}` }} />
          </div>
          <div className="orbit-comet orbit-comet--2-alt" style={{ borderColor: story.accent }}>
            <span className="orbit-comet-core" style={{ background: story.accent, boxShadow: `0 0 10px 2px ${story.accent}` }} />
          </div>
        </div>

        {/* Orbit Ring 3 (Outer) with reverse orbit comet */}
        <div className="radial-orbit-ring radial-orbit-ring--3">
          <div className="orbit-comet orbit-comet--3" style={{ borderColor: story.accent }}>
            <span className="orbit-comet-core" style={{ background: story.accent, boxShadow: `0 0 16px 3px ${story.accent}` }} />
          </div>
        </div>

        {/* Orbit Ring 4 (Deep Perimeter) */}
        <div className="radial-orbit-ring radial-orbit-ring--4" />

        {/* Kinetic Radar Sweep Blade */}
        <div
          className="radial-sonar-sweep"
          style={{
            borderColor: `${story.accent}33`,
          }}
        />

        {/* Rotating Crosshair Grid Overlay */}
        <div className="orbit-grid-crosshair" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Section Eyebrow & Title */}
        <div className="community-header-block">
          <div className="eyebrow-container" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              <Sparkles size={13} className="text-blue-600" />
              Verified Client Success • Live Orbit
            </span>
          </div>
          <h2
            id="community-headline"
            className="community-main-title"
          >
            Endorsed by founders who refuse to settle
          </h2>
          <p className="community-main-subtitle">
            Hover or click any founder in the orbit to explore their multi-million dollar transformation.
          </p>
        </div>

        {/* ── Orbiting Client Avatars with continuous floating trajectories ── */}
        <div className="orbit-nodes-wrapper" aria-hidden="false">
          {STORIES.map((s, idx) => {
            const isActive = idx === activeTab;
            const positions = [
              { top: '15%', left: '7%', delay: '0s' },
              { top: '19%', right: '7%', delay: '-1.5s' },
              { bottom: '21%', left: '8%', delay: '-3s' },
              { bottom: '17%', right: '8%', delay: '-4.5s' },
            ];
            const pos = positions[idx];

            return (
              <div
                key={s.id}
                className={`orbit-node-container orbit-node-container--${idx} ${isActive ? 'is-active' : ''}`}
                style={{
                  position: 'absolute',
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                  zIndex: isActive ? 25 : 10,
                  animationDelay: pos.delay,
                }}
              >
                <button
                  type="button"
                  className="orbit-node-btn"
                  onClick={() => selectStory(idx)}
                  aria-label={`View feedback from ${s.author} of ${s.company}`}
                >
                  {/* Outer Circular Progress Ring (Only active one animates countdown) */}
                  <div
                    className={`orbit-avatar-badge ${isActive ? 'orbit-avatar-badge--active' : ''}`}
                    style={isActive ? { borderColor: `${s.accent}80` } : {}}
                  >
                    {isActive && (
                      <svg className="orbit-countdown-svg" viewBox="0 0 64 64">
                        <circle
                          className="orbit-countdown-bg"
                          cx="32"
                          cy="32"
                          r="29"
                          stroke={`${s.accent}25`}
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <circle
                          className="orbit-countdown-fill"
                          cx="32"
                          cy="32"
                          r="29"
                          stroke={s.accent}
                          strokeWidth="2.5"
                          fill="none"
                          strokeDasharray={182}
                          strokeDashoffset={182 - (182 * progress) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {/* Ping ripple aura when active */}
                    {isActive && (
                      <span
                        className="orbit-avatar-ping"
                        style={{ borderColor: s.accent, color: s.accent }}
                      />
                    )}

                    {/* Avatar Initials Badge with gradient glow */}
                    <div
                      className="orbit-avatar-inner"
                      style={{
                        background: isActive ? `linear-gradient(135deg, #ffffff 0%, ${s.accent}15 100%)` : '#ffffff',
                        borderColor: isActive ? s.accent : 'rgba(0,0,0,0.08)',
                      }}
                    >
                      <span className="orbit-avatar-text" style={{ color: isActive ? s.accent : '#09090b' }}>
                        {s.avatarInitials}
                      </span>
                    </div>
                  </div>

                  {/* Micro Metric Tag Pill */}
                  <div
                    className={`orbit-avatar-metric-tag ${isActive ? 'orbit-avatar-metric-tag--active' : ''}`}
                    style={isActive ? { borderColor: `${s.accent}50`, color: s.accent } : {}}
                  >
                    <span className="metric-tag-text">{s.metric}</span>
                  </div>

                  {/* Hover Floating Details Card */}
                  <div className="orbit-avatar-card-hint">
                    <span className="hint-name">{s.author}</span>
                    <span className="hint-company">{s.company}</span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Central Luxury Testimonial Card with 3D Parallax & Animated Border Beam ── */}
        <div
          ref={cardRef}
          className="community-showcase-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Animated Glowing Perimeter Border Beam */}
          <svg
            className="card-border-beam-svg"
            aria-hidden="true"
            viewBox="0 0 690 420"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`beamGrad-${story.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={story.accent} stopOpacity="0" />
                <stop offset="60%" stopColor={story.accent} stopOpacity="1" />
                <stop offset="100%" stopColor={story.accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect
              x="1.5"
              y="1.5"
              width="687"
              height="417"
              rx="32"
              ry="32"
              fill="none"
              stroke={`url(#beamGrad-${story.id})`}
              strokeWidth="2.5"
              strokeDasharray="220 1800"
              className="beam-rect-animated"
            />
          </svg>

          {/* Mouse Specular Light Reflection Spotlight */}
          <div
            className="card-specular-light"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, ${story.accent}12 0%, transparent 80%)`,
            }}
          />

          {/* Card Top Row: Rating, Verified Client, and Audio Reel Equalizer */}
          <div className="showcase-card__header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div
                className="showcase-card__stars"
                style={{ display: 'flex', gap: '3px' }}
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" color="#eab308" />
                ))}
              </div>

              <div className="showcase-card__verified-badge">
                <ShieldCheck size={13} className="text-blue-600" />
                <span>Verified Client • 5.0</span>
              </div>
            </div>

            {/* Live Audio Reel Snippet Pill */}
            <button
              type="button"
              className={`showcase-card__reel-indicator ${isPlayingAudio ? 'is-playing' : ''}`}
              onClick={toggleAudio}
              title={isPlayingAudio ? 'Pause Founder Audio Snippet' : 'Play Founder Audio Snippet'}
            >
              <div className="reel-sound-bars">
                <span className={`bar bar-1 ${isPlayingAudio ? 'animate-bounce' : ''}`} style={{ background: story.accent }} />
                <span className={`bar bar-2 ${isPlayingAudio ? 'animate-bounce' : ''}`} style={{ background: story.accent }} />
                <span className={`bar bar-3 ${isPlayingAudio ? 'animate-bounce' : ''}`} style={{ background: story.accent }} />
                <span className={`bar bar-4 ${isPlayingAudio ? 'animate-bounce' : ''}`} style={{ background: story.accent }} />
                <span className={`bar bar-5 ${isPlayingAudio ? 'animate-bounce' : ''}`} style={{ background: story.accent }} />
              </div>
              <span className="reel-label">{story.tag}</span>
              <span className="reel-duration" style={{ color: story.accent }}>
                {isPlayingAudio ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Volume2 size={12} /> {story.audioDuration}
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#94a3b8' }}>
                    <VolumeX size={12} /> Paused
                  </span>
                )}
              </span>
            </button>
          </div>

          {/* Quotation Icon Watermark */}
          <div className="showcase-card__quote-mark" aria-hidden="true">
            <Quote size={46} strokeWidth={1.5} style={{ color: story.accent, opacity: 0.16 }} />
          </div>

          {/* Main Quote with smooth kinetic fade */}
          <blockquote key={`quote-${story.id}`} className="showcase-card__quote">
            “{story.quote}”
          </blockquote>

          {/* Subtext description */}
          <p key={`subtext-${story.id}`} className="showcase-card__subtext">
            {story.subtext}
          </p>

          {/* Author Footer Row */}
          <div className="showcase-card__footer">
            <div className="showcase-card__author-info">
              <div
                className="showcase-author-avatar"
                style={{
                  background: `${story.accent}12`,
                  color: story.accent,
                  borderColor: `${story.accent}35`,
                  boxShadow: `0 4px 14px ${story.accent}20`,
                }}
              >
                {story.avatarInitials}
              </div>
              <div>
                <div className="showcase-author-name">{story.author}</div>
                <div className="showcase-author-role">
                  {story.role} • <strong style={{ color: '#09090b' }}>{story.company}</strong>
                </div>
              </div>
            </div>

            {/* Pagination Controls with Auto-Play Countdown Indicator & Pause toggle */}
            <div className="showcase-card__nav-controls">
              <button
                type="button"
                className="showcase-nav-arrow"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="showcase-indicators">
                {STORIES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`showcase-dot ${i === activeTab ? 'active' : ''}`}
                    onClick={() => selectStory(i)}
                    aria-label={`Go to story ${i + 1}`}
                  >
                    {i === activeTab && (
                      <span
                        className="showcase-dot-fill"
                        style={{ width: `${progress}%`, background: story.accent }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="showcase-nav-arrow"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>

              <button
                type="button"
                className={`showcase-nav-arrow showcase-pause-btn ${isPaused ? 'is-paused' : ''}`}
                onClick={togglePause}
                title={isPaused ? 'Resume auto-cruise' : 'Pause auto-cruise'}
                aria-label={isPaused ? 'Resume auto-cruise' : 'Pause auto-cruise'}
              >
                {isPaused ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}
              </button>
            </div>
          </div>

          {/* Action Button & Metric Ribbon */}
          <div className="showcase-card__action-row">
            <div
              className="showcase-card__metric-box"
              style={{
                borderColor: `${story.accent}30`,
                background: `linear-gradient(135deg, #f8fafc 0%, ${story.accent}08 100%)`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                <span className="metric-box-val" style={{ color: story.accent }}>{story.metric}</span>
                <span className="metric-sparkle-dot" style={{ background: story.accent }} />
              </div>
              <span className="metric-box-lbl">{story.metricLabel}</span>
            </div>

            <Link href={story.pillLink} className="showcase-primary-btn">
              <span>{story.pillText}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── Bottom Client Brand Carousel Spotlight ── */}
        <div className="community-brands-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={12} className="text-blue-600" />
            <span className="brands-bar-label">FEATURED FOUNDER CASE SPOTLIGHT</span>
          </div>
          <div className="brands-bar-list">
            {STORIES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`brand-chip ${idx === activeTab ? 'brand-chip--active' : ''}`}
                onClick={() => selectStory(idx)}
              >
                {idx === activeTab && (
                  <span className="brand-chip-dot" style={{ background: s.accent, boxShadow: `0 0 8px ${s.accent}` }} />
                )}
                <span>{s.company}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
