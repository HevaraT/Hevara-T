/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hevaratravel.co.uk'],
    unoptimized: true,
  },
}

module.exports = nextConfig
