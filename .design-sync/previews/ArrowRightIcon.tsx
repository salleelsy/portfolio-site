import * as React from "react";
import { ArrowRightIcon } from "portfolio-site";

/** Stroke icon, sized via className, colored via currentColor. */
export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#000" }}>
    <ArrowRightIcon className="size-5" />
    <ArrowRightIcon className="size-6" />
    <span style={{ width: 40, height: 40, display: "inline-flex" }}>
      <ArrowRightIcon />
    </span>
  </div>
);

/** As the site uses it: inside the black "Read case study" CTA. */
export const InCta = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "var(--color-ink)",
      color: "var(--color-paper)",
      borderRadius: 10,
      padding: "10px 14px",
      fontWeight: 700,
      fontSize: 14,
      fontFamily: "var(--font-sans)",
    }}
  >
    Read case study
    <ArrowRightIcon className="size-6" />
  </span>
);
