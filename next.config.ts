import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@use 'src/styles/variables' as *;`,
  },
};

export default nextConfig;
