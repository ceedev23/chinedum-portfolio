/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/chinedum-portfolio',
    images: {
        unoptimized: true,
    },
    distDir: 'out',
    trailingSlash: true,
    assetPrefix: '/chinedum-portfolio/',
}

export default nextConfig;
