/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Esto le dice a Next.js que genere HTML estático
  output: 'export', 
  
  // 2. Esto corrige los enlaces internos (ej: /about)
  basePath: '/Madrid-soft-play', 
  
  // 3. ¡CRUCIAL! Esto corrige las rutas de CSS, JS e imágenes.
  assetPrefix: '/Madrid-soft-play/', 
};

export default nextConfig;