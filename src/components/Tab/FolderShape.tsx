/**
 * FolderShape — the file-folder silhouette behind a Tab.
 *
 * Vectors exported from Figma node 280:17872 (Illust-Tab), restyled per the
 * 673:24012 revision: no outline stroke; a soft drop shadow instead. The
 * shadow is clipped at the shape's bottom edge (clip-path inset) so the
 * active folder merges seamlessly into the same-colored panel below — the
 * tab must read as part of the panel, never a separate floating component.
 *
 * - active: light #F3F4F6 folder.
 * - leftBleed: reveals the folder's left foot (used by the first tab, which has
 *   nothing to its left to tuck under) by widening the viewBox to the left.
 *
 * Purely decorative: marked aria-hidden. The real label lives in <Tab> as text.
 */
type FolderShapeProps = {
  active: boolean;
  className?: string;
  leftBleed?: boolean;
};

// Soft shadow on the folder art. It renders untrimmed — the content sheet
// below (a later sibling at the same z-level) paints over the underside, so
// no shadow ever shows between the active tab and the panel it opens into.
const SHADOW = "[filter:drop-shadow(0_0_6px_rgba(0,0,0,0.22))]";

export function FolderShape({ active, className, leftBleed = false }: FolderShapeProps) {
  if (active) {
    // On variant (280:17880): 236×80, light #F3F4F6 fill.
    return (
      <svg
        className={[SHADOW, className ?? ""].join(" ")}
        width={leftBleed ? 257 : 236}
        height={80}
        viewBox={leftBleed ? "-21 0 257 80" : "0 0 236 80"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g clipPath="url(#folder-on-clip)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.937 0.777399C24.187 1.71229 13.507 6.16424 9.5 32.4123C3.801 69.7344 -3.903 79.4559 -21 79.4559H241C223.903 79.4559 216.199 69.7355 210.5 32.4123C206.492 6.16424 195.813 1.71229 190.063 0.777399C189.385 0.621426 188.693 0.54319 188 0.543951H32C31.292 0.545412 30.6043 0.623228 29.937 0.777399Z"
            fill="var(--color-folder-active, #F3F4F6)"
          />
          {/* Fill strip keeps the folder flush with the panel below. */}
          <rect
            x="-21"
            y="78"
            width="262"
            height="4"
            fill="var(--color-folder-active, #F3F4F6)"
          />
        </g>
        <defs>
          <clipPath id="folder-on-clip">
            <rect
              width="262"
              height="80"
              fill="white"
              transform="translate(-21)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  // Off variant (280:17873): 244×74, black fill.
  return (
    <svg
      className={[SHADOW, className ?? ""].join(" ")}
      width={leftBleed ? 262 : 244}
      height={74}
      viewBox={leftBleed ? "-18 0 262 74" : "0 0 244 74"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g clipPath="url(#folder-off-clip)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.937 0.718874C27.187 1.58365 16.507 5.7017 12.5 29.9812C6.801 64.5041 -0.903 73.4965 -18 73.4965H244C226.903 73.4965 219.199 64.5051 213.5 29.9812C209.492 5.7017 198.813 1.58365 193.063 0.718874C192.385 0.5746 191.693 0.502231 191 0.502935H35C34.292 0.504287 33.6043 0.576266 32.937 0.718874Z"
          fill="var(--color-folder-inactive, #000000)"
        />
      </g>
      <defs>
        <clipPath id="folder-off-clip">
          <rect
            width="262"
            height="74"
            fill="white"
            transform="translate(-18)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
