# Pulseboard

A modern, production-ready React dashboard built with Vite and TypeScript. The layout includes a persistent sidebar, responsive content area, and curated pages for analytics, sales, reports, team, settings, and entity governance.

## Scripts
- `npm install` – install dependencies
- `npm run dev` – start the dev server on port 5173
- `npm run build` – create an optimized production build
- `npm run preview` – preview the production build
- `npm run lint` – lint the project with ESLint

## Notes
- Uses React Router for client-side navigation across dashboard sections.
- Styled with modern gradients, reusable cards, and accessible semantic markup.
- Includes JWT-style sign-in with optional session persistence (`/signin`). Use the seeded credentials shown on the form to log in locally.
- The Entities page demonstrates CRUD-friendly data grids powered by `@tanstack/react-table` with sorting, filtering, and inline editing.
