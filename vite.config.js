import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use a relative base so the site works when hosted under GitHub Pages
  // regardless of the repository name or path.
  base: './',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000
  }
})
