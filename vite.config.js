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
        social: resolve ( __dirname, 'src/social/index.html')

      },
    },
  },
});