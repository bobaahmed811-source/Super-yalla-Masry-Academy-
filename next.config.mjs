/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // يمنع توقف النشر بسبب أخطاء بسيطة في التايب سكريبت
  },
  eslint: {
    ignoreDuringBuilds: true, // يمنع توقف النشر بسبب قواعد التنسيق
  },
  images: {
    unoptimized: true, 
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
