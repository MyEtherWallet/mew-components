import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from '@rollup/plugin-node-resolve';

const config = {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'MewComponent',
    exports: 'named',
    globals: {
      '@/components/Blockie/Blockie.vue': '@/components/Blockie/Blockie.vue',
      '@/components/Toast/Toast.vue': '@/components/Toast/Toast.vue',
      '@/assets/images/icons/icon-copy-enable.png': '@/assets/images/icons/icon-copy-enable.png',
      '@/assets/images/icons/icon-saved-enable.png': '@/assets/images/icons/icon-saved-enable.png',
      '@/helpers/blockies.js': '@/helpers/blockies.js',
      '@/assets/images/icons/icon-edit.png': '@/assets/images/icons/icon-edit.png',
      '@/components/MewButton/MewButton.vue': '@/components/MewButton/MewButton.vue',
      '@/components/WarningSheet/WarningSheet.vue': '@/components/WarningSheet/WarningSheet.vue',
      '@/components/TxBadge/TxBadge.vue': '@/components/TxBadge/TxBadge.vue'
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
  external: ['@/components/TxBadge/TxBadge.vue', '@/components/MewButton/MewButton.vue', '@/components/WarningSheet/WarningSheet.vue', '@/components/Toast/Toast.vue', '@/components/Blockie/Blockie.vue', '@/assets/images/icons/icon-edit.png', '@/helpers/blockies.js', '@/assets/images/icons/icon-copy-enable.png', '@/assets/images/icons/icon-saved-enable.png'],
  paths: {
    '@/components/TxBadge/TxBadge.vue': '@/components/TxBadge/TxBadge.vue',
    '@/components/MewButton/MewButton.vue': '@/components/MewButton/MewButton.vue',
    '@/components/WarningSheet/WarningSheet.vue': '@/components/WarningSheet/WarningSheet.vue',
    '@/components/Toast/Toast.vue': '@/components/Toast/Toast.vue',
    '@/components/Blockie/Blockie.vue': '@/components/Blockie/Blockie.vue',
    '@/assets/images/icons/icon-edit.png': '@/assets/images/icons/icon-edit.png',
     '@/helpers/blockies.js': '@/helpers/blockies.js',
     '@/assets/images/icons/icon-copy-enable.png' : '@/assets/images/icons/icon-copy-enable.png', 
     '@/assets/images/icons/icon-saved-enable.png': '@/assets/images/icons/icon-saved-enable.png'
 


  }
};

export default config;
