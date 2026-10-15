/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // Dangerously allow production builds to run even with TS errors
    ignoreBuildErrors: true,
  },
};