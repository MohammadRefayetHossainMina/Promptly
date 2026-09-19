# Founder Notebook — Promptly

**Owner:** Founder (lead decision-maker)
**Status:** Active
**Last updated:** 2026-09-19

> This document is the single source of truth for the Promptly startup project.
> It defines the concept, records decisions, and serves as the working brief that
> guides OpenCode across all stages of the build.

---

## Project Overview & Links

**Startup Name:** Promptly — *"Find the right prompt — fast, every time."*

### Executive Summary

Developers and creators across software, mobile, and game development rely on several AI tools (ChatGPT, Cursor, Gemini) and continually lose their best prompts in scattered local files — so they rebuild them from memory each time. Promptly ends that waste: save a prompt once, find it instantly, and copy it into any AI tool in a single click.

### Problem

Prompt sprawl. Proven prompts are buried in disorganized local files with no structure, templates, or version history. The repeating loop — *remember → find → copy* — costs time on every reuse.

### Solution

Promptly is a frontend-only web application built around the **Save → Search → Copy** workflow. Each prompt is stored with a clear title, found instantly as you type, and copied to the clipboard in one click for direct use in ChatGPT, Cursor, or Gemini. Everything runs entirely in the browser and persists in `localStorage` — no account, no backend, and no API keys to expose.

### Links

| Item | Link |
| :--- | :--- |
| **GitHub Repository** | https://github.com/MohammadRefayetHossainMina/Promptly |
| **GitHub Pages** | https://mohammadrefayethossainmina.github.io/Promptly/ |
| **Deployed Site** | https://savageexit-idiomdynamic-3000.codio.io/ |

---

## 1. Vision & Problem Discovery

*Foundation: Knowledge → Problem → Solution → Value → Product*

### 1.1 Domain / Industry
Developer productivity — prompt management for creative and development workflows.

### 1.2 Target Audience

| Tier | Audience |
| :--- | :--- |
| **Primary** | The founder — a developer working across software development, mobile applications, and game engines (Unity, Godot, Unreal Engine), plus 3D creation in Blender. |
| **Secondary** | Freelance developers and creators who use the same set of tools and lose productive prompts in the process. |

### 1.3 Core Problem
**Prompt sprawl.** Prompts for different AI tools (ChatGPT, Cursor, Gemini) and across different domains (application code, mobile apps, game development, 3D models) are scattered across disorganized local files. There is no structure, no reusable templates, and no version history. Reusing a proven prompt means searching through messy folders or rewriting it from memory.

> **v1 Framing:** A single, repetitive loop — *remember → find → copy*. The founder forgets the good prompts already written, cannot find them when needed, and loses time restoring them into AI tools.

### 1.4 Proposed Solution
A personal Prompt Library — a frontend-only web application to save, tag, search, and reuse prompts, with reusable templates organized by domain, engine, or task type.

> **v1 Scope:** A one-page prompt library built around the core loop **Save → Search → Copy** — save a prompt with a title, search all saved prompts instantly, and copy a prompt to the clipboard in one click. Persisted in `localStorage`. No backend, no accounts.

### 1.5 Value Proposition
A document, wiki, or notes app only *stores text*. Promptly is a structured workspace designed around the real workflow of using prompts: finding the right prompt quickly, adapting it from a template, and retaining the history of what worked — all without a backend and without exposing API keys.

### 1.6 Idea Filter Evaluation (5-Point)

| Criterion | Assessment | Verdict |
| :--- | :--- | :--- |
| **User** (Who?) | Specific group: developers and creators juggling multiple AI tools (ChatGPT, Cursor, Gemini) across software, mobile, and game engines (Unity, Godot, Unreal, Blender) | Pass |
| **Problem** (What hurts?) | Prompt sprawl — proven prompts buried in disorganized local files, rebuilt from scratch each time, with no templates or history | Pass |
| **Value** (Why care?) | Find the right prompt in seconds, adapt from a template, and keep a history of what worked — saves time and keeps output consistent | Pass |
| **Feasibility** (Can you showcase it?) | Core mechanics (organize, search, copy) are demonstrable in a frontend-only UI prototype with `localStorage` | Pass |
| **Clarity** (Can you pitch it?) | "A prompt library that saves, searches, and copies your AI prompts" — one jargon-free sentence | Pass |

### 1.7 Scoped-Down v1 (confirmed 2026-09-17)

