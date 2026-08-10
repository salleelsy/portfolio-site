/**
 * FolderShape — the rounded-shoulder tab silhouette (Figma 782:26064 "Illust-Tab").
 *
 * One shape for both states — only the `fill` differs (cream active / charcoal
 * inactive). The path spans x −21…241 (262 wide) so its feet bleed past the
 * 224-wide tab slot and tuck under the neighbours; the caller must NOT clip.
 *
 * - The fill is extended below the 80px baseline so the tab overlaps the
 *   content panel it sits on — no 1px seam for either state.
 * - No drop-shadow: the tab must merge into the panel with no line/stroke at
 *   the bottom, so the shape is defined by colour contrast alone.
 *
 * Purely decorative (aria-hidden); the label lives in <Tab> as text.
 */
type FolderShapeProps = {
  /** CSS color for the tab body. */
  fill: string;
  className?: string;
};

export function FolderShape({ fill, className }: FolderShapeProps) {
  return (
    <svg
      className={className}
      viewBox="-21 0 262 83"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.937 0.777399C24.187 1.71229 13.507 6.16424 9.5 32.4123C3.801 69.7344 -3.903 79.4559 -21 79.4559H241C223.903 79.4559 216.199 69.7355 210.5 32.4123C206.492 6.16424 195.813 1.71229 190.063 0.777399C189.385 0.621426 188.693 0.54319 188 0.543951H32C31.292 0.545412 30.6043 0.623228 29.937 0.777399Z"
        fill={fill}
      />
      {/* Overhang strip merges the tab flush into the panel below (no seam). */}
      <rect x="-21" y="78" width="262" height="5" fill={fill} />
    </svg>
  );
}
