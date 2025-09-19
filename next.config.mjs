/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ejemplo:
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },
};

export default nextConfig;