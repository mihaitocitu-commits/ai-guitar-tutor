# StringAI — Product Specification

**Version:** 2.0
**Date:** June 2026
**Status:** Prototype complete / Pre-development

---

## 1. Product Overview

StringAI is a fully AI-powered browser-based guitar tutoring platform. No human instructors. All tutoring, feedback, and content adaptation is AI-driven.

The platform is **AI-native** — the AI is not a feature added to an existing product structure. It is the architecture. Without it, there is no feedback loop, no adaptation, no tutor presence. Every surface was designed around this framing from the ground up.

**Target users:** Guitar learners from absolute beginner to advanced, across three languages
**Primary platform:** Web app (browser-based, desktop-first, responsive)
**Languages at launch:** English, Spanish, French
**Business model:** Monthly and annual subscription
**Guitar types:** Acoustic, Electric, Classical

**Core principle:** Errors are redirects, not failures. When a student struggles, the response is always a new path forward — never a warning, never a failure state.

---

## 2. Adaptation Model

The platform adapts across three independent axes simultaneously. All adaptation is invisible — no mode labels, no state tags. The user is never categorised or told how the system has classified them.

---

### Axis 1 — Guitar Skill Level

**Levels:** Beginner / Intermediate / Expert

Set during onboarding and validated by an optional diagnostic. Adjusted over time by the Adaptive Content Engine based on performance data. Controls lesson content, UI complexity, feedback vocabulary, and tutor tone.

---

### Axis 2 — Language

**Languages:** English / Spanish / French

All three are first-class. No language is a reduced or secondary experience. Layouts accommodate 20–30% longer strings in French and Spanish. Language and guitar skill are independent — an expert guitarist who is a non-native speaker receives expert guitar content in appropriately simplified language, not simplified guitar content.

---

### Axis 3 — Emotional State

**States:** Confident / Frustrated / Plateauing / Disengaged

Emotional state is inferred from behavioural signals only. Never self-reported, never named back to the user. The system responds by adjusting content, tone, pacing, and scaffolding.

| State | Behavioural signals | Platform response |
|---|---|---|
| **Confident** | High accuracy, fast progression, low retry rate | Introduce challenge, reduce scaffolding, increase pace |
| **Frustrated** | High retry rate, short sessions, abrupt stops | Simplify task, calm warm tone, offer alternative path |
| **Plateauing** | Consistent performance, no progression | Reframe skill, introduce lateral challenges |
| **Disengaged** | Declining sessions, skipped lessons | Surface personalised hooks, shorten content units |

**Inference signals:**
- Retry rate on exercises and practice loops
- Session length and drop-off point
- Lesson skip and skip-back patterns
- Response latency in the AI tutor chat
- Session frequency and recency

---

## 3. AI System Design

### 3.1 Audio Analysis Engine

**Purpose:** Listens to the student's playing in real time and evaluates technical accuracy.

**Inputs**
- Microphone audio stream via Web Audio API
- Expected reference: target note, chord, or sequence from the active lesson
- Tempo setting from the lesson's backing track or metronome

**Outputs**
- Real-time pitch accuracy signal (correct / close / wrong)
- Timing accuracy signal (on beat / early / late)
- Chord change speed indicator
- Post-session summary scores for pitch, timing, and consistency

**Limitations**
- Accuracy degrades with low-quality microphones; a dedicated instrument or condenser microphone is recommended
- Background noise can cause false readings; users should play in a quiet environment
- Cannot assess posture, hand position, or fingering — audio-only means visual errors go undetected
- Classical guitar techniques (fingerstyle dynamics, tone colour) are difficult to evaluate via pitch/timing alone
- Distorted electric guitar tones can confuse pitch detection; clean or lightly driven tones recommended

---

### 3.2 AI Tutor

**Purpose:** On-demand conversational tutor, available 24/7.

**Inputs**
- Student's text or voice message
- Student profile: level, guitar type, selected goals
- Progress data: lessons completed, recent feedback scores, stagnation flags
- Inferred emotional state from the Adaptive Content Engine
- Session history (for continuity across conversations)

**Outputs**
- Text responses (voice post-MVP) on technique, theory, and song-learning
- Embedded short video clip references where visual demonstration is needed
- Suggested next lessons or exercises
- Tone and pacing adjusted to inferred emotional state

**Limitations**
- The AI tutor cannot hear the student play; technique feedback is based on what the student describes, not what it hears
- Responses may occasionally be incorrect on highly specific or niche topics
- Emotional state inference is probabilistic; occasional misreads are expected, particularly during short or atypical sessions

---

### 3.3 Adaptive Content Engine

**Purpose:** Adjusts lesson path and emotional response dynamically.

**Inputs**
- Lesson completion status and time-on-task
- Audio analysis scores from practice sessions
- AI tutor session topics
- Explicit level selection and changes
- Behavioural signals: retry rate, session length, skip patterns, response latency, session frequency

