import { ArrowRightIcon } from "../icons";

// Real contact details (Figma 280:17860) — kept.
const EMAIL = "sallee.lsy@gmail.com";
const PHONE_DISPLAY = "+1 (437) 366 8964";
const PHONE_HREF = "tel:+14373668964";
const INSTAGRAM_HANDLE = "@sallee.studio";
const INSTAGRAM_HREF = "https://instagram.com/sallee.studio";

/**
 * ContactSection — "Let's connect!" contact card + site footer (Figma 280:17859).
 * Card: #F3F4F6 / #E5E7EB border / radius 16 / padding 32, with contact details
 * and a circular black email CTA. Footer below, centered.
 */
export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="bg-paper">
      <div className="mx-auto w-full max-w-[1360px] px-6 pt-12 sm:px-10">
        <div className="flex items-center gap-6 rounded-card border border-hairline bg-body-bg p-8">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold uppercase tracking-[0.24px] text-muted">
                Let&rsquo;s connect!
              </p>
              <h2
                id="contact-heading"
                className="text-[40px] font-semibold text-ink"
              >
                CONTACT
              </h2>
            </div>
            <address className="flex flex-col gap-[10px] text-[16px] not-italic text-ink">
              <a href={PHONE_HREF} className="w-fit hover:underline">
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="w-fit hover:underline">
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit hover:underline"
              >
                instagram: {INSTAGRAM_HANDLE}
              </a>
            </address>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email Sallee"
            className="flex size-16 shrink-0 items-center justify-center rounded-cta bg-ink text-paper outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <ArrowRightIcon className="size-6" />
          </a>
        </div>

        <footer className="py-8 text-center text-[16px] text-muted">
          © 2026 Sallee Lee. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
