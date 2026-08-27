# PROJECT_ROADMAP.md - Stylish Nick Turkey Website

## Roadmap Strategy & Goals
**Stylish Nick Turkey Website** is designed to become Turkey's clean, fast, and technically accurate platform for styled text, gaming nicknames, and Unicode symbol copy. 

The project prioritizes honest technical representation, 100% client-side performance, search engine optimization for distinct user intents, and clean single-developer maintainability.

---

## Strategic Phase Matrix

| Module / Feature | MVP (Phase 1) | Phase 2 | Phase 3 | Future |
| :--- | :---: | :---: | :---: | :---: |
| Next.js App Router (Latest Stable) & TypeScript | ✅ | | | |
| Tailwind CSS (Latest Compatible Stable) Setup | ✅ | | | |
| Pure Client-Side Unicode Engine (30+ styles) | ✅ | | | |
| Explicit Turkish Support Metadata (`full`/`partial`/`unsupported`) | ✅ | | | |
| Optional ASCII Normalization Mode (`ç`→`c`, `ğ`→`g`, etc.) | ✅ | | | |
| Curated Symbol Database (150-250 High-Quality Symbols) | ✅ | | | |
| Symbol Expansion (500+ Symbols) | | ✅ | | |
| Standard React Local State Architecture | ✅ | | | |
| Zustand State Management (if global state requires it) | | ✅ | | |
| Distinct Intent Category Pages (8 core pages) | ✅ | | | |
| tr-TR HTML Locale & Turkish-only Target SEO | ✅ | | | |
| Real Visible FAQs + Matching JSON-LD FAQPage Schema | ✅ | | | |
| Data-Driven Platform Compatibility Indicators | ✅ | | | |
| Platform Compatibility Diagnostic Tool | | ✅ | | |
| Custom Nick Builder (Prefix/Suffix/Ornaments) | | ✅ | | |
| Zalgo / Glitch Text Generator | | ✅ | | |
| LocalStorage Favorites & Copy History | | ✅ | | |
| Curated Turkish Gaming Nick Library (1000+ entries) | | ✅ | | |
| Claude API AI Nickname Generator Handler | | | ✅ | |
| User Authentication (Google & Discord OAuth) | | | ✅ | |
| Cloud Favorites & MongoDB Synchronization | | | ✅ | |
| Custom Symbol Combo Creator & Shareable Links | | | | ✅ |
| Developer API & Widget Embeds | | | | ✅ |

---

## Detailed Implementation Roadmap

### Phase 1: MVP (Minimum Viable Product)
**Goal**: Deliver a lightweight, fast, Turkish-only, SEO-optimized text styling platform built on clean software engineering principles.

#### Milestones:
1. **Next.js & TypeScript Setup**:
   - Initialize Next.js App Router (latest stable version) with TypeScript.
   - Configure Tailwind CSS (latest compatible stable version).
   - Configure strict ESLint rules and clean path aliases (`@/*`).

2. **Core Unicode Engine (`/lib/unicode`)**:
   - Implement `engine.ts` with 30+ style definitions.
   - Implement `turkish.ts` for handling Turkish characters (`ç, ğ, ı, ö, ş, ü`) with explicit support flags (`full`, `partial`, `unsupported`).
   - Implement optional ASCII normalization mode (`ç` -> `c`, `ğ` -> `g`, `ı` -> `i`, `ö` -> `o`, `ş` -> `s`, `ü` -> `u`).

3. **Curated Symbol Database (`/lib/symbols`)**:
   - Create dataset of 150-250 verified, non-duplicate Unicode symbols categorized into Gaming, Stars, Hearts, Arrows, Brackets.

4. **Data-Driven Platform Specs (`/lib/platforms`)**:
   - Define platform rules data structure for PUBG Mobile, Instagram, Discord, and WhatsApp.

5. **UI & Layout Components (`/components`)**:
   - `Header`, `Footer`, `GeneratorInput` (with clear & paste buttons).
   - `StyleCardList` & `StyleCard` (with Turkish status badge, platform indicators, and 1-click copy).
   - `SymbolGrid` & `SymbolCard` (with 1-click copy).
   - `CopyToast` feedback alert.
   - `VisibleFaqAccordion` component displaying real visible FAQ items.

6. **SEO & 8 Distinct Intent Pages (`/app`)**:
   - Set `<html lang="tr-TR">`.
   - Build 8 distinct intent pages:
     - `/` (Ana Sayfa / Universal Generator)
     - `/sekilli-yazi` (Şekilli Yazı)
     - `/sekilli-nick` (Şekilli Nick)
     - `/sekilli-semboller` (Symbol Database)
     - `/pubg-nickleri` (PUBG Nicks & Rules)
     - `/instagram-sekilli-yazi` (Instagram Bio Fonts)
     - `/discord-nickleri` (Discord Formatting)
     - `/whatsapp-sekilli-yazi` (WhatsApp Messages)
   - Reusable SEO metadata helpers & matching visible JSON-LD `FAQPage` schemas.

---

### Phase 2: Tooling Expansion & Feature Growth
**Goal**: Expand features, state management, and user interactive tools once MVP foundation is proven.

#### Milestones:
1. **Interactive Platform Compatibility Diagnostic Tool**:
   - Build custom text diagnostic checker against game character limits and rendering rules.
2. **Custom Nick Builder**:
   - Visual builder to assemble nicks with left ornament + styled text + right ornament.
3. **Symbol Database Expansion**:
   - Expand database from 150-250 to 500+ categorized symbols.
4. **LocalStorage Favorites & Copy History**:
   - Introduce local persistent state (Zustand introduced if required for global state synchronization across components).
5. **Curated Gaming Nick Library**:
   - 1,000+ curated gamer nicknames grouped by genre.

---

### Phase 3: AI & Cloud Infrastructure
**Goal**: Integration of backend services and personalized cloud user accounts.

#### Milestones:
1. **Claude API AI Nick Generator**:
   - `/api/ai-nickname` backend route using `@anthropic-ai/sdk` with Turkish gamer prompt engineering.
2. **User Authentication**:
   - NextAuth v5 integration with Google & Discord OAuth.
3. **MongoDB Cloud Database**:
   - User account favorites sync, custom saved presets, community nickname submissions.

---

### Phase 4: Platform Ecosystem & Monetization
**Goal**: Sharing tools, embeddable widgets, and ad optimization.

#### Milestones:
1. **Shareable Custom Symbol Combos**: Short URL generator for user creations.
2. **Developer Public API & Embed Widget**: Embeddable text styling widget for third-party Turkish gaming sites.
3. **Ad Optimization**: High-performance, non-intrusive ad unit placements (AdSense/Mediavine).
