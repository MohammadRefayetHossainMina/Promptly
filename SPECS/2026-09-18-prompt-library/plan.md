# Promptly — Prompt Library Plan (Milestone 1)

**Date:** 2026-09-18

Work through the task groups in order. Tick each box as you finish it.

> Validation note: this is a static frontend page (no build tooling, no test
> runner), so the checks are browser checks — the same approach as the
> base-shell feature. Run the server, open the public URL, and verify each
> item by hand.

## Task Group 1 — Spec & Scaffolding

- [x] Feature spec written and approved by the founder
- [x] Repo moved to workspace root on branch `main` (the empty
      `.git` was removed)
- [x] Milestone 1 scope confirmed: Add + list + Copy (search is next milestone)

## Task Group 2 — HTML (index.html)

- [x] Inside the existing `#library` section, add a library form:
  - [x] title input
  - [x] prompt textarea
  - [x] **Save Prompt** submit button (class `btn btn-primary`)
- [x] Add a container for saved prompt cards under the form
  - [x] starts with an empty-state message: *"No prompts yet. Save your first
        one above."*
- [x] No existing section, class, or id is removed or renamed

## Task Group 3 — CSS (style.css)

- [x] New styles reference **only** existing tokens from `:root`
- [x] Form fields styled with `--color-surface`, `--color-border`,
      `--color-text`, `--color-text-muted`, radius `--radius-btn`
- [x] Saved-prompt cards match the existing look of `.prompt-card`
      (reuse its tokens), with a Copy button
- [x] No hardcoded hex values, spacing, or radii added outside `:root`
- [x] Layout verified at ≈375px and ≈1440px

## Task Group 4 — JavaScript (script.js)

- [x] Keep every existing behaviour working (reveal, demo Copy, mobile menu)
- [x] `loadPrompts()` — read the list from `localStorage`; on bad/missing
      data, return an empty list without crashing
- [x] Form submit handler — reject empty title/text with a short message;
      otherwise save one entry, re-render, reset the form
- [x] `renderPrompts()` — draw each saved prompt as a card (title, text,
      Copy button) with the empty state when the list is empty
- [x] Per-card **Copy** — copies that card's own text; button flips to
      "Copied!" for 1.5s (reuse `copyText`)
- [x] No console errors on load, save, or copy

## Task Group 5 — Serve, Validate & Wrap Up

- [x] Serve with `python3 -m http.server 3000 --bind 0.0.0.0 --directory build-lab`
- [x] Open the public URL: `https://${CODIO_HOSTNAME}-3000.codio.io/`
- [ ] Walk the checklist in `validation.md` — every box ticked (pending
      founder's browser review)
- [x] Update `SPECS/ROADMAP.md` (mark this feature milestone done /
      note search as the next one)
- [x] Update the task register in `MISSION.md`