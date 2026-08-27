import React from 'react';

export function PlatformToolsSection() {
  const PLATFORM_CARDS = [
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      icon: '🎮',
      desc: '14 karakter sınırı ve cihaz font uyumluluğu.',
      badge: '14 Karakter Sınırı',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      desc: 'Bio ve gönderi açıklamalarında tam Unicode desteği.',
      badge: 'Bio & İsim Uyumlu',
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: '💬',
      desc: 'Kullanıcı adı ve sunucu nickleri için özel fontlar.',
      badge: 'Sunucu Nick Uyumlu',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '🟢',
      desc: 'Sohbet mesajları ve Hakkımda durumu için şekilli harfler.',
      badge: 'Mesaj & Durum Uyumlu',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      desc: 'Profil ismi ve Bio açıklamaları için estetik yazı tipleri.',
      badge: 'Profil & Bio Uyumlu',
    },
  ];

  return (
    <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
          Oyun ve Sosyal Medya Platform Uyumluluğu
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Her platformun kendine özgü karakter sınırı ve Unicode karakter desteği dürüstlükle belirtilmiştir.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {PLATFORM_CARDS.map((p) => (
          <div
            key={p.id}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{p.icon}</span>
                <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">{p.name}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
