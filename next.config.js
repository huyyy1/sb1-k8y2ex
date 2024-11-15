/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'vqxgzfcwifmbxwixhsxv.supabase.co',
      },
    ],
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Next.js features and optimizations
  experimental: {
    // Enable modern CSS optimizations
    optimizeCss: true,
    // Optimize specific package imports
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'date-fns',
    ],
    // Enable typed routes
    typedRoutes: true,
    // Enable server actions
    serverActions: true,
    // Improved bundling
    webpackBuildWorker: true,
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations for client-side bundles
    if (!isServer) {
      // Optimize chunks
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
              name: 'framework',
              chunks: 'all',
              priority: 40,
              enforce: true,
            },
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 20,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'async',
              name(module) {
                const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                if (!match) return 'lib';
                return `lib.${match[1].replace('@', '')}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
              minSize: 20000,
              maxSize: 244000,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
      }

      // Add cache invalidation
      config.cache = {
        ...config.cache,
        type: 'filesystem',
        version: `${process.env.NODE_ENV}-${new Date().toISOString().split('T')[0]}`,
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: '.next/cache/webpack',
      }
    }

    return config
  },
}

module.exports = nextConfig