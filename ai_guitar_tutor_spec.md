# AI Guitar Tutor — Product Specification

**Version:** 1.2  
**Date:** May 2026  
**Status:** Pre-development / MVP planning

---

## 1. Product Overview

A fully AI-powered online guitar tutoring platform that combines real-time AI feedback, pre-recorded video lessons, and on-demand AI tutoring sessions. The platform adapts to each learner's skill level and guitar type, delivering a personalised, structured learning journey — all via a web browser, no app download required.

**Target users:** Anyone with an interest in learning guitar, from complete beginners to advanced players.  
**Primary platform:** Web app (browser-based, desktop-first, responsive)  
**Languages at launch:** English, Spanish, French  
**Business model:** Monthly and annual subscription  
**Launch goal:** MVP in 3 months

---

## 2. Adaptation Model

The platform adapts across three independent axes simultaneously. All adaptation is invisible — no mode labels, no state tags, and the user is never categorised or told how they have been classified.

---

### Axis 1 — Guitar Skill Level

**Levels:** Beginner / Intermediate / Expert

Set during onboarding and validated by an optional diagnostic. Adjusted over time by the Adaptive Content Engine based on performance data. Controls lesson content, UI complexity, feedback vocabulary, and AI tutor tone.

---

### Axis 2 — Language Proficiency

**Languages:** English / Spanish / French

All three are first-class. No language is a reduced or secondary experience. Layouts must accommodate 20–30% longer strings in French and Spanish. Language proficiency and guitar skill are independent axes — an expert guitarist who is a non-native speaker receives expert guitar content in appropriately simplified language, not simplified guitar content.

---

### Axis 3 — Emotional State

**States:** Confident / Frustrated / Plateauing / Disengaged

Emotional state is inferred from behavioural signals only. It is never self-reported by the user and never named back to them. The system responds by adjusting content, tone, pacing, and scaffolding — not by displaying a state label or asking the user how they feel.

| State | Behavioural signals | Platform response |
|---|---|---|
| **Confident** | High accuracy, fast progression, low retry rate | Introduce challenge, reduce scaffolding, increase pace |
| **Frustrated** | High retry rate, short sessions, abrupt stops | Simplify the task, calm and warm tone, offer an alternative path |
| **Plateauing** | Consistent performance but no progression over time | Reframe the skill, introduce lateral or complementary challenges |
| **Disengaged** | Declining session frequency, skipped lessons, low response latency | Surface personalised hooks, shorten content units, reduce friction |

**Inference signals used:**
- Retry rate on exercises and practice loops
- Session length and drop-off point
- Lesson skip and skip-back patterns
- Response latency in the AI tutor chat
- Frequency and recency of sessions over time

Errors are always treated as redirects, never as failures. When a student struggles, the system responds with a new path — a simpler task, a different explanation, a slower tempo — not a warning or a failure state.

---

## 3. AI System Design

The platform is built around three distinct AI components, each with defined inputs, outputs, and known limitations.

---

### 3.1 Audio Analysis Engine

**Purpose:** Listens to the student's playing in real time and evaluates technical accuracy.

**Inputs**
- Microphone audio stream (captured via Web Audio API in-browser)
- Expected reference: the target note, chord, or sequence from the active lesson
- Tempo setting from the lesson's backing track or metronome

**Outputs**
- Real-time pitch accuracy signal (correct note / close / wrong)
- Timing accuracy signal (on beat / early / late)
- Chord change speed indicator
- Post-session summary scores for pitch, timing, and consistency

**Limitations**
- Accuracy degrades significantly with low-quality or built-in laptop microphones; a dedicated instrument or condenser microphone is recommended for best results
- Background noise (TV, other instruments, room echo) can cause false readings; the UI will prompt users to play in a quiet environment
- Cannot assess posture, hand position, or fingering technique — audio-only means visual errors go undetected
- Classical guitar techniques such as fingerstyle dynamics and tone colour are difficult to evaluate via pitch/timing alone
- Distorted electric guitar tones can confuse pitch detection; clean or lightly driven tones are strongly recommended for practice sessions