Following challenge review, the concept was deliberately reduced. **Cut from v1:** version history, per-engine template packages (Unity/Godot/Unreal/Blender), tags and folders, freelancer-facing workflows, and API integration.

| Element | Confirmed v1 Decision |
| :--- | :--- |
| **Audience** | The founder — a solo developer and creator across software, mobile, and game projects (Unity, Godot, Unreal, Blender), relying on several AI tools (ChatGPT, Cursor, Gemini), who keeps losing or rewriting the best prompts. Freelancers are a possible future audience, not a v1 target. |
| **Core feature** | The Save → Search → Copy loop — save a prompt with a title, search all saved prompts instantly, copy the right one to the clipboard in one click. Data persists in `localStorage`. |
| **Primary CTA** | The **Copy** button on every saved prompt — one click copies the prompt text for pasting into ChatGPT, Cursor, or Gemini. Secondary action: **Save Prompt**. |
| **20-Second Pitch** | *"A personal library for your best AI prompts. Save a prompt once, find it again in seconds, and copy it into ChatGPT, Cursor, or Gemini with one click — everything stays in your browser, with no account and no backend."* |

---

## 2. Official Founder Decision

> **Positioning Statement:** We help **developers and creators** who struggle with **scattered, disorganized AI prompts** by providing **a personal prompt library**, helping them **find and reuse their best prompts in seconds**.

**Status:** Confirmed 2026-09-17 after passing the 5-Point Idea Filter.

This statement is the single source of truth for product direction and prevents feature creep during the build. Any future change of direction must be recorded in the Decision Log first.

---

## 3. Visual Identity & Design System

*Locked in 2026-09-17. Every design decision traces back to the brand personality words below.*

### Brand Personality / Tone of Voice
**Clear, Calm, Organized** — the UI feels focused and uncluttered, friendly to a solo developer working across dev, mobile, and game tools.

- **Product Name:** **Promptly**
- **Tagline:** *"Find the right prompt — fast, every time."*

### Color Palette (Option 2 — "Calm Dark")

| Token | Hex |
| :--- | :--- |
| Background | `#1E2024` |
| Surface / Card | `#2A2D33` |
| Primary | `#7FA6C9` (soft blue) |
| Accent | `#6EC6B8` (muted teal) |
| Text (primary) | `#E8EAED` |
| Text (muted) | `#9AA0A9` |

### Typography

| Role | Font |
| :--- | :--- |
| Headings | Sora — modern, friendly, slightly geometric |
| Body | Geist — clean, neutral, highly readable |

### Button Styles

Two button styles are used consistently across the site.

**Primary button** — the main action (e.g., "Save Prompt", "Copy").

- Teal background (`#6EC6B8`), dark text (`#1E2024`)
- Rounded corners (10px), comfortably sized padding

**Secondary button** — a lesser action (e.g., "Cancel") or a link-style button.

- Transparent background, thin gray outline (`#3A3F47`)
- Light text (`#E8EAED`)

**Hover behavior:**

- Primary buttons get slightly lighter
- Secondary buttons fill with a light gray background (`#2A2D33`)
- Both transition smoothly in ~0.15s

Rule of thumb: when unsure, err on consistency — same colors, same corners, same hover feel everywhere.

### Geometry & Layout Rules

- **Corner roundness:** cards and buttons use `10px`; large containers (e.g., the main page panel) use `14px`; small elements stay subtly rounded.
- **Spacing:** use only values from this scale — `4px, 8px, 16px, 24px, 32px, 48px`.
- **Consistency:** every section reuses the same corners, spacing, colors, and fonts.

---

### 3.1 Base Shell — CSS Token Mini-Spec

*Approved 2026-09-17. Specifies the base shell: `index.html` shell and `style.css` design tokens. Every component built later must use these variables — never hardcoded values. Feature spec: `SPECS/2026-09-17-base-shell/` (requirements.md, plan.md, validation.md).*

**Goal:** a clean, semantic HTML skeleton plus the full set of CSS variables, ready for the Navbar and Hero (Layer 2). No components yet — just the foundation.

#### Fonts (loaded from Google Fonts in `<head>`)

- `--font-heading: 'Sora', sans-serif` — headings only
- `--font-body: 'Geist', sans-serif` — body text
- Load both with `display=swap`; fallback `sans-serif`.

#### Color Tokens

