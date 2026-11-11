'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Star,
  MoveHorizontal,
  Code2,
  Video,
} from 'lucide-react';

interface ArcCard {
  id: string;
  category: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  bgType: 'white' | 'dark' | 'blue' | 'lime' | 'gradient';
  icon?: React.ReactNode;
  tags?: string[];
  link: string;
}

const ARC_CARDS: ArcCard[] = [
  {
    id: 'c1',
    category: 'Fintech UI',
    title: 'Nova Capital Interface',
    metric: '$2,670',
    metricLabel: 'MRR Growth',
    bgType: 'white',
    icon: <TrendingUp size={16} className="text-blue-500" />,
    tags: ['Next.js', 'Finance'],
    link: '/portfolio',
  },
  {
    id: 'c2',
    category: 'Intelligence',
    title: 'Precision in Every Decision',
    metric: '99.4%',
    metricLabel: 'Accuracy Rate',
    bgType: 'white',
    icon: <Cpu size={16} className="text-blue-500" />,
    tags: ['AI Strategy', 'Analytics'],
    link: '/services',
  },
  {
    id: 'c3',
    category: 'Expertise',
    title: 'Strategy, Data & Visuals',
    metric: '140+',
    metricLabel: 'Shipped Projects',
    bgType: 'dark',
    icon: <Sparkles size={16} className="text-lime-400" />,
    tags: ['Full-Stack', 'Brand'],
    link: '/about',
  },
  {
    id: 'c4',
    category: 'Data Training',
    title: 'Design System & Tokens',
    metric: '520k+',
    metricLabel: 'Monthly Reach',
    bgType: 'blue',
    icon: <Layers size={16} className="text-white" />,
    tags: ['Figma', 'Components'],
    link: '/portfolio',
  },
  {
    id: 'c5',
    category: 'Performance',
    title: 'Sub-Second Next.js Core',
    metric: '100%',
    metricLabel: 'Lighthouse Score',
    bgType: 'dark',
    icon: <Code2 size={16} className="text-emerald-400" />,
    tags: ['TypeScript', 'Speed'],
    link: '/services',
  },
  {
    id: 'c6',
    category: 'Motion Reel',
    title: 'Ember 4K Cinematic Launch',
    metric: '60 FPS',
    metricLabel: 'Fluid Motion',
    bgType: 'white',
    icon: <Video size={16} className="text-amber-500" />,
    tags: ['3D CGI', 'Audio'],
    link: '/portfolio',
  },
  {
    id: 'c7',
    category: 'Brand Lab',
    title: 'Apex Identity Architecture',
    metric: '3.8x',
    metricLabel: 'Valuation Multiple',
    bgType: 'dark',
    icon: <Sparkles size={16} className="text-blue-400" />,
    tags: ['Identity', 'Systems'],
    link: '/about',
  },
  {
    id: 'c8',
    category: 'Creative Tech',
    title: 'Kinetic Web Experiences',
    metric: '120ms',
    metricLabel: 'Micro-Latency',
    bgType: 'blue',
    icon: <ArrowUpRight size={16} className="text-white" />,
    tags: ['WebGL', 'Animation'],
    link: '/services',
  },
];

const CARD_WIDTH = 220;
const CARD_GAP = 22;
const CARD_SPAN = CARD_WIDTH + CARD_GAP;
const TOTAL_SPAN = ARC_CARDS.length * CARD_SPAN;

