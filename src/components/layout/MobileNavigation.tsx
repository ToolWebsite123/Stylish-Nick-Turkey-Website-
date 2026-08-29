'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  href: string;
  label: string;
  isPlaceholder?: boolean;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const pathname = usePathname();

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden" role="dialog" aria-modal="true" aria-label="Mobil Menü">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-4/5 max-w-sm h-full bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <span className="font-extrabold text-lg text-[var(--text-primary)]">
              Şekilli<span className="text-[var(--primary)]">Nick</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Menüyü Kapat"
              type="button"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-2">
            {items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all min-h-[44px] ${
                    isActive && item.href !== '/'
                      ? 'bg-[var(--primary)] text-[var(--primary-fg)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isPlaceholder && (
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                      Yakında
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
          <p className="font-medium text-[var(--text-secondary)]">Şekilli Nick Turkey</p>
          <p>Hedef Dil: tr-TR</p>
        </div>
      </div>
    </div>
  );
};
