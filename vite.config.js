import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: './postcss.config.js', // explicitly tell Vite to use your PostCSS setup
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // keep your existing exclusion
  },
})
