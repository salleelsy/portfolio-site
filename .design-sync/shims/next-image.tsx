// design-sync shim: next/image → plain <img> for the browser bundle.
// The real next/image needs the Next runtime (process.env, image optimizer);
// in the Claude Design bundle static imports resolve to data-URI strings.
import * as React from "react";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string | { src: string };
  fill?: boolean;
  priority?: boolean;
  quality?: number | string;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  sizes?: string;
};

const Image = React.forwardRef<HTMLImageElement, Props>(function Image(
  { src, fill, priority, quality, placeholder, blurDataURL, unoptimized, loader, style, ...rest },
  ref,
) {
  const resolved = typeof src === "object" && src !== null ? src.src : src;
  const fillStyle: React.CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
    : style;
  return <img ref={ref} src={resolved} style={fillStyle} {...rest} />;
});

export default Image;
