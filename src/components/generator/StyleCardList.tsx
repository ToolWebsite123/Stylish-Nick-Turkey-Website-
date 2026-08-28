'use client';

import React from 'react';
import { TransformResult } from '@/types/unicode';
import { PlatformId } from '@/types/platform';
import { StyleCard } from './StyleCard';

interface StyleCardListProps {
  results: TransformResult[];
  inputText: string;
  selectedPlatformId?: PlatformId;
  onCopySuccess: (styleName: string) => void;
  onQuickSample?: (sampleText: string) => void;
  onResetFilters?: () => void;
}

export function StyleCardList({
  results,
  inputText,
  selectedPlatformId,
  onCopySuccess,
  onResetFilters,
}: StyleCardListProps) {
  const INITIAL_COUNT = 30;
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_COUNT);
  const [prevInputText, setPrevInputText] = React.useState(inputText);

  // Reset visible count back to 30 when search input text changes
  if (prevInputText !== inputText) {
    setPrevInputText(inputText);
    setVisibleCount(INITIAL_COUNT);
  }

  // No Filter Results State
  if (results.length === 0) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl font-bold">
          🔍
        </div>
        <div className="space-y-1 max-w-sm mx-auto">
          <h4 className="text-base font-bold text-[var(--text-primary)]">
            Aramanıza Uygun Şekilli Stil Bulunamadı
          </h4>
          <p className="text-xs text-[var(--text-muted)]">
            Arama sorgunuzu veya seçili filtreleri değiştirerek farklı stilleri keşfedebilirsiniz.
          </p>
        </div>

        {onResetFilters && (
          <div className="pt-1">
            <button
              type="button"
              onClick={onResetFilters}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              Tüm Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    );
  }

  const visibleResults = results.slice(0, visibleCount);
  const hasMore = results.length > visibleCount;

  return (
    <div className="space-y-4">
      {/* Single Column Results (1 Box Per Line) */}
      <div className="grid grid-cols-1 gap-4">
        {visibleResults.map((res) => (
          <StyleCard
            key={res.styleId}
            result={res}
            selectedPlatformId={selectedPlatformId}
            onCopySuccess={onCopySuccess}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-4 flex flex-col items-center justify-center space-y-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 15)}
            className="px-8 py-3.5 rounded-2xl bg-[var(--primary)] text-white text-sm font-bold hover:opacity-95 transition-all shadow-lg shadow-[var(--primary)]/25 active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            <span>Daha Fazla Göster</span>
          </button>
          <span className="text-xs text-[var(--text-muted)]">
            Kalan {results.length - visibleResults.length} stil daha var
          </span>
        </div>
      )}
    </div>
  );
}
