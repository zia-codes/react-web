import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/react-web/',   // 👈 very important (use your repo name here)
  plugins: [
    tailwindcss(),
    react()
  ],
})
