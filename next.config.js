/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
    },
    publicRuntimeConfig:{
        HOST_URL: process.env.NEXT_PUBLIC_URL,
    },
}

module.exports = nextConfig
