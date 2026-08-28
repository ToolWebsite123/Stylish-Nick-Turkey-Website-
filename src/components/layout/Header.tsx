'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { FavoritesDrawer } from '@/components/ui/FavoritesDrawer';
import { useFavorites } from '@/hooks/useStorage';
import { Container } from './Container';
import { MobileNavigation, NavItem } from './MobileNavigation';

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Emojiler' },
  { href: '/', label: 'Şekilli & Sembollü v2' },
  { href: '/', label: 'Şekilli Semboller' },
  { href: '/', label: 'Pubg Şekilli Semboller' },
  { href: '/', label: 'Pubg Şekilli Nick' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const { count: favoritesCount } = useFavorites();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md">
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Brand Logo / Text */}
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-xl text-[var(--text-primary)] tracking-tight hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] flex items-center justify-center font-black text-sm">
              ŞN
            </div>
            <span>
              Şekilli<span className="text-[var(--primary)]">Nick</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                      ? 'bg-[var(--bg-elevated)] text-[var(--primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Favorites, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFavoritesDrawerOpen(true)}
              className="px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] text-xs font-bold flex items-center gap-1.5 transition-all relative"
              title="Kaydedilenler & Geçmiş"
            >
              <span>⭐</span>
              <span className="hidden sm:inline">Favoriler</span>
              {favoritesCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[var(--primary)] text-white text-[10px] flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Mobil Menüyü Aç"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Favorites Drawer Modal */}
      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </header>
  );
};
