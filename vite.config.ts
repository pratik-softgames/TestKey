import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    sourcemap: true, // Enable source maps
    rollupOptions: {
      external: ['ViewPortExample'], // Add this line
    },
    terserOptions: {
      compress: false,
      mangle: false
    }
  },
});
