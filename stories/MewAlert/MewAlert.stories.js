import {
  withKnobs,
  optionsKnob,
  boolean,
  text
  // object,
  // array,
} from '@storybook/addon-knobs';
import MewAlert from '@/components/MewAlert/MewAlert.vue';

export default {
  title: 'MewAlert',
  parameters: {
    component: MewAlert,
  },
  decorators: [withKnobs],
};

// used to display options on knob
const optionsObj = {
  display: 'inline-radio'
};

const themeOptions = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info'
};

export const MEWAlert = () => ({
  components: { MewAlert },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    theme: {
      default: optionsKnob('theme', themeOptions, 'success', optionsObj)
    },
    hasWhiteBackground: {
      default: boolean('has-white-background', false)
    },
    hideIcons: {
      default: boolean('hide-icons', false)
    },
    title: {
      default: text('title', '')
    },
    description: {
      default: text('description', '')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
    <div>
    <br />
    <mew-alert :has-white-background="hasWhiteBackground" :hide-icons="hideIcons" :title="title" :description="description" :theme="theme">Hello</mew-alert>
  </div>`,
  methods: {
  },
});
