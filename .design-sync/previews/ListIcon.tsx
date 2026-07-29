import * as React from "react";
import { ListIcon } from "portfolio-site";

/** Stroke icon, sized via className, colored via currentColor. */
export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#000" }}>
    <ListIcon className="size-5" />
    <ListIcon className="size-6" />
  </div>
);

/** As the site uses it: the inactive list-view toggle in CaseStudySection. */
export const ViewToggle = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--color-paper)",
      color: "var(--color-cod-gray)",
      border: "1px solid var(--color-hairline)",
    }}
  >
    <ListIcon className="size-6" />
  </span>
);
