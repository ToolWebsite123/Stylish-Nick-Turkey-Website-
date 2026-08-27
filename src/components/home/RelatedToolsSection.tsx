import React from 'react';
import Link from 'next/link';

export function RelatedToolsSection() {
  const TOOLS = [
    {
      title: 'Şekilli Yazı Oluşturucu',
      href: '/',
      desc: '30+ farklı font stili ile mesajlarınızı şekillendirin.',
      icon: '✍️',
    },
    {
      title: 'Şekilli Nick Oluşturucu',
      href: '/sekilli-nick',
      desc: 'PUBG ve oyunlar için kanatlı ve kılıçlı nick tasarlayın.',
      icon: '🎮',
    },
    {
      title: 'Şekilli Semboller',
      href: '/sekilli-semboller',
      desc: '200+ kalp, yıldız, taç ve sevimli simgeler kütüphanesi.',
      icon: '✨',
    },
  ];

  return (
    <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)] pb-4">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
          İlgili Araçlar & Sayfalar
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--primary)] transition-all space-y-1 group flex items-start gap-3"
          >
            <span className="text-2xl p-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              {tool.icon}
            </span>
            <div className="space-y-0.5 flex-1">
              <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                {tool.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tool.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
