const withPWA = require("next-pwa")({
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  });

  const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  });

  module.exports = nextConfig;
  