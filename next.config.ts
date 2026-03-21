import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Remove X-Powered-By header to reduce response size and hide server info
  poweredByHeader: false,

  // Enable HTTP compression for all responses
  compress: true,

  // Strict headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Allow browsers to cache static assets aggressively
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Fonts: cache for 1 year (they're content-hashed)
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // OG images: cache for 7 days
        source: '/og/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
