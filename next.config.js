/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.coinstats.app'],
    formats: ["image/webp"],
    loader: 'imgix'
    // path: 'https://static.coinstats.app/coins'
  }
}