**Outputs**
- Recommended next lesson or module
- Supplementary content when stagnation is detected
- Level adjustment prompts
- Inferred emotional state passed to AI Tutor and lesson player
- Content unit length and scaffolding level adjusted per state

**Limitations**
- MVP uses rule-based logic rather than a trained ML model
- New or infrequent users will not have reliable state detection until a usage pattern is established
- Stagnation detection has a lag — requires multiple failed attempts before intervening

---

## 4. Core Features

### 4.1 Onboarding

Two-step flow. Language selection is in the user row at the bottom of the sidebar.

**Step 1 — Guitar profile**
- Guitar type: Acoustic / Electric / Classical (card selection with photos)
- Skill level: Beginner / Intermediate / Expert (card selection with Lucide icons)
- Optional 3–5 minute AI-assessed diagnostic to validate or adjust level

**Step 2 — Tutor selection**
- Six tutor cards with photo, name, bio, and genre tags
- User selects a tutor; their card updates live in the sidebar
- Tutor can be changed at any time via the guitar profile tooltip in the nav

**Sidebar populates live** as selections are made — guitar profile card and tutor card update in real time, giving the user a preview of what they're building before they commit.

---

### 4.2 Homepage — First Visit

Two-column layout. Marcus portrait fills the left column (1/3). Content fills the right (2/3). No top bar — columns run full height.

**Left:** Portrait with gradient overlay, name and status, short bio, italic serif quote with cedar left border.

**Right:**
- Personalised greeting with guitar type, level, and tutor
- First lesson card: chord diagram panel left, lesson title + description + meta + CTA right
- Upcoming lessons: 3 rows, locked and dimmed
- Practice mode feature card: hand-on-guitar photo as header background, "AI-native · Our main feature" badge, 3 feature bullets, CTA

---

### 4.3 Live Practice — Core Differentiator

The only surface that could not exist without AI as its foundation. The browser microphone captures the student's playing. Marcus listens, analyses, and responds as each note lands — not after the session.

**Three states on one surface:**

**Tuning state**
Two-column layout. Left: Marcus hand video (1:1 aspect ratio) with voice line overlaid at the bottom. Right: "Now tuning" string name and reference frequency above a radial arc tuner, six string buttons, status text, "Start playing" CTA.
Below both columns (full-width): tuning tip and "Skip tuning" button.
Mic check card below the arc with animated waveform bars.

**Playing state**
Two-column live session.
- Left: Marcus hand video (1:1) with feedback overlay text at the bottom. Below: current chord (large fret grid) + next chord (dimmed).
- Right: User camera feed (1:1) with mic waveform overlay. Below: three mini radial arc metrics (Pitch / Timing / Changes), each with an animated needle and status word. Below metrics: beat dots + BPM left, session timer centre, End session (primary) right.

**Closure modal**
Overlaid on the live session with dark backdrop blur.
Marcus quote leads. Three scores in a surface-coloured band. Two CTAs:
- "Next lesson →" — navigates to progress
- "Continue — G major" — dismisses modal, resumes session without reset

---

### 4.4 AI Tutor Chat

On-demand conversational tutor, available 24/7. Aware of level, guitar type, goals, progress, session history, and inferred emotional state. Text-first for MVP; voice post-MVP.

---

### 4.5 Lesson Player

Pre-recorded video curriculum organised by level and guitar type. Loop sections, slow down to 50/75%, toggle chord diagram overlays. Complexity of annotation and diagram density adapts by skill level.

---

### 4.6 Progress — Status: Open Mic

Level names come from the learner's genre, not numbers.

**Rock tier progression:** Garage Band → Open Mic → Bar Band → Studio Ready → Rock Star → Legend

Classical (proposed): Student → Recital → Conservatory → Concert Hall → Soloist → Maestro
Blues (proposed): Porch → Juke Joint → Crossroads → Delta King → Chicago Sound → Robert Johnson

Dashboard includes: level hero with XP ring, metric cards, Marcus tutor message (leads before skill bars), skill breakdown bars, streak calendar.

---

## 5. Tutor Persona

### 5.1 Marcus (Current)

Marcus is the default tutor. He is present throughout every session — not only when he is speaking. His voice line updates continuously. His photo swaps between hand closeup (when the student needs to see finger positioning) and portrait (when things are going well).

Personality: warm, direct, unhurried. 20 years of teaching. Former session musician. Genres: Blues, Jazz, Theory.

### 5.2 Additional Personas (Post-MVP)

Six tutor personas planned. Each matched to guitar type and genre. Users choose from options at onboarding rather than having a persona assigned. Requires:
- Asset production (photos generated via Gemini)
- Inclusion review before shipping — options must be diverse across gender presentation, age, ethnicity, and body type

### 5.3 Matched Guitar

The tutor mirrors the user's guitar type. Demo clips, chord illustrations, and video references use the same guitar type the user has selected. When guitar type changes, the tutor offers to switch — framed as the tutor's own suggestion:

> *"Hey, I actually have the same guitar as you — want me to use it?"*

