import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export interface AiNickRequest {
  keyword: string;
  style?: 'dark' | 'pro' | 'mythic' | 'funny' | 'aesthetic';
  count?: number;
}

export interface GeneratedNickItem {
  id: string;
  nickname: string;
  taglineTr: string;
  vibe: string;
}

// Fallback generator when API Key is not set or network fails
function generateFallbackNicks(keyword: string, style: string = 'pro', count: number = 8): GeneratedNickItem[] {
  const cleanKey = keyword.trim() || 'Hero';
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const stylePrefixes: Record<string, string[]> = {
    dark: ['Shadow', 'Dark', 'Night', 'Kabus', 'Zifir', 'Ölümcül', 'Vortex', 'Phantom'],
    pro: ['PRO', 'Master', 'Apex', 'Titan', 'Kral', 'Reis', 'Zirve', 'Prime'],
    mythic: ['God', 'Mythic', 'Efsane', 'Valhalla', 'Zeus', 'Ejder', 'Aslan', 'Slayer'],
    funny: ['Tavuk', 'Çaylak', 'Cıbıl', 'Patates', 'Acemi', 'Bomba', 'Şeker', 'Pati'],
    aesthetic: ['Vibe', 'Aura', 'Cloud', 'Luna', 'Soft', 'Velvet', 'Gül', 'Dream'],
  };

  const styleOrnaments: Record<string, [string, string][]> = {
    dark: [['꧁༺ ', ' ༻꧂'], ['⚔️ ', ' ⚔️'], ['༒ ', ' ༒'], ['☠️ ', ' ☠️']],
    pro: [['★彡 ', ' 彡★'], ['『 ', ' 』'], ['[ ', ' ]'], ['👑 ', ' 👑']],
    mythic: [['⚡ ', ' ⚡'], ['♛ ', ' ♛'], ['༺ ', ' ༻'], ['🐉 ', ' 🐉']],
    funny: [['🤡 ', ' 🤡'], ['🍌 ', ' 🍌'], ['🤪 ', ' 🤪'], ['✨ ', ' ✨']],
    aesthetic: [['✿ ', ' ✿'], ['☁️ ', ' ☁️'], ['♡ ', ' ♡'], ['✧ ', ' ✧']],
  };

  const prefixes = stylePrefixes[style] || stylePrefixes.pro;
  const ornaments = styleOrnaments[style] || styleOrnaments.pro;

  const results: GeneratedNickItem[] = [];

  for (let i = 0; i < count; i++) {
    const p = prefixes[i % prefixes.length];
    const [left, right] = ornaments[i % ornaments.length];
    const optionType = i % 4;

    let nickText = '';
    if (optionType === 0) nickText = `${left}${p}_${capitalize(cleanKey)}${right}`;
    else if (optionType === 1) nickText = `${left}${capitalize(cleanKey)}x${p}${right}`;
    else if (optionType === 2) nickText = `${left}${p} ${capitalize(cleanKey)} ツ${right}`;
    else nickText = `${left}★${capitalize(cleanKey)}★${right}`;

    results.push({
      id: `ai_${Date.now()}_${i}`,
      nickname: nickText,
      taglineTr: `${capitalize(style)} stilde özel yapay zeka önerisi`,
      vibe: style,
    });
  }

  return results;
}

export async function POST(req: Request) {
  try {
    const body: AiNickRequest = await req.json();
    const { keyword, style = 'pro', count = 8 } = body;

    if (!keyword || keyword.trim() === '') {
      return NextResponse.json(
        { error: 'Lütfen bir anahtar kelime veya oyuncu adı girin.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    // If API Key is available, invoke Claude AI
    if (apiKey) {
      try {
        const anthropic = new Anthropic({ apiKey });
        const prompt = `Sen harika bir Türkçe e-spor ve oyun nick jeneratörüsün. 
Kullanıcı anahtar kelimesi: "${keyword}"
İstenen nick tarzı/vibe: "${style}" (dark, pro, mythic, funny, aesthetic).

Bana tam ${count} adet yaratıcı, havalı ve şekilli Unicode sembollerle süslenmiş oyun takma adı (nickname) üret.
Yanıtını SADECE geçerli bir JSON dizisi (array) formatında ver. Başka hiçbir açıklama yazma.
Örnek JSON çıktısı formatı:
[
  { "id": "1", "nickname": "꧁༺ Dark_Shadow ༻꧂", "taglineTr": "Karanlık ve gizemli e-spor stili", "vibe": "dark" }
]`;

        const message = await anthropic.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 600,
          messages: [{ role: 'user', content: prompt }],
        });

        const textContent = message.content[0].type === 'text' ? message.content[0].text : '';
        const parsed: GeneratedNickItem[] = JSON.parse(textContent);

        if (Array.isArray(parsed) && parsed.length > 0) {
          return NextResponse.json({ success: true, items: parsed, source: 'ai' });
        }
      } catch (aiErr) {
        console.warn('Claude API call fallback triggered:', aiErr);
      }
    }

    // Fallback algorithmic generation if API key is not present or fails
    const fallbackItems = generateFallbackNicks(keyword, style, count);
    return NextResponse.json({ success: true, items: fallbackItems, source: 'algorithmic' });
  } catch (error) {
    console.error('AI Nick Generator error:', error);
    return NextResponse.json(
      { error: 'Nick üretilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
