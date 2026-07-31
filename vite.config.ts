import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '1947-113-30-186-185.ngrok-free.app',
      'programmingprophet.site',

    ],
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
    proxy: {
      '/api': {
        target: 'https://programmingprophet.site:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
