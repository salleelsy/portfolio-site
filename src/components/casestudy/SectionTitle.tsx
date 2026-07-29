/**
 * SectionTitle — case-study section header (Figma 576:21195).
 * Base-style capsule outline + Poppins Bold 24px, both in the base-blue accent.
 * The circle-and-text pair marks the start of each stepper-tracked section.
 */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 pb-5">
      <span
        aria-hidden
        className="h-[26px] w-[56px] shrink-0 rounded-full border-[8px] border-base-blue"
      />
      <h2 className="font-section text-[24px] font-bold leading-[40px] text-base-blue">
        {children}
      </h2>
    </div>
  );
}
