import * as React from "react";
import { FolderShape } from "portfolio-site";

/** Active silhouette — light folder with hairline outline (needs a sized, relative parent). */
export const Active = () => (
  <div style={{ position: "relative", width: 236, height: 80, background: "var(--color-body-bg)" }}>
    <FolderShape active className="absolute inset-0 h-[80px] w-[236px]" />
  </div>
);

/** Inactive silhouette — dark folder, 74px tall, sits at the bottom. */
export const Inactive = () => (
  <div style={{ position: "relative", width: 244, height: 80, background: "var(--color-body-bg)" }}>
    <FolderShape active={false} className="absolute bottom-0 left-0 h-[74px] w-[244px]" />
  </div>
);
