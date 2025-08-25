import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        // Configure Babel for compatibility with older minifiers like UglifyJS 2.x
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
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
        // Ensure proper CommonJS exports for React 16 compatibility
        interop: 'compat',
        // Add __esModule flag for proper interop
        banner: 'Object.defineProperty(exports, "__esModule", { value: true });',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
          'react-svg-inline': 'SVGInline',
          'whatwg-fetch': 'fetch'
        },
        // Generate code compatible with older minifiers
        generatedCode: 'es2015',
        compact: false
      }
    }
  }
})
