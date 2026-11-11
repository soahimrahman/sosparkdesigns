import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  id,
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/80 mb-3.5 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
