/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // ... Other webpack configurations

    config.resolve.alias['@'] = __dirname;

    // ... Other webpack configurations

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:projectName*',
  //       destination: '/[projectName]',
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        // pathname: '/account123/**',
      },
    ],
    // domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
