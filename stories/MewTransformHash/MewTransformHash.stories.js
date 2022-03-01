import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewTransformHash from '@/components/MewTransformHash/MewTransformHash.vue';
import MewTransformHashDoc from './MewTransformHashDoc.mdx';

export default {
  title: 'MewTransformHash',
  parameters: {
    component: MewTransformHash,
    docs: {
      page: MewTransformHashDoc
    }
  },
  decorators: [withKnobs]
};

export const MEWTransformHash = () => ({
  components: { MewTransformHash },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    justifyStart: {
      default: boolean('justify-start', false)
    },
    hash: {
      default: text('hash', '9f9547db4cc39e14e2db5c35fb9b691c0e7849af4cc2fb131fbb8ea2051dabc6')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div class="d-flex align-center text-center mt-10">
      <br />
      <mew-transform-hash
        :justify-start="justifyStart"
        :hash="hash"
      />
  </div>`
});
