'use client';

import React from 'react';

interface PopularStylesSectionProps {
  onSelectSample?: (sampleText: string) => void;
}

export function PopularStylesSection({ onSelectSample }: PopularStylesSectionProps) {
  const POPULAR_SAMPLES = [
    { title: 'Gotik Stil', preview: '𝕾𝖊𝖐𝖎𝖑𝖑𝖎 𝕹𝖎𝖈𝖐', sample: 'Sekilli Nick' },
    { title: 'Small Caps (Küçük Büyük)', preview: 'sᴇᴋɪʟʟɪ ɴɪᴄᴋ', sample: 'Sekilli Nick' },
    { title: 'Kanatlı Nick', preview: '꧁༺ Şekilli Nick ༻꧂', sample: 'Şekilli Nick' },
    { title: 'Kalın Sans', preview: '𝗦𝗲𝗸𝗶𝗹𝗹𝗶 𝗡𝗶𝗰𝗸', sample: 'Sekilli Nick' },
    { title: 'El Yazısı', preview: '𝒮𝑒𝓀𝒾𝓁𝓁𝒾 𝒩𝒾𝒸𝓀', sample: 'Sekilli Nick' },
    { title: 'Üstü Çizili', preview: 'Ş̶e̶k̶i̶l̶l̶i̶ ̶N̶i̶c̶k̶', sample: 'Şekilli Nick' },
  ];

  return (
    <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
          Öne Çıkan Popüler Yazı Stilleri
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {POPULAR_SAMPLES.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider block">
                {item.title}
              </span>
              <p className="text-base font-medium text-[var(--text-primary)] font-unicode-preview pt-1 truncate">
                {item.preview}
              </p>
            </div>

            {onSelectSample && (
              <button
                type="button"
                onClick={() => onSelectSample(item.sample)}
                className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] text-left transition-colors pt-1"
              >
                Dene →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
