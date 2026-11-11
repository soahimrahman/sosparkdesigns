import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'slate' | 'dark' | 'outline';
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'brand',
  dot = false,
  className = '',
  ...props
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors';

  const variants = {
    brand: 'bg-blue-50 text-blue-700 border border-blue-200/80',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-slate-900 text-white border border-slate-800',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'brand'
              ? 'bg-blue-600'
              : variant === 'dark'
              ? 'bg-blue-400'
              : 'bg-slate-400'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
