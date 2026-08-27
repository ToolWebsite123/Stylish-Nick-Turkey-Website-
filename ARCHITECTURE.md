# ARCHITECTURE.md - Stylish Nick Turkey Website

## 1. Project Vision & Architecture Principles
**Stylish Nick Turkey Website** is a modern, fast, SEO-focused Turkish platform targeting gamers and social media users in Turkey.

### Core Architectural Principles:
1. **Turkish-Only Focus**: Targeted strictly at the Turkish market (`tr-TR`). No multi-language bloat or prematurely added `hreflang` architecture in MVP.
2. **Client-Side Core**: 100% client-side text generation engine. Zero API/backend calls required for core text styling and symbol interactions.
3. **Data-Decoupled Design**: Complete separation of UI presentation from Unicode transformation algorithms, symbol databases, and platform compatibility rules.
4. **Honest Technical Accuracy**: Explicit Turkish character compatibility status (`full`, `partial`, `unsupported`) per style. No misleading claims such as "100% compatibility". ASCII normalization is clearly presented as an optional character replacement mode (`ç` -> `c`, `ğ` -> `g`, `ı` -> `i`, `ö` -> `o`, `ş` -> `s`, `ü` -> `u`).
5. **No Fake Content**: No manufactured user reviews, fake ratings, or arbitrary user counters.
6. **Single-Developer Maintainability**: Lean, structured, and modular architecture designed for high developer velocity and easy maintenance.

---

## 2. Technology Stack
- **Framework**: Next.js App Router (Latest stable version at project initialization).
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS (Latest stable version compatible with Next.js App Router).
- **State Management**: Standard React local state (`useState`, `useContext`). *Zustand will only be introduced in Phase 2 if complex global state (favorites/history/custom builder) requires it.*
- **Icons & Assets**: Custom SVG icons / `lucide-react`.

---

## 3. Folder Architecture
```
stylish-nick-turkey/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (tr-TR HTML, Fonts, Metadata)
│   │   ├── page.tsx                    # Ana Sayfa (Universal Generator + Quick Symbol Picker)
│   │   ├── sekilli-yazi/
│   │   │   └── page.tsx                # Text Style Generator Page
│   │   ├── sekilli-nick/
│   │   │   └── page.tsx                # Gaming Nick Generator Page
│   │   ├── sekilli-semboller/
│   │   │   └── page.tsx                # Categorized Symbol Database Page
│   │   ├── pubg-nickleri/
│   │   │   └── page.tsx                # PUBG Specific Nicks & Rules Page
│   │   ├── instagram-sekilli-yazi/
│   │   │   └── page.tsx                # Instagram Bio & Story Styles Page
│   │   ├── discord-nickleri/
│   │   │   └── page.tsx                # Discord Username & Formatting Page
│   │   ├── whatsapp-sekilli-yazi/
│   │   │   └── page.tsx                # WhatsApp Styled Messages Page
│   │   ├── sitemap.ts                  # Dynamic Sitemap Generator
│   │   └── robots.ts                   # Dynamic Robots.txt Generator
│   ├── components/
│   │   ├── common/                     # Header, Navigation, Footer, Toast Notification
│   │   ├── generator/                  # GeneratorInput, StyleCardList, StyleCard, OptionsToggle
│   │   ├── symbols/                    # SymbolCategoryNav, SymbolGrid, SymbolCard
│   │   ├── seo/                        # SeoContentSection, VisibleFaqAccordion, JsonLd
│   │   └── ui/                         # Base reusable UI (Button, Badge, Input, Card)
│   ├── lib/
│   │   ├── unicode/                    # Pure logic & algorithms (Decoupled from UI)
│   │   │   ├── engine.ts               # Core text mapper & transformer logic
│   │   │   ├── styles.ts               # Style mappings with explicit Turkish support metadata
│   │   │   └── turkish.ts              # Turkish letter handlers & optional ASCII normalizer
│   │   ├── symbols/                    # Symbol dataset (Decoupled from UI)
│   │   │   └── data.ts                 # ~150-250 curated, non-duplicate categorized symbols
│   │   ├── platforms/                  # Platform specs & logic (Decoupled from UI)
│   │   │   └── data.ts                 # Platform compatibility rules (PUBG, Insta, Discord, WhatsApp)
│   │   └── seo/                        # Page-specific SEO metadata helpers & schemas
│   │       ├── metadata.ts
│   │       └── jsonld.ts
│   ├── types/                          # TypeScript Interfaces
│   │   ├── generator.ts
│   │   ├── symbol.ts
│   │   └── platform.ts
│   └── styles/
│       └── globals.css                 # Tailwind Directives & Custom Utilities
├── tailwind.config.ts / postcss.config.mjs
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 4. Route Architecture (Distinct Search Intent Only)
No thin SEO pages targeting duplicate keyword variations. Every page satisfies a distinct user intent:

1. `/` - **Ana Sayfa (Universal Generator)**: Quick single-input text generator with real-time preview across top styles + curated symbol selector.
2. `/sekilli-yazi` - **Şekilli Yazı Oluşturucu**: Focus on text styling for messages, titles, and social media captions with style filtering.
3. `/sekilli-nick` - **Şekilli Nick Oluşturucu**: Focus on gaming nickname templates with prefix/suffix ornaments.
4. `/sekilli-semboller` - **Şekilli Semboller Database**: Dedicated categorized symbol library (~150-250 symbols in MVP) with 1-click copy.
5. `/pubg-nickleri` - **PUBG Mobile Şekilli Nickler**: Nicknames formatted specifically around PUBG Mobile character limit and compatibility rules.
6. `/instagram-sekilli-yazi` - **Instagram Şekilli Biyografi**: Font styles optimized for Instagram bio and story text presentation.
7. `/discord-nickleri` - **Discord Şekilli Nick & Yazı**: Formatting styles aligned with Discord markdown and nickname display.
8. `/whatsapp-sekilli-yazi` - **WhatsApp Şekilli Mesaj**: Text styling compatible with WhatsApp message formatting.

---

## 5. Unicode Generator & Turkish Character Architecture

### Style Interface & Metadata
```typescript
export type TurkishSupportStatus = 'full' | 'partial' | 'unsupported';

