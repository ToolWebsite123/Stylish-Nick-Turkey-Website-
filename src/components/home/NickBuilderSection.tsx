import React from 'react';
import Link from 'next/link';

export function NickBuilderSection() {
  return (
    <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
            🎮 Oyuncu Nick Tasarlayıcı
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">
            Özel Şekilli Nick Oluşturucu
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            PUBG Mobile, Valorant ve CS:GO için sol ve sağ kanat süsleri (`꧁༺ ༻꧂`), kılıçlar, taçlar ve özel prefix/suffix etiketleriyle kendi nickinizi modüler olarak tasarlayın.
          </p>
        </div>

        <Link
          href="/sekilli-nick"
          className="px-6 py-3.5 rounded-2xl bg-[var(--primary)] text-white text-sm font-bold shadow-md hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 self-stretch md:self-auto justify-center"
        >
          <span>Şekilli Nick Oluşturucuya Git</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-lg">꧁༺ ༻꧂</span>
          <h4 className="text-xs font-bold text-[var(--text-primary)]">Kanat Süsleri</h4>
          <p className="text-[11px] text-[var(--text-muted)]">Klasik melek ve gotik kavisli kanat çerçeveleri.</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-lg">⚔️ 👑 亗</span>
          <h4 className="text-xs font-bold text-[var(--text-primary)]">PUBG & Oyun İkonları</h4>
          <p className="text-[11px] text-[var(--text-muted)]">PUBG kral tacı ve kılıç simgeleri.</p>
        </div>
        <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-lg">🎲</span>
          <h4 className="text-xs font-bold text-[var(--text-primary)]">Rastgele Nick Mix</h4>
          <p className="text-[11px] text-[var(--text-muted)]">Tek tıkla yaratıcı yeni nick kombinasyonu oluşturun.</p>
        </div>
      </div>
    </section>
  );
}
