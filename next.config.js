/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      "src/pages",
      "src/components",
      "src/styles",
      "src/utils",
    ],
  },
}

module.exports = nextConfig
