import {
  PlatformId,
  PlatformCompatibilityStatus,
  Platform,
  PlatformStyleCompatibility,
  PlatformStatusDisplay,
} from '@/types/platform';
import { UnicodeStyleDefinition } from '@/types/unicode';
import { PLATFORMS_DATA } from '@/data/platforms/data';
import { PLATFORM_COMPATIBILITY_DATA } from '@/data/platforms/compatibility';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';

/**
 * Returns all supported platform metadata definitions.
 */
export function getAllPlatforms(): Platform[] {
  return [...PLATFORMS_DATA];
}

/**
 * Returns platform definition by platform ID.
 */
export function getPlatformDefinition(platformId: PlatformId): Platform | undefined {
  return PLATFORMS_DATA.find((p) => p.id === platformId);
}

/**
 * Gets compatibility record for a specific style and platform pair.
 */
export function getPlatformCompatibility(
  styleId: string,
  platformId: PlatformId
): PlatformStyleCompatibility {
  const match = PLATFORM_COMPATIBILITY_DATA.find(
    (c) => c.styleId === styleId && c.platformId === platformId
  );

  if (match) return match;

  return {
    styleId,
    platformId,
    status: 'unknown',
    notesTr: 'Bu platform için uyumluluk testi henüz doğrulanmadı.',
  };
}

/**
 * Returns all Unicode styles compatible with the specified platform.
 */
export function getCompatibleStyles(
  platformId: PlatformId,
  statusFilter?: PlatformCompatibilityStatus
): UnicodeStyleDefinition[] {
  return filterStylesByPlatform(UNICODE_STYLES_DATA, platformId, statusFilter);
}

/**
 * Filters a list of Unicode styles based on platform compatibility.
 */
export function filterStylesByPlatform(
  styles: UnicodeStyleDefinition[],
  platformId: PlatformId,
  statusFilter?: PlatformCompatibilityStatus
): UnicodeStyleDefinition[] {
  return styles.filter((style) => {
    const compat = getPlatformCompatibility(style.id, platformId);

    if (statusFilter) {
      return compat.status === statusFilter;
    }

    // Default: Return styles that are either 'full' or 'partial'
    return compat.status === 'full' || compat.status === 'partial';
  });
}

/**
 * Returns standardized Turkish label, badge style, and icon for compatibility status.
 */
export function getPlatformStatusDisplay(
  status: PlatformCompatibilityStatus
): PlatformStatusDisplay {
  switch (status) {
    case 'full':
      return {
        status: 'full',
        labelTr: 'Uyumlu',
        badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        icon: '✓',
      };
    case 'partial':
      return {
        status: 'partial',
        labelTr: 'Kısmen Uyumlu',
        badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
        icon: '⚠️',
      };
    case 'unsupported':
      return {
        status: 'unsupported',
        labelTr: 'Desteklenmiyor',
        badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
        icon: '✕',
      };
    case 'unknown':
    default:
      return {
        status: 'unknown',
        labelTr: 'Kontrol Edilmedi',
        badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
        icon: '?',
      };
  }
}
