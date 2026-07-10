"use client";

import { useRef } from "react";
import { Tab } from "./Tab";

export type TabItem = {
  /** Stable value used for selection, e.g. "portfolio". */
  value: string;
  label: string;
  index: string;
  /** id of the tabpanel this tab controls (for aria-controls). */
  panelId?: string;
};

type TabListProps = {
  items: TabItem[];
  /** Currently selected value. */
  value: string;
  onChange: (value: string) => void;
  /** Accessible name for the tablist (required for screen readers). */
  "aria-label": string;
  className?: string;
};

/**
 * TabList — accessible, keyboard-navigable folder-tab strip.
 *
 * Implements the WAI-ARIA Tabs pattern with automatic activation:
 *   ← / →      move between tabs (wraps), selection follows focus
 *   Home / End jump to first / last
 * Roving tabindex keeps a single tab stop. Tabs overlap by 15px, matching the
 * folder-strip look; the active tab is raised above its neighbors.
 *
 * The 15px overlap is exact — from the Figma Tabs-Row (280:17916), whose tabs
 * sit at x = 0, 229, 450, 679 (widths 244/236/244/244).
 */
export function TabList({
  items,
  value,
  onChange,
  "aria-label": ariaLabel,
  className,
}: TabListProps) {
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(nextIndex: number) {
    const count = items.length;
    const wrapped = (nextIndex + count) % count;
    onChange(items[wrapped].value);
    tabsRef.current[wrapped]?.focus();
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(currentIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(currentIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(items.length - 1);
        break;
    }
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      // pl gives the first tab's left foot room to bleed out without clipping.
      className={["flex items-end pl-6", className ?? ""].join(" ")}
    >
      {items.map((item, i) => (
        <Tab
          key={item.value}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          label={item.label}
          index={item.index}
          active={item.value === value}
          panelId={item.panelId}
          leftBleed={i === 0}
          id={`tab-${item.value}`}
          onClick={() => onChange(item.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={i > 0 ? "-ml-[15px]" : ""}
        />
      ))}
    </div>
  );
}
