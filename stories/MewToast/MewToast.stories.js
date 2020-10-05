import {
  withKnobs,
  boolean,
  text,
  optionsKnob,
  number,
  object
} from '@storybook/addon-knobs';
import MewToast from '@/components/MewToast/MewToast.vue';
import MewButton from '@/components/MewButton/MewButton.vue';

export default {
  title: 'MewToast',
  parameters: {
    component: MewToast
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

const linkObj = {
  title: '',
  url: ''
}

export const mewToast = () => ({
  components: { MewToast, MewButton },
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
    linkObj: {
      default: object('link-obj', linkObj)
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
    <mew-button title="Show Toast" @click.native=onBtnClick() />
    <mew-toast
      ref="toast" 
      @onClick="onClick"
      :can-close="canClose"
      :link-obj="linkObj"
      :text="text"
      :toastType="toastType"
      :duration="duration"
      :persistent="persistent"
    />
  </div>`,
  methods: {
    onBtnClick() {
      this.$refs.toast.showToast();
    },
    onClick() {
      // eslint-disable-next-line no-console
      console.log('Button is clicked')
    }
  }
});
