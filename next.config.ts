import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained build for GoDaddy cPanel Node.js hosting: upload the
  // folder produced by `npm run build:godaddy` and run `server.js`.
  output: "standalone",
  poweredByHeader: false,
  images: {
    // Shared hosting has tight CPU/RAM limits and builds from Windows ship no
    // Linux sharp binary, so serve the pre-sized WebP files in public/ as-is.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/menus/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
