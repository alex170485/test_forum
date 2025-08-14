import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'node:path';


export default defineConfig({
  base:  '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  server: {
      port: 3000,
      open: true,
    },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});