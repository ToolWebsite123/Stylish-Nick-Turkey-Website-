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
  onQuickSample: (sampleText: string) => void;
  onResetFilters?: () => void;
}

export function StyleCardList({
  results,
  inputText,
  selectedPlatformId,
  onCopySuccess,
  onQuickSample,
  onResetFilters,
}: StyleCardListProps) {
  // Empty Input State: When user hasn't typed anything
  if (!inputText.trim()) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-elevated)] border-2 border-dashed border-[var(--border-subtle)] text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-2xl font-bold">
          ✍️
        </div>
        <div className="space-y-1 max-w-md mx-auto">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">
            Şekilli Yazı Oluşturmaya Başlayın
          </h3>
          <p className="text-sm text-[var(--text-muted)]">
            Yukarıdaki kutuya metninizi veya oyun nickinizi yazın. Gotik, el yazısı, kalın ve oyuncu stilleri anında oluşturulacaktır.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => onQuickSample('Merhaba Dünya')}
            className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)] text-xs font-semibold text-[var(--text-secondary)] transition-all active:scale-95"
          >
            &quot;Merhaba Dünya&quot; dene
          </button>
          <button
            type="button"
            onClick={() => onQuickSample('Kral Oyuncu ⚔️')}
            className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)] text-xs font-semibold text-[var(--text-secondary)] transition-all active:scale-95"
          >
            &quot;Kral Oyuncu ⚔️&quot; dene
          </button>
        </div>
      </div>
    );
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

  return (
    <div className="space-y-4">
      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((res) => (
          <StyleCard
            key={res.styleId}
            result={res}
            selectedPlatformId={selectedPlatformId}
            onCopySuccess={onCopySuccess}
          />
        ))}
      </div>
    </div>
  );
}
