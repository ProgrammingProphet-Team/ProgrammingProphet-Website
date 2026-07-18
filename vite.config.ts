import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['octennial-madonna-unaxised.ngrok-free.dev', '1dbe-113-30-186-127.ngrok-free.app', ""]
  }
})