---

### 3.2 AI Tutor

**Purpose:** A 24/7 on-demand conversational tutor that answers questions, explains concepts, and guides the student through their learning journey.

**Inputs**
- Student's text or voice message
- Student's profile: level, guitar type, selected goals
- Student's progress data: lessons completed, recent feedback scores, stagnation flags
- Inferred emotional state from the Adaptive Content Engine
- Session history: prior AI tutor conversations (for continuity)

**Outputs**
- Text responses (and voice in post-MVP) to technique, theory, and song-learning questions
- Embedded short video clip references where a visual demonstration is needed
- Suggested next lessons or exercises based on the student's current state
- Tone and pacing adjusted to inferred emotional state — warmer and simpler for Frustrated, more direct and challenging for Confident

**Limitations**
- The AI tutor cannot hear the student play; its feedback on technique is entirely based on what the student describes, not what it hears (that is the Audio Analysis Engine's role)
- Responses are generated by a language model and may occasionally be incorrect on highly specific or niche guitar topics; students should treat advice as a strong starting point, not authoritative truth
- The tutor has no awareness of what happens outside the platform — it cannot assess a video the student uploads externally or evaluate a recording made in another app
- Emotional state inference is probabilistic; the tutor will occasionally misjudge a student's state, particularly during short or atypical sessions

---

### 3.3 Adaptive Content Engine

**Purpose:** Adjusts the student's lesson path and emotional response dynamically based on performance and behavioural data.

**Inputs**
- Lesson completion status and time-on-task per lesson
- Audio analysis scores from practice sessions
- AI tutor session topics (signals what the student is struggling with)
- Explicit level selection and any level changes
- Behavioural signals: retry rate, session length, skip patterns, response latency, session frequency

**Outputs**
- Recommended next lesson or module
- Supplementary content surfaced when stagnation is detected
- Level adjustment prompts (suggesting the student move up or revisit an earlier level)
- Inferred emotional state passed to the AI Tutor and lesson player
- Content unit length and scaffolding level adjusted per emotional state
- Weekly progress digest fed into the notification system

**Limitations**
- For MVP, the engine uses rule-based logic rather than a trained ML model; recommendations are reliable but not deeply personalised
- Emotional state inference requires sufficient behavioural data — new users or infrequent users will not have reliable state detection until a usage pattern is established
- Stagnation detection has a lag — it requires multiple failed attempts before intervening, meaning a student may feel stuck before the system responds
- Without explicit feedback from the student ("this was too easy / too hard"), adjustments are inferred and may occasionally misread the situation

---

## 4. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Acquire subscribers | 500 paying users within 60 days of launch |
| Retain learners | 60%+ monthly retention rate |
| Demonstrate learning outcomes | 70%+ of users advance at least one skill level within 90 days |
| Drive engagement | Average 3+ sessions per user per week |

---

## 5. User Personas

**The Absolute Beginner** — Has never played guitar, motivated by a favourite song or a new hobby. Needs clear structure, encouragement, and zero jargon.

**The Lapsed Player** — Played years ago, wants to pick it up again. Needs flexible level assessment and the ability to skip basics.

**The Intermediate Grinder** — Can play songs but wants to improve technique, music theory, or a specific genre. Needs targeted content and measurable feedback.

**The Advanced Learner** — Near-professional, wants refinement and highly specific AI-guided coaching on niche styles or techniques.

---

## 6. Problem Space by Persona

### The Absolute Beginner
**Core problem:** Doesn't know where to start, and early frustration kills motivation fast. Most free resources (YouTube, tabs) assume prior knowledge or jump around without structure. Without a teacher, bad habits form early — poor posture, incorrect finger placement, muted strings — and are hard to unlearn later. There's no feedback loop to tell them whether what they're playing actually sounds right.

**What this platform solves:** A clear, structured starting point with zero assumed knowledge. Real-time audio feedback catches errors immediately, replacing the role of a teacher saying "that chord isn't quite right." Progress milestones provide the small wins needed to stay motivated through the painful early weeks.

---

### The Lapsed Player
**Core problem:** Knows enough to be frustrated by beginner content, but not enough to jump into intermediate material confidently. Most platforms force a binary choice: start from scratch (boring and demoralising) or skip ahead and feel lost. Their muscle memory is patchy — some things come back fast, others feel brand new.

**What this platform solves:** The diagnostic onboarding identifies exactly where they are, not just which label they pick. Adaptive content means they can move quickly through familiar ground and slow down where the gaps are. They don't waste time on content they've already mastered.

---

### The Intermediate Grinder
**Core problem:** Has hit a plateau. Can play songs, but progress feels invisible. YouTube tutorials are too scattered to build systematic improvement, and they don't know what they don't know — whether it's technique, theory, rhythm, or all three. Without structured feedback, they keep reinforcing the same habits rather than breaking through them.

**What this platform solves:** AI feedback surfaces the specific, repeatable errors they've been overlooking. Structured module progression exposes gaps in their theory and technique knowledge. The AI tutor provides the expert perspective needed to break through plateaus that self-study alone can't resolve.

---

### The Advanced Learner
**Core problem:** Generic content is useless at this level. They need highly specific, niche guidance — a particular genre, a specific technique, or professional refinement. Most platforms don't go deep enough, and the AI tutoring they've encountered elsewhere feels shallow and generic.

**What this platform solves:** The AI tutor is trained with deep guitar domain knowledge and adapts to advanced queries — music theory, genre-specific technique, arrangement, and beyond. Combined with AI feedback precision tuned for advanced playing, the platform stays useful well past the intermediate stage.

---

## 7. Core Features

### 7.1 Onboarding & Level Selection

- Users choose their guitar type at sign-up: **Acoustic**, **Electric**, or **Classical**
- Users self-select their starting level: **Beginner**, **Intermediate**, or **Expert**
- Optional: a short 3–5 minute AI-assessed diagnostic to validate or adjust level
- Onboarding collects musical goals (e.g. play a song, learn theory, improve technique) to personalise the content feed

### 7.2 Pre-recorded Video Tutorials

- Structured curriculum organised by level and guitar type
- Lessons grouped into modules (e.g. "Beginner Acoustic: Open Chords", "Intermediate Electric: Pentatonic Scales")
- Each lesson includes: video, tab/chord diagrams, a practice backing track, and a summary
- Lessons available in English, Spanish, and French (subtitles at minimum; dubbed versions as resources allow)
- Progress is tracked per lesson (not started / in progress / completed)
- Content unit length is shortened for Disengaged users; scaffolding is increased for Frustrated users

### 7.3 AI Real-Time Feedback (Core Differentiator)

- User plays along via their device microphone; the AI listens and analyses the audio
- Feedback provided on:
  - **Timing** — is the student playing in tempo?
  - **Pitch accuracy** — are the correct notes/chords being played?
  - **Chord changes** — smoothness and speed of transitions
- Visual feedback displayed in real time (e.g. green/amber/red indicators, waveform display)
- Post-session summary: a brief AI-generated report on what went well and what to practise next
- AI feedback does not require a camera — audio only for MVP
- Feedback language and complexity adapts to guitar skill level and inferred emotional state

### 7.4 1-on-1 AI Tutor Sessions

- Conversational AI tutor (text + voice) available on demand, 24/7
- Student can ask questions about technique, theory, or song learning
- AI tutor can demonstrate concepts via embedded short video clips
- AI tutor is aware of the student's progress data, guitar level, language, and inferred emotional state
- Session history saved so the AI retains context across conversations

### 7.5 Progress Tracking & Adaptive Content

- Dashboard showing: lessons completed, practice time, AI feedback scores over time, current level
- After completing a module, the student takes a short AI-assessed exercise to unlock the next
- The system detects stagnation and surfaces supplementary content or a lateral challenge (Plateauing), or a simplified alternative path (Frustrated)
- Level can be upgraded or downgraded based on ongoing performance data
- For Confident users, challenge is proactively introduced before stagnation occurs
- Weekly progress email/notification summarising achievements and next steps

### 7.6 Guitar Type Personalisation

- All content (tutorials, AI feedback calibration, chord libraries) is tailored to the selected guitar type
- Students can add a second guitar type to their profile without losing progress on the first
- Guitar type affects: tuning reference used by the AI listener and lesson content

---

## 8. Tutor Persona & Presence

The AI tutor is not a generic chatbot interface. It has a consistent visual identity, personality, and manner of engagement that adapts to the user's context — guitar type, skill level, genre, and emotional state. The goal is a tutor that feels like a credible, relatable guide rather than a branded mascot.

---

### 8.1 Matched Guitar

The tutor visually and sonically mirrors the user's guitar type. Demo clips, chord illustrations, and any video references use the same guitar type the user has selected — acoustic for acoustic learners, electric for electric, classical for classical. This removes the cognitive friction of mentally translating a demo played on a different instrument.

Accessories and playing style are matched accordingly — a classical tutor uses fingerstyle technique and no pick; an electric tutor uses appropriate gear context for the genre being taught.

**Guitar switch prompt**
When the system detects that a user has a different guitar selected than the one the tutor is currently demonstrating with, the tutor may offer to switch — framed naturally as the tutor's own suggestion, not a settings option:

> *"Hey, I actually have the same guitar as you — want me to use it?"*

Rules governing this prompt:
- Fires **once only**, never repeated after the user has responded
- Does **not** fire mid-session if the user's inferred emotional state is Frustrated — wait for a Confident or neutral moment
- If the user declines, the preference is saved and the prompt is never shown again
- The user can change this preference at any time via their profile settings

---

### 8.2 Adaptive Tone & Manner

The tutor's language, pacing, and personality register adapt continuously across the three axes:

**By guitar skill level:**
- Beginner: warm, patient, encouraging; short sentences; avoids jargon; celebrates small wins
- Intermediate: collegial, matter-of-fact; introduces technical language with brief explanation
- Expert: direct, peer-level; assumes vocabulary; gets to the point fast; minimal praise

**By emotional state:**
- Confident: matches the user's energy, pushes forward, introduces challenge
- Frustrated: slows down, simplifies, uses humour sparingly to defuse tension, never rushes
- Plateauing: reframes and recontextualises — "let's look at this from a different angle"
- Disengaged: shorter, punchier interactions; surfaces something novel or personally relevant to re-engage

**By language:**
- Tone and idiom adapt to cultural register, not just vocabulary — a Spanish-speaking tutor doesn't simply translate English phrases; it uses natural expressions appropriate to that language's instructional tradition

Across all states, the tutor has a consistent underlying personality — the adaptation feels like the same person reading the room, not a different character each session.

---

### 8.3 Visual Persona *(Post-MVP)*

The tutor's visual appearance is contextualised to the user's guitar type and musical goals. The aim is immediate credibility — the tutor should look like someone the user would want to learn from.

**Default archetypes by guitar type:**
- **Acoustic** — singer-songwriter aesthetic; informal, approachable
- **Classical** — conservatoire-trained appearance; precise, composed
- **Electric** — experienced gigging musician; genre-influenced styling

**Genre refinement (post-archetype):**
Where a user is pursuing a specific genre (blues, metal, jazz, indie), the tutor's visual styling shifts to reflect that context — an electric blues learner and an electric metal learner should feel like they're working with different kinds of expert.

**User selection:**
Rather than the platform assigning a persona automatically, users choose from 2–3 options at onboarding. This gives agency and avoids assumptions about what a learner in a given genre should look like.

**Inclusion requirement:**
The persona options must be deliberately diverse across gender presentation, age, ethnicity, and body type. No archetype should default to a demographic stereotype. This requires a dedicated inclusion review before the feature ships.

**Flagged for post-MVP.** Visual persona generation requires significant asset production and inclusion review. It will not be in the initial launch.

---

## 9. Subscription & Pricing

| Plan | Description |
|---|---|
| **Free Trial** | 7-day full access, no credit card required |
| **Monthly** | Full platform access, billed monthly |
| **Annual** | Full platform access, billed annually (~20% discount vs monthly) |

All plans include: pre-recorded tutorials, AI real-time feedback, AI tutor sessions, and progress tracking.

---

## 10. Technical Architecture (MVP)

### Frontend
- React-based single-page application
- Responsive design (desktop-first, mobile-usable)
- Web Audio API for microphone access and real-time audio capture

### Backend
- RESTful API (Node.js or Python/FastAPI)
- Authentication: email/password + OAuth (Google)
- Video hosting: third-party CDN (e.g. Mux or Cloudflare Stream) for pre-recorded lessons
- Audio analysis: AI model for pitch/timing detection (either custom-trained or via third-party music AI API)

### AI Components
- **Audio analysis engine:** Detects pitch, timing, and chord accuracy from microphone input
- **AI tutor:** LLM-powered conversational assistant with guitar-domain system prompt, progress context, emotional state context, and session memory
- **Adaptive content engine:** Rule-based logic (MVP) that adjusts lesson recommendations based on progress, feedback scores, and inferred emotional state

### Data & Storage
- User profiles, progress data, session history, and behavioural signals stored in relational database (PostgreSQL)
- Video/audio assets on CDN
- GDPR-compliant data handling (given EU user base potential across French/Spanish speakers)

### Localisation
- i18n framework from day one (e.g. react-i18next)
- All UI strings, lesson titles, and AI tutor responses available in EN / ES / FR

---

## 11. MVP Scope (3-Month Build)

The MVP focuses on the core learning loop.

### In MVP
- Onboarding (level selection, guitar type, goal setting)
- Pre-recorded lesson library (30 lessons to start, prioritising Acoustic Beginner)
- AI real-time audio feedback (timing + pitch, basic UI)
- Progress dashboard (lessons completed, practice time, basic score history)
- AI tutor (chat-based, 24/7, progress-aware and emotionally adaptive)
- Behavioural signal tracking for emotional state inference
- Subscription billing (monthly + annual, Stripe integration)
- English + Spanish + French UI

### Post-MVP (v1.1+)
- Expanded lesson library across all levels and guitar types
- AI voice tutor (spoken interaction, not just text)
- ML-based adaptive content engine (replacing rule-based MVP logic)
- Mobile-optimised experience
- Backing tracks and jam tools
- Song-based learning paths (learn a specific song end-to-end)

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Audio analysis accuracy varies by microphone quality | Set clear expectations in UI; offer calibration step; graceful fallback messaging |
| Content production bottleneck | Prioritise Acoustic Beginner first; use screen-recorded + voiceover format to speed production |
| AI tutor giving shallow or incorrect guitar advice | Invest in a strong domain-specific system prompt and test extensively with real players before launch |
| Emotional state misclassification | Tune inference thresholds conservatively; default to neutral when signal is insufficient; never surface the classification to the user |
| Localisation cost | Translate UI strings first; subtitle lessons rather than dub for MVP |
| Subscription churn | Focus on onboarding quality and early "aha moment" (first real-time feedback hit) |

---

## 13. Open Questions

- What is the target subscription price point? (Recommend benchmarking against Yousician and Fender Play)
- Will the platform own lesson content rights, or partner with existing guitar educators?
- Is there a preference for a specific AI audio analysis provider, or build in-house?
- What behavioural thresholds trigger each emotional state? These need to be defined and tested before the Adaptive Content Engine can be built.

---

*Prepared for internal planning. All timelines and feature scope subject to revision based on team capacity and user research.*
