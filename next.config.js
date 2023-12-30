/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
}


module.exports = nextConfig
