/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // webpack: (config, { isServer }) => {
  //   // Exclude 'net' module from being bundled when building for the browser
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       net: false,
  //       // dns: false,
  //       // tls: false, 
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
