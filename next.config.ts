import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // GoDaddy's preview runs `next dev` behind *.airoapp.ai; allow its HMR requests.
  allowedDevOrigins: ["**.airoapp.ai"],
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
