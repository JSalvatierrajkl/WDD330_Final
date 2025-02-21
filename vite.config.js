import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        createChallenge: resolve(__dirname, 'src/createChallenge/index.html'),
        challenges: resolve(__dirname, 'src/challenges/index.html'),
        profile: resolve(__dirname, 'src/profile/index.html'),
        social: resolve(__dirname, 'src/social/index.html')
      },
    },
  },
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: 'https://api.football-data.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});