import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // If you host images on a different domain, add its pattern here.
      // For example, for Firebase Storage:
      // {
      //   protocol: 'https',
      //   hostname: 'firebasestorage.googleapis.com',
      // },
    ],
  },
};

export default nextConfig;