Rules: fires once only; does not fire when emotional state is Frustrated; preference is saved on decline.

---

## 6. User Personas

**The Absolute Beginner** — Never played. Needs structure, zero jargon, frequent reassurance. Scared of forming bad habits with no one to correct them.
> *"I feel like I'm learning two things at once. And when it's too much, I stop."*

**The Lapsed Player** — Played years ago, stopped. Doesn't want to start from scratch. The diagnostic is their entire value proposition.
> *"Tell me where I actually am — not where I say I am. My self-assessment is probably wrong."*

**The Intermediate Grinder** — Can play songs but has plateaued. Every session without feedback may be reinforcing bad technique.
> *"Online doesn't have ears. Everything is one-directional. Nobody sees what you're doing."*

**The Advanced Learner** — Near-professional. Low tolerance for generic content. Must be proven before trusted.
> *"It would have to surprise me."*

---

## 7. Research Summary

### Competitive Analysis

Five platforms reviewed: Yousician, Fender Play, JustinGuitar, TrueFire, ArtistWorks.

Three unoccupied gaps:
1. No platform combines real-time AI feedback with multilingual instruction
2. Emotional and tone adaptation is absent across all five competitors
3. No single platform serves beginners and advanced players equally well

### Survey (n=10)
- Skill-match scores consistently low (2–3/5) across all personas
- Language barriers affect all personas, not only beginners
- AI openness highest among beginners, lowest among advanced learners

### Interviews (n=10)
Six pain points treated as active design constraints:
1. No one can hear them play
2. Content that doesn't match where they actually are
3. Learning in a second language costs cognitive effort
4. Tone that doesn't respect experience
5. No path for the returning learner
6. Anxiety about invisible mistakes

### Key design principle (Diego, interview)
> *"Online doesn't have ears."*
Every Practice Mode decision tested against: does this help the product hear the student?

---

## 8. Goals and Success Metrics

| Goal | Metric |
|---|---|
| Acquire subscribers | 500 paying users within 60 days of launch |
| Retain learners | 60%+ monthly retention |
| Demonstrate learning outcomes | 70%+ of users advance one skill level within 90 days |
| Drive engagement | Average 3+ sessions per user per week |

---

## 9. Subscription and Pricing

| Plan | Description |
|---|---|
| **Free Trial** | 7-day full access, no credit card required |
| **Monthly** | Full platform access, billed monthly |
| **Annual** | Full platform access, billed annually (~20% discount) |

---

## 10. Technical Architecture (MVP)

### Frontend
- React SPA (desktop-first, responsive)
- Web Audio API for microphone access and real-time audio capture
- i18n from day one (react-i18next) — all UI strings in EN / ES / FR

### Backend
- RESTful API (Node.js)
- Authentication: email/password + OAuth (Google)
- Video hosting: third-party CDN (Mux or Cloudflare Stream)
- Audio analysis: AI model for pitch/timing detection

### AI Components
- **Audio analysis engine:** Pitch, timing, chord accuracy from microphone input
- **AI tutor:** LLM-powered with guitar-domain system prompt, progress context, emotional state context, session memory
- **Adaptive content engine:** Rule-based logic for MVP; ML-based post-MVP

### Data
- PostgreSQL for user profiles, progress data, session history, behavioural signals
- GDPR-compliant (EU user base across FR/ES speakers)

---

## 11. MVP Scope

### In MVP
- Onboarding (guitar type, level, tutor selection)
- Pre-recorded lesson library (30 lessons, Acoustic Beginner priority)
- AI real-time audio feedback (timing + pitch)
- Live Practice — all three states (tuning, playing, closure)
- Progress dashboard
- AI tutor (chat-based, progress-aware, emotionally adaptive)
- Behavioural signal tracking
- Subscription billing (Stripe)
- English + Spanish + French UI

### Post-MVP
- Expanded lesson library across all levels and guitar types
- AI voice tutor
- ML-based adaptive content engine
- Mobile-optimised experience
- Additional tutor personas (six total, inclusion review required)
- Song-based learning paths
- Backing tracks and jam tools

---

## 12. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Audio analysis accuracy varies by microphone | Set clear expectations in UI; offer calibration; graceful fallback messaging |
| Content production bottleneck | Prioritise Acoustic Beginner; screen-recorded + voiceover format to speed production |
| AI tutor giving shallow or incorrect advice | Strong domain-specific system prompt; test with real players before launch |
| Emotional state misclassification | Tune conservatively; default to neutral when signal insufficient; never surface to user |
| Localisation cost | Translate UI strings first; subtitle lessons rather than dub for MVP |
| Subscription churn | Focus on onboarding quality and the first real-time feedback hit |

---

## 13. Open Questions

- What is the target subscription price point?
- Will the platform own lesson content rights, or partner with existing educators?
- Is there a preference for a specific AI audio analysis provider, or build in-house?
- What exact behavioural thresholds trigger each emotional state?

---

*Version 2.0 · June 2026 · StringAI Internal Planning Document*
