# 🌱 The Shed  
## Bailee and the Secret of the Talking Backyard

**The Shed** is a **mobile-first, kid-safe interactive story game prototype** built with plain HTML, CSS, and JavaScript and designed to run entirely on **GitHub Pages** as a static website.

The game is designed for **ages 6–10**, with a cozy tone, no fail states, no scary consequences, and simple tap-based interactions that work equally well on phones, tablets, and desktops.

---

## 🎮 What is this project?

This repository contains a **playable web demo** (a vertical slice) of *Chapter 1* of an interactive story game where:

- You play as **Bailee**, exploring a magical backyard
- Ordinary objects (a snack cooler, wind chimes, a shed) begin to talk
- You collect **Wonder Sparks ✨** by interacting with the environment
- A friendly **block-fitting puzzle** unlocks the shed
- There is **no way to lose**, no timers, and no pressure

The goal of this project is to demonstrate:
- Cozy narrative game design
- Beginner-friendly web game architecture
- A safe, approachable experience for young players
- How to deploy a complete game demo using **only static files**

---

## 🧒 Designed for kids (and beginners)

This project intentionally avoids common game mechanics that are hard for kids or beginners:

❌ No physics engine  
❌ No swipe-precision mechanics  
❌ No timers or fail states  
❌ No jump scares or penalties  

Instead, it focuses on:

✅ Tap-to-move exploration  
✅ Large, readable buttons  
✅ Simple puzzles with easy undo  
✅ Gentle humor and encouragement  
✅ Accessibility toggles (text size, reduced motion, highlights)

---

## 🧩 Gameplay features

- **Start screen** that waits for an explicit tap/click (never auto-skips)
- **One-screen backyard scene** (mobile-first layout)
- **Tap anywhere to move Bailee**, with a visible move marker
- **Three interactable objects**:
  - Snack Cooler
  - Wind Chimes
  - Shed Lock
- **Wonder Sparks progress tracker** (3 slots)
- **Backpack inventory tray**
- **Kid-safe block-fitting puzzle**:
  - Tap a piece → tap the board to place
  - Tap a placed piece to remove it
  - No rotation, no timer, no pressure
- **Shed unlocks after 3 Wonder Sparks**

---

## 🛠 Technical overview (plain language)

- Built with **vanilla HTML, CSS, and JavaScript**
- No frameworks, no build step, no terminal required
- Runs as a **static site** on GitHub Pages
- Works offline once loaded
- Uses `fetch()` for JSON data *when available*
- Automatically falls back to **embedded data** if fetch fails
- All paths are **relative**, so GitHub Pages works correctly

---

## 🐞 Built-in debug panel

A small, non-blocking debug panel appears in the top-left corner showing:

- HTML OK
- CSS OK
- JS OK
- Data OK or Data Fallback
- Number of clicks detected
- Last clicked target
- Last tap coordinates

This is intentionally included to help beginners troubleshoot issues like:
- “Why can’t I click anything?”
- “Is GitHub Pages loading my files?”
- “Are taps being detected on mobile?”

---

## 📁 Repository structure


├── index.html # Main game screen
├── styles.css # Mobile-first cozy styling
├── game.js # Game glue, logic, puzzle, data fallback
├── movement.js # Tap-to-move logic + coordinate marker
├── dialogue.js # Dialogue system + choices
├── inventory.js # Backpack inventory
├── progress.js # Wonder Sparks tracker
├── data/
│ ├── dialogue.json # Story text (optional; fallback included)
│ ├── items.json # Inventory items
│ └── scenes.json # Scene metadata (placeholder)
└── README.md


⚠️ **Important:** `index.html` must remain at the repository root for GitHub Pages to work.

---

## 🌐 Live demo

Once GitHub Pages is enabled, the game will be playable at:

https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/


(Replace with your actual username and repository name.)

---

## 🚀 How to run locally

No setup required.

1. Download or clone the repository
2. Open `index.html` in a browser
3. Click **Start**
4. Tap the yard to move Bailee
5. Tap objects to interact

---

## 🎯 Project goals

- Create a **cozy, safe, narrative-driven game** for kids
- Show that complete games can be built without frameworks
- Provide a learning-friendly reference for beginner developers
- Demonstrate GitHub Pages as a viable game hosting platform

---

## 📌 Status

This is an **early playable prototype** (vertical slice).

Future chapters, art, sound, and additional mechanics may be added later, but this repository intentionally prioritizes **clarity, simplicity, and approachability** over scale.

---

✨ Thanks for checking out *The Shed*.  
Pull requests, forks, and learning experiments are welcome.
