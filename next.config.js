/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
