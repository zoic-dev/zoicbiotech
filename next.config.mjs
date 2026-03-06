/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zoicbiotech.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.zoicbiotech.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },

  async redirects() {
    return [
      {
        source: "/pharma-third-party-manufacturers-in-karnataka",
        destination: "/blog/pharma-third-party-manufacturers-in-karnataka",
        permanent: true
      }
    ]
  }
};

export default nextConfig;