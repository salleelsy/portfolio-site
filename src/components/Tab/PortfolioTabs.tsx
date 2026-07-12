"use client";

import { useState, type ComponentType } from "react";
import { TabList, type TabItem } from "./index";
import { CaseStudySection } from "../casestudy/CaseStudySection";
import { BrandsStrip } from "../brands/BrandsStrip";
import { AboutMeSection } from "../about/AboutMeSection";
import { VibingSection } from "../vibing/VibingSection";
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
  { value: "portfolio", label: "Portfolio", index: "01", panelId: "panel-portfolio" },
  { value: "about", label: "About me", index: "02", panelId: "panel-about" },
  { value: "vibing", label: "Just vibing", index: "03", panelId: "panel-vibing" },
  { value: "resume", label: "Resume", index: "04", panelId: "panel-resume" },
];

const PANELS: Record<string, ComponentType> = {
  portfolio: PortfolioPanel,
  about: AboutMeSection,
  vibing: VibingSection,
  resume: ResumeSection,
};

/**
 * PortfolioTabs — the folder-tab strip wired to switch the content body below it.
 * The tab strip sits between the hero and the panels; the selected tab's section
 * (Portfolio / About me / Just vibing / Resume) is shown, the rest are hidden.
 */
export function PortfolioTabs() {
  const [value, setValue] = useState("portfolio");

  return (
    <>
      <div className="bg-paper">
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
          >
            <Panel />
          </div>
        );
      })}
    </>
  );
}
