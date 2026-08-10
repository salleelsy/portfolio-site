"use client";

import { useEffect, useRef } from "react";
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
 * Roving tabindex keeps a single tab stop. Tabs are a uniform 224px wide and
 * abut edge-to-edge (Figma 782:26065 pitch = 224); the 262px shapes overlap
 * their neighbours intrinsically, and the active tab is raised in front.
 *
 * The four full-width tabs total ~896px, so they fit side-by-side on desktop
 * but overflow narrow (mobile) viewports. Rather than squeeze the tabs — which
 * clips their labels — the strip scrolls horizontally; the selected tab is
 * scrolled into the centre on change so it's always reachable.
 */
export function TabList({
  items,
  value,
  onChange,
  "aria-label": ariaLabel,
  className,
}: TabListProps) {
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const didMount = useRef(false);

  // Keep the selected tab within view of the (horizontally scrollable) strip.
  // Scroll the container itself — never scrollIntoView, which would also jump
  // the page vertically. Instant on first paint, smooth on later changes.
  useEffect(() => {
    const strip = stripRef.current;
    const activeIndex = items.findIndex((it) => it.value === value);
    const el = tabsRef.current[activeIndex];
    if (!strip || !el) return;
    if (strip.scrollWidth <= strip.clientWidth) return; // nothing to scroll

    const target = el.offsetLeft + el.offsetWidth / 2 - strip.clientWidth / 2;
    strip.scrollTo({
      left: Math.max(0, target),
      behavior: didMount.current ? "smooth" : "auto",
    });
    didMount.current = true;
  }, [value, items]);

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
      ref={stripRef}
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      // Horizontal scroll when the tabs overflow (mobile); the scrollbar is
      // hidden so the strip reads as a clean folder edge. px gives the first
      // and last tabs' feet room to bleed out without clipping. overflow-y is
      // pinned hidden so the shapes' 3px bottom bleed can't add a stray
      // vertical scroll (overflow-x:auto would otherwise force overflow-y:auto).
      className={[
        "flex items-end overflow-x-auto overflow-y-hidden px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className ?? "",
      ].join(" ")}
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
          id={`tab-${item.value}`}
          onClick={() => onChange(item.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}
