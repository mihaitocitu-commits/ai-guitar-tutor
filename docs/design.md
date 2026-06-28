# StringAI — Design Specifications

**Version:** 1.0
**Date:** June 2026
**Scope:** Visual design system, component specs, and front-end handoff

---

## 1. Colour System

All tokens are defined as CSS custom properties on `:root`. Tokens are named after tonewoods — the materials guitars are made from.

```css
:root {
  /* Backgrounds */
  --white:   #FFFFFF;   /* Page background */
  --surface: #F7F4EF;   /* Card backgrounds, subtle fills */

  /* Borders */
  --border:  #E6DDD4;   /* Dividers, card borders */

  /* Accent scale */
  --maple:    #D9BC97;  /* Sidebar accents, emphasis text */
  --cedar:    #C88146;  /* Primary accent, CTAs, active states */
  --rosewood: #6B3A20;  /* Hover states on cedar */
  --walnut:   #38241A;  /* Sidebar background, headings */
  --ebony:    #1A0F08;  /* Body text */

  /* Feedback */
  --good:  #6A9E6A;     /* Positive — muted green */
  --warn:  #BF9A4A;     /* Caution — earthy amber */
  --alert: #A96858;     /* Error — warm terracotta, never harsh red */

  /* Layout */
  --sidebar-w: 220px;
}
```

### Feedback colour rationale

The alert colour is terracotta (#A96858), not red. The emotional register of feedback should never feel like judgement. A student who sees red when their timing is off will feel judged. A student who sees terracotta will feel redirected.

---

## 2. Typography

### Fonts

| Role | Family | Weights | Usage |
|---|---|---|---|
| Display / headings | DM Serif Display | Regular, Italic | Headings, tutor quotes, level names, chord names |
| Body / UI | DM Sans | 300, 400, 500 | All UI text, body copy, navigation, labels |

### Google Fonts import

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```

### Scale reference

| Use | Size | Weight | Family |
|---|---|---|---|
| Hero headline | clamp(36px, 5vw, 60px) | 400 | DM Serif Display |
| Page heading | 26–38px | 400 | DM Serif Display |
| Section heading | 20–22px | 400 | DM Serif Display |
| Tutor quote | 14–17px italic | 400 | DM Serif Display |
| Chord name (large) | 28px | 400 | DM Serif Display |
| Body | 13–15px | 300 | DM Sans |
| UI label | 12–13px | 400–500 | DM Sans |
| Caption / meta | 10–11px | 300–400 | DM Sans |
| Eyebrow / section label | 9–10px | 500 | DM Sans (uppercase, 0.8px letter-spacing) |

---

## 3. Iconography

All icons are inline Lucide SVGs. No icon font, no image sprites.

**Consistent spec:**

```html
<svg xmlns="http://www.w3.org/2000/svg"
  width="16" height="16" viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round">
  <!-- path data -->
</svg>
```

**Nav icon map:**

| Nav item | Lucide icon | Path data |
|---|---|---|
| Home | house | `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>` |
| Lessons | book-open | `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>` |
| Live practice | music | `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>` |
| Your progress | bar-chart-2 | `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>` |
| Microphone | mic | `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>` |
| Globe / language | globe | `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>` |
| Chevron down | chevron-down | `<polyline points="6 9 12 15 18 9"/>` |

**Onboarding level icons:**

| Level | Icon | Notes |
|---|---|---|
| Beginner | book-open | Same as Lessons nav |
| Intermediate | activity | `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>` |
| Expert | award | `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>` |

---

## 4. Layout

### Page shell

```css
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: var(--sidebar-w);   /* 220px */
  flex-shrink: 0;
  background: var(--walnut);
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
}

.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
```

### Spacing

| Token | Value |
|---|---|
| Page padding | 28–32px |
| Section gap | 24–28px |
| Card padding | 16–24px |
| Card gap | 8–12px |

### Border radius

**4px throughout.** Exceptions:
- Avatar circles: `50%`
- Pill selectors: `100px`
- Progress bars, waveform bars: `2–4px`
- Presence dots: `50%`

---

## 5. Sidebar

### Structure (all pages)

```
Logo: stringAI
──────────────────────────────
Guitar profile card
  [guitar type icon + label]  [level icon + label]
  → hover: "Change guitar type" tooltip → onboarding
