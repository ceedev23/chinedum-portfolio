/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/cee-portfolio',
    images: {
        unoptimized: true,
    },
    assetPrefix: '/cee-portfolio/',
    trailingSlash: true,
}

export default nextConfig;
