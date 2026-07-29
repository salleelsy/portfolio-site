import * as React from "react";
import { FolderLink } from "portfolio-site";

/** The hero's quick-link folder, exactly as FolderNav composes it. */
export const Default = () => <FolderLink label="inspirations." href="#" />;

/** Real labels from the hero Folder Nav (Figma 280:17893). */
export const HeroLabels = () => (
  <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
    <FolderLink label="click for lucky." href="#" />
    <FolderLink label="inspirations." href="#" />
    <FolderLink label="archived." href="#" />
  </div>
);

/** Custom icon node overrides the default macOS-blue folder art. */
export const CustomIcon = () => (
  <FolderLink
    label="notes."
    href="#"
    icon={
      <span
        aria-hidden
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 72,
          height: 72,
          fontSize: 48,
        }}
      >
        🗂️
      </span>
    }
  />
);
