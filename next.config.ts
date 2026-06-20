import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.3'],
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
};

export default nextConfig;
