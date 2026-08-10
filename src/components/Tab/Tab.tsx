import { forwardRef } from "react";
import { FolderShape } from "./FolderShape";

export type TabProps = {
  /** Visible label, e.g. "Selected works" (Poppins 16px). */
  label: string;
  /** Index string, e.g. "001" (Poppins 12px). */
  index: string;
  /** On = active (Figma `property1`). */
  active: boolean;
  /** id of the tabpanel this tab controls. */
  panelId?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Tab — the rounded-shoulder nav tab (Figma 782:26064).
 *
 * A 224×80 slot with the FolderShape silhouette centered in it (the shape is
 * 262 wide, so its shoulders tuck under the neighbours). Both states share the
 * shape; only the fill and text weight/colour change. The active tab is raised
 * above its neighbours (z-20) so it always reads in front.
 *
 * Renders as a real <button role="tab">; the folder art is aria-hidden and the
 * accessible name comes from the text. Meant to live inside <TabList>.
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { label, index, active, panelId, className, ...buttonProps },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      className={[
        "group relative block h-[80px] w-[224px] cursor-pointer bg-transparent p-0 [clip-path:inset(-24px_-28px_0_-28px)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
        active ? "z-20 shrink-0" : "z-0",
        className ?? "",
      ].join(" ")}
      {...buttonProps}
    >
      {/* Decorative silhouette — 262 wide, centered on the 224 slot. */}
      <FolderShape
        fill={active ? "var(--color-folder-active)" : "var(--color-folder-inactive)"}
        className="absolute left-1/2 top-0 h-[83px] w-[117%] -translate-x-1/2"
      />

      <span
        className={[
          "absolute inset-x-0 top-0 bottom-[4px] flex flex-col items-center justify-center gap-[2px] px-1 text-center",
          active ? "whitespace-nowrap text-ink" : "text-[#e4e4e4]",
        ].join(" ")}
      >
        <span
          className={[
            "font-sans text-[16px] leading-[1.15]",
            active ? "font-semibold" : "font-normal",
          ].join(" ")}
        >
          {label}
        </span>
        <span className="font-sans text-[12px] font-normal leading-[12px]">
          {index}
        </span>
      </span>
    </button>
  );
});
