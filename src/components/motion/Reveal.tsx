'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeCurves, durations } from '@/lib/motion-tokens';

export interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  scale?: boolean;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = durations.standard,
  threshold = 0.15,
  className = '',
  scale = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: 24 };
      case 'down':
        return { x: 0, y: -24 };
      case 'left':
        return { x: 28, y: 0 };
      case 'right':
        return { x: -28, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
    ...(scale && !shouldReduceMotion ? { scale: 0.95 } : {}),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easeCurves.easeOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