| CSS variable | Value | Use |
| :--- | :--- | :--- |
| `--color-background` | `#1E2024` | page background |
| `--color-surface` | `#2A2D33` | cards, panels |
| `--color-surface-hover` | `#2A2D33` | secondary button hover fill |
| `--color-border` | `#3A3F47` | secondary button outline |
| `--color-primary` | `#7FA6C9` | links, highlights |
| `--color-accent` | `#6EC6B8` | primary buttons, key accents |
| `--color-accent-hover` | lighter than `#6EC6B8` | primary button hover |
| `--color-text` | `#E8EAED` | primary text |
| `--color-text-muted` | `#9AA0A9` | secondary text |

#### Spacing Scale

| CSS variable | Value |
| :--- | :--- |
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `16px` |
| `--space-4` | `24px` |
| `--space-5` | `32px` |
| `--space-6` | `48px` |

Use only these six values for gaps and margins.

#### Border Radius

| CSS variable | Value | Use |
| :--- | :--- | :--- |
| `--radius-btn` | `10px` | cards + buttons |
| `--radius-box` | `14px` | large containers, main panel |

#### Buttons

- **Primary:** background `--color-accent`, text `--color-background`, radius `var(--radius-btn)`; hover slightly lighter, `150ms` transition.
- **Secondary:** transparent background, 1px outline `--color-border`, text `--color-text`; hover fills with `--color-surface-hover`, `150ms` transition.

#### Base Shell Requirements

- Semantic shell only: `<header>`, `<main>`, `<footer>` placeholders in `index.html`; no section content yet.
- `index.html` loads Sora + Geist from Google Fonts in `<head>`, then `style.css`.
- `style.css` defines all tokens above in `:root` plus a light reset (box-sizing, margins, body defaults tied to tokens).
- Shell renders with the dark `#1E2024` background and Sora headings.

---

## 4. Website Structure & Page Architecture

*Approved 2026-09-17 — see the full section-by-section outline below.*

- **Primary Goal / Conversion Action:** Open the app and save the first prompt. Primary button reads **Save Prompt**; every card carries a **Copy** button for one-click use.
- **Sections:** Navbar → Hero → Problem → Solution → Features → Social Proof → Final CTA → Footer.

### Navbar

- Logo "Promptly" + tagline mark, one link ("Add a prompt"), and the primary **Save Prompt** button.
- **Why:** one action, no clutter — matches the brand personality (Clear, Calm, Organized).

### Hero

> **Headline:** *Find the right prompt — fast, every time.*
- **Subheadline:** "Promptly is a personal library for your AI prompts. Save one once, search it in seconds, and copy it into ChatGPT, Cursor, or Gemini with one click."
- **CTA:** **Save your first prompt** — scrolls the visitor to the library.
- **Supporting visual:** a small mock of a prompt card with a Copy button.

### Problem

> **Headline:** *Where did that prompt go?*
- Proven prompts are scattered across messy local files — and rebuilt from memory every time.
- The waste loop: *remember → find → copy*.

### Solution

> **Headline:** *One home for every prompt that works.*
- Save a prompt once with a clear title; search everything instantly; copy it into any AI tool with one click.
- Everything stays in the browser — no account, no backend, no one reading the prompts.

### Features (three value pillars)

> **Headline:** *Save, find, copy — the whole loop in three moves.*
1. **Save in seconds** — title + text, done. Your library persists automatically in your browser.
2. **Search instantly** — start typing and prompts filter as you type.
3. **Copy with one click** — paste straight into ChatGPT, Cursor, or Gemini.

### Social Proof (kept light — no fake testimonials)

> **Headline:** *Built for a workflow that actually works.*
- "No account. Runs in your browser."
- Positioning chip: *For developers, makers, and game creators.*

### Final CTA

> **Headline:** *Start your library today.*
- **Subheadline:** "Save your first prompt, find it in seconds, copy it anywhere."
- **Button:** **Save Prompt**.

### Footer

- Copyright "Promptly", tagline, and links back to sections (Problem, Features).

---

## 5. Decision Log

*Cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-17 | Problem to explore | Prompt sprawl across dev/game tools; alternative ideas surfaced during discovery interview | Prompt Library — aligns with personal pain, existing domain expertise, and a clear gap in current tooling | Done — confirmed |
| 2026-09-17 | Founder decision | Wording variants for the positioning statement | "We help developers and creators who struggle with scattered, disorganized AI prompts by providing a personal prompt library, helping them find and reuse their best prompts in seconds." — passed the 5-Point Idea Filter | Done — confirmed |
| 2026-09-17 | v1 scope-down | Full feature set (templates, versioning, tags, API) vs. minimum core loop | Save → Search → Copy only; version history, per-engine templates, tags/folders, and API integration deferred or cut | Done — confirmed |
| 2026-09-17 | Brand personality | Precise/Minimalist/Fast · Sharp/Confident/Focused · Clear/Calm/Organized | **Clear, Calm, Organized** — friendlier and less intimidating for solo devs and creators | Done — confirmed |
| 2026-09-17 | Visual identity | Palette options: Soft Light, Calm Dark, Warm Paper | **Calm Dark** — native feel for developers who live in dark editors; accents pop on the dark base | Done — confirmed |
| 2026-09-17 | Product name & tagline | PromptVault, PromptNest, Promptly | **Promptly** — "Find the right prompt — fast, every time." Crisp, easy to say, emphasizes the speed promise | Done — confirmed |
| 2026-09-17 | Landing page architecture | 8-section outline options; hero headline variants; testimonials vs. trust notes | Approved outline with hero headline "Find the right prompt — fast, every time." Social proof kept light (no fake testimonials) | Done — confirmed |
| 2026-09-17 | Base shell + design tokens | N/A — spec approved in §3.1 | Implemented semantic shell (`header`/`main`/`footer`), Sora + Geist from Google Fonts, and all color/typography/spacing/radius tokens in `style.css :root`. No components yet. | Done — validated, all checks pass |
| 2026-09-17 | Stage 5 all layers | Content sections + professional component + motion budget quality audit | Implemented Problem/Solution/Features/Social Proof/Final CTA + Footer sections, three-feature-card grid, interactive prompt card with working Copy microinteraction, and scroll reveal via IntersectionObserver. Quality audit verified token usage, structural balance, and no console errors. Stage 5 complete. | Done — final quality audit pass |

---

## 6. Discovery Notes & Open Questions

### 6.1 Discovery Interview — Summary (2026-09-17)

**Frustrations.** Tracking prompts across software, mobile, and game development (Unity, Godot, Unreal Engine, Blender); difficulty finding reliable help.

**Areas of expertise.** Coding, technology, professional work, game development.

**People to help.** Primarily the founder; secondarily freelancers.

**Observed freelancer pain points.** Inconsistent AI output; significant time spent crafting prompts; difficulty billing for prompt-related work; no client-facing workflow for prompts.

**Current setup.** Prompts stored in local files and folders — disorganized and scattered.

**Desired capabilities.** Prompt templates; search and filter; version history; in-app prompt execution (deferred to a later stage).

**Form factor.** Browser-based web application.

**Technical direction.** Frontend-only. Note: safely calling AI APIs requires a small backend to protect API keys; API integration is deferred.

### 6.2 Open Questions

Remaining points under consideration; items cut in the v1 scoping stay off the table unless revisited deliberately.

- [ ] Whether prompts should support placeholders / variables (e.g., `{{task}}`)
- [ ] Placement of the search box and save form in the single-page layout
- [ ] How far Promptly will grow beyond the Save → Search → Copy loop

### 6.3 Working Briefs for OpenCode

*Documented as decisions are finalized.*

### 6.4 Task Register

| Status | Task |
| :--- | :--- |
| Done | Define core problem statement and audience (discovery interview) |
| Done | Evaluate concept against the 5-Point Idea Filter |
| Done | Draft, confirm, and document the Founder Decision |
| Done | Challenge review + scope-down to the v1 core loop (Save → Search → Copy) |
| Done | Decide product name and brand identity (Promptly) |
| Done | Select color palette and typography (Calm Dark) |
| Done | Approve landing page architecture outline |
| Done | Write base shell mini-spec (MISSION.md §3.1) |
| Done | Create base shell feature spec (SPECS/2026-09-17-base-shell/) |
| Done | Implement base shell + design tokens |
| Done | Build responsive hero and navigation components |
| Done | Draft website copy for the hero section |
| Done | Implement feature showcase sections (Problem, Solution, Features, Proof, CTA, Footer) |
| Done | Add interactive elements and conversion forms (scroll reveal, Copy microinteraction) |
| Done | Final visual polish and responsive testing — site live at `https://savageexit-idiomdynamic-3000.codio.io/` |
| Done | Build v1 Milestone 1 — prompt library: save form + saved list + per-card Copy, persisted in `localStorage` (SPECS/2026-09-18-prompt-library/) |