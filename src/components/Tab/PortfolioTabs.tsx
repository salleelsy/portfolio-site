"use client";

import { useState, type ComponentType } from "react";
import { TabList, type TabItem } from "./index";
import { CaseStudySection } from "../casestudy/CaseStudySection";
import { BrandsStrip } from "../brands/BrandsStrip";
import { AboutMeSection } from "../about/AboutMeSection";
import { SayHelloSection } from "../hello/SayHelloSection";
import { ResumeSection } from "../resume/ResumeSection";

// Portfolio tab = case-study grid + the brands marquee (brands belong to this
// tab only, not the global footer).
function PortfolioPanel() {
  return (
    <>
      <CaseStudySection />
      <BrandsStrip />
    </>
  );
}

const NAV: TabItem[] = [
  { value: "portfolio", label: "Selected works", index: "001", panelId: "panel-portfolio" },
  { value: "about", label: "About me", index: "002", panelId: "panel-about" },
  { value: "hello", label: "Say hello", index: "003", panelId: "panel-hello" },
  { value: "resume", label: "Resume", index: "004", panelId: "panel-resume" },
];

const PANELS: Record<string, ComponentType> = {
  portfolio: PortfolioPanel,
  about: AboutMeSection,
  hello: SayHelloSection,
  resume: ResumeSection,
};

/**
 * PortfolioTabs — the folder-tab strip wired to switch the content body below it.
 * The tab strip sits between the hero and the panels; the selected tab's section
 * (Selected works / About me / Say hello / Resume) is shown, the rest are hidden.
 */
export function PortfolioTabs() {
  const [value, setValue] = useState("portfolio");

  return (
    <>
      {/* Transparent band: the hero's grey panel (z-1) extends through this
          strip on the right and merges with the grey tab panel below; z-2
          keeps the folder tabs above the panel and the character. */}
      <div className="relative z-[2]">
        {/* TabList carries its own 24px lead (bleed room for the first tab's
            foot); the outer padding tops it up to the site margins: 40px @sm,
            120px @lg — matching the other sections' px-6/sm:px-10/lg:px-[120px]. */}
        <div className="mx-auto w-full overflow-x-auto pt-[6px] sm:px-4 lg:px-24">
          <TabList
            items={NAV}
            value={value}
            onChange={setValue}
            aria-label="Portfolio sections"
          />
        </div>
      </div>

      {NAV.map((item) => {
        const Panel = PANELS[item.value];
        return (
          <div
            key={item.value}
            role="tabpanel"
            id={item.panelId}
            aria-labelledby={`tab-${item.value}`}
            hidden={value !== item.value}
            /* z-2 lifts the content sheet above the hero character (z-1): the
               illustration peeks out from underneath, never over the sheet.
               Being a later sibling, the sheet also covers the tabs' underside
               shadow at the seam. */
            className="relative z-[2]"
          >
            <Panel />
          </div>
        );
      })}
    </>
  );
}
