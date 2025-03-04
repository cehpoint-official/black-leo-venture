/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/starting",
        permanent : false
      },
    ];
  },
};

module.exports = nextConfig;
