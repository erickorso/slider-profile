/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['rickandmortyapi.com', 'anotherdomain.com']
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
