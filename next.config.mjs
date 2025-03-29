/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/cee-portfolio' : '',
    images: {
        unoptimized: true,
    },
    distDir: 'out',
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/cee-portfolio/' : '',
}

export default nextConfig;
