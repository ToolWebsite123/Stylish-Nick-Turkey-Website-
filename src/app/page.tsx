import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import {
  PopularStylesSection,
  NickBuilderSection,
  SymbolSection,
  PlatformToolsSection,
  HowItWorksSection,
  FaqSection,
  RelatedToolsSection,
} from '@/components/home';

export const metadata: Metadata = {
  title: 'Şekilli Nick ve Şekilli Yazı Oluşturucu (30+ Font & 200+ Sembol)',
  description: 'PUBG, WhatsApp, Instagram ve Discord için şekilli yazı yazma ve şekilli nick oluşturucu. Gotik, el yazısı, küçük büyük harf ve oyuncu sembollerini anında kopyalayın.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      {/* 1. Header */}
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-10 max-w-5xl">
          {/* 2. Hero Section (Immediate Value Proposition) */}
          <div className="text-center space-y-3 max-w-3xl mx-auto px-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
              ⚡ %100 Ücretsiz & Anında Şekilli Metin Oluşturucu
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
              Şekilli Nick ve Şekilli Yazı Oluşturucu
            </h1>
            <p className="text-base md:text-lg text-[var(--text-secondary)]">
              Yazınızı veya nickinizi girin; Gotik, el yazısı, kalın, WhatsApp ve PUBG uyumlu 30+ şekilli font stilini ve 200+ sembolü anında kopyalayın.
            </p>
          </div>

          {/* 3. Main Generator (Above the Fold) */}
          <Generator />

          {/* 4. Popular Styles Section */}
          <PopularStylesSection />

          {/* 5. Şekilli Nick Section */}
          <NickBuilderSection />

          {/* 6. Şekilli Semboller Section */}
          <SymbolSection />

          {/* 7. Gaming / Platform Tools Section */}
          <PlatformToolsSection />

          {/* 8. How It Works Section */}
          <HowItWorksSection />

          {/* 9. Useful FAQ Section */}
          <FaqSection />

          {/* 10. Related Tools Links */}
          <RelatedToolsSection />
        </Container>
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
