// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: '/src/js/script.js', // Defina o caminho correto aqui
    },
  },
});
