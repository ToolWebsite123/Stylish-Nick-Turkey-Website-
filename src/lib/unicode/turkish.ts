import { TurkishSupportStatus } from '@/types/unicode';

export const TURKISH_LOWERCASE = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'];
export const TURKISH_UPPERCASE = ['Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'];
export const ALL_TURKISH_CHARACTERS = [...TURKISH_LOWERCASE, ...TURKISH_UPPERCASE];

export const TURKISH_SIMPLIFICATION_MAP: Record<string, string> = {
  'ç': 'c',
  'ğ': 'g',
  'ı': 'i',
  'ö': 'o',
  'ş': 's',
  'ü': 'u',
  'Ç': 'C',
  'Ğ': 'G',
  'İ': 'I',
  'Ö': 'O',
  'Ş': 'S',
  'Ü': 'U',
};

/**
 * Checks if a character is a Turkish-specific letter with diacritics.
 */
export function isTurkishCharacter(char: string): boolean {
  return ALL_TURKISH_CHARACTERS.includes(char);
}

/**
 * Simplifies a single Turkish character to its plain ASCII equivalent.
 * Returns the character unchanged if it's not a Turkish letter.
 */
export function simplifyTurkishCharacter(char: string): string {
  return TURKISH_SIMPLIFICATION_MAP[char] || char;
}

/**
 * Converts all Turkish characters in a text string to ASCII equivalents.
 * Mode: "Uyumluluk için sadeleştir"
 */
export function simplifyTurkishText(text: string): string {
  return text.replace(/[çğışöüÇĞİÖŞÜ]/g, (char) => TURKISH_SIMPLIFICATION_MAP[char] || char);
}

/**
 * Detects the Turkish character support status of a character mapping dictionary.
 */
export function detectTurkishCharacterSupport(mapping: Record<string, string>): TurkishSupportStatus {
  let mappedCount = 0;
  for (const char of ALL_TURKISH_CHARACTERS) {
    if (mapping[char] !== undefined) {
      mappedCount++;
    }
  }

  if (mappedCount === ALL_TURKISH_CHARACTERS.length) {
    return 'FULL';
  }
  if (mappedCount > 0) {
    return 'PARTIAL';
  }
  return 'UNSUPPORTED';
}

