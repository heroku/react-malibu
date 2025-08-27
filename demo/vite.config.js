import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import baseConfig from '../vite.config'

export default defineConfig(mergeConfig(baseConfig, {
  root: 'demo',
  server: {
    port: 3002
  },
  resolve: {
    alias: {
      '@heroku/react-malibu': resolve(__dirname, '../src'),
    }
  }
}))