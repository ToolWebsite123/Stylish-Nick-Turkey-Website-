import { SymbolItem, SymbolValidationResult, SymbolCategory } from '@/types/symbol';
import { SYMBOL_CATEGORIES } from '@/data/symbols/categories';

const VALID_CATEGORY_IDS = new Set<SymbolCategory>(
  SYMBOL_CATEGORIES.map((c) => c.id)
);

/**
 * Validates a list of symbol items to ensure uniqueness, proper metadata, and category validity.
 */
export function validateSymbolsData(symbols: SymbolItem[]): SymbolValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const seenIds = new Set<string>();
  const seenCharacters = new Map<string, string>(); // character -> symbol.id

  const categoryCounts: Record<SymbolCategory, number> = {
    hearts: 0,
    stars: 0,
    crowns: 0,
    arrows: 0,
    flowers: 0,
    gaming: 0,
    decorative: 0,
    brackets: 0,
    cute: 0,
    special: 0,
  };

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    const indexPrefix = `Symbol #${i + 1}`;
    const idStr = symbol.id || 'unknown';

    // 1. Required ID check & uniqueness
    if (!symbol.id) {
      errors.push(`${indexPrefix}: 'id' is required.`);
    } else {
      if (seenIds.has(symbol.id)) {
        errors.push(`${indexPrefix}: Duplicate symbol ID '${symbol.id}'.`);
      }
      seenIds.add(symbol.id);
    }

    // 2. Character check & uniqueness
    if (!symbol.character) {
      errors.push(`${indexPrefix} (${idStr}): 'character' is required.`);
    } else {
      if (seenCharacters.has(symbol.character)) {
        const existingId = seenCharacters.get(symbol.character);
        errors.push(
          `${indexPrefix} (${idStr}): Duplicate character '${symbol.character}' (already used in symbol '${existingId}').`
        );
      }
      seenCharacters.set(symbol.character, idStr);
    }

    // 3. Name check
    if (!symbol.name && !symbol.nameTr) {
      errors.push(`${indexPrefix} (${idStr}): 'name' is required.`);
    }

    // 4. Category check & counting
    if (!symbol.category) {
      errors.push(`${indexPrefix} (${idStr}): 'category' is required.`);
    } else if (!VALID_CATEGORY_IDS.has(symbol.category)) {
      errors.push(
        `${indexPrefix} (${idStr}): Invalid category '${symbol.category}'. Must be one of: ${Array.from(VALID_CATEGORY_IDS).join(', ')}.`
      );
    } else {
      categoryCounts[symbol.category] = (categoryCounts[symbol.category] || 0) + 1;
    }

    // 5. Popularity check
    if (typeof symbol.popularity !== 'number' || symbol.popularity < 1 || symbol.popularity > 100) {
      warnings.push(
        `${indexPrefix} (${idStr}): 'popularity' should be a number between 1 and 100.`
      );
    }

    // 6. Keywords check
    if (!Array.isArray(symbol.keywords) || symbol.keywords.length === 0) {
      warnings.push(`${indexPrefix} (${idStr}): 'keywords' should be a non-empty array.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    totalCount: symbols.length,
    categoryCounts,
  };
}
