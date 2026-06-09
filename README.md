# Xurshed Alimmamadov — Portfolio (v3)

My personal developer portfolio. Single-page site with an About, Skills,
Projects and CV section, a custom cursor/bubble effect, and expandable
project cards that break each project down by discipline (Frontend, Backend,
Database, Architecture, DevOps, …).

🔗 **Live:** https://alimmamadov.dev

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** Tailwind CSS v3 + custom CSS variables
- **Components & Icons:** MUI (`@mui/material`, `@mui/icons-material`) and hand-built SVG icons
- **Fonts:** Quantico, Inter, Lato (Google Fonts)

## Project Structure

```
app/
├── components/        # About, Skills, Projects, ProjectCard, CV, Navigation, Sidebar, Bubble, CursorEffects
├── svg/               # Hand-built skill/tech SVG icons
├── constants.tsx      # Site content — nav, socials, skills, and the projects data
├── layout.tsx         # Root layout + metadata
├── page.tsx           # Composes the sections
└── globals.css        # Fonts, Tailwind layers, base styles
public/
└── assets/            # Project screenshots & images
```

## Adding / Editing

All project content lives in `app/constants.tsx` as the `[x]Items` array.
Any section loops the universal, expandable `[x]` over it,
so adding a project, skill or any info except about section is just adding an object — no component changes needed.


## Running Locally

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Deployment

Deployed on Vercel at **[alimmamadov.dev](https://alimmamadov.dev)**.

---

© Xurshed Alimmamadov
