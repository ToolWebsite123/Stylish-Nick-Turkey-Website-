import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const variantStyles = {
    default:
      'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    success:
      'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60',
    warning:
      'bg-amber-950/60 text-amber-300 border border-amber-800/60',
    info:
      'bg-indigo-950/60 text-indigo-300 border border-indigo-800/60',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
