export type TurkishSupportStatus = 'FULL' | 'PARTIAL' | 'UNSUPPORTED';

export type UnicodeCategory =
  | 'sans'
  | 'serif'
  | 'gothic'
  | 'cursive'
  | 'decorative'
  | 'monospace'
  | 'frames'
  | 'symbols';

export interface UnicodeStyleDefinition {
  id: string;
  name: string;
  slug: string;
  category: UnicodeCategory;
  description: string;
  descriptionTr?: string;
  supportStatus: TurkishSupportStatus;
  supportedCharacterGroups: string[];
  mapping: Record<string, string>;
  prefix?: string;
  suffix?: string;
  tags?: string[];
  platforms?: ('pubg' | 'instagram' | 'discord' | 'whatsapp')[];
  isPopular?: boolean;
}

export interface TransformOptions {
  styleId?: string;
  category?: UnicodeCategory | 'all';
  simplifyTurkish?: boolean;
}

export interface CharacterTransformResult {
  originalChar: string;
  transformedChar: string;
  isMapped: boolean;
  isFallback: boolean;
  isSimplified: boolean;
}

export interface TransformResult {
  originalText: string;
  transformedText: string;
  styleId: string;
  styleName: string;
  category: UnicodeCategory;
  supportStatus: TurkishSupportStatus;
  hasFallback: boolean;
  usedSimplification: boolean;
  fallbackCharacters: string[];
  unsupportedCharacters: string[];
  characterCount: number;
  characterBreakdown: CharacterTransformResult[];
}

export interface StyleValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
