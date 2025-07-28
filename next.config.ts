import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.shopify.com'], // ✅ Add allowed image domains here
  },
};

export default nextConfig;

