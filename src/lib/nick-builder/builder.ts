import { transformText } from '@/lib/unicode/engine';
import { UNICODE_STYLES_DATA } from '@/data/unicode/styles';
import { ORNAMENT_PAIRS, PREFIX_PRESETS, SUFFIX_PRESETS, SAMPLE_NICKNAMES } from '@/data/nick-builder/presets';

export interface NickBuilderConfig {
  nickname: string;
  styleId: string;
  leftOrnament: string;
  rightOrnament: string;
  prefix: string;
  suffix: string;
  simplifyTurkish?: boolean;
}

export interface NickBuilderResult {
  fullNickname: string;
  styledText: string;
  styleName: string;
  characterCount: number;
  isValid: boolean;
  error?: string;
}

/**
 * Constructs a customized gaming nickname from modular parts.
 */
export function buildCustomNickname(config: NickBuilderConfig): NickBuilderResult {
  const nickname = config.nickname.trim();

  if (!nickname) {
    return {
      fullNickname: '',
      styledText: '',
      styleName: '',
      characterCount: 0,
      isValid: false,
      error: 'Lütfen nickiniz için bir metin girin.',
    };
  }

  // 1. Transform nickname using Unicode engine
  const transformRes = transformText(nickname, {
    styleId: config.styleId || 'bold-sans',
    simplifyTurkish: Boolean(config.simplifyTurkish),
  });

  const styledText = transformRes[0] ? transformRes[0].transformedText : nickname;
  const styleName = transformRes[0] ? transformRes[0].styleName : 'Varsayılan';

  // 2. Format spaces around prefix and suffix
  const prefixPart = config.prefix ? `${config.prefix.trim()} ` : '';
  const suffixPart = config.suffix ? ` ${config.suffix.trim()}` : '';
  const leftPart = config.leftOrnament || '';
  const rightPart = config.rightOrnament || '';

  // 3. Assemble full nickname
  const fullNickname = `${prefixPart}${leftPart}${styledText}${rightPart}${suffixPart}`;

  return {
    fullNickname,
    styledText,
    styleName,
    characterCount: Array.from(fullNickname).length,
    isValid: true,
  };
}

/**
 * Generates a creative random nickname configuration.
 */
export function generateRandomNicknameConfig(currentNickname?: string): NickBuilderConfig {
  // Select nickname (use current if non-empty, otherwise pick random)
  const baseNickname = currentNickname && currentNickname.trim()
    ? currentNickname.trim()
    : SAMPLE_NICKNAMES[Math.floor(Math.random() * SAMPLE_NICKNAMES.length)];

  // Pick random style (excluding pure frame-only styles for core font styling)
  const availableStyles = UNICODE_STYLES_DATA.filter((s) => s.category !== 'frames');
  const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];

  // Pick random ornament pair
  const availableOrnaments = ORNAMENT_PAIRS.filter((o) => o.id !== 'none');
  const randomOrnament = availableOrnaments[Math.floor(Math.random() * availableOrnaments.length)];

  // 50% chance to include a prefix or suffix
  const usePrefix = Math.random() > 0.5;
  const useSuffix = Math.random() > 0.5;

  const randomPrefix = usePrefix ? PREFIX_PRESETS[Math.floor(Math.random() * PREFIX_PRESETS.length)] : '';
  const randomSuffix = useSuffix ? SUFFIX_PRESETS[Math.floor(Math.random() * SUFFIX_PRESETS.length)] : '';

  return {
    nickname: baseNickname,
    styleId: randomStyle.id,
    leftOrnament: randomOrnament.left,
    rightOrnament: randomOrnament.right,
    prefix: randomPrefix,
    suffix: randomSuffix,
    simplifyTurkish: false,
  };
}
