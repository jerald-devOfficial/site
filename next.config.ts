import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'pub-c9b73400c3ca43d58d11a96f713ffe4f.r2.dev'
      }
    ]
  }
}

export default nextConfig
