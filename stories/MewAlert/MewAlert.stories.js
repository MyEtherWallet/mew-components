import {
  withKnobs,
  optionsKnob,
  boolean,
  text,
  object
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

// alert theme options
const themeOptions = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info'
};

// link object (goes at the end of description)
const linkObject = {
  text: 'Add more funds',
  url: 'https://ccswap.myetherwallet.com/#/'
}

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
      default: text('title', 'Hello')
    },
    description: {
      default: text('description', 'This is an alert. When the messge goes to two lines, center align the body.')
    },
    linkObject: {
      default: object('link-object', linkObject)
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
    <mew-alert :link-object="linkObject" :has-white-background="hasWhiteBackground" :hide-icons="hideIcons" :title="title" :description="description" :theme="theme" />
  </div>`,
  methods: {
  },
});
