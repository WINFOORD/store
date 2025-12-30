import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
productionBrowserSourceMaps: true,
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
  },
};

export default nextConfig;
