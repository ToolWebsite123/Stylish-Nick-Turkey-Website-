import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { SymbolExplorer } from '@/components/symbols';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Şekilli Semboller — 200+ Oyuncu, Kalp & Yıldız Simgeleri',
  description: 'PUBG, Valorant, Instagram ve Discord için 200+ şekilli sembol kütüphanesi. Kalpler, taçlar, kılıçlar ve şekilli ok işaretlerini 1 tıkla kopyalayın.',
};

export default function SekilliSembollerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-6xl">
          <Breadcrumb items={[{ label: 'Şekilli Semboller' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
              ✨ 200+ Kürate Edilmiş Şekilli Sembol Veritabanı
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Şekilli Semboller & Oyun Simgeleri Kopyala
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              PUBG, Instagram, Discord ve WhatsApp için seçilmiş şekilli sembolleri kategorilere göre arayın ve tek tıkla kopyalayın.
            </p>
          </div>

          {/* Interactive Symbol Explorer Component */}
          <SymbolExplorer />

          {/* Detailed Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Şekilli Semboller Nerede Kullanılır?
              </h2>
              <p>
                Şekilli semboller ve özel karakterler, oyuncu isimlerine (PUBG, Valorant nickleri) ve sosyal medya profillerine (Instagram Bio, TikTok açıklamaları) dikkat çekici bir estetik katmak için kullanılır.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kalpler (♥ ♡):</strong> Estetik biyografi ve mesaj süslemeleri için.</li>
                <li><strong>Yıldızlar (★ 彡):</strong> Oyuncu nicklerinde seviye ve unvan belirtmek için.</li>
                <li><strong>Taçlar & Kılıçlar (👑 ⚔️ 亗):</strong> Clan ve oyuncu unvanları için.</li>
                <li><strong>Sevimli Kaomojiler (ʕ•ᴥ•ʔ):</strong> Mesajlarınıza tatlı bir mizah katmak için.</li>
              </ul>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-nick" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 Oyuncu Nick Tasarlayıcı
              </Link>
              <Link href="/pubg-nickleri" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ⚔️ PUBG Nickleri
              </Link>
              <Link href="/sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✍️ Şekilli Yazı Yazma
              </Link>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
