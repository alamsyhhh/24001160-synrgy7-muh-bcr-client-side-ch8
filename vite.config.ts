import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Direktori output build
    emptyOutDir: true, // Bersihkan direktori output sebelum membangun
  },
});
