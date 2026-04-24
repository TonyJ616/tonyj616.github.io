import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages: username.github.io deploys at root
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
