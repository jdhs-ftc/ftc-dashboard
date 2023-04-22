import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
