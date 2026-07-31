/**
 * SectionTitle — case-study section header (Figma 576:21195).
 * Base-style capsule outline + Poppins SemiBold, in the base-blue accent,
 * sized up so each section reads as a clear chapter break.
 */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 border-t border-hairline pb-8 pt-10">
      <span
        aria-hidden
        className="h-[26px] w-[56px] shrink-0 rounded-full border-[8px] border-base-blue"
      />
      <h2 className="font-section text-[24px] font-semibold leading-[1.3] text-base-blue">
        {children}
      </h2>
    </div>
  );
}