export default function HeroArcDeck() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Animation & Physics Refs
  const posRef = useRef(0);
  const dragStartRef = useRef<{ x: number; pos: number; lastDelta: number }>({ x: 0, pos: 0, lastDelta: 0 });
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Mouse tilt for extra 3D depth
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Continuous physics / auto-scroll tick
  const tick = useCallback((time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
    lastTimeRef.current = time;

    if (isInteractingRef.current) {
      // User is actively dragging; velocity calculated in onPointerMove
    } else {
      // Inertia decay
      if (Math.abs(velocityRef.current) > 0.05) {
        velocityRef.current *= Math.pow(0.92, dt * 60);
        posRef.current += velocityRef.current * dt * 60;
      } else {
        velocityRef.current = 0;
        // Ambient auto-scroll (slower on hover, constant otherwise)
        const baseSpeed = isHoveredRef.current ? 0.35 : 0.75;
        posRef.current += baseSpeed;
      }
    }

    // Keep position wrapped seamlessly within [0, TOTAL_SPAN)
    posRef.current = ((posRef.current % TOTAL_SPAN) + TOTAL_SPAN) % TOTAL_SPAN;
    setScrollX(posRef.current);

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only respond to primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isInteractingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartRef.current = { x: e.clientX, pos: posRef.current, lastDelta: 0 };
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;

    if (Math.abs(deltaX) > 4) {
      hasDraggedRef.current = true;
    }

    // Move carousel opposite to drag direction for natural swipe feel
    const newPos = dragStartRef.current.pos - deltaX * 1.15;
    velocityRef.current = -(deltaX - (dragStartRef.current.lastDelta || 0)) * 1.5;
    dragStartRef.current.lastDelta = deltaX;
    posRef.current = newPos;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;
    isInteractingRef.current = false;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture release fails
    }
  };

  // Subtle ambient mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: -dy * 5, y: dx * 6 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-arc-wrapper"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      style={{
        perspective: '1300px',
        transformStyle: 'preserve-3d',
        width: '100%',
        position: 'relative',
        paddingBlock: '1.5rem 0.5rem',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
      }}
      aria-label="Interactive 3D Draggable Carousel"
    >
      {/* 3D Arc Rotating Stage */}
      <div
        className="hero-arc-track"
        style={{
          height: '290px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `perspective(1300px) rotateX(${tilt.x + 6}deg) rotateY(${tilt.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {ARC_CARDS.map((card, idx) => {
          // Virtual position of this card along the infinite conveyor
          const nominalCenter = idx * CARD_SPAN;
          let diff = (nominalCenter - scrollX) % TOTAL_SPAN;
          if (diff < -TOTAL_SPAN / 2) diff += TOTAL_SPAN;
          if (diff > TOTAL_SPAN / 2) diff -= TOTAL_SPAN;

          // Horizon cull: only render/show cards within visible range
          const maxVisibleDist = 720;
          if (Math.abs(diff) > maxVisibleDist) {
            return null;
          }

          // 3D cylindrical geometry calculations
          const normDist = diff / 480; // normalized distance from center
          const rotY = normDist * 28; // cylindrical tangent angle
          const translateZ = -Math.pow(Math.abs(diff) / 36, 1.8) * 1.5; // curved away into distance
          const translateY = Math.pow(Math.abs(diff) / 58, 1.8) * 1.8; // subtle parabolic droop
          const scale = Math.max(0.78, 1 - Math.abs(diff) / 1600);
          const zIndex = Math.round(1000 - Math.abs(diff));
          // Fade smoothly at edges to eliminate any pop
          const opacity = Math.min(1, Math.max(0, 1 - Math.pow(Math.max(0, (Math.abs(diff) - 400) / 300), 2)));

          const isHovered = hoveredId === card.id;

          // Stylings tailored for each aesthetic card variant
          let cardBg = '#ffffff';
          let textColor = '#09090b';
          let subTextColor = '#475569';
          let borderColor = 'rgba(0, 0, 0, 0.08)';
          let shadow = '0 16px 36px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)';

          if (card.bgType === 'dark') {
            cardBg = '#09090b';
            textColor = '#ffffff';
            subTextColor = 'rgba(255, 255, 255, 0.7)';
            borderColor = 'rgba(255, 255, 255, 0.14)';
            shadow = '0 20px 48px rgba(0, 0, 0, 0.35)';
          } else if (card.bgType === 'blue') {
            cardBg = 'linear-gradient(145deg, #2563eb, #1d4ed8)';
            textColor = '#ffffff';
            subTextColor = 'rgba(255, 255, 255, 0.85)';
            borderColor = 'rgba(255, 255, 255, 0.2)';
            shadow = '0 20px 45px rgba(37, 99, 235, 0.35)';
          } else if (card.bgType === 'lime') {
            cardBg = 'linear-gradient(145deg, #0f172a, #1e293b)';
            textColor = '#ffffff';
            subTextColor = 'rgba(255, 255, 255, 0.75)';
            borderColor = 'rgba(255, 255, 255, 0.12)';
            shadow = '0 20px 48px rgba(15, 23, 42, 0.3)';
          }

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: `-${CARD_WIDTH / 2}px`,
                marginTop: '-130px',
                width: `${CARD_WIDTH}px`,
                height: '260px',
                borderRadius: '24px',
                background: cardBg,
                color: textColor,
                border: `1px solid ${borderColor}`,
                boxShadow: isHovered
                  ? '0 30px 65px rgba(37, 99, 235, 0.25), 0 6px 16px rgba(0, 0, 0, 0.06)'
                  : shadow,
                transform: `translateX(${diff}px) translateY(${translateY - (isHovered ? 18 : 0)}px) translateZ(${translateZ + (isHovered ? 45 : 0)}px) rotateY(${rotY}deg) scale(${isHovered ? scale * 1.05 : scale})`,
                transition: isDragging
                  ? 'none'
                  : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
                zIndex: isHovered ? 1200 : zIndex,
                opacity,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.35rem',
                flexShrink: 0,
                pointerEvents: 'auto',
              }}
            >
              <Link
                href={card.link}
                onClick={(e) => {
                  // Prevent link click navigation if user was actively dragging
                  if (hasDraggedRef.current) {
                    e.preventDefault();
                  }
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Header */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-ui)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: subTextColor,
                        padding: '2px 8px',
                        borderRadius: '999px',
                        background:
                          card.bgType === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.04)',
                      }}
                    >
                      {card.category}
                    </span>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background:
                          card.bgType === 'dark'
                            ? 'rgba(255,255,255,0.12)'
                            : 'rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      color: textColor,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Metric with Creative Display Font (Syne) */}
                <div>
                  {card.metric && (
                    <div style={{ marginBottom: '0.65rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '24px',
                          fontWeight: 700,
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                          color: textColor,
                        }}
                      >
                        {card.metric}
                      </div>
                      {card.metricLabel && (
                        <div
                          style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '11px',
                            color: subTextColor,
                            marginTop: '4px',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {card.metricLabel}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {card.tags && (
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {card.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '2px 8px',
                            borderRadius: '999px',
                            background:
                              card.bgType === 'dark'
                                ? 'rgba(255,255,255,0.12)'
                                : 'rgba(0,0,0,0.05)',
                            color: subTextColor,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Dragging hint & Social proof rating bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '1.25rem',
        }}
      >
        {/* Interactive Drag Hint Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 14px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'var(--font-ui)',
            color: 'var(--ink-3)',
          }}
        >
          <MoveHorizontal size={13} className="text-blue-600" />
          <span>Drag left or right to rotate • Auto-scrolling 3D deck</span>
        </div>

        {/* Social Proof */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--ink-3)',
            fontFamily: 'var(--font-ui)',
          }}
        >
          <span>Rated 4.9/5 by 140+ high-growth founders</span>
          <span style={{ display: 'inline-flex', gap: '2px', color: '#eab308' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#eab308" strokeWidth={0} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

