import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/board/', // Путь, который соответствует вашему репозиторию на GitHub Pages
  base: '/board/', // Путь, который соответствует вашему репозиторию на GitHub Pages
  server: { 
    historyApiFallback: true 
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
