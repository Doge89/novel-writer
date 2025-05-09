import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                dimensions: false,
              },
            }
          ],
          as: '.ts'
        }
      }
    }
  }
};

export default nextConfig;
