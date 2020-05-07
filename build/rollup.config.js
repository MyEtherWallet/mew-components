import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';
import resolve from '@rollup/plugin-node-resolve';

// eslint-disable-next-line no-undef
const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'MewComponent',
    exports: 'named',
    globals: {
      '@/components/Blockie/Blockie.vue': 'Blockie',
      '@/components/Toast/Toast.vue': 'Toast',
      '@/assets/images/icons/icon-copy-enable.png': 'IconCopy',
      '@/assets/images/icons/icon-saved-enable.png': 'IconSave',
      '@/helpers/blockies.js': 'Blockies',
      '@/assets/images/icons/icon-edit.png': 'IconEdit',
      '@/components/MewButton/MewButton.vue': 'MewButton',
      '@/components/WarningSheet/WarningSheet.vue': 'WarningSheet',
      '@/components/TxBadge/TxBadge.vue': 'TxBadge'
    }
  },
  plugins: [
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
    resolve()
  ],
  external: ['@/components/TxBadge/TxBadge.vue', '@/components/MewButton/MewButton.vue', '@/components/WarningSheet/WarningSheet.vue', '@/components/Toast/Toast.vue', '@/components/Blockie/Blockie.vue', '@/assets/images/icons/icon-edit.png', '@/helpers/blockies.js', '@/assets/images/icons/icon-copy-enable.png', '@/assets/images/icons/icon-saved-enable.png']
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
