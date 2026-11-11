'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      // Gentle tilt max 10 deg
      setTilt({ x: -dy * 8, y: dx * 8 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero__3d-scene"
      style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* Orbiting rings */}
      <div className="hero__ring hero__ring--1" />
      <div className="hero__ring hero__ring--2" />

      {/* 3D Floating plane */}
      <div
        className="hero__plane"
        style={{
          width: '320px',
          height: '220px',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(255,255,255,0.03) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--blue) 0%, var(--spark) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            marginBottom: '12px',
            boxShadow: '0 0 20px rgba(37,99,235,0.5)',
          }}
        >
          <Sparkles size={22} color="#ffffff" />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          SoSpark Creative
        </span>
        <span style={{ fontSize: '11px', color: 'var(--blue-light)', marginTop: '4px' }}>
          Design • Web • Motion
        </span>
      </div>
    </div>
  );
}
