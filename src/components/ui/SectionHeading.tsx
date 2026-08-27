import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  badgeText?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  badgeText,
  centered = false,
}) => {
  return (
    <div className={`space-y-2 ${centered ? 'text-center' : 'text-left'}`}>
      {badgeText && (
        <span className="inline-block px-3 py-1 rounded-full bg-[var(--bg-elevated)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider border border-[var(--border-subtle)]">
          {badgeText}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
