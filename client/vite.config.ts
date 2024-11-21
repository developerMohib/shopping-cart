import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy : {
      '/product': {
        target: 'https://shopping-cart-with-ts-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
