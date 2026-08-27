'use client';

import React from 'react';
import { SymbolCategory } from '@/types/symbol';
import { SYMBOL_CATEGORIES } from '@/data/symbols/categories';

export type ExtendedSymbolCategory = SymbolCategory | 'all' | 'popular';

interface SymbolCategoryNavProps {
  activeCategory: ExtendedSymbolCategory;
  onSelectCategory: (category: ExtendedSymbolCategory) => void;
}

export function SymbolCategoryNav({
  activeCategory,
  onSelectCategory,
}: SymbolCategoryNavProps) {
  const ALL_TABS: { id: ExtendedSymbolCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'Tüm Semboller', icon: '✨' },
    { id: 'popular', label: 'Popüler', icon: '🔥' },
    ...SYMBOL_CATEGORIES.map((cat) => ({
      id: cat.id as ExtendedSymbolCategory,
      label: cat.name,
      icon: cat.icon,
    })),
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
        {ALL_TABS.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-150 border flex items-center gap-1.5 active:scale-95 ${
                isActive
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border-[var(--border-subtle)]'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
