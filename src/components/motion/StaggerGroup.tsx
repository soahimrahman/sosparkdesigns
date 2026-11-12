'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerDelays } from '@/lib/motion-tokens';

export interface StaggerGroupProps {
  children: React.ReactNode;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
}

export function StaggerGroup({
  children,
  staggerDelay = staggerDelays.standard,
  threshold = 0.1,
  className = '',
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default StaggerGroup;
