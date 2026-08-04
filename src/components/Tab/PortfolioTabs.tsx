"use client";

import { useEffect, useState, type ComponentType } from "react";
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
const TAB_VALUES = new Set(NAV.map((n) => n.value));

export function PortfolioTabs() {
  const [value, setValue] = useState("portfolio");

  // Footer links (e.g. /#about) select the matching tab and scroll it into view.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (TAB_VALUES.has(hash)) {
        setValue(hash);
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <>
      {/* Transparent band pulled up so the tabs overlap the hero collage
          (Figma layout). z-2 keeps the folder tabs above the hero and the
          panel below. */}
      <div id="work" className="relative z-20 -mt-[120px] scroll-mt-4 sm:-mt-[150px] lg:-mt-[170px]">
        {/* No overflow clip here: the tab shapes' feet bleed sideways and the
            soft top shadow rises above the strip — both must stay visible.
            pt gives the shadow headroom; sm:px-4 keeps the strip in-column. */}
        <div className="mx-auto w-full max-w-[1360px] pt-3 sm:px-4">
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
            /* Pull the panel up 2px and float it above the tab band (z-30 >
               the strip's z-20) so the container box surfaces in front: its top
               edge covers the tabs' feet by 2px, tucking the inactive tabs
               behind it and merging the active tab into the panel — no seam. */
            className="relative z-30 -mt-[2px]"
          >
            <Panel />
          </div>
        );
      })}
    </>
  );
}
