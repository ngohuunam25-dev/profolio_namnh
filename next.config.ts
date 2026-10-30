import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_NODE_ENV === "production";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: "export",
  basePath: isProd ? "/profolio_namnh" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
