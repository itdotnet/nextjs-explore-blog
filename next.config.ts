import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.britannica.com",
        protocol: "https"
      },
      {
        hostname: "www.mychiangmaitravel.com",
        protocol: "http"
      },
      {
        hostname: "www.home-hunts.net",
        protocol: "https"
      },
      {
        hostname: "www.travelandleisure.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
