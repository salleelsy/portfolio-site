import type { ReactNode } from "react";
import { FolderIcon } from "./FolderIcon";

export type FolderLinkProps = {
  /** Caption below the folder (Work Sans 13px). Also the link's accessible name. */
  label: string;
  href?: string;
  onClick?: () => void;
  /** Defaults to the macOS blue folder. Pass a custom node to override. */
  icon?: ReactNode;
};

/**
 * FolderLink — a macOS-style folder icon with a caption below (Figma 280:17894,
 * "Folder with label"). Reusable across the hero Folder Nav.
 *
 * Renders as a real link; the folder art is decorative (aria-hidden) so the
 * accessible name comes from the label text.
 */
export function FolderLink({ label, href = "#", onClick, icon }: FolderLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex w-[72.727px] flex-col items-center gap-[2px] rounded-chip outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <span className="block w-full transition-transform duration-150 group-hover:-translate-y-0.5">
        {icon ?? <FolderIcon className="h-[72.727px] w-[72.727px]" />}
      </span>
      <span className="w-full text-center font-label text-[16px] leading-normal tracking-[-0.26px] text-cod-gray">
        {label}
      </span>
    </a>
  );
}
