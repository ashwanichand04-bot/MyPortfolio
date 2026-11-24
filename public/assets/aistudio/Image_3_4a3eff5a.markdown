---
name: Editorial Executive
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#436556'
  primary: '#002217'
  on-primary: '#ffffff'
  primary-container: '#15382b'
  on-primary-container: '#7da291'
  inverse-primary: '#a9cfbc'
  secondary: '#725b38'
  on-secondary: '#ffffff'
  secondary-container: '#fedeb2'
  on-secondary-container: '#78603e'
  tertiary: '#191e1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e3330'
  on-tertiary-container: '#969b97'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebd8'
  primary-fixed-dim: '#a9cfbc'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#2b4d3f'
  secondary-fixed: '#fedeb2'
  secondary-fixed-dim: '#e0c298'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#584323'
  tertiary-fixed: '#dfe4df'
  tertiary-fixed-dim: '#c3c8c3'
  on-tertiary-fixed: '#181d1a'
  on-tertiary-fixed-variant: '#434844'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  subheading:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system translates the personal brand of an MBA scholar and emerging business strategist into an authoritative, tactile digital portfolio. It balances academic rigor with high-end executive positioning through an "Editorial Modernism" style—fusing the literary elegance of traditional business publications (e.g., Financial Times, Harvard Business Review) with the crisp whitespace and streamlined precision of contemporary digital design.

### Brand Attributes
- **Intellectual & Authoritative:** Grounded in strategy, analytical clarity, and academic excellence.
- **Understated Luxury:** Communicates refinement through typographic scale, measured pacing, and restrained palette rather than excessive ornamentation.
- **Architectural & Intentional:** Structured grid systems, fine-line borders, and intentional asymmetry inspired by print broadsheets.

### Aesthetic Execution
- Deep, organic forest tones convey longevity and stability.
- Warm ivory backdrops replace sterile digital whites, creating a physical paper quality.
- Micro-details (champagne rule dividers, monoline badges, delicate borders) establish high-craft tactile depth.

## Colors

The palette operates in a warm editorial light mode. Digital pure black and pure white are strictly forbidden; color harmony is achieved through nuanced botanical, metallic, and earthen values.

### Color Roles & Guidelines
- **Primary (`#15382B` Deep Forest Green):** The institutional core. Used for brand anchors, primary CTA fills, header navigation accents, and primary emphasis blocks.
- **Secondary (`#C5A880` Champagne Gold):** The premium highlight. Reserved for specialized status markers, pill badge accents, award highlights, and delicate keylines. Never use for small body text.
- **Tertiary (`#1F2421` Charcoal Black):** The ink tone. Delivers high contrast for editorial display headers, section titles, and high-priority metadata without the visual fatigue of pure black.
- **Neutral Canvas (`#FAF8F5` Warm Ivory & `#F5F1EA` Editorial Linen):** The base paper textures. `#FAF8F5` forms the primary canvas; `#F5F1EA` is applied to alternating section surfaces and card wells.
- **Muted Slate (`#5C6460`):** Editorial secondary tone used for long-form narrative body copy, figure captions, and passive metadata.
- **Structural Border (`#E5DFD5` Parchment Line):** Low-contrast boundary tone for cards, horizontal rules, and table grids.

## Typography

The typographic hierarchy pairs the literary authority of **Newsreader** with the geometric precision and readability of **Manrope**.

### Usage Directives
- **Newsreader (Display/Headlines):** Use for hero titles, section headings, quote callouts, and project titles. Italic variants may be used selectively for emphasis words, scholarly terminology, or thematic keywords.
- **Manrope (Body/Labels):** Handles all transactional reading, case study body copy, metric numbers, and interface controls. Optical kerning should be enabled.
- **Case Styling:** `label-md` and `label-sm` must be set in uppercase with positive letter spacing (`0.06em` to `0.08em`) when used for section categorization tags, status indicators, and kicker lines.

## Layout & Spacing

The layout philosophy mirrors broadsheet and architectural editorial spreads: asymmetric white space, structured content alignments, and deliberate breathing room.

### Layout System
- **Desktop Grid:** 12-column fluid grid, max-width `1280px`, with `1.5rem` gutters and `4rem` outer canvas margins.
- **Tablet Grid:** 8-column fluid grid with `1.5rem` gutters and `2rem` outer margins.
- **Mobile Grid:** 4-column fluid grid with `1rem` gutters and `1.25rem` outer margins.

