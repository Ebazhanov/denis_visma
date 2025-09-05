/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/denis_visma',
  assetPrefix: '/denis_visma/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
