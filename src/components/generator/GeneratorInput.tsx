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
  maxLength = 100,
}: GeneratorInputProps) {
  const handlePaste = async () => {
    const text = await readFromClipboard();
    if (text) {
      onChange(text.slice(0, maxLength));
    }
  };

  const SAMPLE_TEXTS = ['Merhaba Dünya', 'Kral Oyuncu ⚔️', 'şekilli nick', 'ÇĞİÖŞÜ'];

  return (
    <div className="w-full space-y-3">
      {/* Input Label & Quick Actions */}
      <div className="flex items-center justify-between">
        <label htmlFor="generator-input" className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <span>Metniniz</span>
          <span className="text-xs text-[var(--text-muted)] font-normal">
            (Anında Şekilli Fontlara Dönüşür)
          </span>
        </label>

        {/* Character Counter */}
        <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] px-2.5 py-1 rounded-full border border-[var(--border-subtle)]">
          {value.length} / {maxLength}
        </span>
      </div>

      {/* Main Text Input Area */}
      <div className="relative group">
        <textarea
          id="generator-input"
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          placeholder="Şekillendirmek istediğiniz metni veya nicki yazın... (Örn: Merhaba Dünya)"
          rows={3}
          maxLength={maxLength}
          className="w-full p-4 rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base md:text-lg focus:outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all duration-200 resize-none shadow-sm font-sans"
        />

        {/* Floating Action Buttons inside Textarea */}
        <div className="absolute right-3 bottom-3 flex items-center gap-1.5 bg-[var(--bg-card)]/90 backdrop-blur p-1 rounded-xl border border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={handlePaste}
            title="Panodan Yapıştır"
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Yapıştır</span>
          </button>

          {value && (
            <button
              type="button"
              onClick={onClear}
              title="Metni Temizle"
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-rose-500 hover:bg-rose-500/10 transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Temizle</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Sample Suggestions */}
      <div className="flex items-center gap-2 flex-wrap text-xs text-[var(--text-muted)] pt-1">
        <span className="font-medium">Hızlı Örnekler:</span>
        {SAMPLE_TEXTS.map((sample) => (
          <button
            key={sample}
            type="button"
            onClick={() => onChange(sample)}
            className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-150 active:scale-95"
          >
            {sample}
          </button>
        ))}
      </div>
    </div>
  );
}
