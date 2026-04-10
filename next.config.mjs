/** @type {import('next').NextConfig} */

const buildType = 'export';


const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  trailingSlash: true, // for resolving slash url issue
  distDir: (buildType === 'export') ? 'dist' : undefined,
  // basePath: (buildType === 'export') ? 'https://anandavriddhifoundation.org': undefined,
  // assetPrefix: (buildType === 'export') ? 'https://anandavriddhifoundation.org': undefined,
  output: buildType,
  experimental: {
    optimizePackageImports: ['flowbite', 'flowbite-react', 'flowbite/plugin', '@tinymce/tinymce-react', 'tinymce', '@tinymce'],
    // serverActions: true
    serverActions: {
      // allowedForwardedHosts: ['*'],
      allowedOrigins: ['localhost:3000', 'anandavriddhifoundation.org', '*.anandavriddhifoundation.org']
    }
  },
  images: {
    unoptimized: (buildType === 'export'),
    // domains: [
    //   'images.unsplash.com',
    //   'i.ytimg.com',
    //   'indiacom.com',
    //   'www.indiacom.com'
    // ],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'i.ytimg.com'
      },
      {
        hostname: 'indiacom.com'
      },
      {
        hostname: 'www.indiacom.com'
      },
      {
        hostname: 'tellme360mediahub.com'
      },
      {
        hostname: 'youtellme.ai'
      },
      {
        hostname: 'img.youtube.com'
      },
      {
        hostname: 'fonts.gstatic.com'
      },
      {
        hostname: 'fonts.googleapis.com'
      },
    ]
    // minimumCacheTTL: 86400
  },
  // async redirects() {
  //   const redirectsListRes = await fetch('http://localhost:8000/common/redirects', {
  //     headers: {
  //       'accept': 'application/json'
  //     }
  //   });
  //   const redirectsList = await redirectsListRes.json()

  //   return redirectsList;

  // },
  async rewrites() {
    return [
      {
        source: '/backend_api/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ]
  },
  swcMinify: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // output: 'export'
};

export default nextConfig;
