import {
  withKnobs,
  boolean,
  text,
  optionsKnob,
  number
} from '@storybook/addon-knobs';
import Toast from '@/components/Toast/Toast.vue';
import MewButton from '@/components/MewButton/MewButton.vue';

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
  error: 'error',
  info: 'info'
}

const optionsObj = {
  display: 'inline-radio'
};

export const toast = () => ({
  components: { 'toast': Toast, 'mew-button': MewButton },
  props: {
    duration: {
      default: number('duration', 1000)
    },
    toastType: {
      default: optionsKnob('toast-type', toastTypeOptions, 'success', optionsObj)
    },
    text: {
      default: text('text', 'I am a toast!')
    },
    link: {
      default: text('link', '')
    },
    linkText: {
      default: text('link-text', '')
    },
    persistent: {
      default: boolean('persistent', false)
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    canClose: {
      default: boolean('can-close', false)
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
    <mew-button title="Show Toast" @click.native=onClick() />
    <toast
      ref="toast" 
      :can-close="canClose"
      :link="link"
      :link-text="linkText"
      :text="text"
      :toastType="toastType"
      :duration="duration"
      :persistent="persistent"
    />
  </div>`,
  methods: {
    onClick() {
      this.$refs.toast.showToast();
    }
  }
});