export interface StyleDefinition {
  id: string;
  name: string;
  category: 'sans' | 'serif' | 'gothic' | 'cursive' | 'decorative' | 'monospace';
  turkishSupport: TurkishSupportStatus;
  notes?: string; // e.g. "Türkçe ç, ğ, ş harfleri orijinal haliyle korunur"
  map: Record<string, string>;
}
```

### Turkish Character Strategy
1. **Mathematical Alphanumeric Unicode Limits**: Most mathematical alphanumeric Unicode blocks (Gothic, Script, Double-Struck) do not include native Turkish diacritics (`ç, ğ, ı, ö, ş, ü, Ç, Ğ, İ, Ö, Ş, Ü`).
2. **Explicit Status per Style**: Each style clearly indicates its level of Turkish support:
   - **`full`**: Style has direct mathematical Unicode or diacritic glyph coverage for all Turkish characters.
   - **`partial`**: Style covers vowels (`ö, ü, İ`) or fallback characters while preserving unmapped letters (`ç, ğ, ş`) in clean readable standard forms.
   - **`unsupported`**: Style renders standard unstyled Turkish letters alongside styled Latin letters.
3. **Optional ASCII Normalization Mode**:
   - An explicit user toggle: **"ASCII Dönüştür (Örn: ç→c, ğ→g, ş→s)"**.
   - Made transparent to the user: This mode alters Turkish letters into standard ASCII equivalents for display compatibility on restrictive devices. It is never marketed as "100% compatibility".

---

## 6. Symbol Database Architecture
- **MVP Scope**: 150-250 curated, tested, non-duplicate Unicode symbols.
- **Categories**:
  1. Gaming & Weapons (`⚔ 🗡 🛡 👑 ☠ ⚡ 🎯 🏹`)
  2. Stars & Sparkles (`★ ✰ ✦ ✧ ✩ ✪ 🌟 ✨`)
  3. Hearts & Aesthetics (`♥ ♡ ❤ ❥ 🌸 🌹 🍀`)
  4. Arrows & Pointers (`➔ ➜ ➸ ➽ ➲ ➳`)
  5. Brackets & Enclosures (`【 】 〖 〗 ❮ ❯ 「 」`)
- **Data Structure (`/lib/symbols/data.ts`)**:
```typescript
export interface SymbolItem {
  id: string;
  char: string;
  name: string;
  category: string;
  tags: string[];
}
```

---

## 7. Platform Compatibility Architecture
- **Data-Driven Specs (`/lib/platforms/data.ts`)**:
```typescript
export interface PlatformSpec {
  id: 'pubg' | 'instagram' | 'discord' | 'whatsapp';
  name: string;
  maxCharLength?: number;
  unsupportedUnicodeRanges?: [number, number][];
  guidelines: string[];
}
```
- **Independent Updates**: Platform compatibility data is stored separately from UI rendering logic, enabling rule updates without modifying visual components.

---

## 8. SEO & Content Architecture
1. **Language & Locale**: `<html lang="tr-TR">`. Targeted specifically to Turkey.
2. **Visible FAQ Sections**: Every page with an `FAQPage` schema displays the exact same visible, accessible FAQ content in an interactive accordion. No hidden schema-only content.
3. **Reusable SEO Metadata**: Reusable helper functions in `/lib/seo/metadata.ts` and `/lib/seo/jsonld.ts` generate accurate, canonicalized, page-specific OpenGraph and JSON-LD data.
4. **Honest Content**: Zero artificial ratings, fake user reviews, or fabricated usage metrics.

---

## 9. Performance & Maintainability Strategy
- **Zero API Overhead**: Client-side execution ensures sub-10ms output transformations.
- **Lightweight Dependencies**: Standard React state, no unneeded global state libraries in MVP.
- **Single Developer Friendly**: Modular folder structure ensures clean separation of concerns without over-engineering.

---

## 10. Future Architecture (Post-MVP)
- **Phase 2**: Platform compatibility checker tool, Custom Nick Builder, Zalgo controls, Symbol library expansion (500+), LocalStorage favorites/history, Zustand state manager (if complex global state requires it).
- **Phase 3**: Claude API integration for AI nickname generation, NextAuth v5 authentication, MongoDB database integration for cloud synchronization.
