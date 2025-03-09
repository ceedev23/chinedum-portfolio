/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/cee-portfolio',
    images: {
        unoptimized: true,
    },
    distDir: 'out',
}

export default nextConfig;
