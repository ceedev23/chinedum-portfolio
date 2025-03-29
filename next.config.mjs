/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/chinedum-portfolio',
    images: {
        unoptimized: true,
        remotePatterns: [],
    },
    distDir: 'out',
    trailingSlash: true,
    assetPrefix: '/chinedum-portfolio/',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },
}

export default nextConfig;
