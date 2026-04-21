# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint
```

There are no tests configured.

## Architecture

Small two-page React 19 + Vite school website for "Colegio Brain Academy" (content in Spanish).

**Routes** (defined in `src/App.jsx`):
- `/` → `src/pages/Home/Home.jsx` — Marketing landing page with a hero slideshow (4 Unsplash images cycling every 5s), animated CSS particles, a features grid, and a CTA.
- `/documentos` → `src/pages/PDFViewer/PDFViewer.jsx` — Document center; renders PDFs in a native `<iframe>` (not the installed `react-pdf` library). Users can enter a URL or pick from 3 preset documents.

**Shared component:** `src/components/Navbar/Navbar.jsx` — sticky navbar with a hamburger menu for mobile.

## Conventions

- **Co-located styles**: every component has a plain `.css` file beside its `.jsx`. These are global class names (not CSS Modules).
- **Global utilities**: `.container`, `.btn`, `.btn-primary`, `.btn-secondary` are defined in `src/App.css` and reused across pages.
- **Brand gradient**: `linear-gradient(135deg, #667eea 0%, #090357 100%)` used in the navbar, hero overlay, and primary buttons.
- **No TypeScript** despite `@types/react` being present — all files use `.jsx`.
- **No state management library** — all state is local `useState`.
- `react-pdf` is installed but unused; the PDF viewer uses `<iframe>` instead.
