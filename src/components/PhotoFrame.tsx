import Image from "next/image";

export type PhotoFrameProps = {
  /** When set, renders the photo; otherwise a labelled placeholder. */
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
};

/**
 * PhotoFrame — a rounded image slot. Renders a real photo when `src` is given,
 * otherwise a clearly-marked placeholder for Sallee to drop a photo in later.
 * Size/aspect is controlled by the caller via `className`.
 */
export function PhotoFrame({
  src,
  alt = "",
  label = "Photo coming soon",
  className,
}: PhotoFrameProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-xl",
        className ?? "",
      ].join(" ")}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center rounded-xl border border-dashed border-line bg-body-bg"
        >
          {/* TODO(content): Sallee to add a real photo */}
          <span className="font-label text-[14px] uppercase tracking-wide text-muted/70">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
