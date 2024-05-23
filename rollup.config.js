import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [{ dir: path.resolve(__dirname, 'build'), format: 'es' }],
  plugins: [
    resolve(),
    commonjs(),
    // Bundle styles into build/bundle.css
    css({
      output: 'bundle.css' 
    }),
    // Copy Shoelace assets to build/shoelace
    copy({
      copyOnce: true,
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
          dest: path.resolve(__dirname, 'build/shoelace')
        }
      ]
    })
  ]
};