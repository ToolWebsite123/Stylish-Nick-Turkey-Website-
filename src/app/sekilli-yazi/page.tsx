import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Şekilli Yazı Yazma — 30+ Farklı Font Stili (1-Tık Kopyala)',
  description: 'Mesajlarınızı ve paylaşımlarınızı şekillendirmek için 30+ farklı Unicode yazı tipi stili. Gotik, el yazısı ve kalın fontları oluşturun ve hemen kopyalayın.',
};

export default function SekilliYaziPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-5xl">
          <Breadcrumb items={[{ label: 'Şekilli Yazı' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
              ✍️ Online Şekilli Yazı Yazma Aracı
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Şekilli Yazı Yazma & Font Değiştirici
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Yazınızı metin kutusuna girerekGotik, el yazısı, küçük büyük harf (Small Caps), çift çizgili ve kalın font stillerine anında dönüştürün. Tek tıkla kopyalayın.
            </p>
          </div>

          {/* Interactive Core Generator */}
          <Generator />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Şekilli Yazı Nasıl Yazılır?
              </h2>
              <p>
                Şekilli yazı yazmak için üçüncü taraf bir uygulama indırmenize gerek yoktur. Yukarıdaki kutucuğa metninizi yazmanız yeterlidir. İstemci tarafında çalışan güçlü dönüştürücümüz yazınızı 30&apos;dan fazla farklı stil formuna sokar.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kalın Sans & Serif:</strong> Paylaşımlarınızda dikkat çekici başlıklar için.</li>
                <li><strong>El Yazısı (Script):</strong> Estetik ve zarif biyografi yazıları için.</li>
                <li><strong>Gotik (Fraktur):</strong> Ağır ve tarz mesaj tasarımları için.</li>
                <li><strong>Küçük Büyük Harf (Small Caps):</strong> Minimal ve temiz isim yazımı için.</li>
              </ul>
            </div>

            {/* Related Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Araçlar:</span>
              <Link href="/sekilli-nick" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 Şekilli Nick Oluşturucu
              </Link>
              <Link href="/sekilli-harfler" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🔤 Şekilli Harfler Alfabe Listesi
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ 200+ Şekilli Sembol Kütüphanesi
              </Link>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
