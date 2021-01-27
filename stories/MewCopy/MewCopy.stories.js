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
  components: { MewCopy },
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
    isSmall: {
      default: boolean('is-small', false)
    },
    copyId: {
      default: text('copy-ref', 'mew-id')
    },
    copyValue: {
      default: text('copyValue', 'Copied value')
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
      :is-small="isSmall"
      :is-ref="isRef"
      :copy-ref="copyId"
      :tooltip="tooltip"
      :copy-value="copyValue"
    />
    <br />
    <span id="mew-id">Copy me!</span>
  </div>`
});
