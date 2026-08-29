import { EmojiItem, EmojiCategoryDefinition, EmojiCategory, EmojiQueryOptions, EmojiGroup } from '@/types/emoji';
import { EMOJI_DATA } from '@/data/emoji/data';
import { EMOJI_CATEGORIES, getCategoryBySlug, getCategoryById } from '@/data/emoji/categories';

const SUBCATEGORY_ICONS: Record<string, string> = {
  'face-smiling': '😀',
  'face-affection': '😍',
  'face-tongue': '😛',
  'face-neutral-skeptical': '🤔',
  'face-glasses-costume': '😎',
  'heart': '❤️',
  'emotion': '✨',
  'hand-fingers-open': '👋',
  'hand-fingers-partial': '👌',
  'hand-fingers-closed': '👍',
  'body-parts': '💪',
  'animal-mammal': '🐶',
  'animal-bird': '🦅',
  'plant-flower': '🌹',
  'sky-weather': '☀️',
  'food-fruit': '🍎',
  'food-prepared': '🍕',
  'food-sweet': '🍩',
  'drink': '☕',
  'transport-ground': '🚗',
  'place-building': '🏠',
  'sport': '⚽',
  'game': '🎮',
  'award-event': '🏆',
  'light-music': '💡',
  'money': '💰',
  'clothing': '👑',
  'tool-weapon': '⚔️',
  'warning': '⚠️',
  'math-geometric': '♾️',
  'country-flag': '🇹🇷',
  'special-flag': '🏴‍☠️',
};

/**
 * Returns all emoji category definitions.
 */
export function getEmojiCategories(): EmojiCategoryDefinition[] {
  return EMOJI_CATEGORIES;
}

/**
 * Returns all emojis from the dataset.
 */
export function getAllEmoji(): EmojiItem[] {
  return EMOJI_DATA;
}

/**
 * Retrieves a single emoji by its unique ID.
 */
export function getEmojiById(id: string): EmojiItem | undefined {
  return EMOJI_DATA.find((e) => e.id === id);
}

/**
 * Retrieves emojis belonging to a specific category (by category ID or slug).
 */
export function getEmojiByCategory(categoryOrSlug: string): EmojiItem[] {
  if (!categoryOrSlug || categoryOrSlug === 'all') {
    return EMOJI_DATA;
  }

  // Check if categoryOrSlug matches a category ID
  let targetCategoryId: EmojiCategory | undefined = EMOJI_CATEGORIES.find(
    (c) => c.id === categoryOrSlug
  )?.id;

  // If not found by ID, check by slug
  if (!targetCategoryId) {
    targetCategoryId = getCategoryBySlug(categoryOrSlug)?.id;
  }

  if (!targetCategoryId) {
    return [];
  }

  return EMOJI_DATA.filter((e) => e.category === targetCategoryId);
}

/**
 * Retrieves popular/curated emojis.
 */
export function getPopularEmoji(limit: number = 30): EmojiItem[] {
  return EMOJI_DATA.slice(0, limit);
}

/**
 * Normalizes text for case-insensitive Turkish search matching.
 */
export function normalizeSearchText(text: string): string {
  return text
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Performs a search across emojis by name, nameTr, character, and keywords.
 */
export function searchEmoji(
  query: string,
  options: EmojiQueryOptions = {}
): EmojiItem[] {
  let results = options.category ? getEmojiByCategory(options.category) : getAllEmoji();

  const cleanQuery = query ? normalizeSearchText(query.trim()) : '';

  if (cleanQuery) {
    results = results.filter((emoji) => {
      const matchName = normalizeSearchText(emoji.name).includes(cleanQuery);
      const matchNameTr = emoji.nameTr ? normalizeSearchText(emoji.nameTr).includes(cleanQuery) : false;
      const matchSubcategory = emoji.subcategoryNameTr ? normalizeSearchText(emoji.subcategoryNameTr).includes(cleanQuery) : false;
      const matchChar = emoji.character.includes(query.trim());
      const matchKeywords = emoji.keywords.some((kw) =>
        normalizeSearchText(kw).includes(cleanQuery)
      );

      return matchName || matchNameTr || matchSubcategory || matchChar || matchKeywords;
    });
  }

  // Pagination (offset & limit)
  if (options.offset !== undefined || options.limit !== undefined) {
    const start = options.offset || 0;
    const end = options.limit ? start + options.limit : undefined;
    results = results.slice(start, end);
  }

  return results;
}

/**
 * Groups a list of emojis by subcategory or category into clean EmojiGroup structures.
 * Ensures prominent section headings appear for every subcategory in Turkish.
 */
export function getGroupedEmoji(emojis: EmojiItem[]): EmojiGroup[] {
  const groupsMap = new Map<string, EmojiGroup>();

  for (const emoji of emojis) {
    const groupId = emoji.subcategory || emoji.category;
    const groupNameTr = emoji.subcategoryNameTr || getCategoryById(emoji.category)?.name || 'Emojiler';
    const subcategoryIcon = SUBCATEGORY_ICONS[groupId] || getCategoryById(emoji.category)?.icon || '✨';

    if (!groupsMap.has(groupId)) {
      groupsMap.set(groupId, {
        id: groupId,
        nameTr: groupNameTr,
        icon: subcategoryIcon,
        emojis: [],
      });
    }

    groupsMap.get(groupId)!.emojis.push(emoji);
  }

  return Array.from(groupsMap.values());
}
