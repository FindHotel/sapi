import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'

// TODO: Package individual packages
const config = {
  input: 'packages/core/src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    process.env.NODE_ENV === 'production' && terser(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      preferBuiltins: false,
      browser: true
    }),
    commonjs({extensions: ['.js', '.jsx', '.ts', '.tsx']}),
    // TODO: tried to apply: https://stackoverflow.com/questions/63218218/rollup-is-not-generating-typescript-sourcemap
    // but doesn't seem to work
    typescript({sourceMap: false})
  ]
}

export default config
