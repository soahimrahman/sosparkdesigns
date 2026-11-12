'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeCurves } from '@/lib/motion-tokens';

export interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
}

export function AnimatedHeadline({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'text-blue-600',
}: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeCurves.easeOut,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <motion.span
            key={idx}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default AnimatedHeadline;
