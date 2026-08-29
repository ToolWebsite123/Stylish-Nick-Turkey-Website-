'use client';

import React, { useState } from 'react';
import { EmojiItem } from '@/types/emoji';
import { copyToClipboard } from '@/lib/clipboard';

interface EmojiCardProps {
  emoji: EmojiItem;
  onCopy: (emoji: EmojiItem) => void;
}

export function EmojiCard({ emoji, onCopy }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(emoji.character);
    if (success) {
      setCopied(true);
      onCopy(emoji);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCopy();
    }
  };

  const displayName = emoji.nameTr || emoji.name;

  return (
    <button
      type="button"
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`${displayName} emojisini kopyala`}
      className={`group relative p-3.5 rounded-2xl bg-[var(--bg-card)] border transition-all duration-200 flex flex-col items-center justify-between min-h-[96px] text-center select-none active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
        copied
          ? 'border-emerald-500 bg-emerald-500/10 shadow-md ring-2 ring-emerald-500/30'
          : 'border-[var(--border-subtle)] hover:border-[var(--primary)]/50 hover:bg-[var(--bg-elevated)] hover:shadow-md'
      }`}
    >
      {/* Copied Feedback Floating Badge */}
      {copied && (
        <span className="absolute -top-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-xs animate-in fade-in zoom-in-75 duration-150">
          ✓ Kopyalandı
        </span>
      )}

      {/* Emoji Character */}
      <div className="flex-1 flex items-center justify-center py-1">
        <span className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] group-hover:scale-110 transition-transform duration-200 leading-none">
          {emoji.character}
        </span>
      </div>

      {/* Emoji Name Label */}
      <span className="text-[11px] font-medium text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] line-clamp-1 w-full transition-colors">
        {displayName}
      </span>
    </button>
  );
}
