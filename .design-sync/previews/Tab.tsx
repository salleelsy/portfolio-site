import * as React from "react";
import { Tab } from "portfolio-site";

/** Active folder tab — light folder, black label, raised (Figma 280:17872 On). */
export const Active = () => (
  <div style={{ background: "var(--color-body-bg)", padding: "24px 24px 0" }}>
    <Tab label="Selected works" index="001" active leftBleed />
  </div>
);

/** Inactive folder tab — dark folder, white label, sits 6px lower (Off). */
export const Inactive = () => (
  <div style={{ background: "var(--color-body-bg)", padding: "24px 24px 0" }}>
    <Tab label="About me" index="002" active={false} leftBleed />
  </div>
);

/** Tabs meet the page edge-to-edge: active raised above its dark neighbors. */
export const Strip = () => (
  <div
    style={{
      background: "var(--color-body-bg)",
      padding: "24px 0 0 24px",
      display: "flex",
      alignItems: "flex-end",
    }}
  >
    <Tab label="Selected works" index="001" active leftBleed />
    <Tab label="About me" index="002" active={false} style={{ marginLeft: -15 }} />
    <Tab label="Say hello" index="003" active={false} style={{ marginLeft: -15 }} />
  </div>
);
