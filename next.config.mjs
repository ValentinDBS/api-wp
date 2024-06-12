/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        // Rewrite pour les détails de l'agent
        {
          source: '/agents/:uuid',
          destination: '/agents/[uuid]',
        },
      ];
    },
  };
  
  export default nextConfig;
  