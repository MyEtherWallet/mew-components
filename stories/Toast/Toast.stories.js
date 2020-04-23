import {
  withKnobs,
  boolean,
  text,
  optionsKnob,
  number
} from '@storybook/addon-knobs';
import Toast from '@/components/Toast/Toast.vue';

export default {
  title: 'Toast',
  parameters: {
    component: Toast
  },
  decorators: [withKnobs]
};

const toastTypeOptions = {
  success: 'success',
  warning: 'warning',
  error: 'error'
}

const optionsObj = {
  display: 'inline-radio'
};

export const toast = () => ({
  components: { 'toast': Toast },
  props: {
    showToast: {
      default: boolean('show-toast', false)
    },
    duration: {
      default: number('duration', 1000)
    },
    toastType: {
      default: optionsKnob('toast-type', toastTypeOptions, 'success', optionsObj)
    },
    text: {
      default: text('text', 'I am a toast!')
    },
    url: {
      default: text('url', '')
    },
    linkText: {
      default: text('link-text', '')
    },
    persistent: {
      default: boolean('persistent', false)
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
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
    <toast
      :link="link"
      :link-text="linkText"
      :text="text"
      :toastType="toastType"
      :duration="duration"
      :showToast="showToast"
      :persistent="persistent"
    />
  </div>`
});
