import React from 'react';

export function HowItWorksSection() {
  const STEPS = [
    {
      step: '01',
      title: 'Metninizi Yazın',
      desc: 'Sayfanın en üstündeki metin kutusuna adınızı, mesajınızı veya oyun nickinizi girin.',
    },
    {
      step: '02',
      title: 'Stil veya Sembol Seçin',
      desc: 'Gotik, italik, küçük büyük harf (Small Caps) veya kanatlı oyuncu süsleri arasından beğendiğiniz tarzı seçin.',
    },
    {
      step: '03',
      title: 'Tek Tıkla Kopyalayın',
      desc: '"Kopyala" butonuna basarak oluşturduğunuz şekilli metni panoya alın ve dilediğiniz platformda yapıştırın.',
    },
  ];

  return (
    <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
          Nasıl Çalışır?
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          3 kolay adımda şekilli yazılarınızı ve nicklerinizi hazırlayın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STEPS.map((item) => (
          <div
            key={item.step}
            className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 relative overflow-hidden"
          >
            <span className="text-3xl font-extrabold text-[var(--primary)]/20 absolute top-3 right-4 select-none font-mono">
              {item.step}
            </span>
            <h3 className="text-base font-bold text-[var(--text-primary)]">{item.title}</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
