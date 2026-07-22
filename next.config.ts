import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["asuransibekasi.biz.id"],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
