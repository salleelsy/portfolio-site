import { forwardRef } from "react";
import { FolderShape } from "./FolderShape";

export type TabProps = {
  /** Visible label, e.g. "Portfolio" (Inter Bold 14px). */
  label: string;
  /** Index string, e.g. "01" (Inter SemiBold 12px). */
  index: string;
  /** On = active (Figma `property1`). */
  active: boolean;
  /** id of the tabpanel this tab controls. */
  panelId?: string;
  /** First tab in the strip — reveal the folder's left foot (nothing to tuck under). */
  leftBleed?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Tab — the file-folder-shaped nav tab (Figma component 280:17872).
 *
 * Active (On):   236×80, light folder, black label + index, raised.
 * Inactive (Off): 244×80 box with a 74-tall folder sitting 6px lower, dark
 *                 folder, white label + #F3F4F6 index.
 *
 * Renders as a real <button role="tab">. Decorative folder art is aria-hidden;
 * the accessible name comes from the text. Meant to live inside <TabList>.
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { label, index, active, panelId, leftBleed = false, className, ...buttonProps },
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
        "group relative block h-[80px] shrink-0 cursor-pointer bg-transparent p-0",
        // First tab bleeds its left foot out; others clip to their box.
        leftBleed ? "overflow-visible" : "overflow-hidden",
        "outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-body-bg",
        active ? "z-10 w-[236px]" : "z-0 w-[244px]",
        className ?? "",
      ].join(" ")}
      {...buttonProps}
    >
      {/* Decorative folder silhouette */}
      {active ? (
        <FolderShape
          active
          leftBleed={leftBleed}
          className={
            leftBleed
              ? "absolute right-0 top-0 h-[80px] w-[257px]"
              : "absolute inset-0 h-[80px] w-[236px]"
          }
        />
      ) : (
        <FolderShape
          active={false}
          leftBleed={leftBleed}
          className={
            leftBleed
              ? "absolute bottom-0 right-0 h-[74px] w-[262px]"
              : "absolute bottom-0 left-0 h-[74px] w-[244px]"
          }
        />
      )}

      {/* Label + index overlay */}
      <span
        className={[
          "absolute flex flex-col items-center justify-center gap-[4px] whitespace-nowrap text-center leading-none",
          active
            ? "left-0 right-[16px] top-[14px] text-ink"
            : "left-[3px] right-[21px] top-[20px] text-paper",
        ].join(" ")}
      >
        <span className="font-sans text-[14px] font-bold">{label}</span>
        <span
          className={[
            "font-sans text-[12px] font-semibold",
            active ? "text-ink" : "text-body-bg",
          ].join(" ")}
        >
          {index}
        </span>
      </span>
    </button>
  );
});
