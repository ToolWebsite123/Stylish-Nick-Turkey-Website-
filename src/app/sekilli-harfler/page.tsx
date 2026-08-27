import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { LetterAlphabetTable } from '@/components/seo/LetterAlphabetTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Şekilli Harfler — A\'dan Z\'ye Şekilli Alfabe & Harf Listesi',
  description: 'A\'dan Z\'ye tüm büyük ve küçük harflerin gotik, el yazısı ve kalın şekilli harf stilleri. Türkçe ç, ğ, ı, ö, ş, ü harfleri dahil kopyalanabilir alfabe listesi.',
};

export default function SekilliHarflerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-5xl">
          <Breadcrumb items={[{ label: 'Şekilli Harfler' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 inline-block">
              🔤 Şekilli Harfler & Alfabe Listesi
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Şekilli Harfler & Kopyalanabilir Alfabe
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              A&apos;dan Z&apos;ye tüm harflerin Gotik, Small Caps, El Yazısı, Kalın ve Monospace alfabe karşılıkları. Dilediğiniz harfin üzerine tıklayarak tek tıkla kopyalayın.
            </p>
          </div>

          {/* Interactive Alphabet Table Component */}
          <LetterAlphabetTable />

          {/* Generator Section */}
          <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
              Tüm Cümleyi Şekilli Harflere Dönüştürün
            </h2>
            <Generator />
          </div>

          {/* Explanatory Article */}
          <article className="prose dark:prose-invert max-w-none space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Şekilli Harfler Nasıl Kopyalanır?
              </h2>
              <p>
                Yukarıdaki alfabe tablosundan ihtiyacınız olan Gotik, Small Caps veya El Yazısı harfin üzerine tıklayarak harfi anında panonuza kopyalayabilirsiniz.
              </p>
              <p>
                Türkçe alfabe harflerimiz (ç, ğ, ı, ö, ş, ü) özel olarak desteklenmekte olup, platform uyumluluğuna göre korumalı veya ASCII sadeleştirilmiş biçimde kullanılabilir.
              </p>
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✍️ Şekilli Yazı Yazma
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ Şekilli Semboller
              </Link>
              <Link href="/sekilli-nick" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 Şekilli Nick Oluşturucu
              </Link>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
