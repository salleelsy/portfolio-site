import { FolderLink } from "../FolderLink";

// Labels are exact from Figma (280:17893). Hrefs are TODO — target routes
// (lucky / inspirations / archived) don't exist yet.
const FOLDERS = [
  { label: "click for lucky.", href: "#" },
  { label: "archived.", href: "#" },
];

/**
 * FolderNav — the hero's right-hand folder navigation (Figma 280:17748).
 * Always a right-aligned vertical column (12px gap), on every viewport width.
 */
export function FolderNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Quick links"
      className={[
        "flex flex-col items-end gap-3",
        className ?? "",
      ].join(" ")}
    >
      {FOLDERS.map((f) => (
        <FolderLink key={f.label} label={f.label} href={f.href} />
      ))}
    </nav>
  );
}
