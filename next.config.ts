import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "dist",
  env: {
    HOSTINGER_EMAIL: process.env.HOSTINGER_EMAIL,
    HOSTINGER_PASSWORD: process.env.HOSTINGER_PASSWORD,
  },
};

export default nextConfig;
