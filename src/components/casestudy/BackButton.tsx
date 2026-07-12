import Link from "next/link";
import { ChevronLeftIcon } from "../icons";

/**
 * BackButton — Uber Base circular tertiary icon button (Figma 576:21179,
 * Shape=Circle / Size=Large / Hierarchy=Tertiary / Layout=Icon only).
 * 56px circle, 8% black fill, chevron-left; darkens on hover/press.
 */
export function BackButton({ href = "/", label = "Back to work" }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex size-14 items-center justify-center rounded-full bg-black/[0.08] text-ink outline-none transition-colors hover:bg-black/[0.12] active:bg-black/[0.16] focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
    >
      <ChevronLeftIcon className="size-6" />
    </Link>
  );
}
