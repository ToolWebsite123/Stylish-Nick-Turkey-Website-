import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { NickBuilder } from '@/components/nick-builder';
import { PlatformTester } from '@/components/ui/PlatformTester';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PUBG Şekilli Nick — PUBG Mobile Uyumlu Nick Yazma',
  description: 'PUBG Mobile 14 karakter sınırına uygun kanatlı, kılıçlı ve kral tacı (亗) simgeli PUBG nickleri oluşturun. Soru işareti (?) sorunu yaşamayan uyumlu nickler.',
};

export default function PubgNickleriPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-4xl">
          <Breadcrumb items={[{ label: 'PUBG Nickleri' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 inline-block">
              🎮 PUBG Mobile Uyumlu Nick Jeneratörü
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              PUBG Şekilli Nick Yazma
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              PUBG Mobile oyun içi isim kartında soru işareti (`?`) kutucuğu oluşturmayan, 14 karakter sınırına tam uyumlu kanatlı, kılıçlı ve gotik PUBG nickleri tasarlayın.
            </p>
          </div>

          {/* Interactive Core Nick Builder Component */}
          <NickBuilder />

          {/* Platform Diagnostic Tester */}
          <PlatformTester />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                PUBG Mobile Şekilli Nick Kuralları & İpuçları
              </h2>
              <p>
                PUBG Mobile oyuncuları için nick seçerken dikkat edilmesi gereken en kritik 3 kural:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>14 Karakter Sınırı:</strong> PUBG Mobile isim değiştirme kartı maksimum 14 karakter uzunluğuna izin verir. Süslemelerinizi seçerken bu sınırı göz önünde bulundurun.</li>
                <li><strong>Kutu (?) Sorunu Yaşamayın:</strong> Siyah daire veya kare içine alınmış kapalı semboller PUBG Mobile tarafından desteklenmez ve soru işareti olarak görünür. Sistemimizdeki &quot;PUBG Uyumlu&quot; etiketli harfleri kullanmanız önerilir.</li>
                <li><strong>En Çok Tercih Edilen PUBG Simgeleri:</strong> Kral işareti (`亗`), Melek Tüyü (`𓆩 𓆪`), Kanatlar (`꧁༺ ༻꧂`) ve Kılıçlar (`⚔️`).</li>
              </ul>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-nick" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 Şekilli Nick Tasarlayıcı
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ Oyuncu Sembolleri
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
