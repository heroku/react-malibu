import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    libInjectCss(),
  ],
  build: {
    outDir: 'lib',
    emptyOutDir: true,
    target: 'es2015', // Target ES2015 for better compatibility
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'ReactMalibu',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types', 'react-svg-inline', 'whatwg-fetch'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
          'react-svg-inline': 'SVGInline',
          'whatwg-fetch': 'fetch'
        }
      }
    }
  }
})
