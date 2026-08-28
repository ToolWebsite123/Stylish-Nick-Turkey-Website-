'use client';

import React, { useState } from 'react';
import { useFavorites, useCopyHistory } from '@/hooks/useStorage';
import { copyToClipboard } from '@/lib/clipboard';
import { Toast } from './Toast';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesDrawer({ isOpen, onClose }: FavoritesDrawerProps) {
  const { favorites, removeFavorite } = useFavorites();
  const { history, clearHistory } = useCopyHistory();
  const [activeTab, setActiveTab] = useState<'favorites' | 'history'>('favorites');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyItem = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setToastMessage(`"${text}" kopyalandı! 📋`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">Kaydedilenler & Geçmiş</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[var(--border-subtle)] bg-[var(--bg-card)] p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'favorites'
                  ? 'bg-[var(--primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>⭐ Favoriler</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/20 text-[10px]">
                {favorites.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'history'
                  ? 'bg-[var(--primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>🕒 Kopyalama Geçmişi</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/20 text-[10px]">
                {history.length}
              </span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {activeTab === 'favorites' ? (
              favorites.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <span className="text-4xl block">⭐</span>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Henüz favori eklenmedi
                  </p>
                  <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto">
                    Stil kartlarındaki yıldız ikonuna tıklayarak beğendiğiniz şekilli yazıları buraya kaydedebilirsiniz.
                  </p>
                </div>
              ) : (
                favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 group hover:border-[var(--primary)]/40 transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[var(--text-primary)] truncate font-unicode-preview">
                        {fav.text}
                      </p>
                      {fav.styleName && (
                        <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                          Stil: {fav.styleName}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopyItem(fav.text)}
                        className="px-3 py-1.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold hover:opacity-90 active:scale-95 transition-all"
                      >
                        Kopyala
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFavorite(fav.id)}
                        className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-500/10 transition-colors"
                        title="Favorilerden Çıkar"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )
            ) : history.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <span className="text-4xl block">📋</span>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Geçmiş kopyalama bulunamadı
                </p>
                <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto">
                  Sitede kopyaladığınız son 20 şekilli nick otomatik olarak burada listelenir.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-end pb-1">
                  <button
                    type="button"
                    onClick={clearHistory}
                    className="text-[11px] font-semibold text-rose-500 hover:underline flex items-center gap-1"
                  >
                    <span>🗑️</span>
                    <span>Geçmişi Temizle</span>
                  </button>
                </div>
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 group hover:border-[var(--primary)]/40 transition-all"
                  >
                    <p className="text-sm font-bold text-[var(--text-primary)] truncate font-unicode-preview flex-1 min-w-0">
                      {item.text}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleCopyItem(item.text)}
                      className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--primary)] text-[var(--text-primary)] text-xs font-bold active:scale-95 transition-all"
                    >
                      Kopyala
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
