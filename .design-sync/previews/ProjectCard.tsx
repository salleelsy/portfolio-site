import * as React from "react";
import { ProjectCard } from "portfolio-site";

/** Real case-study card content; no thumbnailSrc → the dashed TODO slot. */
export const Default = () => (
  <div style={{ background: "var(--color-body-bg)", padding: 24, maxWidth: 960 }}>
    <ProjectCard
      title="Loyalty Membership for a Commercial Real Estate Group"
      description="A five-tier loyalty membership for a commercial real-estate group (CCG) — making tiers, points, and upgrade paths legible at a glance."
      href="#"
    />
  </div>
);

/** Custom CTA label + custom thumbnail node. */
export const CustomThumbnail = () => (
  <div style={{ background: "var(--color-body-bg)", padding: 24, maxWidth: 960 }}>
    <ProjectCard
      title="Electric Utility App"
      description="A customer-side usability study on an electric utility app — 11 heuristics, scored tasks, and prioritized, shippable fixes."
      href="#"
      ctaLabel="See the findings"
      thumbnail={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0b0f14, #2a2f36)",
            color: "#fff",
            borderRadius: 12,
            fontWeight: 800,
            fontSize: 22,
            fontFamily: "var(--font-sans)",
          }}
        >
          ⚡ Utility App
        </div>
      }
    />
  </div>
);
