import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'sinotale-backend-production.up.railway.app',
        port: '',
        pathname: '/static/**',
      }
    ],
  },
};

export default nextConfig;