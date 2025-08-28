import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // React 16 compatibility
      jsxImportSource: 'react',
      babel: {
        // ES5 transpilation for UglifyJs 2.0.1 compatibility
        presets: [
          ['@babel/preset-env', {
            targets: {
              ie: '9'
            },
            modules: false,
            loose: true,
            useBuiltIns: false
          }]
        ],
        plugins: [
          ['@babel/plugin-transform-class-properties', { loose: true }],
          ['@babel/plugin-transform-object-rest-spread', { useBuiltIns: true }]
        ]
      }
    }),
    libInjectCss(),
  ],
  build: {
    outDir: 'lib',
    emptyOutDir: true,
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'ReactMalibu',
      formats: ['cjs'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types', 'react-svg-inline', 'whatwg-fetch'],
      output: {
        format: 'cjs',
        exports: 'named',
        interop: 'compat',
        banner: 'Object.defineProperty(exports, "__esModule", { value: true });',
        // Force ES5-compatible wrapper code generation
        generatedCode: 'es5',
        compact: false,
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
