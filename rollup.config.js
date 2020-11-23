import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'

// TODO: Package individual packages
export default {
  input: 'packages/core/src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    terser(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      preferBuiltins: false,
      browser: true
    }),
    commonjs({extensions: ['.js', '.jsx', '.ts', '.tsx']}),
    typescript()
  ]
}
