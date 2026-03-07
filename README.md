# WorkDashboard

A personal productivity dashboard built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## What this project is

WorkDashboard is a multi-widget home screen for tracking day-to-day execution across:

- Focus tasks
- General progress metrics
- Calendar view
- Project tasks
- Job search and career workflow
- Coding and Python practice
- Workout progress
- Inspiration and notes

The app is currently in an iterative build phase: a few widgets are functional while several are placeholders pending implementation.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI primitives (via local `src/components/ui` wrappers)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Layout

- `src/app/page.tsx`: dashboard composition entrypoint.
- `src/app/sections/*`: dashboard widget sections.
- `src/app/components/UI/Container.tsx`: common card/container wrapper.
- `src/components/ui/*`: shared UI primitives.
- `docs/REPO_AUDIT_AND_PLAN.md`: current repo audit and phased organization plan.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Next steps

See `docs/REPO_AUDIT_AND_PLAN.md` for a concrete phased roadmap.
