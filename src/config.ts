export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  },
  image: {
    protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || 'http',
    host: process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost',
    port: process.env.NEXT_PUBLIC_BACKEND_PORT || '8000',
  }
} as const;