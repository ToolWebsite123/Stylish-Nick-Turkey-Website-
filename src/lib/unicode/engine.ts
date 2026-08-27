import { UnicodeStyleDefinition, TransformOptions, TransformResult, UnicodeCategory } from '@/types/unicode';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';
import { transformSingleStyle } from './transform';

/**
 * Retrieves all supported Unicode style definitions, optionally filtered by category.
 */
export function getSupportedStyles(category?: UnicodeCategory | 'all'): UnicodeStyleDefinition[] {
  if (!category || category === 'all') {
    return UNICODE_STYLES_DATA;
  }
  return UNICODE_STYLES_DATA.filter((style) => style.category === category);
}

/**
 * Retrieves a single Unicode style definition by its unique ID.
 */
export function getUnicodeStyle(styleId: string): UnicodeStyleDefinition | undefined {
  return UNICODE_STYLES_DATA.find((style) => style.id === styleId);
}

/**
 * Main public entry point for transforming text across available Unicode styles.
 * 
 * @param text The input string to transform.
 * @param options Transformation parameters (styleId, category, simplifyTurkish).
 * @returns Array of structured TransformResult objects.
 */
export function transformText(text: string, options: TransformOptions = {}): TransformResult[] {
  // Handle single style transformation if styleId is provided
  if (options.styleId) {
    const style = getUnicodeStyle(options.styleId);
    if (!style) {
      return [];
    }
    return [transformSingleStyle(text, style, options)];
  }

  // Filter styles by category if provided
  const targetStyles = getSupportedStyles(options.category);

  return targetStyles.map((style) => transformSingleStyle(text, style, options));
}
