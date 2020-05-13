// rollup.config.js
import image from '@rollup/plugin-image';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

// eslint-disable-next-line no-undef
const argv = minimist(process.argv.slice(2));

const config = {
  input: './src/wrapper.js',
  output: {
    name: 'MEWComponent',
    exports: 'named'
  },
  // external: ['@/components/Blockie/Blockie.vue'],
  plugins: [
    alias({
      resolve: ['.js', '.vue', '.css', '.scss', 'mdx'],
      entries: [
        {
          find: '@',
          replacement: './src'
        }
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    buble(),
    resolve(),
    image()
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
