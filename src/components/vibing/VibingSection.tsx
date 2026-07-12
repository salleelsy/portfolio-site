/**
 * VibingSection — the "Just vibing" tab panel.
 * No content specified yet — friendly placeholder with a clear TODO.
 */
export function VibingSection() {
  return (
    <section aria-labelledby="vibing-heading" className="bg-body-bg">
      <div className="mx-auto w-full px-6 py-14 sm:px-10 lg:px-[120px]">
        <h2 id="vibing-heading" className="text-[40px] font-extrabold text-ink">
          JUST VIBING
        </h2>
        {/* TODO(content): Sallee to decide what lives here — playlist, moodboard,
            experiments, gifs, whatever's vibing. */}
        <p className="mt-6 max-w-[720px] text-[18px] leading-[1.6] text-muted">
          Something fun is coming here. TODO: a playlist, a moodboard, little
          experiments — whatever&rsquo;s vibing.
        </p>
      </div>
    </section>
  );
}
