import * as React from "react";
import { PhotoFrame } from "portfolio-site";

/** No src → the labelled dashed placeholder (how the site ships it today). */
export const Placeholder = () => (
  <div style={{ width: 360 }}>
    <PhotoFrame className="aspect-[4/3] w-full" label="Volleyball — photo" />
  </div>
);

/** Two placeholder tiles as AboutMeSection lays them out. */
export const Grid = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: 560 }}>
    <PhotoFrame className="aspect-[4/3] w-full" label="Config 2026 — photo" />
    <PhotoFrame className="aspect-[4/3] w-full" label="Vibe coding — photo" />
  </div>
);
