'use client';

import React from 'react';

interface GeneratorOptionsProps {
  simplifyTurkish: boolean;
  onToggleSimplifyTurkish: (simplify: boolean) => void;
}

export function GeneratorOptions({
  simplifyTurkish,
  onToggleSimplifyTurkish,
}: GeneratorOptionsProps) {
  return (
    <div className="w-full">
      {/* Turkish Character Mode Switch */}
      <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[var(--text-primary)]">
              Türkçe Karakter Modu
            </span>
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
              {simplifyTurkish ? 'Sadeleştirme Açık' : 'Orijinal Koruma'}
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            {simplifyTurkish
              ? 'Türkçe harfler varsayılan ASCII karşılıklarına dönüştürülür (Örn: ç→c, ğ→g, ş→s).'
              : 'Türkçe ç, ğ, ı, ö, ş, ü harfleri orijinal okunabilir haliyle korunur.'}
          </p>
        </div>

        {/* Toggle Switch Button */}
        <div className="flex items-center gap-2 bg-[var(--bg-card)] p-1 rounded-xl border border-[var(--border-subtle)] self-stretch md:self-auto justify-center">
          <button
            type="button"
            onClick={() => onToggleSimplifyTurkish(false)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              !simplifyTurkish
                ? 'bg-[var(--primary)] text-white shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Harfleri Koru
          </button>
          <button
            type="button"
            onClick={() => onToggleSimplifyTurkish(true)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              simplifyTurkish
                ? 'bg-[var(--primary)] text-white shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            ASCII Sadeleştir (ç→c)
          </button>
        </div>
      </div>
    </div>
  );
}
