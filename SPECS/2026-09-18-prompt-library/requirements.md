# Promptly — Prompt Library (Save → Search → Copy, Milestone 1)

**Date:** 2026-09-18
**Feature:** Working prompt library — add, list, and copy saved prompts
**Status:** Draft — awaiting founder approval
**Branch:** `feature/prompt-library`

---

## Context

Promptly is a frontend-only prompt library. The landing page (8 marketing
sections, Stage 5) is finished. This feature turns that page into the real
v1 app described in `MISSION.md` §1.4/§1.7: the **Save → Search →
Copy** loop.

This spec covers **Milestone 1** only: save a prompt with a title, see saved
prompts as cards, and copy any prompt with one click. Live search-as-you-type
is the **next milestone** and is out of scope here.

## Goal

A visitor can open the page, type a title + prompt text, click **Save Prompt**,
and see the new prompt appear in a list below. Every saved prompt card has a
**Copy** button that copies the prompt text to the clipboard. Saved prompts
persist in `localStorage` and survive a page refresh. The existing marketing
sections keep working exactly as they did before.

## Scope (in)

- `index.html` — add a library form (title input + prompt textarea +
  Save button) plus a container for saved prompt cards inside the existing
  `#library` section. Existing sections, navbar, hero, footer are untouched.
- `style.css` — styles for the library form and saved-prompt cards,
  built **only** from the existing design tokens in `:root` (no new hardcoded
  hex values, spacing, or radii).
- `script.js` — four new functions written simply and readably:
  - load prompts from `localStorage`
  - save a new prompt (title + text) into the list
  - render the saved list as cards with title, text, and a Copy button
  - copy any saved prompt to the clipboard (reuses the existing `copyText`)
- Friendly empty state when no prompts exist yet: *"No prompts yet. Save your
  first one above."*

## Out of scope (this milestone)

- Live search/filter-as-you-type (next milestone)
- version history, per-engine templates, tags/folders, freelancer workflows,
  API/backend integration (already cut in MISSION.md)
- Deleting or editing prompts (not part of the v1 loop)
- SQLite/persisting on disk: **no backend**. `localStorage` was locked in the
  constitution (MISSION.md §1.6/§1.7, "no account, no backend, no one reading
  your prompts") and confirmed by the founder 2026-09-18.
- Automated unit tests / a test runner: **none exists** and TECH.md forbids
  build tooling. Validation is a browser checklist (same approach as the
  base-shell feature).
- Logging: intentionally omitted — TECH.md requires the simplest readable code;
  a static page has no server, so there is nothing to log to.

## Design Tokens Used (from MISSION.md §3.1, unchanged)

All new styling uses existing tokens only:
- colors: `--color-surface`, `--color-border`, `--color-accent`,
  `--color-accent-hover`, `--color-primary`, `--color-text`,
  `--color-text-muted`, `--color-background`
- spacing: `--space-1` … `--space-6`
- radius: `--radius-btn` (10px), `--radius-box` (14px)
- fonts: `--font-heading` (Sora) for titles/labels, `--font-body` (Geist) for
  body text

## Decisions (confirmed by founder 2026-09-18)

1. **Storage:** `localStorage` only — frontend-only, matches the constitution.
2. **Milestone scope:** Add + list + Copy. Search is the next milestone.
3. **Placement:** inside the existing `#library` section on the current
   single page (the mandate is "one-page prompt library"). No marketing
   section is removed or changed.
4. **Master-prompt rules respected:** no unrelated code touched, existing
   functionality preserved (e.g. the hero demo Copy card keeps working).

## Edge Cases Handled

- Empty title **or** empty prompt text → do not save; show a short message.
- `localStorage` holds invalid JSON or is unavailable → start with an empty
  list and keep working (no crash).
- Rapid double-click on **Save Prompt** → only one entry saved (button is
  reset after saving).
- Copy on a card → "Copied!" feedback for 1.5s, same as the demo card.

## Definition of Done

- Typing a title + text and clicking **Save Prompt** adds a visible card.
- The new card survives a page refresh (still there after reload).
- Every saved card's **Copy** button copies its own prompt text to the
  clipboard and shows "Copied!".
- Empty state shows before any prompt is saved.
- All existing landing-page sections and the demo Copy card still work.
- Page has no console errors; layout is intact at ≈375px and ≈1440px.
- All boxes in `validation.md` ticked; ROADMAP.md updated.