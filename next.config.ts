import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // `qualities` defaults to [75] and coerces anything else to the nearest
    // allowed value; 90 keeps fine UI text in the project screenshots crisp.
    qualities: [75, 90],
  },
};

export default nextConfig;
