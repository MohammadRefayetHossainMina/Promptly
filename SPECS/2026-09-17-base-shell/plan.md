# Promptly — Complete Page Plan

**Date:** 2026-09-17

Work through the feature areas in order. Tick each box as you finish it.

> Check note: this is a static frontend page (no build tooling, no test
> runner), so the "checks" in this feature are browser checks, not automated
> lint/tests. If any lint/test tooling exists in the environment, still run it
> against these files (e.g. an HTML validator if available).

## Feature Area 1 — Verify Base Shell + Design Tokens

- [ ] Serve the site: `cd build-lab && python3 -m http.server 3000 --bind 0.0.0.0`
- [ ] Open the public URL: `https://${CODIO_HOSTNAME}-3000.codio.io/`
- [ ] Confirm dark `#1E2024` background renders (no white flash)
- [ ] Body text uses **Geist**; a test heading renders in **Sora**
- [ ] `index.html` contains semantic `<header>`, `<main>`, `<footer>` tags and
> loads Sora + Geist from Google Fonts
- [ ] `style.css` `:root` defines every token from MISSION.md §3.1:
> colors, hover tokens, `--color-border`, fonts, six-value spacing scale,
> `--radius-btn` (10px), `--radius-box` (14px)
- [ ] No hardcoded hex values or font names appear outside the `:root` block
- [ ] Layout does not break at a narrow phone width (≈375px) or a wide
> desktop width (≈1440px)
- [ ] Tick Stage 5, Step 1 in ROADMAP.md and update MISSION.md task register

## Feature Area 2 — Navbar + Hero (Layer 2)

- [ ] Navbar renders with logo "Promptly", tagline, "Add a prompt" link,
> and primary "Save Prompt" button
- [ ] Navbar is sticky at top with dark background and border-bottom
> per token `--color-border`
- [ ] At ≤600px width, navbar toggles into mobile menu
- [ ] Hero section renders with headline "Find the right prompt — fast, every time."
- [ ] Hero uses Sora font, accent teal color on "fast, every time."
- [ ] Hero subheadline describes the Save → Search → Copy loop
- [ ] "Save your first prompt" CTA button is visible and functional
- [ ] Hero card mockup with demo Copy button renders correctly
- [ ] Hero rise-in animation plays on load (600ms, staggered 80ms steps)

## Feature Area 3 — Content Sections (Layer 3)

### Problem section
- [ ] "Where did that prompt go?" headline renders correctly
- [ ] Two bullet points: scattered files + remember→find→copy loop

### Solution section
- [ ] "One home for every prompt that works." headline renders correctly
- [ ] Two bullets: save with title, search instantly; browser-only persistence

### Features section
- [ ] "Save, find, copy — the whole loop in three moves." headline renders
- [ ] Three feature cards grid: Save in seconds, Search instantly, Copy with one click
- [ ] Each card has step number, feature name, and descriptive text

### Proof section
- [ ] "Built for a workflow that actually works." headline renders
- [ ] "No account. Runs in your browser." text renders
- [ ] Position chip: "For developers, makers, game creators, and freelancers."

### Footer
- [ ] Copyright "Promptly" renders
- [ ] Tagline "Find the right prompt — fast, every time." renders
- [ ] Footer links to Problem and Features sections are visible

## Feature Area 4 — Final CTA + Prompt Card (Layer 4)

- [ ] "Start your library today." headline renders
- [ ] Subheadline: "Save your first prompt, find it in seconds, copy it anywhere."
- [ ] Primary "Save Prompt" button is functional
- [ ] Prompt card with demo text "Write a clear, well-structured git commit message based on the diff I provide — explain what changed and why." renders
- [ ] Demo Copy button on prompt card copies text to clipboard and shows "Copied!" feedback
- [ ] Button class `.btn-copied` applies primary background when copied

## Feature Area 5 — Interactions & Motion Budget (Layer 5)

- [ ] Scroll reveal: `.reveal` elements fade/slide up into view via IntersectionObserver
> (threshold 0.15), unobserved after becoming visible
- [ ] Copy microinteraction: on click, text → clipboard, button says "Copied!" for 1.5s,
> then reverts; `.btn-copied` class adds secondary visual feedback
- [ ] Mobile menu toggle: hamburger button shows/hides nav links as vertical list on ≤600px
- [ ] No console errors on page load
- [ ] Motion budget respected: one animation type (rise-in) on hero, one scroll effect (reveal)

## Feature Area 6 — Validation & Completion

- [ ] Serve the site and open the public URL
- [ ] Run full validation checklist from `validation.md` — all boxes tick
- [ ] Tick Stage 5, Steps 1–5 in ROADMAP.md
- [ ] Update MISSION.md task register to reflect all tasks Done
- [ ] Commit and verify the complete site is live
