/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.hicareindia.com" },
      { protocol: "https", hostname: "www.hopemeditek.com" },
      { protocol: "https", hostname: "surginova.in" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
