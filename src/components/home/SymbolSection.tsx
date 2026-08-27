import React from 'react';
import Link from 'next/link';

export function SymbolSection() {
  const SAMPLE_SYMBOLS = ['♥', '★', '👑', '⚔️', '🌸', '➔', '✦', '【 】', 'ʕ•ᴥ•ʔ', '⚡', '亗', '𓆩𓆪'];

  return (
    <section className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
            ✨ 200+ Sembol Veritabanı
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">
            Şekilli Semboller & İkon Kütüphanesi
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Kalpler, yıldızlar, taçlar, kılıçlar, oklar ve sevimli kaomojiler. Kategorilere göre filtreleyin ve tek tıkla kopyalayın.
          </p>
        </div>

        <Link
          href="/sekilli-semboller"
          className="px-6 py-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--primary)] text-[var(--text-primary)] text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 self-stretch md:self-auto justify-center"
        >
          <span>Tüm Sembolleri İncele</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Symbol Badges Preview */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 pt-2">
        {SAMPLE_SYMBOLS.map((sym, i) => (
          <div
            key={i}
            className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-xl font-normal text-[var(--text-primary)] hover:border-[var(--primary)] transition-all select-none"
          >
            {sym}
          </div>
        ))}
      </div>
    </section>
  );
}
