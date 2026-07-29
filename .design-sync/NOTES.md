# design-sync notes — portfolio-site

Repo-specific facts a future sync needs. First synced 2026-07-10 to project
`85fab184-acbc-4889-b551-6d4f401839f8` ("Sallee Portfolio Design System").

## Build shape

- This is a Next.js **app**, not a packaged library: no dist, no build script that
  emits one. The converter runs in synth-entry mode. Pass
  `--entry ./ds-bundle/.pkg-entry.mjs` (a path that doesn't exist yet) — its
  soft-resolve failure triggers synth mode AND its dirname walk pins PKG_DIR to the
  repo root. Without `--entry` the build crashes looking for
  `node_modules/portfolio-site/package.json`.
- `srcDir` must stay `src/components`. Defaulting to `src/` pulls in
  `app/layout.tsx` → `globals.css` → esbuild fails resolving `@import "tailwindcss"`.
- `next/image` and `next/link` are shimmed via `.design-sync/tsconfig.dsync.json`
  `paths` → `.design-sync/shims/next-{image,link}.tsx`. Without them the bundle
  throws `process is not defined` at eval time and all 22 components fail
  `[BUNDLE_EXPORT]`. Type-only imports of `StaticImageData` in app source are fine
  (erased at compile).
- CSS is Tailwind v4: `cfg.buildCmd` compiles `.design-sync/ds-entry.css`
  (imports `src/app/globals.css` + defines `--font-inter`/`--font-work-sans`, which
  next/font injects at runtime in the real app) to `.design-sync/.cache/ds-tailwind.css`
  via `npx @tailwindcss/cli@4`. **Run buildCmd before the converter on every re-sync**
  — the compiled css is gitignored.
- Fonts: Inter + Work Sans latin-subset variable woff2s live committed in
  `.design-sync/fonts/` with `fonts.css`; wired via `extraFonts`. Downloaded from
  Google Fonts (needs a browser UA header to get woff2 URLs).
- Playwright: the container's chromium build 1194 pins playwright **1.56.0**
  (installed into `.ds-sync/`).

## Source changes made for bundle fidelity (already committed)

- `public/hero/avatar.jpeg` → `avatar.png` (512px): esbuild's loader map has no
  `.jpeg`, and `lib/bundle.mjs` is a no-fork file. AboutCard import updated;
  `placeholder="blur"` is ignored by the image shim.
- `BrandsStrip` and `lib/caseStudies.ts` now use **static imports** for the brand
  logos and the loyalty cover (via a `logoSrc`/`imgSrc` helper handling both
  StaticImageData and plain strings). Runtime `/public` string paths 404 outside
  the app — any future component should static-import its images or the design
  bundle renders broken img icons.
- `public/work/loyalty/cover.png` recompressed 944KB → 156KB (inlines into the bundle).

## Preview conventions

- The compiled stylesheet contains ONLY classes the app uses — previews must not
  invent Tailwind classes; use inline styles for layout glue or classes that appear
  in `src/` (documented in conventions.md for the design agent too).
- Interaction-only states (marquee motion, tab keyboard nav, hover lift) can't
  show in static cards — skipped by design.
- `cardMode: column` overrides: CaseStudyBlock, PhotoFrame, Tab, TabList (wide cells).
- CaseStudyLayout's preview passes an inline SVG data-URI as `cover` (can't reach
  the bundle's inlined assets from preview code).

## Known render warns (triaged as legitimate)

- None outstanding — the earlier `[RENDER_THIN]` set (icons, Tab, FolderShape)
  was resolved by authoring previews.

## Re-sync risks

- **buildCmd must run first** or `cssEntry` points at a missing/stale file
  (`[CSS_IMPORT_MISSING]` or silently stale tokens).
- The Tailwind CLI major is pinned only as `@4` — a v5 default could change output;
  pin harder if drift appears.
- Preview data (case-study copy, resume facts) is duplicated from `src/lib` /
  components into `.design-sync/previews/*.tsx` literals — content edits in the app
  won't invalidate grades; refresh previews when copy changes materially.
- Google-fonts woff2s are committed snapshots; they never refresh themselves.
- The shims silently no-op Next-specific props (`placeholder`, `prefetch`, `fill`
  semantics beyond object-fit cover). New app code leaning on those may render
  subtly differently in the bundle — check the sheets for any component that
  starts using them.