### Vertical Rhythm
- Narrative sections must incorporate expansive vertical margins (using `space-xl` or compound factors of `3rem` to `6rem`) between case study chapters to maintain a calm, premium browsing experience.
- Compact groupings (e.g., metric label + value pairs, metadata headers) leverage strict `space-xs` and `space-sm` increments.

## Elevation & Depth

Visual depth is conveyed through tactile tonal shifts and delicate linework rather than volumetric blur drops.

### Elevation Principles
- **No Heavy Shadows:** Default to flat, layered surfaces defined by structural 1px borders (`#E5DFD5`).
- **Tonal Stepping:**
  - Base Floor: `#FAF8F5`
  - Elevated Container / Inset Card: `#F5F1EA`
  - Float / Sticky Navbars: Backdrop blur (`16px`) with 85% opacity of `#FAF8F5` and a bottom 1px line in `#E5DFD5`.
- **Micro-Shadow on Hover (Interactive Cards only):** A whisper of an ambient shadow to signal elevation: `0 8px 24px -4px rgba(21, 56, 43, 0.05), 0 2px 6px -1px rgba(21, 56, 43, 0.03)`. Tinted with primary forest green, never gray.

## Shapes

The design system maintains an architectural, structured posture. Containers, cards, and input modules adhere to a soft, disciplined geometry (`0.25rem` / `rounded-sm`), while contextual tags and metadata badges employ complete pill roundings to introduce organic contrast.

### Corner Radius Guidelines
- **Structural Containers, Modals, Cards, Buttons:** `0.25rem` (Soft precision, print-edge feel).
- **Pill Badges & Chips:** `9999px` (Full circle ends for metadata markers).
- **Avatars & Image Frames:** Architectural ratio frames with `0.25rem` corners; circular treatment reserved strictly for small author medallions.

## Components

### Buttons
- **Primary:** Background `#15382B`, text `#FAF8F5`, `border-radius: 0.25rem`, padding `0.75rem 1.75rem`. Typography `Manrope` 14px bold, letter-spacing `0.02em`. Hover: Background `#1F4D3C`.
- **Secondary / Outline:** Background transparent, border `1px solid #15382B`, text `#15382B`. Hover: Background `#FAF8F5` with champagne tint `#F5F1EA`.
- **Editorial Text Action:** Text `#15382B`, underline offset `4px`, border-bottom `1px solid #C5A880`. No container fill.

### Chips & Pill Badges
- **Status / Category Badge:** Pill shape (`9999px`), padding `0.25rem 0.75rem`. Background `#F5F1EA`, border `1px solid #E5DFD5`, text `#1F2421`, typography `label-sm` uppercase.
- **Gold Accent Badge:** Background `rgba(197, 168, 128, 0.15)`, border `1px solid #C5A880`, text `#15382B`.

### Cards (Case Studies & Project Features)
- Background `#FAF8F5` or `#F5F1EA`, border `1px solid #E5DFD5`, radius `0.25rem`. Padding `2rem`.
- Title uses `headline-sm` in `#1F2421`.
- Transition on hover: border shifts to `#C5A880` with a subtle `2px` upward translation.

### Input Fields & Forms
- Background `#FAF8F5`, border `1px solid #E5DFD5`, radius `0.25rem`, padding `0.75rem 1rem`. Typography `Manrope` 15px.
- Focus state: border `1px solid #15382B`, outline `none`, subtle ring `2px solid rgba(21, 56, 43, 0.1)`.

### Lists & Timelines (Academic & Career History)
- Borderless list with dividing rule: `1px solid #E5DFD5` separating each node.
- Left-aligned academic year/duration rendered in `label-md` with color `#C5A880`.
- Institution & role details rendered in `Newsreader` (`headline-sm`) and supporting description in `#5C6460`.

### Stat Callouts (Metrics & MBA Key Performance Indicators)
- Number rendered in large `Newsreader` (`48px` to `56px`), colored in `#15382B`.
- Accompanying label placed beneath in `Manrope` `label-sm` (`#5C6460`, uppercase, letter-spacing `0.06em`).