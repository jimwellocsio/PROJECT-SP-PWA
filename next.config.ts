import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/project_sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  register: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  turbopack: {
  }
};

export default withSerwist(nextConfig);
