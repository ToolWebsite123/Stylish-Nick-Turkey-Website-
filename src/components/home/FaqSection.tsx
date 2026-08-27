'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const FAQS: FaqItem[] = [
    {
      question: 'Şekilli yazı ve şekilli nick nedir?',
      answer:
        'Şekilli yazı ve nickler, standart alfabe harflerinin Unicode standartlarında tanımlı özel matematiksel veya dekoratif alfabe karşılıklarıyla değiştirilmesiyle elde edilen estetik metinlerdir.',
    },
    {
      question: 'Türkçe karakterler (ç, ğ, ı, ö, ş, ü) şekilli fontlarda nasıl korunur?',
      answer:
        'Aracımız 2 farklı mod sunar: "Harfleri Koru" modunda Türkçe harfleriniz orijinal okunabilir haliyle tutulur. "ASCII Sadeleştir" modunda ise ç→c, ğ→g, ş→s dönüşümü yapılarak maksimum cihaz uyumluluğu sağlanır.',
    },
    {
      question: 'PUBG Mobile isim değiştirirken neden bazı karakterler kare (?) olarak görünür?',
      answer:
        'PUBG Mobile sistem fontu yüksek kod noktasına sahip bazı koyu kare/daire Unicode sembollerini desteklemez. Sistemimiz hangi stillerin PUBG ile %100 uyumlu olduğunu etiketler üzerinde açıkça belirtmektedir.',
    },
    {
      question: 'Şekilli yazı oluşturucu ücretli mi veya kayıt gerektirir mi?',
      answer:
        'Hayır, aracımız tamamen %100 ücretsizdir, kayıt veya üyelik gerektirmez. Tüm dönüştürme işlemleri doğrudan tarayıcınızda istemci tarafında gerçekleşir.',
    },
    {
      question: 'Kopyaladığım şekilli yazıyı Instagram veya WhatsApp’ta nasıl kullanırım?',
      answer:
        'Kopyala butonuna tıkladıktan sonra Instagram Bio alanına veya WhatsApp sohbet kutusuna basılı tutarak "Yapıştır" seçeneğini kullanabilirsiniz.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
          Sıkça Sorulan Sorular (SSS)
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Şekilli yazılar ve platform uyumluluğu hakkında merak edilenler.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left font-bold text-sm text-[var(--text-primary)] flex items-center justify-between gap-3 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-lg text-[var(--text-muted)] transition-transform duration-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
