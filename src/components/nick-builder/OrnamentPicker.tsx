'use client';

import React from 'react';
import { ORNAMENT_PAIRS, OrnamentPair } from '@/data/nick-builder/presets';

interface OrnamentPickerProps {
  selectedOrnamentId: string;
  onSelectOrnament: (ornament: OrnamentPair) => void;
  customLeft: string;
  customRight: string;
  onCustomLeftChange: (val: string) => void;
  onCustomRightChange: (val: string) => void;
}

export function OrnamentPicker({
  selectedOrnamentId,
  onSelectOrnament,
  customLeft,
  customRight,
  onCustomLeftChange,
  onCustomRightChange,
}: OrnamentPickerProps) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
          Sol ve Sağ Nick Süslemesi (Süsler)
        </label>
      </div>

      {/* Preset Ornament Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1 no-scrollbar">
        {ORNAMENT_PAIRS.map((item) => {
          const isActive = selectedOrnamentId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectOrnament(item)}
              className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all duration-150 flex flex-col items-center justify-center gap-1 active:scale-95 ${
                isActive
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-xs'
                  : 'bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--primary)]/50 hover:bg-[var(--bg-elevated)] border-[var(--border-subtle)]'
              }`}
            >
              <span className="font-unicode-preview text-sm truncate max-w-full font-bold">
                {item.id === 'none' ? '(Süs Yok)' : `${item.left} NICK ${item.right}`}
              </span>
              <span className="text-[10px] opacity-80 truncate">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Custom Left & Right Inputs */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div>
          <label className="text-[11px] font-medium text-[var(--text-muted)] block mb-1">
            Özel Sol Süs
          </label>
          <input
            type="text"
            value={customLeft}
            onChange={(e) => onCustomLeftChange(e.target.value)}
            placeholder="Örn: ꧁༺ "
            className="w-full px-3 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--primary)] font-unicode-preview"
          />
        </div>
        <div>
          <label className="text-[11px] font-medium text-[var(--text-muted)] block mb-1">
            Özel Sağ Süs
          </label>
          <input
            type="text"
            value={customRight}
            onChange={(e) => onCustomRightChange(e.target.value)}
            placeholder="Örn:  ༻꧂"
            className="w-full px-3 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--primary)] font-unicode-preview"
          />
        </div>
      </div>
    </div>
  );
}
