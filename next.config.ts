import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.shopify.com', 'img.icons8.com'], // ✅ Add allowed image domains here
  },
};

export default nextConfig;

