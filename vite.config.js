import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/board/', // Путь, который соответствует вашему репозиторию на GitHub Pages
  build: {
    outDir: 'dist', // где будет собираться проект
  },
})
