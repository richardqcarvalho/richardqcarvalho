import { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  distDir: 'docs',
  experimental: {
    appDir: true,
  },
}

export default config
