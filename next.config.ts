import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure GSAP and Lenis are processed by Next.js bundler
  // so they're treated as client-only and tree-shaken properly
  transpilePackages: ["gsap", "lenis"],
};

export default nextConfig;
