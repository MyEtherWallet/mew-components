import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewCopy from '@/components/MewCopy/MewCopy.vue';
import MewCopyDoc from './MewCopy.mdx';

export default {
  title: 'MewCopy',
  parameters: {
    component: MewCopy,
    docs: {
      page: MewCopyDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

export const MEWCopy = () => ({
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
    isSmall: {
      default: boolean('is-small', false)
    },
    copyValue: {
      default: text('copyValue', 'Copied value')
    },
    className: {
      default: text('className', 'basic--text')
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
      :tooltip="tooltip"
      :copy-value="copyValue"
      :class-name="className"
    />
    <br />
    <span id="mew-id">Copy me!</span>
  </div>`
});
