import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] mt-16 py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link href="/" className="font-extrabold text-lg text-[var(--text-primary)]">
              Şekilli<span className="text-[var(--primary)]">Nick</span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Türkiye için geliştirilmiş, hızlı, erişilebilir ve Türkçe uyumlu metin dönüştürme platformu.
            </p>
          </div>

          {/* Şekilli Nick Column */}
          <div className="space-y-3 text-xs">
            <h3 className="font-bold text-[var(--text-primary)] uppercase tracking-wider">Şekilli Nick</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Şekilli Nick Oluşturucu (Yakında)</span>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">PUBG Nickleri (Yakında)</span>
              </li>
            </ul>
          </div>

          {/* Araçlar Column */}
          <div className="space-y-3 text-xs">
            <h3 className="font-bold text-[var(--text-primary)] uppercase tracking-wider">Araçlar</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-[var(--text-muted)]">Şekilli Yazı Yazma (Yakında)</span>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Şekilli Harfler (Yakında)</span>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Şekilli Semboller (Yakında)</span>
              </li>
            </ul>
          </div>

          {/* Bilgi & Yasal Column */}
          <div className="space-y-3 text-xs">
            <h3 className="font-bold text-[var(--text-primary)] uppercase tracking-wider">Bilgi & Yasal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-[var(--text-muted)]">Hakkımızda</span>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Gizlilik Politikası</span>
              </li>
              <li>
                <span className="text-[var(--text-muted)]">Kullanım Koşulları</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-2">
          <p>© {new Date().getFullYear()} Şekilli Nick. Tüm hakları saklıdır.</p>
          <p>Dil: Türkiye (tr-TR)</p>
        </div>
      </Container>
    </footer>
  );
};
