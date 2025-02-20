/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/myapp-listitem-lab05' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/myapp-listitem-lab05/' : '',
  trailingSlash: true,
  // ...other config options here...
};

module.exports = nextConfig;
