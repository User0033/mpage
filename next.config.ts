import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  env: {
    HOSTINGER_EMAIL: process.env.HOSTINGER_EMAIL,
    HOSTINGER_PASSWORD: process.env.HOSTINGER_PASSWORD,
  },
};

export default nextConfig;
