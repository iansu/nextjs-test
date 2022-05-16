/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@iansu/components']);

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
};

module.exports = withTM(nextConfig);
