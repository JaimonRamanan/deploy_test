import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.dummyjson.com/products/images/**')],
  },
};

export default nextConfig;