──────────────────────────────
Tutor card
  [avatar 36px round]  [name + specialisms]
  [italic quote in surface-bg box]
  → hover: "Change your tutor" tooltip → onboarding
──────────────────────────────
Nav (4 items):
  Home
  Lessons
  Live practice  [NEW badge]
  Your progress
──────────────────────────────
User row:
  [avatar 26px]  [name]  [globe icon + EN/ES/FR select]
```

### Sidebar card CSS pattern

```css
/* Guitar profile / tutor card */
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 6px;
padding: 10px 12px;
cursor: pointer;
transition: background 0.15s;
```

### Tooltips

```css
.sb-tooltip {
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--walnut);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 4px;
  padding: 6px 10px;
  white-space: nowrap;
  font-size: 11px;
  color: rgba(255,255,255,0.85);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 50;
}
/* Caret arrow pointing left */
.sb-tooltip::before {
  content: "";
  position: absolute;
  right: 100%; top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: rgba(255,255,255,0.15);
}
.sb-tooltip::after {
  content: "";
  position: absolute;
  right: calc(100% - 1px); top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: var(--walnut);
}
.sb-tooltip-wrap:hover .sb-tooltip { opacity: 1; }
```

### Nav item

```css
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  cursor: pointer;
  transition: all 0.15s;
}
.nav-item:hover {
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.8);
}
.nav-item.active {
  background: rgba(255,255,255,0.12);
  color: white;
  font-weight: 500;
}
.nav-icon {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
```

### NEW badge

```html
<span style="margin-left:6px; background:var(--cedar); color:white; font-size:8px; font-weight:600; letter-spacing:0.5px; padding:1px 5px; border-radius:100px; line-height:14px; vertical-align:middle;">NEW</span>
```

### Language selector (user row)

```html
<div style="display:flex; align-items:center; gap:4px; border:1px solid rgba(255,255,255,0.12); border-radius:4px; padding:3px 6px 3px 5px; background:rgba(255,255,255,0.05);">
  <!-- globe icon 11px -->
  <select style="font-size:10px; color:rgba(255,255,255,0.55); background:transparent; border:none; outline:none; appearance:none; max-width:32px;">
    <option>EN</option>
    <option>ES</option>
    <option>FR</option>
  </select>
  <!-- chevron icon 9px -->
</div>
```

---

## 6. Component Specs

### Buttons

```css
/* Primary */
.btn-primary {
  background: var(--cedar);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 13px 24px;
  font-size: 13px;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-primary:hover { background: var(--rosewood); }

/* Outline */
.btn-outline {
  background: transparent;
  color: var(--walnut);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 13px 20px;
  font-size: 13px;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-outline:hover { border-color: var(--cedar); color: var(--cedar); }

/* Start (playing state CTA) */
.start-btn {
  background: var(--cedar);
  color: white;
  border: none;
  border-radius: 100px;
  padding: 12px 32px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

### Cards

```css
/* Standard card */
.card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 16–24px;
  background: var(--white);
}

/* Tutor message card */
.tutor-message-card {
  border-left: 3px solid var(--cedar);
  padding: 16px 20px;
  background: var(--surface);
  border-radius: 0 4px 4px 0;
}
/* Text inside: DM Serif Display, italic, 14–15px, var(--walnut) */
```

### Fret grid component

Generated by `fretGridHTML(key, size)`. Takes chord key ('G', 'C', etc.) and size ('large' | 'small').

| Parameter | large | small |
|---|---|---|
| Row height | 38px | 22px |
| Dot size | 26px | 14px |
| Nut thickness | 4px | 3px |
| Min-width | 160px | auto |

Dot colour: `var(--cedar)` — filled circle, white finger number text.
String labels below grid: 9–10px, `#aaa`.

### Radial arc tuner

Full-size (tuning state): `width="390" height="225" viewBox="0 0 280 160"`
Mini (playing state metrics): `width="90" height="52" viewBox="0 0 90 52"`

**Needle animation:**
```css
/* Transform origin at pivot point (bottom centre) */
#tuner-needle-line {
  transform-origin: 140px 152px;  /* full-size */
  transform: rotate(0deg);
  transition: transform 0.15s ease;
}
/* Range: -75deg (flat) to +75deg (sharp). 0deg = in tune */
```

**Colour states:**
- Drifting: needle `var(--cedar)`, pivot `var(--cedar)`
- In tune: needle `var(--good)`, pivot `var(--good)`, good-zone arc opacity 1

### Video panels (Live Practice)

```css
.play-video {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  background: #1a0f08;
  flex-shrink: 0;
}
.play-video img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}
```

**Overlay pattern** (all video overlays):
```css
position: absolute;
z-index: 2–5;
/* Labels: top-left */
/* Icons: top-right */
/* Feedback text / waveform: bottom, with gradient */
```

### Waveform bars

```css
.waveform-mini-bar {
  width: 2px;
  border-radius: 1px;
  background: rgba(255,255,255,0.5);
  animation: wave 0.8s ease-in-out infinite;
}
@keyframes wave {
  0%, 100% { transform: scaleY(0.3); }
  50%       { transform: scaleY(1); }
}
/* Stagger animation-delay per bar: i * 0.04s */
```

### Closure modal

```css
.closure-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26,15,8,0.55);
  backdrop-filter: blur(4px);
  z-index: 20;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.closure-wrap.visible { opacity: 1; pointer-events: all; }

.closure-modal {
  background: var(--white);
  border-radius: 4px;
  padding: 36px 40px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(26,15,8,0.25);
}
```

---

## 7. Page-by-Page Specs

### 7.1 Onboarding

**Layout:** Sidebar (220px fixed) + scrollable main content. No top bar.

**Step 1 — Guitar type cards**
- 3 cards in a row, equal width
- Each: photo (aspect-ratio 4/3, object-fit cover), card body with name + description + genre tags
- Selected state: `border-color: var(--cedar)`, cedar checkmark badge top-right

**Step 1 — Level cards**
- 3 cards in a row, equal width, compact
- Each: Lucide icon (20px, cedar stroke), level name, short description
- Selected state: same cedar border + checkmark

**Step 2 — Tutor cards**
- 2-column grid, 6 cards total
- Each: photo (aspect-ratio 3/4, top-aligned), name, bio, genre tags
- Selected state: cedar border + checkmark

**Primary CTA placement:**
- Step 1: "Next — choose your tutor →" (right-aligned)
- Step 2: "Start learning →" (right-aligned) → navigates to `homepage_first_visit.html`

---

### 7.2 Homepage — First Visit

**Layout:** No top bar. `grid-template-columns: 1fr 2fr`. Columns run full height.

**Left column (Marcus):**
- Photo: `max-height: 720px`, `object-position: center top`
- Overlay: bottom gradient, name (DM Serif 22px white), status (10px, presence dot)
- Below photo: bio (13px, #777, weight 300), italic quote (16px, cedar left-border 3px)

**Right column:**
- Padding: 32px
- Gap between sections: 24px
- First lesson card (variant A): see Section 6 — fret grid panel left (140px), content right
- Upcoming lessons: dimmed to opacity 0.5, `border-bottom: 1px solid var(--border)`
- Practice mode feature card: walnut header with hand photo overlay, cedar badge, 3 feature bullets with cedar dot

---

### 7.3 Live Practice — Tuning State

**Layout:** `flex-direction: column`. Top row (50/50 columns) + bottom tip strip.

**Top row — left column (Marcus video):**
- `aspect-ratio: 1/1`, `overflow: hidden`
- Voice line overlay: `position: absolute; bottom: 0`, gradient, DM Serif italic 14px white

**Top row — right column (tuner):**
- `align-items: center; justify-content: center`
- String info: "Now tuning" label (9px cedar uppercase) + note name (36px DM Serif) + Hz (11px #bbb)
- Arc SVG: `width="390" height="225"`
- String buttons: 36px circles, border 1.5px, DM Serif 13px
- Mic check card: 1px border, 4px radius, mic icon (cedar) + animated waveform bars + "Active" green status

**Bottom strip:**
- `flex: 1` (fills remaining space)
- `background: var(--surface)`
- Tip text: 13px, weight 300, max-width 420px
- Skip tuning: `btn-primary`

---

### 7.4 Live Practice — Playing State

**Layout:** `stage-row` hidden. `play-topbar` + `play-layout` visible.

**Play topbar:**
- Live dot (alert, pulsing) + "Live" label
- Beat dots (4) + BPM
- Session timer (DM Serif 14px #bbb)
- End session: `btn-primary`

**Play layout (50/50 columns):**

Left column (Marcus):
- Video: `aspect-ratio: 1/1`
- Label top-left: "Marcus" + green presence dot
- Icon buttons top-right: camera + mic (26px circles, dark rgba bg)
- Feedback overlay bottom: gradient + italic serif quote + waveform bars
- Below video (`.play-bottom`): current chord (large fret grid + name) + arrow → next chord (dimmed 0.45)

Right column (User):
- Video: `aspect-ratio: 1/1`
- Label top-left: "You" + pulsing alert dot
- Mic waveform overlay bottom
- Below video (`.play-bottom`): 3 mini radial arcs side by side, centred
  - Each: 90×52px SVG + label (9px uppercase) + status word (DM Serif 12px, coloured)

---

### 7.5 Live Practice — Closure Modal

- Eyebrow: "Session complete" (10px cedar uppercase)
- Title: 28px DM Serif, em in cedar italic
- Message: 14px DM Serif italic, opacity 0.75
- Scores: flex row, 3 items — each value (DM Serif 26px, coloured) + label (9px)
- Scores band: `background: var(--surface); border-radius: 4px`
- CTAs: two equal-width buttons (primary + outline)

---

### 7.6 Progress

**Level hero:** Full-width card, `padding: 28px 32px`, flex row (content left, XP ring right).
- Level name: 42px DM Serif italic cedar
- Tier track: 6 segments, 6px height, `border-radius: 100px`
  - Filled: `var(--cedar)`; Empty: `var(--border)`; Current: cedar + `box-shadow: 0 0 0 2px rgba(200,129,70,0.2)`
- XP ring: 120px SVG, `rotate(-90deg)`, `stroke-dasharray: 314`, dashoffset calculated from progress %

**Metric cards:** `grid-template-columns: repeat(4, 1fr)`, 4px radius
**Marcus message:** cedar left-border 3px, italic serif 14px, surface background
**Skill bars:** 6px height, 100px border-radius, transition 0.8s
**Streak calendar:** 7-column grid, `aspect-ratio: 1`, 4px radius per day

---

## 8. Navigation Map

| From | Trigger | To |
|---|---|---|
| Landing page | "Start learning free" | onboarding_complete.html |
| Onboarding step 2 | "Start learning →" | homepage_first_visit.html |
| Homepage | "Start now" / "Continue" | practice_mode_ai_native.html |
| Any page sidebar | "Home" nav | homepage_first_visit.html |
| Any page sidebar | "Live practice" nav | practice_mode_ai_native.html |
| Any page sidebar | "Your progress" nav | progress.html |
| Any page sidebar | Guitar profile tooltip | onboarding_complete.html |
| Any page sidebar | Tutor card tooltip | onboarding_complete.html |
| Practice closure | "Next lesson →" | progress.html |
| Practice closure | "Continue practicing" | dismiss modal, resume session |
| Progress | "Practice again" | practice_mode_ai_native.html |
| Progress | "Back to home" | homepage_first_visit.html |
| All pages footer | Logo | index.html (landing) |

---

## 9. Animation Reference

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Voice line in | opacity 0→1, translateY 4px→0 | 0.5s | ease |
| Marcus hand/portrait swap | opacity crossfade | 1.2s | ease |
| Tuner needle | CSS rotate transform | 0.15s | ease |
| Mini arc needle | CSS rotate transform | 0.4s | ease |
| Arc good-zone | opacity 0→1 | 0.4s | — |
| Waveform bars | scaleY(0.3)↔scaleY(1), staggered | 0.8s | ease-in-out, infinite |
| Presence dot pulse | opacity 1↔0.3 | 1.2s | ease-in-out, infinite |
| Closure modal | opacity 0→1 | 0.4s | ease |
| Beat dot on-beat | scale(1.2), background cedar | 0.12s | — |

---

## 10. Known React Migration Notes

1. **Base64 images** → replace with asset imports or CDN URLs
2. **Inline styles** on HTML elements → extract to CSS classes or Tailwind utilities
3. **`fretGridHTML()`** → convert to a React component receiving `{key, size}` props
4. **SVG needle animation** uses CSS `transform` on `<line>` → test cross-browser before shipping
5. **`window.location.href` navigation** → replace with React Router `useNavigate()`
6. **Keyboard shortcuts** on `document` → move to `useEffect` with cleanup
7. **`setInterval` in startTuner, startPlaying** → clear in `useEffect` cleanup to prevent memory leaks
8. **All DOM operations are null-guarded** in the prototype — maintain this pattern in React with optional chaining

---

*Version 1.0 · June 2026 · StringAI Design Specifications*
