/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portafolio2",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
      },
};

export default nextConfig;