'use client';

import React from 'react';
import { readFromClipboard } from '@/lib/clipboard';

interface GeneratorInputProps {
  value: string;
  onChange: (newValue: string) => void;
  onClear: () => void;
  maxLength?: number;
}

export function GeneratorInput({
  value,
  onChange,
  onClear,
  maxLength = 10000,
}: GeneratorInputProps) {
  const handlePaste = async () => {
    const text = await readFromClipboard();
    if (text) {
      onChange(text.slice(0, maxLength));
    }
  };

  const SAMPLE_TEXTS = ['Merhaba Dünya', 'Kral Oyuncu ⚔️', 'şekilli nick', 'ÇĞİÖŞÜ'];

  return (
    <div className="w-full space-y-3 max-w-4xl mx-auto">
      {/* Pill Search Bar Container with Box Shadow & Border */}
      <div className="w-full bg-white dark:bg-[var(--bg-card)] rounded-full px-4 md:px-6 py-3.5 flex items-center gap-3 border border-[var(--border-subtle)] focus-within:border-[var(--primary)] shadow-lg shadow-slate-200/60 dark:shadow-black/30 focus-within:shadow-xl focus-within:shadow-[var(--primary)]/15 transition-all duration-200">
        {/* Pencil Icon as shown in screenshot */}
        <div className="flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400">
          <span className="text-xl md:text-2xl leading-none select-none">✏️</span>
        </div>

        {/* Single-line text input */}
        <input
          id="generator-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          placeholder="Nickinizi buraya yazınız."
          className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base md:text-lg font-medium outline-none focus:outline-none focus-visible:outline-none focus:ring-0 [outline:none]"
        />

        {/* Action buttons (Paste & Clear) + Counter */}
        <div className="flex items-center gap-2 shrink-0">
          {value ? (
            <button
              type="button"
              onClick={onClear}
              title="Metni Temizle"
              className="p-1.5 md:px-3 md:py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-all flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="hidden md:inline">Temizle</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePaste}
              title="Panodan Yapıştır"
              className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary)]/10 transition-all flex items-center gap-1 border border-[var(--border-subtle)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Yapıştır</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Sample Suggestions (Only shown when search bar is empty) */}
      {!value && (
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-[var(--text-muted)] pt-1">
          <span className="font-medium">Hızlı Örnekler:</span>
          {SAMPLE_TEXTS.map((sample) => (
            <button
              key={sample}
              type="button"
              onClick={() => onChange(sample)}
              className="px-3 py-1 rounded-full bg-[var(--bg-card)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-150 active:scale-95 shadow-xs font-medium"
            >
              {sample}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
