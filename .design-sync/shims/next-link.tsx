// design-sync shim: next/link → plain <a> for the browser bundle.
// The real next/link requires the Next app-router context.
import * as React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string | { pathname?: string };
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, prefetch, replace, scroll, shallow, children, ...rest },
  ref,
) {
  const resolved = typeof href === "object" ? (href.pathname ?? "#") : href;
  return (
    <a ref={ref} href={resolved} {...rest}>
      {children}
    </a>
  );
});

export default Link;
