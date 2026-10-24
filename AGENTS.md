# Repository Guidelines

## Project Structure & Module Organization

This package provides TypeScript declarations for the Baidu Map JavaScript API v3.0.

- `src/` groups ambient declarations by SDK feature, such as `geometry.ts`, `overlays.ts`, and `routes.ts`. Shared event types live in `events.ts`; global SDK constants live in `constants.ts`.
- `src/index.ts` imports declaration modules. Register new feature modules here so consumers receive their types.
- `tests/index.test.ts` validates the built package through isolated consumer projects.
- `dist/` contains generated JavaScript and declarations. Do not edit generated files.
- Root configuration files define TypeScript, tsdown, Vitest, Oxlint, and Oxfmt behavior; `.github/workflows/` contains automation.

## Build, Test, and Development Commands

Use pnpm, with the version declared in `package.json`, and Node.js matching `.node-version`.

- `pnpm install`: install dependencies and initialize Husky hooks.
- `pnpm dev`: rebuild with tsdown when source files change.
- `pnpm build`: generate the distributable package in `dist/`.
- `pnpm typecheck`: check source and test TypeScript without emitting files.
- `pnpm test --run`: run Vitest, including isolated package compilation checks.
- `pnpm lint`: check code with Oxlint.
- `pnpm format`: apply Oxfmt formatting; `pnpm format:check` checks without writing.

Run formatting checks, lint, type checking, tests, and the build before opening a PR.

## Coding Style & Naming Conventions

Use two-space indentation, LF endings, single quotes, no semicolons, and trailing commas. Oxfmt uses an 80-column print width.

Follow existing lowercase, hyphenated filenames such as `context-menu.ts`. Preserve SDK identifiers exactly, including `BMap` classes and `BMAP_*` constants. Keep declarations ambient and avoid adding runtime implementations or named package exports.

Write Chinese JSDoc consistent with nearby declarations, linking relevant SDK references. Document runtime discrepancies and unverified historical compatibility signatures explicitly.

## Testing Guidelines

Use Vitest and name tests `tests/*.test.ts`. Extend consumer fixtures with valid usage and explained `@ts-expect-error` cases for changed signatures. Keep both side-effect imports and `compilerOptions.types` loading modes working, and preserve the empty runtime export check. No numeric coverage threshold is configured.

## Commit & Pull Request Guidelines

History currently contains only `chore: init commit`. Follow its type-prefixed form, for example `fix: correct Bounds return types`.

Keep PRs focused. Describe affected APIs, compatibility implications, supporting SDK or runtime evidence, and validation commands run. Link related issues when available.
