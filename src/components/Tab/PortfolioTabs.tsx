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
      {/* Transparent band pulled up so the tabs overlap the hero collage
          (Figma layout). z-2 keeps the folder tabs above the hero and the
          panel below. */}
      <div className="relative z-20 -mt-[120px] sm:-mt-[150px] lg:-mt-[170px]">
        {/* No overflow clip here: the tab shapes' feet bleed sideways and the
            soft top shadow rises above the strip — both must stay visible.
            pt gives the shadow headroom; sm:px-4 keeps the strip in-column. */}
        <div className="mx-auto w-full max-w-[1280px] pt-3 sm:px-4">
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
