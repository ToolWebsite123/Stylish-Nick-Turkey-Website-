import {
  UnicodeStyleDefinition,
  TransformOptions,
  TransformResult,
  CharacterTransformResult,
} from '@/types/unicode';
import { isTurkishCharacter, simplifyTurkishCharacter } from './turkish';

/**
 * Transforms a single character according to the provided style and Turkish options.
 */
export function transformCharacter(
  char: string,
  style: UnicodeStyleDefinition,
  simplifyTurkish: boolean = false
): CharacterTransformResult {
  let targetChar = char;
  let isSimplified = false;

  if (simplifyTurkish && isTurkishCharacter(char)) {
    targetChar = simplifyTurkishCharacter(char);
    isSimplified = true;
  }

  // Look up in character map
  if (style.mapping && style.mapping[targetChar] !== undefined) {
    return {
      originalChar: char,
      transformedChar: style.mapping[targetChar],
      isMapped: true,
      isFallback: false,
      isSimplified,
    };
  }

  // Fallback: preserve character as is (whether original or simplified)
  return {
    originalChar: char,
    transformedChar: targetChar,
    isMapped: false,
    isFallback: true,
    isSimplified,
  };
}

/**
 * Transforms input text for a single Unicode style definition.
 * Unicode-safe iteration using Array.from to correctly process multi-byte characters and emojis.
 */
export function transformSingleStyle(
  text: string,
  style: UnicodeStyleDefinition,
  options: TransformOptions = {}
): TransformResult {
  const simplifyTurkish = Boolean(options.simplifyTurkish);
  const characters = Array.from(text);
  const breakdown: CharacterTransformResult[] = [];
  const fallbackSet = new Set<string>();
  const unsupportedSet = new Set<string>();

  let hasFallback = false;
  let usedSimplification = false;

  for (const char of characters) {
    const res = transformCharacter(char, style, simplifyTurkish);
    breakdown.push(res);

    if (res.isSimplified) {
      usedSimplification = true;
    }

    if (res.isFallback) {
      hasFallback = true;
      fallbackSet.add(char);
      if (!/\s/.test(char)) {
        unsupportedSet.add(char);
      }
    }
  }

  let transformedText = breakdown.map((b) => b.transformedChar).join('');

  // Apply frame prefix and suffix if present
  if (style.prefix || style.suffix) {
    transformedText = `${style.prefix || ''}${transformedText}${style.suffix || ''}`;
  }

  return {
    originalText: text,
    transformedText,
    styleId: style.id,
    styleName: style.name,
    category: style.category,
    supportStatus: simplifyTurkish ? 'FULL' : style.supportStatus,
    hasFallback,
    usedSimplification,
    fallbackCharacters: Array.from(fallbackSet),
    unsupportedCharacters: Array.from(unsupportedSet),
    characterCount: characters.length,
    characterBreakdown: breakdown,
  };
}
