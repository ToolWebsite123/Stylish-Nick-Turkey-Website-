'use client';

import React, { useState } from 'react';
import { transformCharacter } from '@/lib/unicode/transform';
import { getUnicodeStyle } from '@/lib/unicode/engine';
import { copyToClipboard } from '@/lib/clipboard';

interface LetterAlphabetTableProps {
  onCopySuccess?: (char: string) => void;
}

export function LetterAlphabetTable({ onCopySuccess }: LetterAlphabetTableProps) {
  const [copiedChar, setCopiedChar] = useState<string | null>(null);

  const LETTERS = [
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M',
    'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z',
    'a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'
  ];

  const STYLES_TO_SHOW = [
    { id: 'bold-sans', name: 'Kalın Sans' },
    { id: 'small-caps', name: 'Small Caps' },
    { id: 'gothic-bold', name: 'Gotik Kalın' },
    { id: 'cursive-bold', name: 'El Yazısı' },
    { id: 'double-struck', name: 'Çift Çizgili' },
    { id: 'monospace-wide', name: 'Monospace' },
  ];

  const handleCopy = async (char: string) => {
    const success = await copyToClipboard(char);
    if (success) {
      setCopiedChar(char);
      if (onCopySuccess) onCopySuccess(char);
      setTimeout(() => setCopiedChar(null), 1500);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Kopyalanabilir Şekilli Harfler & Alfabe Matrisi
        </h3>
        <span className="text-xs text-[var(--text-muted)]">
          Kopyalamak için harfe tıklayın
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)] text-[var(--text-muted)] font-mono uppercase tracking-wider">
              <th className="p-3 font-semibold">Harf</th>
              {STYLES_TO_SHOW.map((s) => (
                <th key={s.id} className="p-3 font-semibold whitespace-nowrap">
                  {s.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)]/50">
            {LETTERS.map((char) => (
              <tr key={char} className="hover:bg-[var(--bg-elevated)]/50 transition-colors">
                <td className="p-3 font-extrabold text-[var(--text-primary)] font-mono">
                  {char}
                </td>
                {STYLES_TO_SHOW.map((style) => {
                  const styleObj = getUnicodeStyle(style.id);
                  if (!styleObj) return <td key={style.id}>-</td>;

                  const transformRes = transformCharacter(char, styleObj, false);
                  const transformed = transformRes.transformedChar;
                  const isCopied = copiedChar === transformed;

                  return (
                    <td key={style.id} className="p-2 font-unicode-preview">
                      <button
                        type="button"
                        onClick={() => handleCopy(transformed)}
                        title={`"${transformed}" harfini kopyala`}
                        className={`px-2.5 py-1.5 rounded-lg text-sm transition-all duration-150 active:scale-95 ${
                          isCopied
                            ? 'bg-emerald-500 text-white font-bold'
                            : 'hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] text-[var(--text-primary)]'
                        }`}
                      >
                        {isCopied ? '✓' : transformed}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
