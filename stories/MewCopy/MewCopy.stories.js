import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewCopy from '@/components/MewCopy/MewCopy.vue';

export default {
  title: 'MewCopy',
  parameters: {
    component: MewCopy
  },
  decorators: [withKnobs]
};

export const mewCopy = () => ({
  data() {
    return {
      inputValue: 'Copied value'
    }
  },
  components: { 'mew-copy': MewCopy },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    tooltip: {
      default: text('tooltip', 'Copy')
    },
    isRef: {
      default: boolean('is-ref', false)
    },
    copyId: {
      default: text('copy-id', 'mew-id')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-copy
      :is-ref="isRef"
      :copy-id="copyId"
      :tooltip="tooltip"
    />
    <br />
    <span id="mew-id">Copy me!</span>
  </div>`
});
