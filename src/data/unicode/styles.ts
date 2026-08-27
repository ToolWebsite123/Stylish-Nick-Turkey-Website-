import { UnicodeStyleDefinition } from '@/types/unicode';

const ALPHABET_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

function buildMapFromCodePoints(
  lowerStart?: number,
  upperStart?: number,
  digitStart?: number
): Record<string, string> {
  const map: Record<string, string> = {};
  if (lowerStart !== undefined) {
    for (let i = 0; i < 26; i++) {
      map[ALPHABET_LOWER[i]] = String.fromCodePoint(lowerStart + i);
    }
  }
  if (upperStart !== undefined) {
    for (let i = 0; i < 26; i++) {
      map[ALPHABET_UPPER[i]] = String.fromCodePoint(upperStart + i);
    }
  }
  if (digitStart !== undefined) {
    for (let i = 0; i < 10; i++) {
      map[DIGITS[i]] = String.fromCodePoint(digitStart + i);
    }
  }
  return map;
}

function buildCombiningMap(combiningChar: string): Record<string, string> {
  const map: Record<string, string> = {};
  const allLetters = ALPHABET_LOWER + ALPHABET_UPPER + DIGITS + 'çğışöüÇĞİÖŞÜ';
  for (const char of allLetters) {
    map[char] = char + combiningChar;
  }
  return map;
}

const BOLD_SANS_MAP = buildMapFromCodePoints(0x1D5EE, 0x1D5D4, 0x1D7EC);
const BOLD_SERIF_MAP = buildMapFromCodePoints(0x1D41A, 0x1D400, 0x1D7CE);
const GOTHIC_BOLD_MAP = buildMapFromCodePoints(0x1D586, 0x1D56C);

