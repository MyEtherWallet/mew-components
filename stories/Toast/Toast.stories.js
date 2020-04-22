import {
  withKnobs,
  boolean,
  text,
  optionsKnob
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

export const MEWToast = () => ({
  components: { 'toast': Toast },
  props: {
    showToast: {
      default: boolean('show-toast', false)
    },
    duration: {
      default: text('duration', '30000')
    },
    toastType: {
      default: optionsKnob('duration', toastTypeOptions, 'success')
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
      :toastType="toastTYpe"
      :duration="duration"
      :showToast="showToast"
    />
  </div>`
});
