import { UnicodeStyleDefinition, TransformResult } from '@/types/unicode';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';

export type SearchCategoryFilter =
  | 'all'
  | 'popular'
  | 'bold'
  | 'italic'
  | 'cursive'
  | 'gothic'
  | 'aesthetic'
  | 'gaming'
  | 'minimal'
  | 'decorative'
  | 'symbols';

export type SearchCompatibilityFilter =
  | 'all'
  | 'full-turkish'
  | 'partial-turkish'
  | 'pubg'
  | 'instagram'
  | 'discord'
  | 'whatsapp';

export interface StyleFilterOptions {
  query?: string;
  category?: SearchCategoryFilter;
  compatibility?: SearchCompatibilityFilter;
}

export const CATEGORY_FILTER_OPTIONS: { id: SearchCategoryFilter; label: string }[] = [
  { id: 'all', label: 'Tümü' },
  { id: 'popular', label: 'Popüler' },
  { id: 'bold', label: 'Kalın' },
  { id: 'italic', label: 'İtalik' },
  { id: 'cursive', label: 'El Yazısı' },
  { id: 'gothic', label: 'Gotik' },
  { id: 'aesthetic', label: 'Estetik' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'decorative', label: 'Dekoratif' },
  { id: 'symbols', label: 'Sembollü' },
];

export const COMPATIBILITY_FILTER_OPTIONS: { id: SearchCompatibilityFilter; label: string }[] = [
  { id: 'all', label: 'Tüm Platform & Uyumluluk' },
  { id: 'full-turkish', label: 'Türkçe Tam Destek' },
  { id: 'partial-turkish', label: 'Kısmi Türkçe Desteği' },
  { id: 'pubg', label: 'PUBG Uyumlu' },
  { id: 'instagram', label: 'Instagram Uyumlu' },
  { id: 'discord', label: 'Discord Uyumlu' },
  { id: 'whatsapp', label: 'WhatsApp Uyumlu' },
];

/**
 * Normalizes text for case-insensitive and diacritic-tolerant Turkish search matching.
 */
export function normalizeSearchText(text: string): string {
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/i̇/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Filters Unicode style definitions based on text search query, category, and platform compatibility.
 */
export function filterStyleDefinitions(
  styles: UnicodeStyleDefinition[],
  options: StyleFilterOptions = {}
): UnicodeStyleDefinition[] {
  let filtered = [...styles];

  // 1. Text Search Query Filter
  if (options.query && options.query.trim()) {
    const cleanQuery = normalizeSearchText(options.query.trim());
    filtered = filtered.filter((style) => {
      const matchName = normalizeSearchText(style.name).includes(cleanQuery);
      const matchSlug = normalizeSearchText(style.slug).includes(cleanQuery);
      const matchCategory = normalizeSearchText(style.category).includes(cleanQuery);
      const matchDesc = normalizeSearchText(style.description || style.descriptionTr || '').includes(
        cleanQuery
      );
      const matchTags = style.tags
        ? style.tags.some((tag) => normalizeSearchText(tag).includes(cleanQuery))
        : false;

      return matchName || matchSlug || matchCategory || matchDesc || matchTags;
    });
  }

  // 2. Category Filter
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter((style) => {
      switch (options.category) {
        case 'popular':
          return Boolean(style.isPopular);
        case 'bold':
          return style.id.includes('bold') || (style.tags && style.tags.includes('bold'));
        case 'italic':
          return style.id.includes('italic') || (style.tags && style.tags.includes('italic'));
        case 'cursive':
          return style.category === 'cursive';
        case 'gothic':
          return style.category === 'gothic';
        case 'aesthetic':
          return style.tags ? style.tags.includes('aesthetic') : false;
        case 'gaming':
          return style.category === 'frames' || (style.tags && style.tags.includes('gaming'));
        case 'minimal':
          return style.category === 'monospace' || (style.tags && style.tags.includes('minimal'));
        case 'decorative':
          return style.category === 'decorative';
        case 'symbols':
          return style.category === 'symbols';
        default:
          return true;
      }
    });
  }

  // 3. Platform & Compatibility Filter
  if (options.compatibility && options.compatibility !== 'all') {
    filtered = filtered.filter((style) => {
      switch (options.compatibility) {
        case 'full-turkish':
          return style.supportStatus === 'FULL';
        case 'partial-turkish':
          return style.supportStatus === 'PARTIAL';
        case 'pubg':
          return style.platforms ? style.platforms.includes('pubg') : false;
        case 'instagram':
          return style.platforms ? style.platforms.includes('instagram') : false;
        case 'discord':
          return style.platforms ? style.platforms.includes('discord') : false;
        case 'whatsapp':
          return style.platforms ? style.platforms.includes('whatsapp') : false;
        default:
          return true;
      }
    });
  }

  return filtered;
}

/**
 * Filters transformed Unicode results based on text search query, category, and platform compatibility.
 */
export function filterTransformResults(
  results: TransformResult[],
  options: StyleFilterOptions = {}
): TransformResult[] {
  const matchingStyleIds = new Set(
    filterStyleDefinitions(UNICODE_STYLES_DATA, options).map((s) => s.id)
  );

  return results.filter((res) => matchingStyleIds.has(res.styleId));
}
