import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WhatsApp Şekilli Yazı — Mesaj & Durum Font Oluşturucu',
  description: 'WhatsApp sohbet mesajları ve Hakkımda durum yazıları için kalın, italik, üstü çizili ve şekilli fontlar. Mesajlarınızı şekillendirip hemen gönderin.',
};

export default function WhatsappSekilliYaziPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-5xl">
          <Breadcrumb items={[{ label: 'WhatsApp Şekilli Yazı' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-block">
              🟢 WhatsApp Sohbet & Durum Font Yazıcı
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              WhatsApp Şekilli Yazı Oluşturucu
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              WhatsApp sohbet mesajlarınız, grup isimleriniz ve &quot;Hakkımda&quot; profil durumunuz için dikkat çekici şekilli fontlar oluşturun ve 1 tıkla yapıştırıp gönderin.
            </p>
          </div>

          {/* Interactive Core Generator */}
          <Generator />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                WhatsApp&apos;ta Şekilli Mesaj Nasıl Gönderilir?
              </h2>
              <p>
                WhatsApp dahili olarak yıldız (`*kalın*`) veya alt çizgi (`_italik_`) biçimlendirmelerini desteklese de, gotik (`𝕲𝖔𝖙𝖍𝖎𝖈`) ve küçük büyük harf (`sᴇᴋɪʟʟɪ`) gibi gelişmiş font stilleri için Unicode dönüştürücümüz kullanılır.
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Dönüştürmek istediğiniz WhatsApp mesajınızı kutucuğa yazın.</li>
                <li>İstediğiniz şekilli yazı stilinin yanındaki <strong>&quot;Kopyala&quot;</strong> butonuna basın.</li>
                <li>WhatsApp sohbet penceresine basılı tutarak <strong>Yapıştır</strong> seçeneğine tıklayın.</li>
              </ol>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✍️ Şekilli Yazı Yazma
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ WhatsApp Durum Sembolleri
              </Link>
              <Link href="/instagram-sekilli-yazi" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                📸 Instagram Şekilli Yazı
              </Link>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
