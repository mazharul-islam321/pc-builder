/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.startech.com.bd',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
