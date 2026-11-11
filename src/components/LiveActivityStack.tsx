'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, Star, ArrowUpRight } from 'lucide-react';

interface ActivityItem {
  id: string;
  name: string;
  role: string;
  action: string;
  meta: string;
  avatarText: string;
  avatarBg: string;
  badgeIcon: React.ReactNode;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'a1',
    name: 'Wei Chen',
    role: 'Lead Architect',
    action: 'Shipped Nova Fintech Next.js App',
    meta: '4 min ago • 100/100 Lighthouse Speed',
    avatarText: 'WC',
    avatarBg: 'linear-gradient(135deg, #2563eb, #3b82f6)',
    badgeIcon: <CheckCircle2 size={13} className="text-emerald-500" />,
  },
  {
    id: 'a2',
    name: 'Elena Rostova',
    role: 'VP Marketing',
    action: 'Approved Brand Architecture & Design Tokens',
    meta: '18 min ago • Figma v2.4 Design System',
    avatarText: 'ER',
    avatarBg: 'linear-gradient(135deg, #09090b, #334155)',
    badgeIcon: <Sparkles size={13} className="text-blue-500" />,
  },
  {
    id: 'a3',
    name: 'Marcus Sterling',
    role: 'CEO, Nova Labs',
    action: 'Rated 5.0★ on Trustpilot: "Doubled our investor engagement"',
    meta: '42 min ago • Verified Founder Review',
    avatarText: 'MS',
    avatarBg: 'linear-gradient(135deg, #eab308, #f59e0b)',
    badgeIcon: <Star size={13} className="text-amber-500" fill="#f59e0b" />,
  },
];

export default function LiveActivityStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="live-activity-stack-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        maxWidth: '420px',
        marginInline: 'auto',
        marginTop: '1.75rem',
        marginBottom: '2rem',
        height: '84px',
        perspective: '1000px',
        userSelect: 'none',
      }}
    >
      {/* Cyan & Electric Blue Ambient Halo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '90px',
          borderRadius: '999px',
          background:
            'radial-gradient(ellipse, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.16) 50%, rgba(255, 255, 255, 0) 75%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Activity Cards Stack */}
      {ACTIVITIES.map((item, idx) => {
        // Calculate offset relative to active card
        const offset = (idx - activeIndex + ACTIVITIES.length) % ACTIVITIES.length;
        // offset 0 = top/active, offset 1 = behind 1, offset 2 = behind 2
        const translateY = offset * 10;
        const scale = 1 - offset * 0.045;
        const opacity = offset === 0 ? 1 : offset === 1 ? 0.75 : 0.45;
        const zIndex = 30 - offset * 10;

        return (
          <div
            key={item.id}
            onClick={() => setActiveIndex((prev) => (prev + 1) % ACTIVITIES.length)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity,
              zIndex,
              transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              background: '#ffffff',
              borderRadius: '18px',
              padding: '10px 16px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow:
                offset === 0
                  ? '0 16px 36px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)'
                  : '0 8px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: item.avatarBg,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                {item.avatarText}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                >
                  {item.badgeIcon}
                </div>
              </div>

              {/* Text info */}
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    lineHeight: 1.2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--ink)',
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '10px',
                      color: 'var(--ink-light)',
                      fontWeight: 500,
                    }}
                  >
                    • {item.role}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--ink-2)',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '260px',
                  }}
                >
                  {item.action}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--ink-light)',
                    marginTop: '2px',
                  }}
                >
                  {item.meta}
                </div>
              </div>
            </div>

            {/* Quick shuffle indicator */}
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-light)',
                flexShrink: 0,
              }}
              title="Click to next activity"
            >
              <ArrowUpRight size={13} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