export const UNICODE_STYLES_DATA: UnicodeStyleDefinition[] = [
  {
    id: 'bold-sans',
    name: 'Kalın Sans (Bold)',
    slug: 'kalin-sans',
    category: 'sans',
    description: 'Düz kalın görünüm. Türkçe harfler orijinal okunabilir biçimde korunur.',
    descriptionTr: 'Düz kalın görünüm. Türkçe harfler orijinal okunabilir biçimde korunur.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: BOLD_SANS_MAP,
    isPopular: true,
    tags: ['popular', 'bold', 'sans', 'clean'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'italic-sans',
    name: 'İtalik Sans (Italic)',
    slug: 'italik-sans',
    category: 'sans',
    description: 'Yatık italik yazı stili.',
    descriptionTr: 'Yatık italik yazı stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: buildMapFromCodePoints(0x1D622, 0x1D608),
    isPopular: false,
    tags: ['italic', 'sans', 'clean'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'bold-italic-sans',
    name: 'Kalın İtalik Sans',
    slug: 'kalin-italik-sans',
    category: 'sans',
    description: 'Hem kalın hem yatık vurgulu metin stili.',
    descriptionTr: 'Hem kalın hem yatık vurgulu metin stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: buildMapFromCodePoints(0x1D656, 0x1D63C),
    isPopular: true,
    tags: ['popular', 'bold', 'italic', 'sans'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'small-caps',
    name: 'Küçük Büyük Harf (Small Caps)',
    slug: 'kucuk-buyuk-harf',
    category: 'sans',
    description: 'Büyük harf formunda küçük karakterler. Türkçe harfleri tam destekler.',
    descriptionTr: 'Büyük harf formunda küçük karakterler. Türkçe harfleri tam destekler.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['A-Z', 'a-z', 'ç, ğ, ı, ö, ş, ü', 'Ç, Ğ, İ, Ö, Ş, Ü'],
    mapping: {
      ...buildMapFromCodePoints(0, 0),
      'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ',
      'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ',
      's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
      'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
      'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
      'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
      'ç': 'ç', 'ğ': 'ɢ', 'ı': 'ɪ', 'ö': 'ö', 'ş': 's', 'ü': 'ü',
      'Ç': 'Ç', 'Ğ': 'ɢ', 'İ': 'İ', 'Ö': 'Ö', 'Ş': 'S', 'Ü': 'Ü'
    },
    isPopular: true,
    tags: ['popular', 'aesthetic', 'smallcaps', 'minimal', 'full-turkish'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'bold-serif',
    name: 'Kalın Serif',
    slug: 'kalin-serif',
    category: 'serif',
    description: 'Tırnaklı kalın font stili.',
    descriptionTr: 'Tırnaklı kalın font stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: BOLD_SERIF_MAP,
    isPopular: false,
    tags: ['bold', 'serif', 'classic'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'italic-serif',
    name: 'İtalik Serif',
    slug: 'italik-serif',
    category: 'serif',
    description: 'Tırnaklı zarif italik stil.',
    descriptionTr: 'Tırnaklı zarif italik stil.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: {
      ...buildMapFromCodePoints(0x1D44E, 0x1D434),
      'h': 'ℎ'
    },
    isPopular: false,
    tags: ['italic', 'serif', 'classic'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'bold-italic-serif',
    name: 'Kalın İtalik Serif',
    slug: 'kalin-italik-serif',
    category: 'serif',
    description: 'Ağır tırnaklı yatık font stili.',
    descriptionTr: 'Ağır tırnaklı yatık font stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: buildMapFromCodePoints(0x1D482, 0x1D468),
    isPopular: false,
    tags: ['bold', 'italic', 'serif'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'gothic-bold',
    name: 'Kalın Gotik (Fraktur Bold)',
    slug: 'kalin-gotik',
    category: 'gothic',
    description: 'Ağır ortaçağ gotik kaligrafi stili.',
    descriptionTr: 'Ağır ortaçağ gotik kaligrafi stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: GOTHIC_BOLD_MAP,
    isPopular: true,
    tags: ['popular', 'gothic', 'bold', 'dark', 'pubg'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'gothic-light',
    name: 'Klasik Gotik (Fraktur)',
    slug: 'klasik-gotik',
    category: 'gothic',
    description: 'İnce tırnaklı gotik el yazısı.',
    descriptionTr: 'İnce tırnaklı gotik el yazısı.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: {
      ...buildMapFromCodePoints(0x1D51E, 0x1D504),
      'C': 'ℭ', 'H': 'ℌ', 'I': 'ℑ', 'R': 'ℜ', 'Z': 'ℨ'
    },
    isPopular: false,
    tags: ['gothic', 'classic', 'dark'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'cursive-bold',
    name: 'Kalın El Yazısı (Bold Script)',
    slug: 'kalin-el-yazisi',
    category: 'cursive',
    description: 'Koyu kavisli el yazısı kaligrafi stili.',
    descriptionTr: 'Koyu kavisli el yazısı kaligrafi stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: buildMapFromCodePoints(0x1D4EA, 0x1D4D0),
    isPopular: true,
    tags: ['popular', 'cursive', 'bold', 'script', 'instagram'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'cursive-light',
    name: 'Zarif El Yazısı (Script)',
    slug: 'zarif-el-yazisi',
    category: 'cursive',
    description: 'Estetik kavisli el yazısı kaligrafi stili.',
    descriptionTr: 'Estetik kavisli el yazısı kaligrafi stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    mapping: {
      ...buildMapFromCodePoints(0x1D4B6, 0x1D49C),
      'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'M': 'ℳ', 'R': 'ℛ',
      'e': 'ℯ', 'g': 'ℊ', 'o': 'ℴ'
    },
    isPopular: false,
    tags: ['cursive', 'script', 'aesthetic'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'double-struck',
    name: 'Çift Çizgili (Blackboard)',
    slug: 'cift-cizgili',
    category: 'decorative',
    description: 'Matematiksel çift çizgili karakter stili.',
    descriptionTr: 'Matematiksel çift çizgili karakter stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: {
      ...buildMapFromCodePoints(0x1D552, 0x1D538, 0x1D7D8),
      'C': 'ℂ', 'H': 'ℍ', 'N': 'ℕ', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'Z': 'ℤ'
    },
    isPopular: true,
    tags: ['popular', 'decorative', 'aesthetic', 'math'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'circled-light',
    name: 'Yuvarlak İçi Boş (Circled)',
    slug: 'yuvarlak-ici-bos',
    category: 'decorative',
    description: 'Daire içine alınmış şeffaf harfler.',
    descriptionTr: 'Daire içine alınmış şeffaf harfler.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: {
      'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
      'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
      '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
    },
    isPopular: true,
    tags: ['popular', 'decorative', 'circled'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'circled-dark',
    name: 'Yuvarlak İçi Koyu (Negative Circled)',
    slug: 'yuvarlak-ici-koyu',
    category: 'decorative',
    description: 'Siyah daire içi beyaz harfler. Sadeleştirme modu önerilir.',
    descriptionTr: 'Siyah daire içi beyaz harfler. Sadeleştirme modu önerilir.',
    supportStatus: 'UNSUPPORTED',
    supportedCharacterGroups: ['A-Z', '0-9'],
    mapping: (() => {
      const map: Record<string, string> = {};
      for (let i = 0; i < 26; i++) {
        const charUpper = ALPHABET_UPPER[i];
        const charLower = ALPHABET_LOWER[i];
        const darkChar = String.fromCodePoint(0x1F150 + i);
        map[charUpper] = darkChar;
        map[charLower] = darkChar;
      }
      map['0'] = '⓿';
      const darkDigits = ['❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾'];
      for (let i = 1; i <= 9; i++) {
        map[DIGITS[i]] = darkDigits[i - 1];
      }
      return map;
    })(),
    isPopular: false,
    tags: ['decorative', 'circled', 'dark'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'squared-light',
    name: 'Kare İçi Boş (Squared Light)',
    slug: 'kare-ici-bos',
    category: 'decorative',
    description: 'Şeffaf kare içi harfler.',
    descriptionTr: 'Şeffaf kare içi harfler.',
    supportStatus: 'UNSUPPORTED',
    supportedCharacterGroups: ['A-Z'],
    mapping: (() => {
      const map: Record<string, string> = {};
      for (let i = 0; i < 26; i++) {
        const squaredChar = String.fromCodePoint(0x1F130 + i);
        map[ALPHABET_UPPER[i]] = squaredChar;
        map[ALPHABET_LOWER[i]] = squaredChar;
      }
      return map;
    })(),
    isPopular: false,
    tags: ['decorative', 'squared'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'squared-dark',
    name: 'Koyu Kare (Negative Squared)',
    slug: 'koyu-kare',
    category: 'decorative',
    description: 'Siyah kare içinde beyaz harfler.',
    descriptionTr: 'Siyah kare içinde beyaz harfler.',
    supportStatus: 'UNSUPPORTED',
    supportedCharacterGroups: ['A-Z'],
    mapping: (() => {
      const map: Record<string, string> = {};
      for (let i = 0; i < 26; i++) {
        const squaredDarkChar = String.fromCodePoint(0x1F170 + i);
        map[ALPHABET_UPPER[i]] = squaredDarkChar;
        map[ALPHABET_LOWER[i]] = squaredDarkChar;
      }
      return map;
    })(),
    isPopular: false,
    tags: ['decorative', 'squared', 'dark'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'monospace-wide',
    name: 'Geniş Monospace',
    slug: 'genis-monospace',
    category: 'monospace',
    description: 'Eşit aralıklı daktilo font stili.',
    descriptionTr: 'Eşit aralıklı daktilo font stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: buildMapFromCodePoints(0x1D68A, 0x1D670, 0x1D7F6),
    isPopular: true,
    tags: ['popular', 'monospace', 'minimal', 'typewriter'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'fullwidth',
    name: 'Tam Genişlik (Fullwidth)',
    slug: 'tam-genislik',
    category: 'monospace',
    description: 'Geniş aralıklı Doğu Asya karakter stili.',
    descriptionTr: 'Geniş aralıklı Doğu Asya karakter stili.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    mapping: (() => {
      const map: Record<string, string> = {};
      for (let i = 0; i < 26; i++) {
        map[ALPHABET_LOWER[i]] = String.fromCodePoint(0xFF41 + i);
        map[ALPHABET_UPPER[i]] = String.fromCodePoint(0xFF21 + i);
      }
      for (let i = 0; i < 10; i++) {
        map[DIGITS[i]] = String.fromCodePoint(0xFF10 + i);
      }
      return map;
    })(),
    isPopular: false,
    tags: ['monospace', 'aesthetic', 'vaporwave'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'subscript-tiny',
    name: 'Alt Simge (Subscript)',
    slug: 'alt-simge',
    category: 'decorative',
    description: 'Küçük alt hizada harf ve rakam yazımı.',
    descriptionTr: 'Küçük alt hizada harf ve rakam yazımı.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['a-z', '0-9'],
    mapping: {
      'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
      '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
    },
    isPopular: false,
    tags: ['decorative', 'tiny', 'aesthetic'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'superscript-tiny',
    name: 'Üst Simge (Superscript)',
    slug: 'ust-simge',
    category: 'decorative',
    description: 'Küçük üst hizada harf ve rakam yazımı.',
    descriptionTr: 'Küçük üst hizada harf ve rakam yazımı.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['a-z', '0-9'],
    mapping: {
      'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    },
    isPopular: true,
    tags: ['popular', 'decorative', 'tiny', 'aesthetic'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'strikethrough',
    name: 'Üstü Çizili (Strikethrough)',
    slug: 'ustu-cizili',
    category: 'decorative',
    description: 'Her harfin üstü yatık çizgi ile çizilir. Türkçe harfleri tam destekler.',
    descriptionTr: 'Her harfin üstü yatık çizgi ile çizilir. Türkçe harfleri tam destekler.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler', '0-9'],
    mapping: buildCombiningMap('\u0336'),
    isPopular: true,
    tags: ['popular', 'decorative', 'full-turkish', 'aesthetic'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'underlined',
    name: 'Altı Çizili (Underline)',
    slug: 'alti-cizili',
    category: 'decorative',
    description: 'Her harfin altı düz çizgi ile çizilir. Türkçe harfleri tam destekler.',
    descriptionTr: 'Her harfin altı düz çizgi ile çizilir. Türkçe harfleri tam destekler.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler', '0-9'],
    mapping: buildCombiningMap('\u0332'),
    isPopular: true,
    tags: ['popular', 'decorative', 'full-turkish', 'aesthetic'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'upside-down',
    name: 'Ters Yazı (Flip / Upside Down)',
    slug: 'ters-yazi',
    category: 'decorative',
    description: 'Karakterleri baş aşağı döndüren görünüm.',
    descriptionTr: 'Karakterleri baş aşağı döndüren görünüm.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler', '0-9'],
    mapping: {
      'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
      'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': '⋊', 'L': '⅂', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ỏ', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
      '0': '0', '1': 'Ɩ', '2': '乙', '3': 'Ɛ', '4': '⇛', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
      'ç': 'ɔ̄', 'ğ': 'ƃ̄', 'ı': 'ı', 'ö': 'ö', 'ş': 's', 'ü': 'n̈',
      'Ç': 'Ɔ̄', 'Ğ': '⅁̄', 'İ': 'İ', 'Ö': 'Ö', 'Ş': 'S', 'Ü': '∩̄'
    },
    isPopular: false,
    tags: ['decorative', 'flip', 'full-turkish'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-wings',
    name: 'Kanatlı Nick (Wings)',
    slug: 'kanatli-nick',
    category: 'frames',
    description: 'PUBG ve oyunlar için sol ve sağ kanat süslemesi.',
    descriptionTr: 'PUBG ve oyunlar için sol ve sağ kanat süslemesi.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    prefix: '꧁༺ ',
    suffix: ' ༻꧂',
    mapping: BOLD_SANS_MAP,
    isPopular: true,
    tags: ['popular', 'gaming', 'pubg', 'wings', 'frames'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-star-burst',
    name: 'Yıldızlı Süsleme (Star Burst)',
    slug: 'yildizli-susleme',
    category: 'frames',
    description: 'Metni yıldız simgeleri ile çevreleyen stil.',
    descriptionTr: 'Metni yıldız simgeleri ile çevreleyen stil.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z'],
    prefix: '★彡 ',
    suffix: ' 彡★',
    mapping: GOTHIC_BOLD_MAP,
    isPopular: true,
    tags: ['popular', 'gaming', 'pubg', 'stars', 'frames'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-swords',
    name: 'Kılıçlı Oyuncu Nick (Swords)',
    slug: 'kilicli-nick',
    category: 'frames',
    description: 'Savaş oyunları için çapraz kılıç çerçevesi.',
    descriptionTr: 'Savaş oyunları için çapraz kılıç çerçevesi.',
    supportStatus: 'PARTIAL',
    supportedCharacterGroups: ['A-Z', 'a-z', '0-9'],
    prefix: '⚔️ ',
    suffix: ' ⚔️',
    mapping: BOLD_SERIF_MAP,
    isPopular: true,
    tags: ['popular', 'gaming', 'pubg', 'swords', 'frames'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-brackets',
    name: 'Estetik Parantez (Asian Brackets)',
    slug: 'estetik-parantez',
    category: 'frames',
    description: 'Metni Asya kavisli çerçeve içine alır. Türkçe harfleri tam korur.',
    descriptionTr: 'Metni Asya kavisli çerçeve içine alır. Türkçe harfleri tam korur.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler'],
    prefix: '【 ',
    suffix: ' 】',
    mapping: {},
    isPopular: true,
    tags: ['popular', 'gaming', 'pubg', 'brackets', 'full-turkish'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-crown',
    name: 'Kral Taçlı (Crown)',
    slug: 'kral-tacli',
    category: 'frames',
    description: 'Kral tacı simgeleri ile süslenmiş nick stili.',
    descriptionTr: 'Kral tacı simgeleri ile süslenmiş nick stili.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler'],
    prefix: '👑 ',
    suffix: ' 👑',
    mapping: {},
    isPopular: true,
    tags: ['popular', 'gaming', 'pubg', 'crown', 'full-turkish'],
    platforms: ['pubg', 'instagram', 'discord', 'whatsapp'],
  },
  {
    id: 'frame-heart-wave',
    name: 'Kalpli Dalga (Heart Wave)',
    slug: 'kalpli-dalga',
    category: 'frames',
    description: 'Kalp ve kıvrımlı hatlarla süslenmiş nick stili.',
    descriptionTr: 'Kalp ve kıvrımlı hatlarla süslenmiş nick stili.',
    supportStatus: 'FULL',
    supportedCharacterGroups: ['Tüm Harfler', 'Türkçe Harfler'],
    prefix: '•.¸♡ ',
    suffix: ' ♡¸.•',
    mapping: {},
    isPopular: true,
    tags: ['popular', 'aesthetic', 'hearts', 'full-turkish'],
    platforms: ['instagram', 'discord', 'whatsapp'],
  }
];
