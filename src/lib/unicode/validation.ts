import { UnicodeStyleDefinition, StyleValidationResult } from '@/types/unicode';
import { detectTurkishCharacterSupport } from './turkish';

const VALID_CATEGORIES = ['sans', 'serif', 'gothic', 'cursive', 'decorative', 'monospace', 'frames'];

/**
 * Validates a list of Unicode style definitions to ensure integrity, uniqueness, and proper metadata.
 */
export function validateStylesData(styles: UnicodeStyleDefinition[]): StyleValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const seenTransformations = new Map<string, string>(); // Signature -> style.id

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    const indexPrefix = `Style #${i + 1}`;
    const styleIdStr = style.id || 'unknown';

    // 1. Required field checks
    if (!style.id) {
      errors.push(`${indexPrefix}: 'id' is required.`);
    } else {
      if (seenIds.has(style.id)) {
        errors.push(`${indexPrefix}: Duplicate style ID '${style.id}'.`);
      }
      seenIds.add(style.id);
    }

    if (!style.name) {
      errors.push(`${indexPrefix} (${styleIdStr}): 'name' is required.`);
    }

    if (!style.slug) {
      errors.push(`${indexPrefix} (${styleIdStr}): 'slug' is required.`);
    } else {
      if (seenSlugs.has(style.slug)) {
        errors.push(`${indexPrefix}: Duplicate slug '${style.slug}'.`);
      }
      seenSlugs.add(style.slug);
    }

    if (!style.category || !VALID_CATEGORIES.includes(style.category)) {
      errors.push(`${indexPrefix} (${styleIdStr}): Invalid category '${style.category}'. Must be one of: ${VALID_CATEGORIES.join(', ')}.`);
    }

    const description = style.description || style.descriptionTr;
    if (!description) {
      errors.push(`${indexPrefix} (${styleIdStr}): 'description' is required.`);
    }

    if (!['FULL', 'PARTIAL', 'UNSUPPORTED'].includes(style.supportStatus)) {
      errors.push(`${indexPrefix} (${styleIdStr}): Invalid supportStatus '${style.supportStatus}'. Must be FULL, PARTIAL, or UNSUPPORTED.`);
    }

    if (!Array.isArray(style.supportedCharacterGroups) || style.supportedCharacterGroups.length === 0) {
      errors.push(`${indexPrefix} (${styleIdStr}): 'supportedCharacterGroups' must be a non-empty array.`);
    }

    // 2. Character mapping validation
    if (!style.mapping || typeof style.mapping !== 'object') {
      errors.push(`${indexPrefix} (${styleIdStr}): 'mapping' must be a valid object.`);
    } else {
      for (const [key, value] of Object.entries(style.mapping)) {
        if (!key || !value) {
          errors.push(`${indexPrefix} (${styleIdStr}): Invalid character pair key '${key}' -> value '${value}'.`);
        }
      }
    }

    // 3. Turkish Support Status Validation Check
    if (style.mapping && typeof style.mapping === 'object') {
      const calculatedSupport = detectTurkishCharacterSupport(style.mapping);
      // For frame styles without custom mapping, if prefix/suffix exists with empty mapping, all chars remain intact => FULL
      const isFrameWithoutMap = style.category === 'frames' && Object.keys(style.mapping).length === 0;
      const expectedSupport = isFrameWithoutMap ? 'FULL' : calculatedSupport;

      if (style.supportStatus === 'FULL' && expectedSupport !== 'FULL') {
        errors.push(`${indexPrefix} (${styleIdStr}): Style claims 'FULL' Turkish support, but mapping does not cover all 12 Turkish characters.`);
      }
    }

    // 4. Duplicate transformation check (detect fake identical styles)
    const mapKeys = Object.keys(style.mapping || {}).sort().join(',');
    const mapVals = Object.values(style.mapping || {}).sort().join(',');
    const transformSignature = `${style.prefix || ''}|${style.suffix || ''}|${mapKeys}|${mapVals}`;

    if (seenTransformations.has(transformSignature)) {
      const existingId = seenTransformations.get(transformSignature);
      warnings.push(`${indexPrefix} (${styleIdStr}): Has identical transformation mapping to style '${existingId}'.`);
    } else {
      seenTransformations.set(transformSignature, styleIdStr);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
