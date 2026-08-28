import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';

export const metadata: Metadata = {
  title: 'Şekilli Nick ve Şekilli Yazı Oluşturucu (30+ Font & 200+ Sembol)',
  description: 'PUBG, WhatsApp, Instagram ve Discord için şekilli yazı yazma ve şekilli nick oluşturucu. Gotik, el yazısı, küçük büyük harf ve oyuncu sembollerini anında kopyalayın.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      {/* Header */}
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center max-w-5xl mx-auto px-2">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight sm:whitespace-nowrap">
              Şekilli Nick ve Şekilli Yazı Oluşturucu
            </h1>
          </div>

          {/* Main Generator */}
          <Generator />
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
