import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { NickBuilder } from '@/components/nick-builder';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Şekilli Nick Oluşturucu — PUBG, Valorant & Oyun Nick Hazırlayıcı',
  description: 'PUBG Mobile, Valorant, CS:GO ve oyunlar için özel şekilli nick tasarlayıcı. Kanatlı, kılıçlı, taçlı ve estetik oyuncu nicklerini anında oluşturun.',
};

export default function SekilliNickPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-4xl">
          <Breadcrumb items={[{ label: 'Şekilli Nick' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
              🎮 Oyuncu Şekilli Nick Tasarlayıcı
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Şekilli Nick Oluşturucu
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Nickinizi girin, sol ve sağ kanat süslerini seçin, font stilini belirleyin ve 1 tıkla kopyalayın.
            </p>
          </div>

          {/* Core Nick Builder Component */}
          <NickBuilder />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Oyunlar İçin Şekilli Nick Nasıl Hazırlanır?
              </h2>
              <p>
                PUBG Mobile, Valorant, League of Legends ve CS:GO gibi çevrimiçi oyunlarda akılda kalıcı bir oyuncu kimliği oluşturmak için kanat süsleri (`꧁༺ ༻꧂`), kılıçlar (`⚔️`) ve kral taçları (`👑`) sıklıkla tercih edilir.
              </p>
              <p>
                Oluşturduğunuz nickin oyun içindeki 14-30 karakter sınırını aşmamasına ve cihaz ekranlarında doğru görüntülenmesine dikkat etmeniz önerilir.
              </p>
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/pubg-nickleri" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 PUBG Şekilli Nickleri
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ Oyuncu Sembolleri Kütüphanesi
              </Link>
              <Link href="/sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✍️ Şekilli Yazı Oluşturucu
              </Link>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
