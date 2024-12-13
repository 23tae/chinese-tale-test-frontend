import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: (process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || 'http') as 'http' | 'https',
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost',
        port: process.env.NODE_ENV === 'development' ? (process.env.NEXT_PUBLIC_BACKEND_PORT || '8000') : undefined,
        pathname: '/static/**',
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;