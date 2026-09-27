"use client";

import { useCallback, useState } from "react";
import { CheckIcon, CopyIcon } from "../icons";
import { Snackbar, type SnackbarTone } from "../Snackbar";

const EMAIL = "sallee.lsy@gmail.com";

const LINK =
  "w-fit underline-offset-4 outline-none transition-colors hover:text-base-blue hover:underline focus-visible:text-base-blue focus-visible:underline";

/**
 * Footer "Email" entry. The label opens the Say hello form (which sends
 * straight to Sallee's inbox) rather than a mailto: link, which shows a blank
 * page for visitors with no mail app set up. The icon copies the address.
 */
export function EmailLinks() {
  const [copied, setCopied] = useState(false);
  const [snack, setSnack] = useState<{ tone: SnackbarTone; message: string } | null>(null);
  const closeSnack = useCallback(() => setSnack(null), []);

  // Already on /#hello → the hash won't change, so scroll to the tabs ourselves.
  function openForm(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname === "/" && window.location.hash === "#hello") {
      event.preventDefault();
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      setSnack({ tone: "success", message: `Email copied: ${EMAIL}` });
    } catch {
      setSnack({ tone: "error", message: `Couldn’t copy. My email is ${EMAIL}` });
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Plain <a> on purpose (like the footer's tab nav): a native hash change
          fires `hashchange`, which PortfolioTabs listens for to switch tabs. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#hello" onClick={openForm} className={LINK}>
        Email
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : `Copy email address (${EMAIL})`}
        title="Copy email address"
        className="flex size-8 items-center justify-center rounded-full text-muted outline-none transition-colors hover:bg-black/[0.06] hover:text-ink focus-visible:ring-2 focus-visible:ring-ink"
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      </button>
      <Snackbar open={snack !== null} tone={snack?.tone} message={snack?.message ?? ""} onClose={closeSnack} />
    </div>
  );
}
