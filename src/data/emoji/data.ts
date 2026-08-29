import { EmojiItem } from '@/types/emoji';
import { EMOJI_CATEGORIES, getCategoryById, getCategoryBySlug } from './categories';

export { getCategoryById, getCategoryBySlug, EMOJI_CATEGORIES };

export const EMOJI_DATA: EmojiItem[] = [
  // ============================================================================
  // 1. GÜLÜCÜKLER & DUYGULAR (smileys-emotion)
  // ============================================================================
  // Subcategory: face-smiling (Gülen & Mutlu Yüzler)
  { id: 'emoji-grinning', character: '😀', name: 'Grinning Face', nameTr: 'Gülümseyen Yüz', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['gülme', 'mutlu', 'sevinç', 'gülücük', 'yüz'] },
  { id: 'emoji-smiley', character: '😃', name: 'Grinning Face Big Eyes', nameTr: 'Büyük Gözlü Gülümseme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['gülümseme', 'neşeli', 'sevinçli'] },
  { id: 'emoji-smile', character: '😄', name: 'Grinning Face Smiling Eyes', nameTr: 'Gülümseyen Gözlerle Gülme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['mutlu', 'gülme', 'kıkırdama'] },
  { id: 'emoji-grin', character: '😁', name: 'Beaming Face', nameTr: 'Işıldayan Gülümseme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['neşe', 'dişler', 'kahkaha'] },
  { id: 'emoji-laughing', character: '😆', name: 'Grinning Squinting Face', nameTr: 'Kısık Gözlü Gülümseme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['kahkaha', 'eğlenceli', 'komik'] },
  { id: 'emoji-sweat-smile', character: '😅', name: 'Grinning Face Sweat', nameTr: 'Terli Gülümseme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['rahatlama', 'utangaç', 'ter'] },
  { id: 'emoji-rofl', character: '🤣', name: 'Rolling on the Floor Laughing', nameTr: 'Gülmekten Yerlere Yatmak', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['kahkaha', 'komik', 'rofl'] },
  { id: 'emoji-joy', character: '😂', name: 'Face with Tears of Joy', nameTr: 'Gözlerinden Yaş Gelerek Gülme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['gözyaşı', 'komik', 'kahkaha', 'lol'] },
  { id: 'emoji-slightly-smiling', character: '🙂', name: 'Slightly Smiling Face', nameTr: 'Hafif Gülümseyen Yüz', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['tebessüm', 'sakin', 'nazik'] },
  { id: 'emoji-upside-down', character: '🙃', name: 'Upside Down Face', nameTr: 'Ters Yüz', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['şaka', 'alay', 'ters'] },
  { id: 'emoji-wink', character: '😉', name: 'Winking Face', nameTr: 'Göz Kırpan Yüz', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['göz kırpma', 'flört', 'şaka'] },
  { id: 'emoji-blush', character: '😊', name: 'Smiling Face with Smiling Eyes', nameTr: 'Zarif Gülümseme', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['tatlı', 'sevimli', 'mutlu'] },
  { id: 'emoji-halo', character: '😇', name: 'Smiling Face with Halo', nameTr: 'Hale İle Gülümseyen Yüz', category: 'smileys-emotion', subcategory: 'face-smiling', subcategoryNameTr: 'Gülen & Mutlu Yüzler', keywords: ['melek', 'masum', 'iyilik'] },

  // Subcategory: face-affection (Sevgi & Aşka Gözlü Yüzler)
  { id: 'emoji-love-eyes', character: '😍', name: 'Heart Eyes Face', nameTr: 'Kalp Gözlü Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['aşk', 'sevgi', 'hayran', 'kalp'] },
  { id: 'emoji-star-struck', character: '🤩', name: 'Star-Struck', nameTr: 'Yıldız Gözlü Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['yıldız', 'büyüleyici', 'hayranlık'] },
  { id: 'emoji-kissing-heart', character: '😘', name: 'Face Blowing a Kiss', nameTr: 'Öpücük Atan Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['öpücük', 'sevgi', 'kalp', 'muah'] },
  { id: 'emoji-kissing', character: '😗', name: 'Kissing Face', nameTr: 'Öpen Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['öpücük', 'tatlı', 'sevgi'] },
  { id: 'emoji-kissing-smiling-eyes', character: '😙', name: 'Kissing Face with Smiling Eyes', nameTr: 'Gülümseyerek Öpen Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['öpücük', 'sevgi'] },
  { id: 'emoji-kissing-closed-eyes', character: '😚', name: 'Kissing Face with Closed Eyes', nameTr: 'Gözleri Kapalı Öpen Yüz', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['öpücük', 'romantik'] },
  { id: 'emoji-smiling-heart-face', character: '🥰', name: 'Smiling Face with Hearts', nameTr: 'Kalplerle Çevrili Gülümseme', category: 'smileys-emotion', subcategory: 'face-affection', subcategoryNameTr: 'Sevgi & Sevimli Yüzler', keywords: ['kalpler', 'sevgi', 'aşk'] },

  // Subcategory: face-tongue (Dilli & Eğlenceli Yüzler)
  { id: 'emoji-yum', character: '😋', name: 'Face Savoring Food', nameTr: 'Nefis Yüz', category: 'smileys-emotion', subcategory: 'face-tongue', subcategoryNameTr: 'Dilli & Şakacı Yüzler', keywords: ['lezzetli', 'nefis', 'dil'] },
  { id: 'emoji-stuck-out-tongue', character: '😛', name: 'Face with Tongue', nameTr: 'Dil Çıkaran Yüz', category: 'smileys-emotion', subcategory: 'face-tongue', subcategoryNameTr: 'Dilli & Şakacı Yüzler', keywords: ['komik', 'şakacı', 'dil'] },
  { id: 'emoji-crazy', character: '😜', name: 'Winking Face with Tongue', nameTr: 'Göz Kırpıp Dil Çıkaran', category: 'smileys-emotion', subcategory: 'face-tongue', subcategoryNameTr: 'Dilli & Şakacı Yüzler', keywords: ['çılgın', 'eğlence', 'şaka'] },
  { id: 'emoji-zany', character: '🤪', name: 'Zany Face', nameTr: 'Kaçık Yüz', category: 'smileys-emotion', subcategory: 'face-tongue', subcategoryNameTr: 'Dilli & Şakacı Yüzler', keywords: ['çılgın', 'kaçık', 'komik'] },
  { id: 'emoji-squinting-tongue', character: '😝', name: 'Squinting Face with Tongue', nameTr: 'Gözlerini Kısıp Dil Çıkaran', category: 'smileys-emotion', subcategory: 'face-tongue', subcategoryNameTr: 'Dilli & Şakacı Yüzler', keywords: ['şaka', 'kahkaha', 'dil'] },

  // Subcategory: face-neutral-skeptical (Nötr, Sinsi & Şüpheci Yüzler)
  { id: 'emoji-shush', character: '🤫', name: 'Shushing Face', nameTr: 'Sessiz Ol Yüzü', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['sessiz', 'sir', 'sus'] },
  { id: 'emoji-thinking', character: '🤔', name: 'Thinking Face', nameTr: 'Düşünen Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['düşünce', 'fikir', 'soru'] },
  { id: 'emoji-zipper-mouth', character: '🤐', name: 'Zipper-Mouth Face', nameTr: 'Fermuar Ağızlı Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['sir', 'sessiz'] },
  { id: 'emoji-raised-eyebrow', character: '🤨', name: 'Face with Raised Eyebrow', nameTr: 'Tek Kaşı Havada Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['şüphe', 'merak', 'kaş'] },
  { id: 'emoji-neutral', character: '😐', name: 'Neutral Face', nameTr: 'Nötr Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['tepkisiz', 'düz', 'nötr'] },
  { id: 'emoji-expressionless', character: '😑', name: 'Expressionless Face', nameTr: 'Tepkisiz Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['ifadesiz', 'sıkıcı'] },
  { id: 'emoji-smirk', character: '😏', name: 'Smirking Face', nameTr: 'Bıyık Altından Gülümseyen Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['sinsi', 'flört', 'havalı'] },
  { id: 'emoji-unamused', character: '😒', name: 'Unamused Face', nameTr: 'Hoşnutsuz Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['sıkılmış', 'beğenmeyen'] },
  { id: 'emoji-rolling-eyes', character: '🙄', name: 'Face with Rolling Eyes', nameTr: 'Göz Deviren Yüz', category: 'smileys-emotion', subcategory: 'face-neutral-skeptical', subcategoryNameTr: 'Nötr & Şüpheci Yüzler', keywords: ['göz devirme', 'off'] },

  // Subcategory: face-glasses-costume (Gözlüklü & Kostümlü Yüzler)
  { id: 'emoji-cool', character: '😎', name: 'Smiling Face with Sunglasses', nameTr: 'Güneş Gözlüklü Havalı Yüz', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['havalı', 'gözlük', 'karizma', 'cool'] },
  { id: 'emoji-nerd', character: '🤓', name: 'Nerd Face', nameTr: 'Gözlüklü Bilgin Yüz', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['akıllı', 'bilgin', 'nerd'] },
  { id: 'emoji-monocle', character: '🧐', name: 'Face with Monocle', nameTr: 'Tek Gözlüklü Yüz', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['inceleme', 'detay'] },
  { id: 'emoji-cowboy', character: '🤠', name: 'Cowboy Hat Face', nameTr: 'Kovboy Şapkalı Yüz', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['kovboy', 'şapka'] },
  { id: 'emoji-party', character: '🥳', name: 'Partying Face', nameTr: 'Parti Yüzü', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['parti', 'kutlama', 'doğum günü'] },
  { id: 'emoji-ghost', character: '👻', name: 'Ghost', nameTr: 'Hayalet', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['hayalet', 'korku', 'cadılar bayramı'] },
  { id: 'emoji-skull', character: '💀', name: 'Skull', nameTr: 'Kuru Kafa', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['kuru kafa', 'ölüm', 'pubg', 'goth'] },
  { id: 'emoji-alien', character: '👽', name: 'Alien', nameTr: 'Uzaylı Yaratık', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['uzaylı', 'ufo', 'alien'] },
  { id: 'emoji-robot', character: '🤖', name: 'Robot Face', nameTr: 'Robot Yüzü', category: 'smileys-emotion', subcategory: 'face-glasses-costume', subcategoryNameTr: 'Gözlüklü & Kostümlü Yüzler', keywords: ['robot', 'teknoloji', 'ai'] },

  // Subcategory: heart (Kalpler & Renkli Kalpler)
  { id: 'emoji-red-heart', character: '❤️', name: 'Red Heart', nameTr: 'Kırmızı Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'aşk', 'sevgi', 'kırmızı'] },
  { id: 'emoji-orange-heart', character: '🧡', name: 'Orange Heart', nameTr: 'Turuncu Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'sevgi', 'turuncu'] },
  { id: 'emoji-yellow-heart', character: '💛', name: 'Yellow Heart', nameTr: 'Sarı Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'dostluk', 'sarı'] },
  { id: 'emoji-green-heart', character: '💚', name: 'Green Heart', nameTr: 'Yeşil Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'doğa', 'yeşil'] },
  { id: 'emoji-blue-heart', character: '💙', name: 'Blue Heart', nameTr: 'Mavi Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'güven', 'mavi'] },
  { id: 'emoji-purple-heart', character: '💜', name: 'Purple Heart', nameTr: 'Mor Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'asalet', 'mor'] },
  { id: 'emoji-black-heart', character: '🖤', name: 'Black Heart', nameTr: 'Siyah Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'goth', 'siyah', 'koyu'] },
  { id: 'emoji-white-heart', character: '🤍', name: 'White Heart', nameTr: 'Beyaz Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'temiz', 'beyaz'] },
  { id: 'emoji-brown-heart', character: '🤎', name: 'Brown Heart', nameTr: 'Kahverengi Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'kahve'] },
  { id: 'emoji-broken-heart', character: '💔', name: 'Broken Heart', nameTr: 'Kırık Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kırık', 'üzüntü', 'kalp', 'ayrılık'] },
  { id: 'emoji-sparkling-heart', character: '💖', name: 'Sparkling Heart', nameTr: 'Işıltılı Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['kalp', 'ışık', 'parıltı', 'sevgi'] },
  { id: 'emoji-growing-heart', character: '💗', name: 'Growing Heart', nameTr: 'Büyüyen Kalp', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['büyüyen', 'kalp', 'heyecan'] },
  { id: 'emoji-revolving-hearts', character: '💞', name: 'Revolving Hearts', nameTr: 'Dönen Kalpler', category: 'smileys-emotion', subcategory: 'heart', subcategoryNameTr: 'Kalpler & Renkli Kalpler', keywords: ['dönen', 'kalpler', 'aşk'] },

  // ============================================================================
  // 2. İNSANLAR & VÜCUT (people-body)
  // ============================================================================
  // Subcategory: hand-fingers-open (Açık El Hareketleri)
  { id: 'emoji-wave', character: '👋', name: 'Waving Hand', nameTr: 'El Sallama', category: 'people-body', subcategory: 'hand-fingers-open', subcategoryNameTr: 'Açık El Hareketleri', keywords: ['selam', 'merhaba', 'el', 'bye'] },
  { id: 'emoji-raised-back-hand', character: '🤚', name: 'Raised Back of Hand', nameTr: 'Kaldırılmış El', category: 'people-body', subcategory: 'hand-fingers-open', subcategoryNameTr: 'Açık El Hareketleri', keywords: ['dur', 'el', 'beş'] },
  { id: 'emoji-hand-splayed', character: '🖐️', name: 'Hand Splayed', nameTr: 'Açık Beş Parmak', category: 'people-body', subcategory: 'hand-fingers-open', subcategoryNameTr: 'Açık El Hareketleri', keywords: ['beş', 'el', 'açık'] },
  { id: 'emoji-raised-hand', character: '✋', name: 'Raised Hand', nameTr: 'El Kaldırma', category: 'people-body', subcategory: 'hand-fingers-open', subcategoryNameTr: 'Açık El Hareketleri', keywords: ['dur', 'soru', 'el'] },
  { id: 'emoji-vulcan-salute', character: '🖖', name: 'Vulcan Salute', nameTr: 'Vulcan Selamı', category: 'people-body', subcategory: 'hand-fingers-open', subcategoryNameTr: 'Açık El Hareketleri', keywords: ['uzay', 'selam'] },

  // Subcategory: hand-fingers-partial (Parmak & İşaret Hareketleri)
  { id: 'emoji-ok-hand', character: '👌', name: 'OK Hand', nameTr: 'Tamam / Harika Eli', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['ok', 'tamam', 'harika', 'mükemmel'] },
  { id: 'emoji-pinching-hand', character: '🤏', name: 'Pinching Hand', nameTr: 'Birazcık Eli', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['küçük', 'biraz', 'azıcık'] },
  { id: 'emoji-v-sign', character: '✌️', name: 'Victory Hand', nameTr: 'Zafer / Barış İşareti', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['zafer', 'barış', 'v'] },
  { id: 'emoji-crossed-fingers', character: '🤞', name: 'Crossed Fingers', nameTr: 'Şans Dileme (Parmak Çapraz)', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['şans', 'umut', 'kısmet'] },
  { id: 'emoji-love-you-gesture', character: '🤟', name: 'Love-You Gesture', nameTr: 'Seni Seviyorum İşareti', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['sevgi', 'aşk', 'rock'] },
  { id: 'emoji-rock-on', character: '🤘', name: 'Sign of the Horns', nameTr: 'Rock İşareti', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['rock', 'metal', 'müzik'] },
  { id: 'emoji-call-me', character: '🤙', name: 'Call Me Hand', nameTr: 'Beni Ara Eli', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['ara', 'telefon', 'shaka'] },
  { id: 'emoji-point-left', character: '👈', name: 'Backhand Index Pointing Left', nameTr: 'Sola İşaret Eden Parmak', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['sol', 'işaret'] },
  { id: 'emoji-point-right', character: '👉', name: 'Backhand Index Pointing Right', nameTr: 'Sağa İşaret Eden Parmak', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['sağ', 'işaret'] },
  { id: 'emoji-point-up', character: '👆', name: 'Backhand Index Pointing Up', nameTr: 'Yukarı İşaret Eden Parmak', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['yukarı', 'işaret'] },
  { id: 'emoji-point-down', character: '👇', name: 'Backhand Index Pointing Down', nameTr: 'Aşağı İşaret Eden Parmak', category: 'people-body', subcategory: 'hand-fingers-partial', subcategoryNameTr: 'Parmak & İşaret Hareketleri', keywords: ['aşağı', 'işaret'] },

  // Subcategory: hand-fingers-closed (Yumruk, Alkış & Dua Hareketleri)
  { id: 'emoji-thumbs-up', character: '👍', name: 'Thumbs Up', nameTr: 'Beğeni / Başparmak Yukarı', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['beğeni', 'like', 'evet', 'süper'] },
  { id: 'emoji-thumbs-down', character: '👎', name: 'Thumbs Down', nameTr: 'Beğenmeme / Başparmak Aşağı', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['dislike', 'kötü', 'hayır'] },
  { id: 'emoji-fist', character: '✊', name: 'Raised Fist', nameTr: 'Kaldırılmış Yumruk', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['güç', 'yumruk', 'direniş'] },
  { id: 'emoji-oncoming-fist', character: '👊', name: 'Oncoming Fist', nameTr: 'Yumruk Çakma', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['yumruk', 'selam', 'güç'] },
  { id: 'emoji-clap', character: '👏', name: 'Clapping Hands', nameTr: 'Alkış', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['alkış', 'tebrik', 'bravo'] },
  { id: 'emoji-raising-hands', character: '🙌', name: 'Raising Hands', nameTr: 'Elleri Havaya Kaldırma', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['kutlama', 'sevinç', 'şükür'] },
  { id: 'emoji-handshake', character: '🤝', name: 'Handshake', nameTr: 'El Sıkışma', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['anlaşma', 'ortaklık', 'tokalaşma'] },
  { id: 'emoji-folded-hands', character: '🙏', name: 'Folded Hands', nameTr: 'Teşekkür / Dua Eli', category: 'people-body', subcategory: 'hand-fingers-closed', subcategoryNameTr: 'Yumruk, Alkış & Dua', keywords: ['lütfen', 'dua', 'teşekkür', 'namaste'] },

  // Subcategory: body-parts (Vücut Parçaları & Organlar)
  { id: 'emoji-flexed-biceps', character: '💪', name: 'Flexed Biceps', nameTr: 'Kas / Güç', category: 'people-body', subcategory: 'body-parts', subcategoryNameTr: 'Vücut Parçaları & Organlar', keywords: ['güç', 'kas', 'fitness', 'spor'] },
  { id: 'emoji-brain', character: '🧠', name: 'Brain', nameTr: 'Beyin / Akıl', category: 'people-body', subcategory: 'body-parts', subcategoryNameTr: 'Vücut Parçaları & Organlar', keywords: ['beyin', 'akıl', 'zeka', 'düşünce'] },
  { id: 'emoji-eyes', character: '👀', name: 'Eyes', nameTr: 'Gözler', category: 'people-body', subcategory: 'body-parts', subcategoryNameTr: 'Vücut Parçaları & Organlar', keywords: ['bakış', 'göz', 'dikkat', 'merak'] },
  { id: 'emoji-tongue', character: '👅', name: 'Tongue', nameTr: 'Dil', category: 'people-body', subcategory: 'body-parts', subcategoryNameTr: 'Vücut Parçaları & Organlar', keywords: ['dil', 'tat', 'komik'] },
  { id: 'emoji-mouth', character: '👄', name: 'Mouth', nameTr: 'Dudaklar', category: 'people-body', subcategory: 'body-parts', subcategoryNameTr: 'Vücut Parçaları & Organlar', keywords: ['dudak', 'öpücük', 'ağız'] },

  // ============================================================================
  // 3. HAYVANLAR & DOĞA (animals-nature)
  // ============================================================================
  // Subcategory: animal-mammal (Memeli Hayvanlar)
  { id: 'emoji-dog', character: '🐶', name: 'Dog Face', nameTr: 'Köpek Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['köpek', 'sevimli', 'evcil'] },
  { id: 'emoji-cat', character: '🐱', name: 'Cat Face', nameTr: 'Kedi Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['kedi', 'tatlı', 'evcil'] },
  { id: 'emoji-mouse', character: '🐭', name: 'Mouse Face', nameTr: 'Fare Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['fare', 'küçük'] },
  { id: 'emoji-hamster', character: '🐹', name: 'Hamster Face', nameTr: 'Hamster Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['hamster', 'sevimli'] },
  { id: 'emoji-rabbit', character: '🐰', name: 'Rabbit Face', nameTr: 'Tavşan Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['tavşan', 'zıp zıp'] },
  { id: 'emoji-fox', character: '🦊', name: 'Fox Face', nameTr: 'Tilki Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['tilki', 'kurnaz'] },
  { id: 'emoji-bear', character: '🐻', name: 'Bear Face', nameTr: 'Ayı Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['ayı', 'sevimli'] },
  { id: 'emoji-panda', character: '🐼', name: 'Panda Face', nameTr: 'Panda Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['panda', 'çin', 'tatlı'] },
  { id: 'emoji-koala', character: '🐨', name: 'Koala', nameTr: 'Koala Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['koala'] },
  { id: 'emoji-tiger', character: '🐯', name: 'Tiger Face', nameTr: 'Kaplan Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['kaplan', 'vahşi'] },
  { id: 'emoji-lion', character: '🦁', name: 'Lion Face', nameTr: 'Aslan Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['aslan', 'kral'] },
  { id: 'emoji-wolf', character: '🐺', name: 'Wolf Face', nameTr: 'Kurt Yüzü', category: 'animals-nature', subcategory: 'animal-mammal', subcategoryNameTr: 'Memeli Hayvanlar', keywords: ['kurt', 'bozkurt', 'pubg'] },

  // Subcategory: animal-bird (Kuşlar & Kanatlılar)
  { id: 'emoji-eagle', character: '🦅', name: 'Eagle', nameTr: 'Kartal', category: 'animals-nature', subcategory: 'animal-bird', subcategoryNameTr: 'Kuşlar & Kanatlılar', keywords: ['kartal', 'kuş', 'özgürlük', 'beşiktaş'] },
  { id: 'emoji-duck', character: '🦆', name: 'Duck', nameTr: 'Ördek', category: 'animals-nature', subcategory: 'animal-bird', subcategoryNameTr: 'Kuşlar & Kanatlılar', keywords: ['ördek', 'göl'] },
  { id: 'emoji-owl', character: '🦉', name: 'Owl', nameTr: 'Baykuş', category: 'animals-nature', subcategory: 'animal-bird', subcategoryNameTr: 'Kuşlar & Kanatlılar', keywords: ['baykuş', 'gece', 'bilge'] },
  { id: 'emoji-peacock', character: '🦚', name: 'Peacock', nameTr: 'Tavus Kuşu', category: 'animals-nature', subcategory: 'animal-bird', subcategoryNameTr: 'Kuşlar & Kanatlılar', keywords: ['tavus kuşu', 'renkli'] },

  // Subcategory: plant-flower (Çiçekler & Bitkiler)
  { id: 'emoji-rose', character: '🌹', name: 'Rose', nameTr: 'Kırmızı Gül', category: 'animals-nature', subcategory: 'plant-flower', subcategoryNameTr: 'Çiçekler & Bitkiler', keywords: ['gül', 'çiçek', 'aşk', 'romantik'] },
  { id: 'emoji-sunflower', character: '🌻', name: 'Sunflower', nameTr: 'Ayçiçeği', category: 'animals-nature', subcategory: 'plant-flower', subcategoryNameTr: 'Çiçekler & Bitkiler', keywords: ['ayçiçeği', 'sarı', 'yaz'] },
  { id: 'emoji-blossom', character: '🌸', name: 'Cherry Blossom', nameTr: 'Kiraz Çiçeği (Sakura)', category: 'animals-nature', subcategory: 'plant-flower', subcategoryNameTr: 'Çiçekler & Bitkiler', keywords: ['sakura', 'çiçek', 'japonya'] },
  { id: 'emoji-cactus', character: '🌵', name: 'Cactus', nameTr: 'Kaktüs', category: 'animals-nature', subcategory: 'plant-flower', subcategoryNameTr: 'Çiçekler & Bitkiler', keywords: ['kaktüs', 'çöl'] },

  // Subcategory: sky-weather (Hava Durumu & Doğa)
  { id: 'emoji-sun', character: '☀️', name: 'Sun', nameTr: 'Güneş', category: 'animals-nature', subcategory: 'sky-weather', subcategoryNameTr: 'Hava Durumu & Doğa', keywords: ['güneş', 'sıcak', 'yaz'] },
  { id: 'emoji-moon', character: '🌙', name: 'Crescent Moon', nameTr: 'Hilal / Ay', category: 'animals-nature', subcategory: 'sky-weather', subcategoryNameTr: 'Hava Durumu & Doğa', keywords: ['gece', 'ay', 'hilal'] },
  { id: 'emoji-star', character: '⭐', name: 'Star', nameTr: 'Sarı Yıldız', category: 'animals-nature', subcategory: 'sky-weather', subcategoryNameTr: 'Hava Durumu & Doğa', keywords: ['yıldız', 'gece', 'parlak'] },
  { id: 'emoji-rainbow', character: '🌈', name: 'Rainbow', nameTr: 'Gökkuşağı', category: 'animals-nature', subcategory: 'sky-weather', subcategoryNameTr: 'Hava Durumu & Doğa', keywords: ['gökkuşağı', 'renkli'] },

  // ============================================================================
  // 4. YİYECEK & İÇECEK (food-drink)
  // ============================================================================
  // Subcategory: food-fruit (Meyveler)
  { id: 'emoji-apple', character: '🍎', name: 'Red Apple', nameTr: 'Kırmızı Elma', category: 'food-drink', subcategory: 'food-fruit', subcategoryNameTr: 'Meyveler', keywords: ['elma', 'meyve'] },
  { id: 'emoji-banana', character: '🍌', name: 'Banana', nameTr: 'Muz', category: 'food-drink', subcategory: 'food-fruit', subcategoryNameTr: 'Meyveler', keywords: ['muz', 'sarı'] },
  { id: 'emoji-watermelon', character: '🍉', name: 'Watermelon', nameTr: 'Karpuz', category: 'food-drink', subcategory: 'food-fruit', subcategoryNameTr: 'Meyveler', keywords: ['karpuz', 'yaz'] },
  { id: 'emoji-grapes', character: '🍇', name: 'Grapes', nameTr: 'Üzüm', category: 'food-drink', subcategory: 'food-fruit', subcategoryNameTr: 'Meyveler', keywords: ['üzüm', 'mor'] },
  { id: 'emoji-strawberry', character: '🍓', name: 'Strawberry', nameTr: 'Çilek', category: 'food-drink', subcategory: 'food-fruit', subcategoryNameTr: 'Meyveler', keywords: ['çilek', 'tatlı'] },

  // Subcategory: food-prepared (Yemekler & Fast Food)
  { id: 'emoji-pizza', character: '🍕', name: 'Pizza', nameTr: 'Pizza Dilimi', category: 'food-drink', subcategory: 'food-prepared', subcategoryNameTr: 'Yemekler & Fast Food', keywords: ['pizza', 'fastfood'] },
  { id: 'emoji-burger', character: '🍔', name: 'Hamburger', nameTr: 'Hamburger', category: 'food-drink', subcategory: 'food-prepared', subcategoryNameTr: 'Yemekler & Fast Food', keywords: ['burger', 'köfte'] },
  { id: 'emoji-fries', character: '🍟', name: 'French Fries', nameTr: 'Patates Kızartması', category: 'food-drink', subcategory: 'food-prepared', subcategoryNameTr: 'Yemekler & Fast Food', keywords: ['patates', 'fastfood'] },
  { id: 'emoji-taco', character: '🌮', name: 'Taco', nameTr: 'Tako', category: 'food-drink', subcategory: 'food-prepared', subcategoryNameTr: 'Yemekler & Fast Food', keywords: ['taco', 'meksika'] },

  // Subcategory: food-sweet (Tatlılar & Pastalar)
  { id: 'emoji-donut', character: '🍩', name: 'Donut', nameTr: 'Donat / Çörek', category: 'food-drink', subcategory: 'food-sweet', subcategoryNameTr: 'Tatlılar & Pastalar', keywords: ['donat', 'tatlı'] },
  { id: 'emoji-cookie', character: '🍪', name: 'Cookie', nameTr: 'Kurabiye', category: 'food-drink', subcategory: 'food-sweet', subcategoryNameTr: 'Tatlılar & Pastalar', keywords: ['kurabiye', 'çikolata'] },
  { id: 'emoji-cake', character: '🎂', name: 'Birthday Cake', nameTr: 'Doğum Günü Pastası', category: 'food-drink', subcategory: 'food-sweet', subcategoryNameTr: 'Tatlılar & Pastalar', keywords: ['pasta', 'doğum günü'] },

  // Subcategory: drink (İçecekler)
  { id: 'emoji-coffee', character: '☕', name: 'Hot Beverage', nameTr: 'Kahve / Çay', category: 'food-drink', subcategory: 'drink', subcategoryNameTr: 'İçecekler', keywords: ['kahve', 'çay', 'sıcak'] },
  { id: 'emoji-beer', character: '🍺', name: 'Beer Mug', nameTr: 'Bira Bardağı', category: 'food-drink', subcategory: 'drink', subcategoryNameTr: 'İçecekler', keywords: ['bira', 'içecek'] },

  // ============================================================================
  // 5. SEYAHAT & YERLER (travel-places)
  // ============================================================================
  { id: 'emoji-car', character: '🚗', name: 'Automobile', nameTr: 'Kırmızı Araba', category: 'travel-places', subcategory: 'transport-ground', subcategoryNameTr: 'Kara & Hava Taşıtları', keywords: ['araba', 'oto'] },
  { id: 'emoji-racecar', character: '🏎️', name: 'Racing Car', nameTr: 'Yarış Arabası', category: 'travel-places', subcategory: 'transport-ground', subcategoryNameTr: 'Kara & Hava Taşıtları', keywords: ['yarış', 'hız'] },
  { id: 'emoji-airplane', character: '✈️', name: 'Airplane', nameTr: 'Uçak', category: 'travel-places', subcategory: 'transport-ground', subcategoryNameTr: 'Kara & Hava Taşıtları', keywords: ['uçak', 'seyahat'] },
  { id: 'emoji-rocket', character: '🚀', name: 'Rocket', nameTr: 'Roket', category: 'travel-places', subcategory: 'transport-ground', subcategoryNameTr: 'Kara & Hava Taşıtları', keywords: ['roket', 'uzay'] },
  { id: 'emoji-house', character: '🏠', name: 'House', nameTr: 'Ev', category: 'travel-places', subcategory: 'place-building', subcategoryNameTr: 'Binalar & Şehirler', keywords: ['ev', 'bina'] },
  { id: 'emoji-castle', character: '🏰', name: 'Castle', nameTr: 'Kale / Şato', category: 'travel-places', subcategory: 'place-building', subcategoryNameTr: 'Binalar & Şehirler', keywords: ['kale', 'şato'] },

  // ============================================================================
  // 6. AKTİVİTELER (activities)
  // ============================================================================
  { id: 'emoji-soccer', character: '⚽', name: 'Soccer Ball', nameTr: 'Futbol Topu', category: 'activities', subcategory: 'sport', subcategoryNameTr: 'Spor & Toplar', keywords: ['futbol', 'maç'] },
  { id: 'emoji-basketball', character: '🏀', name: 'Basketball', nameTr: 'Basketbol Topu', category: 'activities', subcategory: 'sport', subcategoryNameTr: 'Spor & Toplar', keywords: ['basketbol'] },
  { id: 'emoji-video-game', character: '🎮', name: 'Video Game Controller', nameTr: 'Oyun Kolu (Gamepad)', category: 'activities', subcategory: 'game', subcategoryNameTr: 'Oyun & Eğlence', keywords: ['gamer', 'pubg'] },
  { id: 'emoji-dice', character: '🎲', name: 'Game Die', nameTr: 'Zar', category: 'activities', subcategory: 'game', subcategoryNameTr: 'Oyun & Eğlence', keywords: ['zar', 'şans'] },
  { id: 'emoji-trophy', character: '🏆', name: 'Trophy', nameTr: 'Kupa / Şampiyonluk', category: 'activities', subcategory: 'award-event', subcategoryNameTr: 'Ödüller & Kupalar', keywords: ['kupa', 'şampiyon'] },
  { id: 'emoji-medal', character: '🥇', name: '1st Place Medal', nameTr: 'Altın Madalya', category: 'activities', subcategory: 'award-event', subcategoryNameTr: 'Ödüller & Kupalar', keywords: ['madalya', 'altın'] },

  // ============================================================================
  // 7. NESNELER (objects)
  // ============================================================================
  { id: 'emoji-bulb', character: '💡', name: 'Light Bulb', nameTr: 'Ampul / Fikir', category: 'objects', subcategory: 'light-music', subcategoryNameTr: 'Elektronik & Aksesuar', keywords: ['ampul', 'fikir'] },
  { id: 'emoji-moneybag', character: '💰', name: 'Money Bag', nameTr: 'Para Torbası', category: 'objects', subcategory: 'money', subcategoryNameTr: 'Para & Değerli Eşyalar', keywords: ['para', 'zengin'] },
  { id: 'emoji-gem', character: '💎', name: 'Gem Stone', nameTr: 'Elmas / Mücevher', category: 'objects', subcategory: 'money', subcategoryNameTr: 'Para & Değerli Eşyalar', keywords: ['elmas', 'değerli'] },
  { id: 'emoji-crown', character: '👑', name: 'Crown', nameTr: 'Kral Tacı', category: 'objects', subcategory: 'clothing', subcategoryNameTr: 'Giyim & Süs Eşyaları', keywords: ['taç', 'kral', 'pubg'] },
  { id: 'emoji-swords', character: '⚔️', name: 'Crossed Swords', nameTr: 'Çapraz Kılıçlar', category: 'objects', subcategory: 'tool-weapon', subcategoryNameTr: 'Aletler & Silahlar', keywords: ['kılıç', 'savaş'] },
  { id: 'emoji-bomb', character: '💣', name: 'Bomb', nameTr: 'Bomba', category: 'objects', subcategory: 'tool-weapon', subcategoryNameTr: 'Aletler & Silahlar', keywords: ['bomba', 'patlama'] },
  { id: 'emoji-shield', character: '🛡️', name: 'Shield', nameTr: 'Kalkan', category: 'objects', subcategory: 'tool-weapon', subcategoryNameTr: 'Aletler & Silahlar', keywords: ['kalkan', 'koruma'] },

  // ============================================================================
  // 8. SEMBOLLER (symbols)
  // ============================================================================
  { id: 'emoji-warning', character: '⚠️', name: 'Warning', nameTr: 'Uyarı Sembolü', category: 'symbols', subcategory: 'warning', subcategoryNameTr: 'Uyarı & Güvenlik İşaretleri', keywords: ['uyarı', 'dikkat'] },
  { id: 'emoji-no-entry', character: '⛔', name: 'No Entry', nameTr: 'Giriş Yasak', category: 'symbols', subcategory: 'warning', subcategoryNameTr: 'Uyarı & Güvenlik İşaretleri', keywords: ['yasak', 'dur'] },
  { id: 'emoji-radioactive', character: '☢️', name: 'Radioactive', nameTr: 'Radyoaktif', category: 'symbols', subcategory: 'warning', subcategoryNameTr: 'Uyarı & Güvenlik İşaretleri', keywords: ['nükleer', 'pubg'] },
  { id: 'emoji-biohazard', character: '☣️', name: 'Biohazard', nameTr: 'Biyolojik Tehlike', category: 'symbols', subcategory: 'warning', subcategoryNameTr: 'Uyarı & Güvenlik İşaretleri', keywords: ['virüs', 'pubg'] },
  { id: 'emoji-infinity', character: '♾️', name: 'Infinity', nameTr: 'Sonsuzluk Sembolü', category: 'symbols', subcategory: 'math-geometric', subcategoryNameTr: 'Matematik & Şekiller', keywords: ['sonsuzluk'] },
  { id: 'emoji-check', character: '✅', name: 'Check Mark Button', nameTr: 'Yeşil Onay (Check)', category: 'symbols', subcategory: 'math-geometric', subcategoryNameTr: 'Matematik & Şekiller', keywords: ['onay', 'check'] },
  { id: 'emoji-cross-mark', character: '❌', name: 'Cross Mark', nameTr: 'Kırmızı Çarpı', category: 'symbols', subcategory: 'math-geometric', subcategoryNameTr: 'Matematik & Şekiller', keywords: ['çarpı', 'yanlış'] },

  // ============================================================================
  // 9. BAYRAKLAR (flags)
  // ============================================================================
  { id: 'emoji-flag-tr', character: '🇹🇷', name: 'Flag: Turkey', nameTr: 'Türkiye Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['türkiye', 'türk', 'tr'] },
  { id: 'emoji-flag-az', character: '🇦🇿', name: 'Flag: Azerbaijan', nameTr: 'Azerbaycan Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['azerbaycan'] },
  { id: 'emoji-flag-us', character: '🇺🇸', name: 'Flag: United States', nameTr: 'ABD Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['amerika', 'usa'] },
  { id: 'emoji-flag-gb', character: '🇬🇧', name: 'Flag: United Kingdom', nameTr: 'İngiltere Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['ingiltere', 'uk'] },
  { id: 'emoji-flag-de', character: '🇩🇪', name: 'Flag: Germany', nameTr: 'Almanya Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['almanya'] },
  { id: 'emoji-flag-fr', character: '🇫🇷', name: 'Flag: France', nameTr: 'Fransa Bayrağı', category: 'flags', subcategory: 'country-flag', subcategoryNameTr: 'Ülke Bayrakları', keywords: ['fransa'] },
  { id: 'emoji-flag-pirate', character: '🏴‍☠️', name: 'Pirate Flag', nameTr: 'Korsan Bayrağı', category: 'flags', subcategory: 'special-flag', subcategoryNameTr: 'Özel & Sembol Bayraklar', keywords: ['korsan', 'pubg'] },
  { id: 'emoji-flag-rainbow', character: '🏳️‍🌈', name: 'Rainbow Flag', nameTr: 'Gökkuşağı Bayrağı', category: 'flags', subcategory: 'special-flag', subcategoryNameTr: 'Özel & Sembol Bayraklar', keywords: ['gökkuşağı'] },
  { id: 'emoji-flag-checkered', character: '🏁', name: 'Chequered Flag', nameTr: 'Yarış Bitiş Bayrağı', category: 'flags', subcategory: 'special-flag', subcategoryNameTr: 'Özel & Sembol Bayraklar', keywords: ['yarış', 'finish'] },
];
