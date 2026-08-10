# Faisal Ilyas — Portfolio

A production-ready personal portfolio built with React, Vite, TypeScript, Tailwind CSS,
and Framer Motion — generated from Faisal Ilyas's CV.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

`npm run build` outputs static files to `dist/`, deployable to any static host
(Vercel, Netlify, GitHub Pages, S3/CloudFront, etc.).

## Updating your content

Everything shown on the site — name, summary, skills, work experience, projects,
education, certifications, and contact links — comes from a single file:

```
src/data/portfolio.ts
```

Edit the values there and the whole site updates automatically. You do not need to
touch any component file to update your CV information. Each section component
(`src/components/*.tsx`) only handles layout/rendering — content lives entirely in
`portfolio.ts`.

To add a new nav-linked section, add it to `src/components/`, render it in `App.tsx`,
and add an entry to the `nav` array in `portfolio.ts`.

## Project structure

```
src/
├── components/        # One component per section (Hero, About, Skills, ...)
├── data/portfolio.ts  # Single source of truth for all content
├── hooks/              # useScrollSpy — drives the active nav link on scroll
├── lib/utils.ts        # Small className helper
├── App.tsx             # Composes all sections
├── main.tsx             # React entry point
└── index.css            # Tailwind layers + global styles
```

## Design notes

- Dark, terminal/systems-console aesthetic (deep ink navy + amber accent) chosen
  to match a backend/banking-systems engineering background rather than a generic
  template look.
- Headings and labels use IBM Plex Mono; body copy uses Inter.
- The hero's "system status" panel and typed role rotator are the signature visual
  elements — everything else stays quiet and disciplined around them.
- Respects `prefers-reduced-motion` (disables entrance/typing/scroll animations).
- All content is sourced directly from the CV — nothing was invented. Two
  certificate entries in the CV had no verifiable date/detail, and one
  ("Quarkus Framework Certification") should be double-checked for exact wording
  before publishing, since it wasn't in the original CV text.
