'use client';

import React from 'react';

interface EmojiSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
  isFiltered: boolean;
  onResetFilters: () => void;
}

export function EmojiSearch({
  searchQuery,
  onSearchChange,
  resultCount,
  isFiltered,
  onResetFilters,
}: EmojiSearchProps) {
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Emoji adı veya kelime ara... (Örn: Gülme, Kalp, Ateş, Araba, Türkiye)"
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              title="Aramayı Temizle"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Counter & Clear Filter */}
        <div className="flex items-center justify-between sm:justify-end gap-3 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] whitespace-nowrap">
            {resultCount} Emoji
          </span>

          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs font-medium text-rose-500 hover:text-rose-600 hover:underline flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Filtreleri Temizle</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
