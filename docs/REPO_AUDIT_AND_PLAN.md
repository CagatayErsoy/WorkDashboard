# WorkDashboard Repo Audit & Organization Plan

## Current Snapshot

- **Framework:** Next.js App Router (TypeScript) with Tailwind CSS v4 and a set of shadcn/ui-style primitives under `src/components/ui`.
- **Page composition:** `src/app/page.tsx` renders a 2-column dashboard made of many section components wrapped by a common `Container` component.
- **Implemented sections:**
  - `Focus` has meaningful client-side state for task lists.
  - `GeneralProgress`, `ProjectTasks`, and `CalenderLook` render basic UI.
- **Stub/placeholder sections:** several sections currently return empty `<div />` and are ready to be filled in (`Notes`, `JobSearch`, `PythonHub`, `WorkoutProgress`, `InspirationHub`, `CodingExercise`, `CoverLetterConverter`).
- **Naming consistency issues:** there are a few spelling inconsistencies such as `CalenderLook` and `InspritaionQoute` that should be normalized.
- **Documentation status:** root `README.md` was still mostly scaffolded from create-next-app and not specific to this project.

## Strengths

1. Clear dashboard-first intent with modular section files.
2. Reusable `Container` pattern already in place.
3. Solid modern stack already configured (Next 15 + React 19 + TypeScript + Tailwind).

## Organizational Gaps

1. **Feature completeness gap:** many sections are placeholders.
2. **Information architecture gap:** sections are all directly imported into `page.tsx`, which will become harder to maintain as features grow.
3. **Data model gap:** there is no shared typed model for tasks/progress widgets; data is embedded inside components.
4. **Documentation gap:** setup, feature map, and roadmap were undocumented.
5. **Quality gates gap:** lint exists, but no tests or CI pipeline are defined.

## Recommended Plan (Phased)

### Phase 1 — Baseline Organization (short)

- Normalize naming (e.g., `Calendar*`, `InspirationQuote*`) and keep file names aligned with component names.
- Add a section index/export map to reduce import clutter in `page.tsx`.
- Replace remaining scaffold docs with project-specific README + this plan doc.
- Define an initial “definition of done” for each dashboard widget (minimum viable content + interaction).

### Phase 2 — Data & State Structure

- Introduce typed domain models in `src/lib` (task item, progress metric, note item).
- Move hardcoded demo data into dedicated data modules for easy replacement with persistence later.
- Unify task-like components with shared list patterns (add/check/remove/edit).

### Phase 3 — Feature Completion

- Implement placeholder sections with minimal but useful functionality:
  - Notes: add/edit/delete notes.
  - Job Search: pipeline stages and application tracker.
  - Workout Progress: session logging + weekly progress view.
  - Python Hub/Coding Exercise: daily prompt + completion status.
  - Cover Letter Converter: input + transformed output panel.

### Phase 4 — UX & Reliability

- Add responsive layout behavior for small screens (currently fixed 2-column grid).
- Improve visual hierarchy and accessibility labels.
- Add tests for core interactive sections (starting with `Focus`).
- Add CI checks for lint + tests.

## Suggested First Execution Backlog

1. Rename inconsistent files/components and update imports.
2. Build a `sections/index.ts` export barrel.
3. Implement `Notes` and `JobSearch` as first non-placeholder widgets.
4. Add basic unit tests for `Focus` interactions.
5. Add GitHub Actions workflow for `npm run lint` (and tests once added).

