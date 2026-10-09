/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // React configuration
  reactStrictMode: true,
  // Next.js 15 App Router optimizations
  experimental: {
    // Enable optimized loading for specific packages
    optimizePackageImports: ['swiper', 'react-icons'],
  },

  // Performance optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    // Optimize images
    minimumCacheTTL: 60,
    // Allow external images if needed
    remotePatterns: [
      // Add any external image domains here if needed
    ],
  },

  // Headers for better performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
