import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain https://tommydogs.com at the domain root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
