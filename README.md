# Fun with Flags 🏳️‍🌈

A bilingual (DE/EN) pride flag quiz built with Vue 3, TypeScript, and Bulma.

**[Play it here](https://renevinaya.github.io/fun-with-flags/)**

## How it works

Each round shows every pride flag one by one. For each flag, pick the correct name from four options — the wrong answers are chosen based on visual color similarity to make it genuinely challenging. Click the ⓘ icon next to any answer to read a short explanation of the identity it represents.

The interface is available in German and English. It starts in your browser's language, and your choice is saved automatically.

## Tech stack

- [Vue 3](https://vuejs.org/) with `<script setup>` and TypeScript
- [Bulma](https://bulma.io/) CSS framework (only the needed Sass modules are imported; PurgeCSS and postcss-prune-var strip unused CSS)
- [Vite](https://vite.dev/) build tool
- Flags rendered purely in CSS and inline SVG — no image files
- Deployed to GitHub Pages via GitHub Actions

## Development

Requires Node.js 20.19+ or 22.12+ (needed by Vite 8).

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build
npm run preview  # serve the production build locally
```

## Adding flags

Flag definitions live in `src/flags.ts`. Each entry uses one of four render types:

| Type | Use for |
|---|---|
| `stripes` | Equal horizontal stripes |
| `stripes-proportional` | Stripes with custom height ratios |
| `stripes-with-circle` | Solid background + centered SVG circle (e.g. Intersex) |
| `svg` | Arbitrary inline SVG (e.g. Progress Pride, Demisexual) |

Add both `en` and `de` values for `name` and `description`. UI strings are in `src/translations.ts`.

For `svg` flags, give every colored shape a `fill="#RRGGBB"` attribute: the quiz reads those to pick look-alike wrong answers, and ignores CSS styles, short hex codes and color names. Every flag is shown in a 3:2 frame; SVGs wider than that are cropped from the right edge.
