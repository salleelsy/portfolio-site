import * as React from "react";
import { GridIcon } from "portfolio-site";

/** Stroke icon, sized via className, colored via currentColor. */
export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#000" }}>
    <GridIcon className="size-5" />
    <GridIcon className="size-6" />
  </div>
);

/** As the site uses it: the active grid-view toggle in CaseStudySection. */
export const ViewToggle = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--color-ink)",
      color: "var(--color-paper)",
      border: "1px solid var(--color-ink)",
    }}
  >
    <GridIcon className="size-6" />
  </span>
);
