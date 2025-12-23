/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // <- enables static HTML export
  images: { unoptimized: true } // <- needed for static export if using next/image
};

module.exports = nextConfig;
