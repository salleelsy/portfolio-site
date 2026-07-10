import * as React from "react";
import { TabList } from "portfolio-site";

const ITEMS = [
  { value: "portfolio", label: "Portfolio", index: "01" },
  { value: "about", label: "About me", index: "02" },
  { value: "vibing", label: "Just vibing", index: "03" },
  { value: "resume", label: "Resume", index: "04" },
];

/** The full folder-tab strip: WAI-ARIA tabs, 15px overlap, first tab selected. */
export const Default = () => (
  <div style={{ background: "var(--color-body-bg)", paddingTop: 24 }}>
    <TabList items={ITEMS} value="portfolio" onChange={() => {}} aria-label="Portfolio sections" />
  </div>
);

/** Selection on an inner tab — neighbors tuck under the raised active folder. */
export const MiddleSelected = () => (
  <div style={{ background: "var(--color-body-bg)", paddingTop: 24 }}>
    <TabList items={ITEMS} value="vibing" onChange={() => {}} aria-label="Portfolio sections" />
  </div>
);
