/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shared.akamai.steamstatic.com',
        port: ''
      },

      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        port: ''
      }
    ]
  }
}

export default nextConfig
