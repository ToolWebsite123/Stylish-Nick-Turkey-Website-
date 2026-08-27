import { PlatformStyleCompatibility } from '@/types/platform';

export const PLATFORM_COMPATIBILITY_DATA: PlatformStyleCompatibility[] = [
  // 1. Kalın Sans (bold-sans)
  { styleId: 'bold-sans', platformId: 'pubg', status: 'full', notesTr: 'PUBG nick alanında sorunsuz görüntülenir.' },
  { styleId: 'bold-sans', platformId: 'instagram', status: 'full', notesTr: 'Instagram Bio ve isim alanında %100 uyumlu.' },
  { styleId: 'bold-sans', platformId: 'discord', status: 'full', notesTr: 'Discord nick ve mesajlarında tam uyumlu.' },
  { styleId: 'bold-sans', platformId: 'whatsapp', status: 'full', notesTr: 'WhatsApp mesaj ve durumlarında sorunsuz.' },
  { styleId: 'bold-sans', platformId: 'tiktok', status: 'full', notesTr: 'TikTok profil isminde sorunsuz.' },

  // 2. İtalik Sans (italic-sans)
  { styleId: 'italic-sans', platformId: 'pubg', status: 'full' },
  { styleId: 'italic-sans', platformId: 'instagram', status: 'full' },
  { styleId: 'italic-sans', platformId: 'discord', status: 'full' },
  { styleId: 'italic-sans', platformId: 'whatsapp', status: 'full' },
  { styleId: 'italic-sans', platformId: 'tiktok', status: 'full' },

  // 3. Kalın İtalik Sans (bold-italic-sans)
  { styleId: 'bold-italic-sans', platformId: 'pubg', status: 'full' },
  { styleId: 'bold-italic-sans', platformId: 'instagram', status: 'full' },
  { styleId: 'bold-italic-sans', platformId: 'discord', status: 'full' },
  { styleId: 'bold-italic-sans', platformId: 'whatsapp', status: 'full' },
  { styleId: 'bold-italic-sans', platformId: 'tiktok', status: 'full' },

  // 4. Küçük Büyük Harf (small-caps)
  { styleId: 'small-caps', platformId: 'pubg', status: 'full', notesTr: 'PUBG nicklerinde yüksek görünürlük.' },
  { styleId: 'small-caps', platformId: 'instagram', status: 'full' },
  { styleId: 'small-caps', platformId: 'discord', status: 'full' },
  { styleId: 'small-caps', platformId: 'whatsapp', status: 'full' },
  { styleId: 'small-caps', platformId: 'tiktok', status: 'full' },

  // 5. Kalın Serif (bold-serif)
  { styleId: 'bold-serif', platformId: 'pubg', status: 'full' },
  { styleId: 'bold-serif', platformId: 'instagram', status: 'full' },
  { styleId: 'bold-serif', platformId: 'discord', status: 'full' },
  { styleId: 'bold-serif', platformId: 'whatsapp', status: 'full' },
  { styleId: 'bold-serif', platformId: 'tiktok', status: 'full' },

  // 6. İtalik Serif (italic-serif)
  { styleId: 'italic-serif', platformId: 'pubg', status: 'partial', notesTr: 'PUBG bazı eski sürümlerde düz fonta düşebilir.' },
  { styleId: 'italic-serif', platformId: 'instagram', status: 'full' },
  { styleId: 'italic-serif', platformId: 'discord', status: 'full' },
  { styleId: 'italic-serif', platformId: 'whatsapp', status: 'full' },
  { styleId: 'italic-serif', platformId: 'tiktok', status: 'full' },

  // 7. Kalın İtalik Serif (bold-italic-serif)
  { styleId: 'bold-italic-serif', platformId: 'pubg', status: 'full' },
  { styleId: 'bold-italic-serif', platformId: 'instagram', status: 'full' },
  { styleId: 'bold-italic-serif', platformId: 'discord', status: 'full' },
  { styleId: 'bold-italic-serif', platformId: 'whatsapp', status: 'full' },
  { styleId: 'bold-italic-serif', platformId: 'tiktok', status: 'full' },

  // 8. Kalın Gotik (gothic-bold)
  { styleId: 'gothic-bold', platformId: 'pubg', status: 'full', notesTr: 'PUBG oyuncuları arasında oldukça popüler.' },
  { styleId: 'gothic-bold', platformId: 'instagram', status: 'full' },
  { styleId: 'gothic-bold', platformId: 'discord', status: 'full' },
  { styleId: 'gothic-bold', platformId: 'whatsapp', status: 'full' },
  { styleId: 'gothic-bold', platformId: 'tiktok', status: 'full' },

  // 9. Klasik Gotik (gothic-light)
  { styleId: 'gothic-light', platformId: 'pubg', status: 'partial', notesTr: 'İnce hatlar bazı mobil ekranlarda küçük görünebilir.' },
  { styleId: 'gothic-light', platformId: 'instagram', status: 'full' },
  { styleId: 'gothic-light', platformId: 'discord', status: 'full' },
  { styleId: 'gothic-light', platformId: 'whatsapp', status: 'full' },
  { styleId: 'gothic-light', platformId: 'tiktok', status: 'full' },

  // 10. Kalın El Yazısı (cursive-bold)
  { styleId: 'cursive-bold', platformId: 'pubg', status: 'partial', notesTr: 'PUBG isim kartlarında karakter limiti dikkate alınmalıdır.' },
  { styleId: 'cursive-bold', platformId: 'instagram', status: 'full' },
  { styleId: 'cursive-bold', platformId: 'discord', status: 'full' },
  { styleId: 'cursive-bold', platformId: 'whatsapp', status: 'full' },
  { styleId: 'cursive-bold', platformId: 'tiktok', status: 'full' },

  // 11. Zarif El Yazısı (cursive-light)
  { styleId: 'cursive-light', platformId: 'pubg', status: 'partial' },
  { styleId: 'cursive-light', platformId: 'instagram', status: 'full' },
  { styleId: 'cursive-light', platformId: 'discord', status: 'full' },
  { styleId: 'cursive-light', platformId: 'whatsapp', status: 'full' },
  { styleId: 'cursive-light', platformId: 'tiktok', status: 'full' },

  // 12. Çift Çizgili (double-struck)
  { styleId: 'double-struck', platformId: 'pubg', status: 'full' },
  { styleId: 'double-struck', platformId: 'instagram', status: 'full' },
  { styleId: 'double-struck', platformId: 'discord', status: 'full' },
  { styleId: 'double-struck', platformId: 'whatsapp', status: 'full' },
  { styleId: 'double-struck', platformId: 'tiktok', status: 'full' },

  // 13. Yuvarlak İçi Boş (circled-light)
  { styleId: 'circled-light', platformId: 'pubg', status: 'full' },
  { styleId: 'circled-light', platformId: 'instagram', status: 'full' },
  { styleId: 'circled-light', platformId: 'discord', status: 'full' },
  { styleId: 'circled-light', platformId: 'whatsapp', status: 'full' },
  { styleId: 'circled-light', platformId: 'tiktok', status: 'full' },

  // 14. Yuvarlak İçi Koyu (circled-dark)
  { styleId: 'circled-dark', platformId: 'pubg', status: 'unsupported', notesTr: 'PUBG Mobile bu bloğu soru işareti (?) kutusu olarak gösterir.' },
  { styleId: 'circled-dark', platformId: 'instagram', status: 'full' },
  { styleId: 'circled-dark', platformId: 'discord', status: 'full' },
  { styleId: 'circled-dark', platformId: 'whatsapp', status: 'full' },
  { styleId: 'circled-dark', platformId: 'tiktok', status: 'partial', notesTr: 'TikTok kullanıcı adı alanında reddedilebilir.' },

  // 15. Kare İçi Boş (squared-light)
  { styleId: 'squared-light', platformId: 'pubg', status: 'unsupported', notesTr: 'PUBG Mobile kare blokları desteklemez.' },
  { styleId: 'squared-light', platformId: 'instagram', status: 'full' },
  { styleId: 'squared-light', platformId: 'discord', status: 'full' },
  { styleId: 'squared-light', platformId: 'whatsapp', status: 'full' },
  { styleId: 'squared-light', platformId: 'tiktok', status: 'partial' },

  // 16. Koyu Kare (squared-dark)
  { styleId: 'squared-dark', platformId: 'pubg', status: 'unsupported', notesTr: 'PUBG Mobile koyu kare bloğu desteklemez.' },
  { styleId: 'squared-dark', platformId: 'instagram', status: 'full' },
  { styleId: 'squared-dark', platformId: 'discord', status: 'full' },
  { styleId: 'squared-dark', platformId: 'whatsapp', status: 'full' },
  { styleId: 'squared-dark', platformId: 'tiktok', status: 'partial' },

  // 17. Geniş Monospace (monospace-wide)
  { styleId: 'monospace-wide', platformId: 'pubg', status: 'full' },
  { styleId: 'monospace-wide', platformId: 'instagram', status: 'full' },
  { styleId: 'monospace-wide', platformId: 'discord', status: 'full' },
  { styleId: 'monospace-wide', platformId: 'whatsapp', status: 'full' },
  { styleId: 'monospace-wide', platformId: 'tiktok', status: 'full' },

  // 18. Tam Genişlik (fullwidth)
  { styleId: 'fullwidth', platformId: 'pubg', status: 'partial', notesTr: 'Karakterler geniş olduğundan PUBG 14 harf sınırına takılabilir.' },
  { styleId: 'fullwidth', platformId: 'instagram', status: 'full' },
  { styleId: 'fullwidth', platformId: 'discord', status: 'full' },
  { styleId: 'fullwidth', platformId: 'whatsapp', status: 'full' },
  { styleId: 'fullwidth', platformId: 'tiktok', status: 'full' },

  // 19. Alt Simge (subscript-tiny)
  { styleId: 'subscript-tiny', platformId: 'pubg', status: 'partial', notesTr: 'Bazı küçük alt simgeler PUBG oyun içi sohbetinde küçük kalır.' },
  { styleId: 'subscript-tiny', platformId: 'instagram', status: 'full' },
  { styleId: 'subscript-tiny', platformId: 'discord', status: 'full' },
  { styleId: 'subscript-tiny', platformId: 'whatsapp', status: 'full' },
  { styleId: 'subscript-tiny', platformId: 'tiktok', status: 'full' },

  // 20. Üst Simge (superscript-tiny)
  { styleId: 'superscript-tiny', platformId: 'pubg', status: 'full' },
  { styleId: 'superscript-tiny', platformId: 'instagram', status: 'full' },
  { styleId: 'superscript-tiny', platformId: 'discord', status: 'full' },
  { styleId: 'superscript-tiny', platformId: 'whatsapp', status: 'full' },
  { styleId: 'superscript-tiny', platformId: 'tiktok', status: 'full' },

  // 21. Üstü Çizili (strikethrough)
  { styleId: 'strikethrough', platformId: 'pubg', status: 'partial', notesTr: 'Birleşik çizgi karakterleri cihaz sistem fontuna göre değişkenlik gösterir.' },
  { styleId: 'strikethrough', platformId: 'instagram', status: 'full' },
  { styleId: 'strikethrough', platformId: 'discord', status: 'full' },
  { styleId: 'strikethrough', platformId: 'whatsapp', status: 'full' },
  { styleId: 'strikethrough', platformId: 'tiktok', status: 'full' },

  // 22. Altı Çizili (underlined)
  { styleId: 'underlined', platformId: 'pubg', status: 'partial', notesTr: 'Birleşik alt çizgi bazı Android sürümlerinde kayabilir.' },
  { styleId: 'underlined', platformId: 'instagram', status: 'full' },
  { styleId: 'underlined', platformId: 'discord', status: 'full' },
  { styleId: 'underlined', platformId: 'whatsapp', status: 'full' },
  { styleId: 'underlined', platformId: 'tiktok', status: 'full' },

  // 23. Ters Yazı (upside-down)
  { styleId: 'upside-down', platformId: 'pubg', status: 'partial' },
  { styleId: 'upside-down', platformId: 'instagram', status: 'full' },
  { styleId: 'upside-down', platformId: 'discord', status: 'full' },
  { styleId: 'upside-down', platformId: 'whatsapp', status: 'full' },
  { styleId: 'upside-down', platformId: 'tiktok', status: 'full' },

  // 24. Kanatlı Nick (frame-wings)
  { styleId: 'frame-wings', platformId: 'pubg', status: 'full', notesTr: 'En popüler PUBG kanatlı nick stili.' },
  { styleId: 'frame-wings', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-wings', platformId: 'discord', status: 'full' },
  { styleId: 'frame-wings', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-wings', platformId: 'tiktok', status: 'full' },

  // 25. Yıldızlı Süsleme (frame-star-burst)
  { styleId: 'frame-star-burst', platformId: 'pubg', status: 'full' },
  { styleId: 'frame-star-burst', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-star-burst', platformId: 'discord', status: 'full' },
  { styleId: 'frame-star-burst', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-star-burst', platformId: 'tiktok', status: 'full' },

  // 26. Kılıçlı Oyuncu Nick (frame-swords)
  { styleId: 'frame-swords', platformId: 'pubg', status: 'full', notesTr: 'PUBG oyun içi sohbet ve klan isimlerinde sorunsuz.' },
  { styleId: 'frame-swords', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-swords', platformId: 'discord', status: 'full' },
  { styleId: 'frame-swords', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-swords', platformId: 'tiktok', status: 'full' },

  // 27. Estetik Parantez (frame-brackets)
  { styleId: 'frame-brackets', platformId: 'pubg', status: 'full' },
  { styleId: 'frame-brackets', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-brackets', platformId: 'discord', status: 'full' },
  { styleId: 'frame-brackets', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-brackets', platformId: 'tiktok', status: 'full' },

  // 28. Kral Taçlı (frame-crown)
  { styleId: 'frame-crown', platformId: 'pubg', status: 'full' },
  { styleId: 'frame-crown', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-crown', platformId: 'discord', status: 'full' },
  { styleId: 'frame-crown', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-crown', platformId: 'tiktok', status: 'full' },

  // 29. Kalpli Dalga (frame-heart-wave)
  { styleId: 'frame-heart-wave', platformId: 'pubg', status: 'partial', notesTr: 'Dalga simgeleri uzun olduğu için PUBG 14 harf sınırına dikkat ediniz.' },
  { styleId: 'frame-heart-wave', platformId: 'instagram', status: 'full' },
  { styleId: 'frame-heart-wave', platformId: 'discord', status: 'full' },
  { styleId: 'frame-heart-wave', platformId: 'whatsapp', status: 'full' },
  { styleId: 'frame-heart-wave', platformId: 'tiktok', status: 'full' },
];
