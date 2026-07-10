"use client";

import { useState } from "react";
import { Tab, TabList, type TabItem } from "@/components/Tab";

// Real site IA (from the brief) — not placeholder copy.
const NAV: TabItem[] = [
  { value: "portfolio", label: "Portfolio", index: "01", panelId: "panel-portfolio" },
  { value: "about", label: "About me", index: "02", panelId: "panel-about" },
  { value: "vibing", label: "Just vibing", index: "03", panelId: "panel-vibing" },
  { value: "resume", label: "Resume", index: "04", panelId: "panel-resume" },
];

export default function TabPreviewPage() {
  const [value, setValue] = useState("about");
  const current = NAV.find((n) => n.value === value)!;

  return (
    <main className="min-h-screen bg-body-bg px-8 py-16 font-sans text-cod-gray">
      <div className="mx-auto flex max-w-4xl flex-col gap-16">
        <header className="flex flex-col gap-2">
          <p className="font-label text-[13px] uppercase tracking-wide text-muted">
            Component preview
          </p>
          <h1 className="text-3xl font-extrabold text-ink">Tab</h1>
          <p className="max-w-prose text-sm text-muted">
            Figma component 280:17872. Click a tab, or focus one and use ←/→,
            Home/End. Selection follows focus (automatic activation).
          </p>
        </header>

        {/* Interactive strip */}
        <section className="flex flex-col gap-4">
          <h2 className="font-label text-[13px] uppercase tracking-wide text-muted">
            Interactive tablist
          </h2>
          <TabList
            items={NAV}
            value={value}
            onChange={setValue}
            aria-label="Portfolio sections"
          />
          {NAV.map((n) => (
            <div
              key={n.value}
              id={n.panelId}
              role="tabpanel"
              aria-labelledby={`tab-${n.value}`}
              hidden={n.value !== value}
              tabIndex={0}
              className="rounded-card border border-hairline bg-paper p-6 text-sm text-muted"
            >
              {/* TODO(content): real section content goes here. */}
              <span className="font-semibold text-ink">{current.label}</span>{" "}
              panel — content TODO.
            </div>
          ))}
        </section>

        {/* Both states side by side, on both surfaces, for inspection */}
        <section className="flex flex-col gap-4">
          <h2 className="font-label text-[13px] uppercase tracking-wide text-muted">
            States
          </h2>
          <div className="flex flex-wrap items-end gap-8 rounded-card bg-paper p-8">
            <figure className="flex flex-col items-center gap-2">
              <Tab label="About me" index="02" active aria-hidden tabIndex={-1} />
              <figcaption className="font-label text-[12px] text-muted">
                Active (On) · 236×80
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-2">
              <Tab label="Portfolio" index="01" active={false} aria-hidden tabIndex={-1} />
              <figcaption className="font-label text-[12px] text-muted">
                Inactive (Off) · 244×80
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
