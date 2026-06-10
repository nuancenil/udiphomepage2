import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Changing base to '/' ensures absolute paths like '/logo.svg' resolve correctly 
  // from the domain root, preventing issues on sub-routes (e.g. /services).
  base: '/',
  server: {
    host: true,
    port: 8080
  },
  preview: {
    host: true,
    port: 8080
  }
})