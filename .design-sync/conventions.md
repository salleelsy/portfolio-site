# Sallee Portfolio — build conventions

React components from Sallee Lee's portfolio site. No provider or theme wrapper is needed — every component is self-styled once `styles.css` is loaded. Import from `window.PortfolioSite` (e.g. `PortfolioSite.Hero`).

## Styling idiom

The look lives in CSS custom properties (design tokens) defined in `styles.css`. Style your own layout glue with inline styles or these tokens — **do not invent Tailwind classes**: the shipped stylesheet is compiled and contains only the utilities the portfolio itself uses.

Color tokens (use as `var(--color-…)`):
- Surfaces: `--color-paper` (white bg), `--color-body-bg` (light gray page bg), `--color-card-dark` (dark hero card), `--color-white`
- Content: `--color-ink` (primary black), `--color-cod-gray` (near-black), `--color-muted` (gray text)
- Borders: `--color-hairline` (card borders), `--color-line`, `--color-card-border`
- Folder art: `--color-folder-active`, `--color-folder-inactive`, `--color-folder-outline`, `--color-folder-blue-from`

Type: `--font-sans` (Inter — everything), `--font-label` (Work Sans — small captions/labels). Both families ship in `fonts/`. Headings are Inter 800 (extrabold); body is 14–16px, muted gray.

Radii: `--radius-card` (cards), `--radius-chip` (pills), `--radius-cta` (buttons), `--radius-xl`.

## Component roster (what to reach for)

- **Page shell**: `PortfolioTabs` (complete tabbed site: folder-tab strip + panels), or compose `TabList`/`Tab`/`FolderShape` yourself on a `--color-body-bg` background.
- **Hero**: `Hero` (headline + illustration + `FolderNav`), `AboutCard` (dark profile card), `FolderNav`/`FolderLink`/`FolderIcon` (macOS-folder quick links).
- **Work**: `CaseStudySection` (filterable card grid), `ProjectCard` (badge/title/description/CTA; pass `thumbnailSrc` or a `thumbnail` node), `CaseStudyLayout` (full case-study page from a `study` object), `CaseStudyBlock` (one content block — kinds: `prose`, `list`, `callout`, `impact`, `highlights`, `beforeAfter`, `features`, `ratings`, `tierTable`, `personas`, `screens`, `gallery`, `image`, `hierarchy`, `ideation`, `priorityList`).
- **Sections**: `AboutMeSection`, `ResumeSection`, `ContactSection`, `VibingSection`, `BrandsStrip` (logo marquee).
- **Bits**: `PhotoFrame` (image slot with labelled placeholder state), `ArrowRightIcon`, `GridIcon`, `ListIcon` (stroke icons, sized via the `className` prop, colored by `currentColor`).

Sections render real portfolio content and take no props. `Tab` needs `label`, `index`, `active`; `TabList` needs `items`, `value`, `onChange`, `aria-label`.

## Where the truth lives

Read `styles.css` (and its `_ds_bundle.css` import) for the full token set before styling; each component's `.d.ts` is its exact prop contract and its `.prompt.md` shows working compositions.

## Example

```jsx
const { ProjectCard, ArrowRightIcon } = window.PortfolioSite;

<div style={{ background: "var(--color-body-bg)", padding: 24 }}>
  <ProjectCard
    badge="Product Design / 2023"
    title="Loyalty Membership for a Commercial Real Estate Group"
    description="Making tiers, points, and upgrade paths legible at a glance."
    ctaLabel="Read case study"
    href="#"
  />
</div>
```
