/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  // basePath: '/global',
  // images: {
  //   domains: ['localhost'], // this is more easy way
  // },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:4200/images/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http', // not required
        hostname: 'localhost', // required
        port: '4200', // not required
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/car/1',
  //       destination: '/car/2',
  //       permanent: true
  //     },
  //   ]
  // },
}

export default nextConfig
