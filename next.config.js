/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // {
    //   // Set the output directory for the exported static files
    //   dir: 'out',
    //   // Specify the base path of your app (optional)
    //   // basePath: '/your-base-path',
    // },
    experimental: {
      images: true
    }
  }
  
  module.exports = nextConfig