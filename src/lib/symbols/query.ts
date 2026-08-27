import { SymbolItem, SymbolCategoryDefinition, SymbolCategory, SymbolQueryOptions } from '@/types/symbol';
import { SYMBOLS_DATA } from '@/data/symbols/data';
import { SYMBOL_CATEGORIES, getCategoryBySlug } from '@/data/symbols/categories';

/**
 * Returns all symbol category definitions.
 */
export function getSymbolCategories(): SymbolCategoryDefinition[] {
  return SYMBOL_CATEGORIES;
}

/**
 * Returns all symbols from the database.
 */
export function getAllSymbols(): SymbolItem[] {
  return SYMBOLS_DATA;
}

/**
 * Retrieves a single symbol by its unique ID.
 */
export function getSymbolById(id: string): SymbolItem | undefined {
  return SYMBOLS_DATA.find((s) => s.id === id);
}

/**
 * Retrieves symbols belonging to a specific category (by category ID or slug).
 */
export function getSymbolsByCategory(categoryOrSlug: string): SymbolItem[] {
  if (!categoryOrSlug || categoryOrSlug === 'all') {
    return SYMBOLS_DATA;
  }

  // Check if categoryOrSlug is a category ID
  let targetCategoryId: SymbolCategory | undefined = SYMBOL_CATEGORIES.find(
    (c) => c.id === categoryOrSlug
  )?.id;

  // If not found by ID, check by slug
  if (!targetCategoryId) {
    targetCategoryId = getCategoryBySlug(categoryOrSlug)?.id;
  }

  if (!targetCategoryId) {
    return [];
  }

  return SYMBOLS_DATA.filter((s) => s.category === targetCategoryId);
}

/**
 * Retrieves the most popular symbols ordered by popularity score descending.
 */
export function getPopularSymbols(limit: number = 20): SymbolItem[] {
  return [...SYMBOLS_DATA]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
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
 * Performs a search across symbols by name, character, keywords, and tags.
 * Supports filtering by category and sorting by popularity or name.
 */
export function searchSymbols(
  query: string,
  options: SymbolQueryOptions = {}
): SymbolItem[] {
  let results = options.category ? getSymbolsByCategory(options.category) : getAllSymbols();

  const cleanQuery = query ? normalizeSearchText(query.trim()) : '';

  if (cleanQuery) {
    results = results.filter((symbol) => {
      const matchName = normalizeSearchText(symbol.name).includes(cleanQuery);
      const matchChar = symbol.character.includes(query.trim());
      const matchKeywords = symbol.keywords.some((kw) =>
        normalizeSearchText(kw).includes(cleanQuery)
      );
      const matchTags = symbol.tags.some((tag) =>
        normalizeSearchText(tag).includes(cleanQuery)
      );

      return matchName || matchChar || matchKeywords || matchTags;
    });
  }

  // Sorting
  const sortBy = options.sortBy || 'popularity';
  const sortOrder = options.sortOrder || 'desc';

  results = [...results].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'popularity') {
      comparison = b.popularity - a.popularity;
    } else if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name, 'tr-TR');
    } else if (sortBy === 'id') {
      comparison = a.id.localeCompare(b.id);
    }

    return sortOrder === 'asc' ? -comparison : comparison;
  });

  // Pagination (offset & limit)
  if (options.offset !== undefined || options.limit !== undefined) {
    const start = options.offset || 0;
    const end = options.limit ? start + options.limit : undefined;
    results = results.slice(start, end);
  }

  return results;
}
