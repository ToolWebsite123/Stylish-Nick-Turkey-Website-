import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { EmojiExplorer } from '@/components/emoji';

export const metadata: Metadata = {
  title: 'Tüm Emoji Kütüphanesi & Kopyalama (9 Kategori & Türkçe Arama)',
  description: 'PUBG, Instagram, Discord ve WhatsApp için tüm emojiler. Gülücükler, kalpler, hayvanlar, bayraklar ve sembol emojilerini tek tıkla kopyalayın.',
};

export default function EmojilerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      {/* Header */}
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-6 max-w-5xl">
          {/* Hero Heading */}
          <div className="text-center max-w-3xl mx-auto px-2 space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Tüm Emoji Kategorileri
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Sosyal medya ve oyun nicki tasarımlarınız için 9 farklı kategoriye ayrılmış emojileri anında arayın ve kopyalayın.
            </p>
          </div>

          {/* Main Emoji Explorer Component */}
          <EmojiExplorer />
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
