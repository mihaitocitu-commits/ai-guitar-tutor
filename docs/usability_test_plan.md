# Usability Test Plan — StringAI Practice Mode

**Product:** StringAI — AI Guitar Tutoring Platform
**Feature:** Practice Mode (main feature)
**Version:** Prototype v1.0
**Prepared by:** UX Designer
**Date:** May 2026

---

## Objective

Evaluate whether guitar learners of varying skill levels can successfully complete a practice session using the Practice Mode prototype — from pre-session setup through to reading and acting on their post-session summary. Identify friction points, confusion, and moments where the interface fails to communicate clearly.

Secondary objective: validate whether the emotional design decisions land as intended — specifically, whether the post-session summary feels like guidance rather than judgement.

---

## What We're Testing

1. **Pre-session setup** — can users understand and complete the mic check, tempo control, and start a session without assistance?
2. **Active session legibility** — can users read and understand real-time feedback while their hands are occupied playing guitar?
3. **Tutor presence** — does the tutor panel feel useful and credible, or distracting?
4. **Post-session summary** — does the summary feel reassuring first and evaluative second? Can users identify their next action?
5. **Tone adaptation** — does the Beginner tone feel appropriate for beginners and the Expert tone appropriate for experienced players?

---

## What We Are Not Testing

- AI accuracy (this is a prototype with simulated data)
- Audio analysis quality
- Actual guitar playing ability of participants

---

## Participants

**Number:** 6 participants (minimum 5 to identify patterns)
**Recruitment criteria:**

| Slot | Persona | Guitar experience | Language |
|---|---|---|---|
| P1 | Absolute Beginner | Never played or < 3 months | English or French |
| P2 | Absolute Beginner | Never played or < 3 months | Spanish or French |
| P3 | Lapsed Player | Played before, stopped > 2 years | Any |
| P4 | Intermediate | 1–4 years active | English |
| P5 | Intermediate | 1–4 years active | Spanish or French |
| P6 | Advanced | 5+ years active | Any |

**Exclusion criteria:** No prior exposure to the StringAI prototype. No UX or product design background (to avoid professional bias).

