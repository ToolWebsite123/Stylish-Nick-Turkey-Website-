'use client';

import React, { useState } from 'react';
import { TransformResult } from '@/types/unicode';
import { PlatformId } from '@/types/platform';
import { getPlatformCompatibility, getPlatformStatusDisplay, getPlatformDefinition } from '@/lib/platforms';
import { copyToClipboard } from '@/lib/clipboard';
import { useFavorites } from '@/hooks/useStorage';

interface StyleCardProps {
  result: TransformResult;
  selectedPlatformId?: PlatformId;
  onCopySuccess: (styleName: string) => void;
}

export function StyleCard({ result, selectedPlatformId, onCopySuccess }: StyleCardProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(result.transformedText);

  const handleCopy = async () => {
    const success = await copyToClipboard(result.transformedText);
    if (success) {
      setCopied(true);
      onCopySuccess(result.styleName);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Şekilli Nick',
          text: result.transformedText,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite({
      text: result.transformedText,
      styleName: result.styleName,
      category: result.category,
    });
  };

  // Badge mapping for Turkish character support
  const getTurkishSupportBadge = () => {
    switch (result.supportStatus) {
      case 'FULL':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Türkçe Tam Destek
          </span>
        );
      case 'PARTIAL':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Türkçe Kısmi Destek
          </span>
        );
      case 'UNSUPPORTED':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            ASCII Önerilir
          </span>
        );
    }
  };

  // Platform specific compatibility badge
  const platformCompat = selectedPlatformId
    ? getPlatformCompatibility(result.styleId, selectedPlatformId)
    : null;
  const platformDef = selectedPlatformId ? getPlatformDefinition(selectedPlatformId) : null;
  const platformStatusDisplay = platformCompat
    ? getPlatformStatusDisplay(platformCompat.status)
    : null;

  return (
    <div className="group p-3.5 md:p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-2.5">
      {/* Header: Style Name & Support Badges */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h4 className="text-xs md:text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
            {result.styleName}
          </h4>
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            ({result.category})
          </span>
        </div>
        <div className="flex items-center gap-1">
          {getTurkishSupportBadge()}
          {platformStatusDisplay && platformDef && (
            <span
              className={`px-2 py-0.5 text-[9px] font-bold rounded-full border ${platformStatusDisplay.badgeClass} flex items-center gap-1`}
              title={platformCompat?.notesTr || `${platformDef.name} uyumluluk durumu`}
            >
              <span>{platformDef.icon}</span>
              <span>{platformStatusDisplay.labelTr}</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Output Box */}
      <div className="py-2 px-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-h-[42px] flex items-center justify-between gap-3 overflow-x-auto no-scrollbar font-unicode-preview">
        <span className="text-sm md:text-base font-medium text-[var(--text-primary)] break-all select-all">
          {result.transformedText}
        </span>
      </div>

      {/* Platform Compatibility Note */}
      {platformCompat && platformCompat.notesTr && (
        <p className="text-[10px] text-[var(--text-muted)] flex items-center gap-1 italic">
          <span>ℹ️</span>
          <span>{platformCompat.notesTr}</span>
        </p>
      )}


      {/* Footer: Copy & Favorite Action Buttons */}
      <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <span className="text-[11px] text-[var(--text-muted)] font-mono">
          {result.characterCount} karakter
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleToggleFavorite}
            className={`p-1.5 rounded-lg text-xs font-bold transition-all border ${
              isFav
                ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-amber-500 hover:border-amber-500/30'
            }`}
            title={isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
          >
            {isFav ? '⭐' : '☆'}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 border ${
              shared
                ? 'bg-sky-500/20 text-sky-500 border-sky-500/40'
                : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-sky-500 hover:border-sky-500/30'
            }`}
            title="Paylaş"
          >
            <svg className="w-3.5 h-3.5 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{shared ? 'Paylaşıldı!' : 'Paylaş'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
              copied
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'bg-[var(--primary)] text-white hover:opacity-90 shadow-xs'
            }`}
            title="Kopyala"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Kopyalandı!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
