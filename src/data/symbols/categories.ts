import { SymbolCategoryDefinition, SymbolCategory } from '@/types/symbol';

export const SYMBOL_CATEGORIES: SymbolCategoryDefinition[] = [
  {
    id: 'hearts',
    name: 'Kalpler',
    slug: 'kalpler',
    description: 'Kalp, sevgi ve romantik estetik simgeleri.',
    icon: '♥',
  },
  {
    id: 'stars',
    name: 'Yıldızlar',
    slug: 'yildizlar',
    description: 'Yıldız, ışıltı, parlaklık ve kıvılcım simgeleri.',
    icon: '★',
  },
  {
    id: 'crowns',
    name: 'Taçlar',
    slug: 'taclar',
    description: 'Kral, kraliçe ve liderlik taç simgeleri.',
    icon: '👑',
  },
  {
    id: 'arrows',
    name: 'Oklar',
    slug: 'oklar',
    description: 'Yön gösterici, kavisli ve dekoratif ok işaretleri.',
    icon: '➔',
  },
  {
    id: 'flowers',
    name: 'Çiçekler',
    slug: 'cicekler',
    description: 'Çiçek, bitki, yaprak ve bahar estetiği simgeleri.',
    icon: '🌸',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    slug: 'gaming',
    description: 'PUBG, Valorant, CS:GO ve savaş oyunu nick simgeleri.',
    icon: '⚔️',
  },
  {
    id: 'decorative',
    name: 'Dekoratif',
    slug: 'dekoratif',
    description: 'Köşe süsleri, geometrik şekiller ve ayraçlar.',
    icon: '✦',
  },
  {
    id: 'brackets',
    name: 'Parantezler',
    slug: 'parantezler',
    description: 'Estetik Asya parantezleri, tırnaklar ve çerçeve işaretleri.',
    icon: '【 】',
  },
  {
    id: 'cute',
    name: 'Sevimli',
    slug: 'sevimli',
    description: 'Kaomoji yüz kalıpları, hayvanlar ve şirin simgeler.',
    icon: 'ʕ•ᴥ•ʔ',
  },
  {
    id: 'special',
    name: 'Özel Semboller',
    slug: 'ozel-semboller',
    description: 'Şimşek, tehlike, müzik ve nadir Unicode karakterleri.',
    icon: '⚡',
  },
];

export function getCategoryById(id: SymbolCategory): SymbolCategoryDefinition | undefined {
  return SYMBOL_CATEGORIES.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): SymbolCategoryDefinition | undefined {
  return SYMBOL_CATEGORIES.find((c) => c.slug === slug);
}
