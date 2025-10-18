/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app1/:path*",
        destination: "https://cube-animations.vercel.app/"
      },
      {
        source: "/app2/:path*",
        destination: "https://leaders-animation.vercel.app/"
      }
    ];
  }
};

module.exports = nextConfig;
