import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    open: true
  },
  base: command === 'build' ? '/Portfolio/' : '/'
}))
