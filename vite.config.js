import { defineConfig } from 'vite';

export default defineConfig({
  base: '/india-photography/',
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  build: {
    outDir: 'publico',
    assetsDir: 'assets',
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
