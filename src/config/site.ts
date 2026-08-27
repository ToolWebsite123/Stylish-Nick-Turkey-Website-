export interface SiteConfig {
  name: string;
  url: string;
  language: string;
  country: string;
  defaultTitle: string;
  defaultDescription: string;
}

export const siteConfig: SiteConfig = {
  name: 'Şekilli Nick',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sekillinick.tr',
  language: 'tr-TR',
  country: 'TR',
  defaultTitle: 'Şekilli Nick - Şekilli Yazı ve Nick Oluşturucu',
  defaultDescription: 'Türkiye pazarı için modern, hızlı ve Türkçe uyumlu şekilli yazı ve nick oluşturucu web platformu.',
};
