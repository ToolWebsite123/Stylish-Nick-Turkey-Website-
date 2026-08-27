'use client';

import React, { useState } from 'react';
import { TransformResult } from '@/types/unicode';
import { PlatformId } from '@/types/platform';
import { getPlatformCompatibility, getPlatformStatusDisplay, getPlatformDefinition } from '@/lib/platforms';
import { copyToClipboard } from '@/lib/clipboard';

interface StyleCardProps {
  result: TransformResult;
  selectedPlatformId?: PlatformId;
  onCopySuccess: (styleName: string) => void;
}

export function StyleCard({ result, selectedPlatformId, onCopySuccess }: StyleCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(result.transformedText);
    if (success) {
      setCopied(true);
      onCopySuccess(result.styleName);
      setTimeout(() => setCopied(false), 2000);
    }
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
    <div className="group p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4">
      {/* Header: Style Name & Support Badges */}
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
            {result.styleName}
          </h4>
          <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
            {result.category}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          {getTurkishSupportBadge()}
          {platformStatusDisplay && platformDef && (
            <span
              className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${platformStatusDisplay.badgeClass} flex items-center gap-1`}
              title={platformCompat?.notesTr || `${platformDef.name} uyumluluk durumu`}
            >
              <span>{platformDef.icon}</span>
              <span>{platformStatusDisplay.labelTr}</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Output Box */}
      <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-h-[56px] flex items-center justify-between gap-3 overflow-x-auto no-scrollbar font-unicode-preview">
        <span className="text-base md:text-lg font-medium text-[var(--text-primary)] break-all select-all">
          {result.transformedText}
        </span>
      </div>

      {/* Platform Compatibility Note */}
      {platformCompat && platformCompat.notesTr && (
        <p className="text-[11px] text-[var(--text-muted)] flex items-center gap-1 italic">
          <span>ℹ️</span>
          <span>{platformCompat.notesTr}</span>
        </p>
      )}

      {/* Fallback Notice */}
      {!platformCompat?.notesTr && result.hasFallback && !result.usedSimplification && result.unsupportedCharacters.length > 0 && (
        <p className="text-[11px] text-[var(--text-muted)] flex items-center gap-1 italic">
          <span>ℹ️</span>
          <span>
            {`'${result.unsupportedCharacters.join(', ')}'`} harfleri orijinal haliyle korundu.
          </span>
        </p>
      )}

      {/* Footer: Copy Action Button */}
      <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)] font-mono">
          {result.characterCount} karakter
        </span>

        <button
          type="button"
          onClick={handleCopy}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
            copied
              ? 'bg-emerald-500 text-white shadow-sm'
              : 'bg-[var(--primary)] text-white hover:opacity-90 shadow-sm'
          }`}
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
  );
}
