# Promptly — Base Shell & Full Page Requirements

**Date:** 2026-09-17
**Feature:** Complete one-page prompt library (Save → Search → Copy loop)
**Status:** Complete — Stage 5 fully implemented

---

## Context

Promptly is a frontend-only prompt library for developers and creators, built
using the SDD loop (Spec → Implement → Validate → Repeat). The full landing
page comprises 8 sections working together to showcase the core Save → Search →
Copy loop.

## Goal

A fully functional, responsive one-page landing page with the Save → Search →
Copy loop demonstrated through interactive components, all design tokens
centralized in CSS `:root`, and no hardcoded values beyond the approved token
set. The page functions entirely in the browser with no backend.

## Scope (in)

- `index.html`: complete semantic HTML with all 8 sections
  (Navbar → Hero → Problem → Solution → Features → Social Proof → Final CTA → Footer)
- Google Fonts import for Sora (headings) and Geist (body) in `<head>`
- `style.css`: all design tokens defined in `:root` per
  `MISSION.md` §3.1, plus all component styles, layout, motion budget,
  and responsive rules
- `script.js`: three interactions — scroll reveal (IntersectionObserver),
  copy-to-clipboard microinteraction with "Copied!" feedback, and mobile menu toggle
- Semantic HTML5 structure with `<header>`, `<main>`, `<footer>` and section
  elements with appropriate ARIA labels

## Out of scope (not in v1)

- Backend, database (SQLite), or user accounts
- API integration with AI tools (ChatGPT, Cursor, Gemini)
- Version history, template packages per engine (Unity, Godot, Unreal, Blender)
- Tags, folders, or freelancer-facing workflows
- Custom backend or server-side processing

## Design Tokens (locked, from MISSION.md §3.1)

| Category | Values |
| :--- | :--- |
| **Colors** | `--color-background: #1E2024`, `--color-surface: #2A2D33`, `--color-border: #3A3F47`, `--color-primary: #7FA6C9`, `--color-accent: #6EC6B8`, `--color-accent-hover: #89D8D1`, `--color-text: #E8EAED`, `--color-text-muted: #9AA0A9` |
| **Typography** | `--font-heading: 'Sora', sans-serif`, `--font-body: 'Geist', sans-serif` |
| **Spacing** | `--space-1: 4px`, `--space-2: 8px`, `--space-3: 16px`, `--space-4: 24px`, `--space-5: 32px`, `--space-6: 48px` |
| **Border Radius** | `--radius-btn: 10px`, `--radius-box: 14px` |

All colors/fonts/spacing/radius must come from CSS variables — never hardcoded.

## Component Summary

### Navbar
- Logo "Promptly" + tagline, "Add a prompt" link, primary "Save Prompt" button
- Sticky positioning, responsive collapse into mobile menu at ≤600px

### Hero
- Headline "Find the right prompt — fast, every time." with Sora font
- Subheadline describing the Save → Search → Copy loop
- CTA button "Save your first prompt", hero card mockup with demo Copy button

### Problem
- "Where did that prompt go?" headline with two bullets on scattered files and the remember→find→copy loop

### Solution
- "One home for every prompt that works." headline with two bullets on saving and browser-only persistence

### Features (3-card grid)
- **Save in seconds** — title + text, done; persists in browser
- **Search instantly** — start typing keyword, prompts filter as you type
- **Copy with one click** — paste straight into ChatGPT, Cursor, or Gemini

### Social Proof
- "Built for a workflow that actually works." with two bullets and position chip
- No fake testimonials

### Final CTA
- "Start your library today." with subheadline and primary "Save Prompt" button
- Prompt card with demo text and Copy button

### Footer
- Copyright "Promptly", tagline, links back to Problem and Features sections

## JavaScript Interactions

1. **Scroll reveal** — `.reveal` elements fade/slide up into view via IntersectionObserver (threshold 0.15)
2. **Copy microinteraction** — on Copy button click: text copied to clipboard, button text changes to "Copied!" for 1.5s, then reverts; visual feedback via `.btn-copied` token class
3. **Mobile menu toggle** — navbar toggle button shows/hides nav links as a full-width vertical list on mobile

## Constraints

- Frontend-only; no frameworks, no packages, no build tooling
- All styling derives from the CSS `:root` token set — zero hardcoded hex values outside `:root`
- Code is simple and readable by a beginner; most obvious solution preferred
- Responsive at mobile (≈375px) and desktop (≈1440px) widths
- Dark background `#1E2024` throughout; no light-mode default bleed

## Definition of Done

- All 8 page sections render correctly with proper token usage
- Scroll reveal works: cards fade in as user scrolls
- Copy button copies prompt text to clipboard with "Copied!" feedback
- Mobile menu toggle shows/hides nav links on narrow width
- Page serves at `https://${CODIO_HOSTNAME}-3000.codio.io/` with dark background, correct fonts, no console errors
- Full validation checklist from `validation.md` passes
- ROADMAP.md Stage 5 fully complete