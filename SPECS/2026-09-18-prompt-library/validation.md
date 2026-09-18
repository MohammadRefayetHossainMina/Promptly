# Promptly — Prompt Library Validation (Milestone 1)

**Date:** 2026-09-18

## How to validate

Serve the page and check it in a browser (Codio box):

```bash
python3 -m http.server 3000 --bind 0.0.0.0 --directory /home/codio/workspace/build-lab
```

Then open `https://${CODIO_HOSTNAME}-3000.codio.io/` (or
`http://localhost:3000/` outside Codio). Verify the URL responds (`curl`)
before announcing it.

## Pass checklist

Tick every box — all must pass for this feature to be done.

- [ ] Homepage loads with the dark `#1E2024` background; no console errors.
- [ ] The library form (title + prompt text + **Save Prompt**) is visible in
      the `#library` section.
- [ ] Before anything is saved, the empty state shows: *"No prompts yet. Save
      your first one above."*
- [ ] Saving with an empty title or empty prompt text shows a short message
      and adds nothing.
- [ ] Saving a valid title + text adds one new card with that title, the text,
      and a **Copy** button. No duplicate is added on double-click.
- [ ] The saved card is still there after a page refresh (`localStorage`
      persistence).
- [ ] Clicking a card's **Copy** button copies **that card's** text to the
      clipboard and shows "Copied!" for 1.5s. (No card shares another card's
      text.)
- [ ] The hero demo Copy card still works as before.
- [ ] Navbar, hero rise-in animation, scroll reveal, mobile menu, all 8
      marketing sections, and footer all still work.
- [ ] Layout is intact at phone width (≈375px) and desktop (≈1440px).
- [ ] New CSS adds no hardcoded values — everything comes from the `:root`
      tokens.
- [ ] ROADMAP.md and the MISSION.md task register are updated.

## What counts as done

Every box above is ticked **and** the page renders without console errors.
When done, report back to the founder: what was completed, which files
changed, what was tested, known issues, and the next recommended milestone
(search-as-you-type).