**Equipment needed:** Laptop with microphone, guitar (participant's own if possible), quiet room. Prototype accessed via browser at the GitHub Pages URL.

---

## Participant Script

> *"Thank you for joining us today. We're going to ask you to try out an early version of a guitar learning tool. Everything you see is a prototype — some things are simulated and not everything works perfectly yet.*
>
> *We're testing the product, not you. There are no right or wrong answers. If something is confusing, that's useful information for us — please say it out loud.*
>
> *As you work through the tasks, please think aloud: tell us what you're looking at, what you're trying to do, and what you expect to happen. If you go quiet, we may ask 'what are you thinking right now?' — that's just a prompt, not a correction.*
>
> *We'll be recording the session for our own notes. The recording won't be shared externally. Do you have any questions before we start?"*

---

## Tasks

### Task 1 — Start a practice session

**Scenario:**
> *"You've just finished watching a lesson on G major. Your tutor Marcus has suggested you practice the chord to build muscle memory. You're going to use the Practice feature to do that. Go ahead and get set up and start a session."*

**Starting point:** Pre-session screen
**Success criteria:**
- Participant completes mic check without moderator assistance
- Participant adjusts tempo if desired (or consciously chooses not to)
- Participant starts the session within 3 minutes of reading the screen

**Watch for:**
- Does the mic check feel like a step or an obstacle?
- Does the participant understand what the tempo control is for?
- Does the chord diagram communicate enough about what they're supposed to play?
- Any hesitation at the "Start session" CTA — do they feel ready?

---

### Task 2 — Complete a practice session and read the feedback

**Scenario:**
> *"Go ahead and practice for a minute or two. Play along as best you can — or if you don't have a guitar with you, just observe what the screen is showing you. When you're ready, end the session."*

**Starting point:** Active session screen
**Success criteria:**
- Participant can identify what the three feedback bars represent without being told
- Participant can identify the current beat without being told
- Participant ends the session intentionally (not by accident)

**Watch for:**
- Do participants look at the feedback bars while "playing" or do they ignore them?
- Does the tutor panel feel like a helpful presence or a distraction?
- Does the mute/unmute button get noticed?
- Is the "End session" button findable when they're ready to stop?

---

### Task 3 — Read the post-session summary and identify next action

**Scenario:**
> *"Your session is over. Take a look at what Marcus is telling you. What would you do next?"*

**Starting point:** Post-session screen
**Success criteria:**
- Participant reads the tutor summary before the scores (or articulates that the summary is more useful)
- Participant can identify the "focus for next session" tip without prompting
- Participant can state a clear next action (practice again / next lesson / something else)

**Watch for:**
- Does the eye go to the scores first or the tutor card first?
- Does the "focus for next session" box land as actionable guidance or feel generic?
- Does the participant feel evaluated or supported?
- Which CTA do they choose and why?

---

### Task 4 — Tone adaptation (advanced participants only — P6)

**Scenario:**
> *"Take another look at the summary. Now press the E key on your keyboard."*

*(Moderator note: this switches the post-session to Expert tone — stripped language, no encouragement, technical precision.)*

**Success criteria:**
- Participant notices the change
- Participant can articulate which version felt more appropriate for them

**Watch for:**
- Does the Expert tone feel respectful or cold?
- Does the Beginner tone (by comparison) feel warm or patronising?
- What specific language differences do they notice?

---

## Observation Framework

For each task, record:

| Observation type | What to capture |
|---|---|
| **Completion** | Did they complete the task? Assisted / unassisted / failed |
| **Time on task** | How long did it take? |
| **Hesitations** | Where did they pause or backtrack? |
| **Think-aloud** | Key quotes verbatim — especially unprompted reactions |
| **Errors** | What did they click that wasn't the intended path? |
| **Emotional signal** | Visible frustration, surprise, delight, confusion |

---

## Post-Task Questions

Ask after all tasks are complete. Do not ask leading questions — let them answer in their own words first.

1. Walk me through how you felt during that practice session. What stood out?
2. Was there anything confusing or unexpected at any point?
3. Looking at the feedback you received — did it feel useful? Did it feel fair?
4. What did you think of Marcus being present during the session?
5. If you were going to use this regularly, what's the one thing you'd want to change?
6. Was there anything that felt like it wasn't made for someone at your level?

*(For non-English speakers only)*
7. Did the language of the interface feel natural? Was there anything that didn't quite translate?

---

## Debrief Notes for Moderator

After the session, record:
- Overall task completion rate
- Number of hesitations per task
- Most common point of confusion
- Most positive unprompted reaction
- Any quotes that directly reference the research hypotheses (hearing, language, level mismatch, tone)

---

## Success Metrics

| Metric | Target |
|---|---|
| Task completion rate (unassisted) | ≥ 80% across all tasks |
| Time to start session (Task 1) | ≤ 3 minutes |
| Participants who read tutor card before scores | ≥ 4 of 6 |
| Participants who can identify "focus for next session" unprompted | ≥ 5 of 6 |
| Participants who feel supported rather than judged post-session | ≥ 5 of 6 |

---

## Schedule

| Phase | Activity | Duration |
|---|---|---|
| Prep | Recruit participants, set up prototype URL, prepare recording | 3 days |
| Testing | 6 sessions, 45 min each | 2 days |
| Analysis | Affinity mapping, pattern identification, insight write-up | 1 day |
| Output | Findings report with design recommendations | 1 day |

**Total: 1 week**

---

## What We'll Do With the Findings

Findings feed directly into two decisions:
1. Whether the post-session layout (guidance before scores) works as intended — or needs further iteration
2. Whether the tone adaptation model (Beginner vs Expert) is calibrated correctly — or needs new thresholds

Results will be documented in the StringAI UX Deliverables Notion page and used to inform the next design iteration before any React implementation begins.
