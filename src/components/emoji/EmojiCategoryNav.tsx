'use client';

import React from 'react';
import { EmojiCategory } from '@/types/emoji';
import { EMOJI_CATEGORIES } from '@/data/emoji/categories';

export type ExtendedEmojiCategory = EmojiCategory | 'all';

interface EmojiCategoryNavProps {
  activeCategory: ExtendedEmojiCategory;
  onSelectCategory: (category: ExtendedEmojiCategory) => void;
}

export function EmojiCategoryNav({
  activeCategory,
  onSelectCategory,
}: EmojiCategoryNavProps) {
  const ALL_TABS: { id: ExtendedEmojiCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'Tüm Emojiler', icon: '✨' },
    ...EMOJI_CATEGORIES.map((cat) => ({
      id: cat.id as ExtendedEmojiCategory,
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
              className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-150 border flex items-center gap-1.5 active:scale-95 cursor-pointer ${
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
