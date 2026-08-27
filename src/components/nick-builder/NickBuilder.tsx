'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';
import { ORNAMENT_PAIRS, PREFIX_PRESETS, SUFFIX_PRESETS, OrnamentPair } from '@/data/nick-builder/presets';
import { buildCustomNickname, generateRandomNicknameConfig } from '@/lib/nick-builder/builder';
import { copyToClipboard } from '@/lib/clipboard';
import { OrnamentPicker } from './OrnamentPicker';
import { Toast } from '@/components/ui/Toast';

export function NickBuilder() {
  const [nickname, setNickname] = useState('Shadow');
  const [styleId, setStyleId] = useState('gothic-bold');
  const [selectedOrnamentId, setSelectedOrnamentId] = useState('wings-classic');
  const [leftOrnament, setLeftOrnament] = useState('꧁༺ ');
  const [rightOrnament, setRightOrnament] = useState(' ༻꧂');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [simplifyTurkish, setSimplifyTurkish] = useState(false);

  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute live nickname result
  const buildResult = useMemo(() => {
    return buildCustomNickname({
      nickname,
      styleId,
      leftOrnament,
      rightOrnament,
      prefix,
      suffix,
      simplifyTurkish,
    });
  }, [nickname, styleId, leftOrnament, rightOrnament, prefix, suffix, simplifyTurkish]);

  const handleSelectOrnament = useCallback((pair: OrnamentPair) => {
    setSelectedOrnamentId(pair.id);
    setLeftOrnament(pair.left);
    setRightOrnament(pair.right);
  }, []);

  const handleRandomize = useCallback(() => {
    const randomConfig = generateRandomNicknameConfig(nickname);
    setNickname(randomConfig.nickname);
    setStyleId(randomConfig.styleId);
    setLeftOrnament(randomConfig.leftOrnament);
    setRightOrnament(randomConfig.rightOrnament);
    setPrefix(randomConfig.prefix);
    setSuffix(randomConfig.suffix);

    // Match selected ornament ID if available
    const matchingPair = ORNAMENT_PAIRS.find(
      (p) => p.left === randomConfig.leftOrnament && p.right === randomConfig.rightOrnament
    );
    setSelectedOrnamentId(matchingPair ? matchingPair.id : 'custom');
  }, [nickname]);

  const handleReset = useCallback(() => {
    setNickname('Shadow');
    setStyleId('gothic-bold');
    setSelectedOrnamentId('wings-classic');
    setLeftOrnament('꧁༺ ');
    setRightOrnament(' ༻꧂');
    setPrefix('');
    setSuffix('');
    setSimplifyTurkish(false);
  }, []);

  const handleCopy = async () => {
    if (!buildResult.isValid || !buildResult.fullNickname) return;
    const success = await copyToClipboard(buildResult.fullNickname);
    if (success) {
      setCopied(true);
      setToastMessage(`"${buildResult.fullNickname}" kopyalandı! 📋`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Live Preview Card Header */}
      <div className="p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--primary)] shadow-lg space-y-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Canlı Nick Önizlemesi
          </span>

          <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] px-2.5 py-1 rounded-full border border-[var(--border-subtle)]">
            {buildResult.characterCount} Karakter
          </span>
        </div>

        {/* Big Live Text Output */}
        <div className="p-5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-h-[80px] flex items-center justify-center text-center overflow-x-auto no-scrollbar font-unicode-preview">
          {buildResult.isValid ? (
            <span className="text-xl md:text-3xl font-extrabold text-[var(--text-primary)] break-all select-all tracking-wide">
              {buildResult.fullNickname}
            </span>
          ) : (
            <span className="text-sm font-medium text-amber-500 flex items-center gap-1.5">
              <span>⚠️</span>
              <span>{buildResult.error}</span>
            </span>
          )}
        </div>

        {/* Copy & Random Actions */}
        <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRandomize}
              className="px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--primary)] text-xs font-bold text-[var(--text-primary)] transition-all flex items-center gap-1.5 active:scale-95 shadow-xs"
            >
              <span>🎲</span>
              <span>Rastgele Mix Yap</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:bg-rose-500/10 hover:text-rose-500 text-xs font-medium text-[var(--text-muted)] transition-all active:scale-95"
              title="Formu Sıfırla"
            >
              🔄 Sıfırla
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!buildResult.isValid}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 active:scale-95 ${
              copied
                ? 'bg-emerald-500 text-white shadow-md'
                : buildResult.isValid
                ? 'bg-[var(--primary)] text-white hover:opacity-90 shadow-md'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nick Kopyalandı!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Nicki Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Builder Inputs Grid */}
      <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6">
        {/* Nickname & Font Style Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nickname Input */}
          <div className="space-y-1.5">
            <label htmlFor="builder-nickname" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              1. Oyuncu Nickiniz
            </label>
            <input
              id="builder-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickinizi yazın... (Örn: Shadow)"
              maxLength={30}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-semibold focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
            />
          </div>

          {/* Font Style Selector */}
          <div className="space-y-1.5">
            <label htmlFor="builder-style" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              2. Font Stili
            </label>
            <select
              id="builder-style"
              value={styleId}
              onChange={(e) => setStyleId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-semibold focus:outline-none focus:border-[var(--primary)]"
            >
              {UNICODE_STYLES_DATA.filter((s) => s.category !== 'frames').map((style) => (
                <option key={style.id} value={style.id}>
                  {style.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3. Ornament Picker */}
        <OrnamentPicker
          selectedOrnamentId={selectedOrnamentId}
          onSelectOrnament={handleSelectOrnament}
          customLeft={leftOrnament}
          customRight={rightOrnament}
          onCustomLeftChange={(val) => {
            setLeftOrnament(val);
            setSelectedOrnamentId('custom');
          }}
          onCustomRightChange={(val) => {
            setRightOrnament(val);
            setSelectedOrnamentId('custom');
          }}
        />

        {/* 4. Prefix & Suffix Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Prefix Selector */}
          <div className="space-y-2">
            <label htmlFor="builder-prefix" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Sol Ön Ek (Prefix)
            </label>
            <input
              id="builder-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="Örn: [PRO] veya ★"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--primary)] font-unicode-preview"
            />
            <div className="flex items-center gap-1 flex-wrap pt-0.5">
              <span className="text-[10px] text-[var(--text-muted)]">Hızlı:</span>
              {PREFIX_PRESETS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPrefix(prefix === p ? '' : p)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold border transition-all ${
                    prefix === p
                      ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--primary)]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Suffix Selector */}
          <div className="space-y-2">
            <label htmlFor="builder-suffix" className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Sağ Son Ek (Suffix)
            </label>
            <input
              id="builder-suffix"
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder="Örn: [TR] veya ツ"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--primary)] font-unicode-preview"
            />
            <div className="flex items-center gap-1 flex-wrap pt-0.5">
              <span className="text-[10px] text-[var(--text-muted)]">Hızlı:</span>
              {SUFFIX_PRESETS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSuffix(suffix === s ? '' : s)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold border transition-all ${
                    suffix === s
                      ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--primary)]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Turkish Character Mode Toggle */}
        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 pt-3">
          <span className="text-xs font-semibold text-[var(--text-primary)]">
            Türkçe Karakter Sadeleştirme (ç→c, ğ→g, ş→s)
          </span>
          <button
            type="button"
            onClick={() => setSimplifyTurkish(!simplifyTurkish)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              simplifyTurkish
                ? 'bg-amber-500 text-white'
                : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
            }`}
          >
            {simplifyTurkish ? 'Açık' : 'Kapalı'}
          </button>
        </div>
      </div>

      {/* Toast Alert Popup */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
