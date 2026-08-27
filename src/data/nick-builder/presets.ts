export interface OrnamentPair {
  id: string;
  name: string;
  left: string;
  right: string;
  category: 'wings' | 'stars' | 'swords' | 'brackets' | 'crowns' | 'pubg' | 'aesthetic' | 'none';
}

export const ORNAMENT_PAIRS: OrnamentPair[] = [
  { id: 'wings-classic', name: 'Klasik Melek Kanadı', left: '꧁༺ ', right: ' ༻꧂', category: 'wings' },
  { id: 'wings-gothic', name: 'Gotik Çapraz Kanat', left: '༒༺ ', right: ' ༻༒', category: 'wings' },
  { id: 'pubg-king-tag', name: 'PUBG Kral İşareti (亗)', left: '亗 ', right: ' 亗', category: 'pubg' },
  { id: 'pubg-angel-wing', name: 'PUBG Melek Tüyü (𓆩𓆪)', left: '𓆩 ', right: ' 𓆪', category: 'pubg' },
  { id: 'stars-burst', name: 'Yıldız Patlaması (★彡)', left: '★彡 ', right: ' 彡★', category: 'stars' },
  { id: 'swords-warrior', name: 'Savaşçı Kılıçları (⚔️)', left: '⚔️ ', right: ' ⚔️', category: 'swords' },
  { id: 'brackets-asian', name: 'Asya Kavisli Parantez', left: '【 ', right: ' 】', category: 'brackets' },
  { id: 'brackets-corner', name: 'Japon Köşe Parantez', left: '「 ', right: ' 」', category: 'brackets' },
  { id: 'crowns-king', name: 'Kral Taçları (👑)', left: '👑 ', right: ' 👑', category: 'crowns' },
  { id: 'aesthetic-heart-wave', name: 'Kalpli Estetik Dalga', left: '•.¸♡ ', right: ' ♡¸.•', category: 'aesthetic' },
  { id: 'aesthetic-flower', name: 'Çiçek Aynası (✿)', left: '✿ ', right: ' ✿', category: 'aesthetic' },
  { id: 'aesthetic-sparkle', name: 'Işıltı Çerçeve (✦)', left: '✦ ', right: ' ✦', category: 'aesthetic' },
  { id: 'aesthetic-diamond', name: 'Siyah Baklava (◆)', left: '◆ ', right: ' ◆', category: 'aesthetic' },
  { id: 'none', name: 'Süsleme Yok', left: '', right: '', category: 'none' },
];

export const PREFIX_PRESETS = ['[PRO]', '[TR]', '★', '⚡', 'v1.', 'xX_', '『PRO』', '👑', 'VIP', 'iM_'];
export const SUFFIX_PRESETS = ['[TR]', '[PRO]', '⚡', '★', 'ツ', '_Xx', '『TR』', '👑', 'FF', '007'];

export const SAMPLE_NICKNAMES = [
  'Shadow',
  'Viper',
  'Phantom',
  'Phoenix',
  'Slayer',
  'Hunter',
  'Alpha',
  'Titan',
  'Vortex',
  'Legend',
  'Şampiyon',
  'Kral',
];
