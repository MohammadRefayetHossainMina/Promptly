# Base Shell & Design Tokens — Validation

**Date:** 2026-09-17

## How to validate

Serve the page and check it in a browser (Codio box):

```bash
cd build-lab
python3 -m http.server 3000 --bind 0.0.0.0
```

Then open the public URL in §3.1 format:
`https://${CODIO_HOSTNAME}-3000.codio.io/` (or `http://localhost:3000/`
outside Codio). Verify the URL responds (e.g. `curl`) before announcing it.

## Pass checklist

Tick every box — all must pass for this feature to be done.

- [ ] Page loads with the dark `#1E2024` background — no white/"placeholder"
      flash from old default tokens.
- [ ] Body text uses **Geist**; a test heading renders in **Sora**.
- [ ] `index.html` contains semantic `<header>`, `<main>`, `<footer>` tags and
      loads Sora + Geist from Google Fonts.
- [ ] `style.css` `:root` defines **every** token from MISSION.md §3.1:
      colors, hover tokens, `--color-border`, fonts, six-value spacing scale,
      `--radius-btn` (10px), `--radius-box` (14px).
- [ ] No hardcoded hex values or font names appear outside the `:root` block.
- [ ] No component/navbar/hero/section styles exist yet (correct — out of scope).
- [ ] Layout does not break at a narrow phone width (≈375px) or a wide
      desktop width (≈1440px).

## What counts as done

All boxes above are ticked **and** the page renders without console errors.

## Finish

When validation passes:

- Tick `Stage 5, Step 1` in `ROADMAP.md`.
- Update the MISSION.md task register.
- Move on to **Layer 2 — Navbar & Hero** (a new feature spec).