import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] flex-wrap">
        <li>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">
            Ana Sayfa
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <span className="text-[var(--text-muted)] opacity-60">/</span>
              {isLast || !item.href ? (
                <span className="font-semibold text-[var(--text-primary)]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[var(--primary)] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
