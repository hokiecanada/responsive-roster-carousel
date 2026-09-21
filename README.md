# Responsive Roster Carousel

A React + TypeScript recreation of a production roster carousel interaction originally designed for a volleyball club website.

The carousel uses seven visual states around a focused profile (`prev3`, `prev2`, `prev`, `active`, `next`, `next2`, `next3`). React derives those states from a single active index while CSS handles the resizing, positioning, depth and transitions.

## Features

- Responsive desktop and mobile compositions
- Circular portraits with a prominent focused profile
- Automatic rotation every 3 seconds
- Previous/next navigation
- Swipe / pointer navigation
- Left/right keyboard navigation
- Pauses while hovered or keyboard-focused
- Respects `prefers-reduced-motion`
- Fictional roster data separated from the carousel implementation

## Images

Place the fictional roster portraits in `public/players/`:

- `player1.png` through `player12.png`
- `coach1.png`, `coach2.png`, `coach3.png`
- `trainer1.png`

## Run locally

```bash
npm install
npm run dev
```
