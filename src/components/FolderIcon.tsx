import Image from "next/image";
import folder from "../../public/hero/folder.png";

/**
 * FolderIcon — macOS-style blue folder (Figma component 182:442).
 *
 * Pixel-exact Figma raster, exported as a compact PNG (219×219 @3x, ~42KB) and
 * served responsively via next/image. Decorative only (aria-hidden, empty alt).
 */
type FolderIconProps = {
  className?: string;
};

export function FolderIcon({ className }: FolderIconProps) {
  return (
    <Image
      src={folder}
      alt=""
      aria-hidden
      width={73}
      height={73}
      className={className}
    />
  );
}
