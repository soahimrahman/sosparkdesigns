'use client';

import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Palette,
  Terminal,
} from 'lucide-react';

interface OrbitNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  ring: 1 | 2 | 3;
  angle: number; // in degrees
}

export default function HeroSaaSOrbits() {
  // 8 tech & design nodes placed on 3 concentric orbit rings
  const nodes: OrbitNode[] = [
    // Ring 1 (Inner, radius 360px)
    {
      id: 'figma',
      name: 'Figma',
      icon: <Palette size={16} />,
      color: '#f43f5e',
      bg: 'rgba(244, 63, 94, 0.08)',
      ring: 1,
      angle: 15,
    },
    {
      id: 'nextjs',
      name: 'Next.js 14',
      icon: <Globe size={16} />,
      color: '#09090b',
      bg: 'rgba(9, 9, 11, 0.06)',
      ring: 1,
      angle: 195,
    },

    // Ring 2 (Middle, radius 520px)
    {
      id: 'react',
      name: 'React 19',
      icon: <Cpu size={16} />,
      color: '#0284c7',
      bg: 'rgba(2, 132, 199, 0.08)',
      ring: 2,
      angle: 32,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: <Code2 size={16} />,
      color: '#2563eb',
      bg: 'rgba(37, 99, 235, 0.08)',
      ring: 2,
      angle: 148,
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      icon: <Layers size={16} />,
      color: '#06b6d4',
      bg: 'rgba(6, 182, 212, 0.08)',
      ring: 2,
      angle: 215,
    },
    {
      id: 'stripe',
      name: 'Stripe & API',
      icon: <Zap size={16} />,
      color: '#6366f1',
      bg: 'rgba(99, 102, 241, 0.08)',
      ring: 2,
      angle: 328,
    },

    // Ring 3 (Outer, radius 680px)
    {
      id: 'threejs',
      name: '3D WebGL',
      icon: <Sparkles size={16} />,
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.08)',
      ring: 3,
      angle: 52,
    },
    {
      id: 'terminal',
      name: 'DevOps & CI/CD',
      icon: <Terminal size={16} />,
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.08)',
      ring: 3,
      angle: 128,
    },
  ];

  const ringSizes = {
    1: 720,  // perimeter clearance
    2: 1040,
    3: 1360,
  };

  return (
    <div
      className="hero-saas-orbits"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '320px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1200px',
        height: '1200px',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible',
      }}
    >
      {/* Central Cyan & Royal Blue Diffuse Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ring 1 (Inner) */}
      <div
        className="orbit-ring orbit-ring--1"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${ringSizes[1]}px`,
          height: `${ringSizes[1]}px`,
          marginLeft: `-${ringSizes[1] / 2}px`,
          marginTop: `-${ringSizes[1] / 2}px`,
          borderRadius: '50%',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          animation: 'orbitRotateCW 120s linear infinite',
        }}
      >
        {nodes
          .filter((n) => n.ring === 1)
          .map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = ringSizes[1] / 2;
            const x = r + r * Math.cos(rad);
            const y = r + r * Math.sin(rad);

            return (
              <div
                key={n.id}
                className="orbit-node"
                title={n.name}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'auto',
                }}
              >
                <div
                  className="orbit-node__bubble"
                  style={{
                    animation: 'orbitCounterRotateCW 80s linear infinite',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: n.color,
                  }}
                >
                  {n.icon}
                </div>
              </div>
            );
          })}
      </div>

      {/* Ring 2 (Middle) */}
      <div
        className="orbit-ring orbit-ring--2"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${ringSizes[2]}px`,
          height: `${ringSizes[2]}px`,
          marginLeft: `-${ringSizes[2] / 2}px`,
          marginTop: `-${ringSizes[2] / 2}px`,
          borderRadius: '50%',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          animation: 'orbitRotateCCW 110s linear infinite',
        }}
      >
        {nodes
          .filter((n) => n.ring === 2)
          .map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = ringSizes[2] / 2;
            const x = r + r * Math.cos(rad);
            const y = r + r * Math.sin(rad);

            return (
              <div
                key={n.id}
                className="orbit-node"
                title={n.name}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'auto',
                }}
              >
                <div
                  className="orbit-node__bubble"
                  style={{
                    animation: 'orbitCounterRotateCCW 110s linear infinite',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: n.color,
                  }}
                >
                  {n.icon}
                </div>
              </div>
            );
          })}
      </div>

      {/* Ring 3 (Outer) */}
      <div
        className="orbit-ring orbit-ring--3"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${ringSizes[3]}px`,
          height: `${ringSizes[3]}px`,
          marginLeft: `-${ringSizes[3] / 2}px`,
          marginTop: `-${ringSizes[3] / 2}px`,
          borderRadius: '50%',
          border: '1px dashed rgba(0, 0, 0, 0.04)',
          animation: 'orbitRotateCW 150s linear infinite',
        }}
      >
        {nodes
          .filter((n) => n.ring === 3)
          .map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = ringSizes[3] / 2;
            const x = r + r * Math.cos(rad);
            const y = r + r * Math.sin(rad);

            return (
              <div
                key={n.id}
                className="orbit-node"
                title={n.name}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'auto',
                }}
              >
                <div
                  className="orbit-node__bubble"
                  style={{
                    animation: 'orbitCounterRotateCW 150s linear infinite',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: n.color,
                  }}
                >
                  {n.icon}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
