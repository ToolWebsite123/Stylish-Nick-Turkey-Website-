import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instagram Şekilli Yazı — Bio & İsim Font Oluşturucu',
  description: 'Instagram Biyografi (Bio), kullanıcı adı ve gönderi açıklamalarınız için estetik şekilli fontlar. El yazısı, Small Caps ve italik yazıları anında oluşturun.',
};

export default function InstagramSekilliYaziPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-5xl">
          <Breadcrumb items={[{ label: 'Instagram Şekilli Yazı' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 inline-block">
              📸 Instagram Bio & Profil Font Değiştirici
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Instagram Şekilli Yazı Oluşturucu
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Instagram biyografiniz (Bio), profil isminiz ve gönderi açıklamalarınız için zarif el yazısı, Small Caps ve estetik Unicode fontları oluşturun.
            </p>
          </div>

          {/* Interactive Core Generator */}
          <Generator />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Instagram Biyografisine (Bio) Şekilli Yazı Nasıl Eklenir?
              </h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Yukarıdaki kutucuğa Instagram profilinizde görünmesini istediğiniz biyografi yazınızı girin.</li>
                <li>Beğendiğiniz estetik stilin yanındaki <strong>&quot;Kopyala&quot;</strong> butonuna tıklayın.</li>
                <li>Instagram uygulamasını açıp <strong>Profili Düzenle &gt; Biyografi (Bio)</strong> alanına yapıştırın.</li>
              </ol>
              <p className="pt-2">
                Instagram Bio alanında 150 karakter sınırı bulunur. Zarif el yazısı (`𝒮𝑒𝓀𝒾𝓁𝓁𝒾`) ve Small Caps (`sᴇᴋɪʟʟɪ`) stilleri biyografinizin profil ziyaretçileri tarafından fark edilmesini sağlar.
              </p>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✍️ Genel Şekilli Yazı Oluşturucu
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ Estetik Biyografi Sembolleri
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
