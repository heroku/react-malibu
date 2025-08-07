import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'demo',
  build: {
    outDir: '../dist-demo'
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      'react-malibu': resolve(__dirname, '../dist/index.mjs')
    }
  }
}) 