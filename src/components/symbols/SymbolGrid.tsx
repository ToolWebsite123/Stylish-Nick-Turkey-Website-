'use client';

import React from 'react';
import { SymbolItem } from '@/types/symbol';
import { SymbolCard } from './SymbolCard';

interface SymbolGridProps {
  symbols: SymbolItem[];
  onCopy: (symbol: SymbolItem) => void;
  onResetFilters?: () => void;
}

export function SymbolGrid({ symbols, onCopy, onResetFilters }: SymbolGridProps) {
  // Empty Search / Filter State
  if (symbols.length === 0) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl font-bold">
          🔍
        </div>
        <div className="space-y-1 max-w-sm mx-auto">
          <h4 className="text-base font-bold text-[var(--text-primary)]">
            Aramanıza Uygun Sembol Bulunamadı
          </h4>
          <p className="text-xs text-[var(--text-muted)]">
            Farklı bir arama kelimesi veya kategori seçerek sembol veritabanında arama yapabilirsiniz.
          </p>
        </div>

        {onResetFilters && (
          <div className="pt-1">
            <button
              type="button"
              onClick={onResetFilters}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              Tüm Sembolleri Göster
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {symbols.map((symbol) => (
        <SymbolCard key={symbol.id} symbol={symbol} onCopy={onCopy} />
      ))}
    </div>
  );
}
