import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	root: 'src',
	server: {
		strictPort: true,
	},
	publicDir: '../public',
	build: {
		outDir: '../dist',
	},
})
