/**
 * @type {import('next').NextConfig}
 */
const config = {
  output: 'export',
  distDir: 'docs',
  experimental: {
    appDir: true,
  },
}

export default config
