import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'https://agent-backend-qqwl.onrender.com',
        changeOrigin: true
      }
    }
  }
})

