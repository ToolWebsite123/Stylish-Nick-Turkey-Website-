'use client';

import React, { useMemo } from 'react';
import { EmojiItem } from '@/types/emoji';
import { EmojiCard } from './EmojiCard';
import { getGroupedEmoji } from '@/lib/emoji';

interface EmojiGridProps {
  emojis: EmojiItem[];
  onCopy: (emoji: EmojiItem) => void;
  onResetFilters?: () => void;
}

export function EmojiGrid({ emojis, onCopy, onResetFilters }: EmojiGridProps) {
  // Group emojis into subcategory sections with Turkish headings
  const groupedSections = useMemo(() => {
    return getGroupedEmoji(emojis);
  }, [emojis]);

  // Empty Search / Filter State
  if (emojis.length === 0) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl font-bold">
          🔍
        </div>
        <div className="space-y-1 max-w-sm mx-auto">
          <h4 className="text-base font-bold text-[var(--text-primary)]">
            Aramanıza Uygun Emoji Bulunamadı
          </h4>
          <p className="text-xs text-[var(--text-muted)]">
            Farklı bir arama kelimesi veya kategori seçerek emoji veritabanında arama yapabilirsiniz.
          </p>
        </div>

        {onResetFilters && (
          <div className="pt-1">
            <button
              type="button"
              onClick={onResetFilters}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Tüm Emojileri Göster
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {groupedSections.map((group) => (
        <section key={group.id} className="space-y-4">
          {/* Prominent Turkish Subcategory Heading Banner */}
          <div className="py-3 px-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-bold text-lg shrink-0">
                {group.icon || '✨'}
              </div>
              <h2 className="text-base md:text-lg font-black tracking-tight text-[var(--text-primary)]">
                {group.nameTr}
              </h2>
            </div>
            <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 whitespace-nowrap">
              {group.emojis.length} emoji
            </span>
          </div>

          {/* Grid of Emojis for this Group */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {group.emojis.map((emoji) => (
              <EmojiCard key={emoji.id} emoji={emoji} onCopy={onCopy} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
