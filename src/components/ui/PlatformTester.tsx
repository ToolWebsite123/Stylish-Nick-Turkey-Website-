'use client';

import React, { useState } from 'react';
import { PLATFORMS_DATA } from '@/data/platforms/data';
import { PlatformId } from '@/types/platform';
import { copyToClipboard } from '@/lib/clipboard';
import { Toast } from './Toast';

export function PlatformTester() {
  const [testNickname, setTestNickname] = useState('꧁༺ Shadow_TR ༻꧂');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>('pubg');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const platformInfo = PLATFORMS_DATA.find((p) => p.id === selectedPlatform) || PLATFORMS_DATA[0];

  // Character length calculation (using Array.from to correctly count unicode surrogate pairs)
  const charLength = Array.from(testNickname).length;
  const isOverLengthLimit = platformInfo.maxCharacterLength ? charLength > platformInfo.maxCharacterLength : false;

  const handleCopy = async () => {
    if (!testNickname) return;
    const success = await copyToClipboard(testNickname);
    if (success) {
      setToastMessage(`"${testNickname}" kopyalandı! 📋`);
    }
  };

  return (
    <div className="w-full p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Platform Uyumluluk Test Aracı
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Nickinizin seçtiğiniz oyunda veya sosyal medyada izin verilen sınırları aşıp aşmadığını test edin.
            </p>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {PLATFORMS_DATA.map((p) => {
            const isActive = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlatform(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                  isActive
                    ? 'bg-[var(--primary)] text-white shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Field & Real-Time Stats */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="test-nick-input" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Test Edilecek Nick
            </label>
            <span
              className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                isOverLengthLimit
                  ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
              }`}
            >
              {charLength} {platformInfo.maxCharacterLength ? `/ ${platformInfo.maxCharacterLength}` : ''} Karakter
            </span>
          </div>

          <div className="flex gap-2">
            <input
              id="test-nick-input"
              type="text"
              value={testNickname}
              onChange={(e) => setTestNickname(e.target.value)}
              placeholder="Test edilecek nicki yapıştırın..."
              className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-semibold focus:outline-none focus:border-[var(--primary)] font-unicode-preview"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="px-5 py-3 rounded-xl bg-[var(--primary)] text-white font-bold text-xs hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
            >
              Kopyala
            </button>
          </div>
        </div>

        {/* Diagnostic Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {/* Status 1: Character Limit Status */}
          <div
            className={`p-4 rounded-2xl border flex items-start gap-3 ${
              isOverLengthLimit
                ? 'bg-rose-500/5 border-rose-500/20 text-rose-600 dark:text-rose-400'
                : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
            }`}
          >
            <span className="text-xl">{isOverLengthLimit ? '⚠️' : '✅'}</span>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider">Karakter Uzunluğu</h4>
              <p className="text-xs font-medium">
                {isOverLengthLimit
                  ? `Nickiniz ${platformInfo.name} sınırını (${platformInfo.maxCharacterLength} karakter) ${
                      charLength - (platformInfo.maxCharacterLength || 0)
                    } karakter aşıyor! Oyun içinde kesilebilir.`
                  : `Nickiniz ${platformInfo.name} karakter sınırına uygun.`}
              </p>
            </div>
          </div>

          {/* Status 2: Platform Rules Overview */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
            <span className="text-xl">ℹ️</span>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {platformInfo.name} Kuralları
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {platformInfo.descriptionTr}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
