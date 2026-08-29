import { EmojiCategoryDefinition } from '@/types/emoji';

export const EMOJI_CATEGORIES: EmojiCategoryDefinition[] = [
  {
    id: 'smileys-emotion',
    name: 'Gülücükler & Duygular',
    slug: 'gulucukler-duygular',
    description: 'Yüz ifadeleri, gülümsemeler, kalpler ve duygu simgeleri.',
    icon: '😀',
  },
  {
    id: 'people-body',
    name: 'İnsanlar & Vücut',
    slug: 'insanlar-vucut',
    description: 'El hareketleri, vücut dili, insan figürleri ve meslekler.',
    icon: '🙌',
  },
  {
    id: 'animals-nature',
    name: 'Hayvanlar & Doğa',
    slug: 'hayvanlar-doga',
    description: 'Evcil ve vahşi hayvanlar, bitkiler, çiçekler ve hava durumu.',
    icon: '🐶',
  },
  {
    id: 'food-drink',
    name: 'Yiyecek & İçecek',
    slug: 'yiyecek-icecek',
    description: 'Meyveler, sebzeler, yemekler, tatlılar ve içecek emojileri.',
    icon: '🍕',
  },
  {
    id: 'travel-places',
    name: 'Seyahat & Yerler',
    slug: 'seyahat-yerler',
    description: 'Taşıtlar, binalar, manzara ve gezegen simgeleri.',
    icon: '✈️',
  },
  {
    id: 'activities',
    name: 'Aktiviteler',
    slug: 'aktiviteler',
    description: 'Spor branşları, hobiler, oyunlar ve eğlence nesneleri.',
    icon: '⚽',
  },
  {
    id: 'objects',
    name: 'Nesneler',
    slug: 'nesneler',
    description: 'Elektronik cihazlar, giyim, araç gereçler ve ev eşyaları.',
    icon: '💡',
  },
  {
    id: 'symbols',
    name: 'Semboller',
    slug: 'semboller',
    description: 'Uyarı işaretleri, geometrik şekiller, oklar ve matematik simgeleri.',
    icon: '❤️',
  },
  {
    id: 'flags',
    name: 'Bayraklar',
    slug: 'bayraklar',
    description: 'Ülke bayrakları, korsan bayrağı ve özel sembol bayrakları.',
    icon: '🏳️',
  },
];

export function getCategoryById(id: string): EmojiCategoryDefinition | undefined {
  return EMOJI_CATEGORIES.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): EmojiCategoryDefinition | undefined {
  return EMOJI_CATEGORIES.find((cat) => cat.slug === slug);
}
