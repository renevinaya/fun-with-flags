# Fun with Flags 🏳️‍🌈

A bilingual (DE/EN) pride flag quiz built with Vue 3, TypeScript, and Bulma.

**[Play it here](https://renevinaya.github.io/fun-with-flags/)**

## How it works

Each round shows all 20 pride flags one by one. For each flag, pick the correct name from four options — the wrong answers are chosen based on visual color similarity to make it genuinely challenging. Click the ⓘ icon on any answer button to read a short explanation of the identity it represents.

The interface is available in German and English. Your language preference is saved automatically.

## Tech stack

- [Vue 3](https://vuejs.org/) with `<script setup>` and TypeScript
- [Bulma](https://bulma.io/) CSS framework (selective SCSS imports via PostCSS/PurgeCSS)
- [Vite](https://vite.dev/) build tool
- Flags rendered purely in CSS and inline SVG — no image files
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev    # dev server at http://localhost:5173
npm run build  # type-check + production build
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
