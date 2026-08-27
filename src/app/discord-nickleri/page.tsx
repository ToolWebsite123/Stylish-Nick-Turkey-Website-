import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Generator } from '@/components/generator';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Discord Şekilli Nick — Sunucu İsimleri & Font Oluşturucu',
  description: 'Discord kullanıcı adı, sunucu nickleri ve rol isimleri için gotik, monospace ve şekilli font oluşturucu. Kopyalayın ve sunucunuzda öne çıkın.',
};

export default function DiscordNickleriPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-base)]">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <Container className="space-y-8 max-w-5xl">
          <Breadcrumb items={[{ label: 'Discord Nickleri' }]} />

          {/* H1 Title & Intro */}
          <div className="space-y-3 max-w-3xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 inline-block">
              💬 Discord Sunucu & Profil Nick Yazıcı
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Discord Şekilli Nick Oluşturucu
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Discord sunucu takma adlarınız (Server Nicknames), görünen isminiz (Display Name) ve rol isimleriniz için gotik, monospace ve daktilo fontları oluşturun.
            </p>
          </div>

          {/* Interactive Core Generator */}
          <Generator />

          {/* Detailed Content & Guide */}
          <article className="prose dark:prose-invert max-w-none pt-6 border-t border-[var(--border-subtle)] space-y-6 text-sm text-[var(--text-secondary)]">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                Discord&apos;da Şekilli İsim ve Rol Nasıl Yapılır?
              </h2>
              <p>
                Discord masaüstü ve mobil istemcileri Unicode alfabe bloklarını eksiksiz şekilde destekler. Sunucu yöneticileri kanal başlıklarını ve rol isimlerini özelleştirmek için sıklıkla daktilo (`𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎`) ve Gotik (`𝕲𝖔𝖙𝖍𝖎𝖈`) fontları tercih eder.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Sunucu Takma Adı (Server Nickname):</strong> Her sunucu için ayrı bir şekilli nick belirleyebilirsiniz.</li>
                <li><strong>Kanal & Rol İsimleri:</strong> Sunucu kanallarını estetik semboller ve monospace fontlarla düzenleyebilirsiniz.</li>
              </ul>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-bold text-[var(--text-primary)]">İlgili Sayfalar:</span>
              <Link href="/sekilli-nick" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                🎮 Şekilli Nick Tasarlayıcı
              </Link>
              <Link href="/sekilli-semboller" className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold hover:border-[var(--primary)] text-[var(--text-primary)] transition-all">
                ✨ Discord Sunucu Sembolleri
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
