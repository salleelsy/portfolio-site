"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export type SnackbarTone = "success" | "error";

const noopSubscribe = () => () => {};

/**
 * Snackbar — bottom-centre toast. Portalled to <body> so no animated or
 * transformed ancestor can shift or hide it; auto-dismisses after `duration`.
 */
export function Snackbar({
  open,
  tone = "success",
  message,
  onClose,
  duration = 5000,
}: {
  open: boolean;
  tone?: SnackbarTone;
  message: string;
  onClose: () => void;
  duration?: number;
}) {
  // Portals need <body>, which only exists on the client.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(t);
  }, [open, duration, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className={[
        "fixed inset-x-4 bottom-6 z-50 mx-auto flex max-w-[480px] items-center gap-3 rounded-[12px] bg-cod-gray px-5 py-4 text-[16px] text-paper shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-[opacity,translate] duration-300 ease-out",
        open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      {open && (
        <>
          <span
            aria-hidden
            className={[
              "flex size-6 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-cod-gray",
              tone === "error" ? "bg-[#f87171]" : "bg-[#4ade80]",
            ].join(" ")}
          >
            {tone === "error" ? "!" : "✓"}
          </span>
          <p className="flex-1">{message}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss"
            className="shrink-0 rounded-full px-2 text-[20px] leading-none text-paper/70 outline-none transition-colors hover:text-paper focus-visible:ring-2 focus-visible:ring-paper"
          >
            ×
          </button>
        </>
      )}
    </div>,
    document.body,
  );
}
