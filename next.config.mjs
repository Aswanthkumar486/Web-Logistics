/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: false,
  images: {
      unoptimized: true,
    domains: [
      'www.bing.com',
      'example.com',
      'images.unsplash.com' // ✅ Add this line
    ],
  },
};

export default nextConfig;
