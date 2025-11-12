/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/Madrid-soft-play', 
  assetPrefix: '/Madrid-soft-play/', // <-- ¡Esta línea es la clave!
};

export default nextConfig;