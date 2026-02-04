# The Shed — Bailee and the Secret of the Talking Backyard (Web Demo)

Live Demo (after you enable GitHub Pages): https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

## How to run locally (super simple)
1. Put the folder on your computer.
2. Open `index.html` in a browser (Chrome/Safari).
3. Click **Start**.
4. Tap/click the yard to move Bailee. Tap objects to interact.

## Project structure
- `index.html` — the game screen + UI
- `styles.css` — cozy mobile-first styling
- `game.js` — main logic (start screen, interactions, puzzle, data fallback)
- `movement.js` — tap-to-move logic + marker
- `dialogue.js` — dialogue + choices
- `inventory.js` — backpack tray
- `progress.js` — Wonder Sparks tracker
- `data/` — JSON files (optional, game still runs if these fail)

---

## Full Game Design Document (GDD)
Cozy funny magical backyard adventure where Bailee discovers her pets can talk.
No fail states. No scary consequences. Mobile-first. Session length 15–30 minutes.
Chapter 1: Back porch intro vibe, Wonder Sparks progress (3 slots), three micro-quests,
shed unlocks after 3 sparks. Spanish flavor words occasionally. Accessibility toggles.

## Technical notes
- GitHub Pages static site
- No frameworks
- Built-in debug panel shows: HTML OK, CSS OK, JS OK, Data OK/Fallback, click counter, last target, last coords
- Game does NOT depend on fetch. If JSON fails, embedded fallback content still works.
