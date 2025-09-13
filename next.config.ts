// old
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// second
// import path from 'path';
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   webpack: config => {
//     config.resolve.alias!['@'] = path.resolve(__dirname, 'src');
//     return config;
//   },
// };

// export default nextConfig;

import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: config => {
    // Add comprehensive alias support
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/app': path.resolve(__dirname, 'src/app'),
      '@/features': path.resolve(__dirname, 'src/features'),
    };
    return config;
  },
};

export default nextConfig;
