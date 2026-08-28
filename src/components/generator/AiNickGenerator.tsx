'use client';

import React, { useState } from 'react';
import { copyToClipboard } from '@/lib/clipboard';
import { useFavorites } from '@/hooks/useStorage';
import { Toast } from '@/components/ui/Toast';

interface AiNickItem {
  id: string;
  nickname: string;
  taglineTr: string;
  vibe: string;
}

const VIBE_OPTIONS = [
  { id: 'pro', label: 'PRO Gamer', icon: '🎮' },
  { id: 'dark', label: 'Karanlık (Dark)', icon: '🌑' },
  { id: 'mythic', label: 'Efsanevi (Mythic)', icon: '⚡' },
  { id: 'aesthetic', label: 'Estetik (Aesthetic)', icon: '✿' },
  { id: 'funny', label: 'Komik', icon: '🤡' },
];

export function AiNickGenerator() {
  const [keyword, setKeyword] = useState('');
  const [selectedVibe, setSelectedVibe] = useState('pro');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AiNickItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { isFavorite, toggleFavorite } = useFavorites();

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!keyword || keyword.trim() === '') {
      setErrorMsg('Lütfen bir isim veya anahtar kelime yazın!');
      return;
    }

    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/generate-nick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, style: selectedVibe, count: 8 }),
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.items)) {
        setResults(data.items);
      } else {
        setErrorMsg(data.error || 'Nick üretilemedi, lütfen tekrar deneyin.');
      }
    } catch {
      setErrorMsg('Bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (item: AiNickItem) => {
    const success = await copyToClipboard(item.nickname);
    if (success) {
      setCopiedId(item.id);
      setToastMessage(`"${item.nickname}" kopyalandı! 📋`);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Search & Vibe Input Box */}
      <div className="p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--primary)]/30 shadow-lg space-y-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <div>
            <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
              Yapay Zeka (AI) Nickname Jeneratörü
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              İsminizi yazın, istediğiniz tarzı seçin ve Claude AI destekli benzersiz nickler üretin.
            </p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-4">
          {/* Keyword Input */}
          <div className="space-y-1.5">
            <label htmlFor="ai-keyword" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Anahtar Kelime veya Adınız
            </label>
            <div className="flex gap-2">
              <input
                id="ai-keyword"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Örn: Shadow, Venom, Efe, Kral..."
                maxLength={30}
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-semibold focus:outline-none focus:border-[var(--primary)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-bold text-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Üretiliyor...</span>
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    <span>AI Nick Üret</span>
                  </>
                )}
              </button>
            </div>
            {errorMsg && (
              <p className="text-xs text-rose-500 font-semibold pt-1">⚠️ {errorMsg}</p>
            )}
          </div>

          {/* Vibe Selection Chips */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Nick Tarzı / Vibe Seçin
            </label>
            <div className="flex flex-wrap gap-2">
              {VIBE_OPTIONS.map((vibe) => (
                <button
                  key={vibe.id}
                  type="button"
                  onClick={() => setSelectedVibe(vibe.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 active:scale-95 ${
                    selectedVibe === vibe.id
                      ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-xs'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--primary)]/50'
                  }`}
                >
                  <span>{vibe.icon}</span>
                  <span>{vibe.label}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Results Grid */}
      {results.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
            <span>🎉 Üretilen Yapay Zeka Nickleri</span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px]">
              {results.length} Sonuç
            </span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.map((item) => {
              const isFav = isFavorite(item.nickname);
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 transition-all flex items-center justify-between gap-3 group shadow-xs"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-extrabold text-[var(--text-primary)] font-unicode-preview truncate">
                      {item.nickname}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 truncate">
                      {item.taglineTr}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => toggleFavorite({ text: item.nickname, category: item.vibe })}
                      className={`p-2 rounded-xl text-xs font-bold transition-all border ${
                        isFav
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-amber-500'
                      }`}
                      title={isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                    >
                      {isFav ? '⭐' : '☆'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 active:scale-95 ${
                        isCopied
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[var(--primary)] text-white hover:opacity-90'
                      }`}
                    >
                      {isCopied ? 'Kopyalandı!' : 'Kopyala'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
