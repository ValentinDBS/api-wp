/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        hostname: 'web24.mmi-stdie.fr', 
        // Vous pouvez également spécifier d'autres paramètres comme le protocole (https ou http) si nécessaire
        // protocol: 'https',
      },
    ],
  },
};

export default nextConfig;