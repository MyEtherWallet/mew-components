import {
  withKnobs,
  boolean,
  text,
  object,
  optionsKnob
} from '@storybook/addon-knobs';
import MewPopup from '@/components/MewPopup/MewPopup.vue';

export default {
  title: 'MewPopup',
  parameters: {
    component: MewPopup
  },
  decorators: [withKnobs]
};

const buttonLeftObj = {
  name: 'Cancel',
  colorTheme: 'basic'
}

const buttonRightObj = {
  name: 'Log out',
  colorTheme: 'error'
}

const popupTypeOptions = {
  error: 'error',
  confirm: 'confirm'
}

export const MEWPopup = () => ({
  components: { 'mew-popup': MewPopup },
  data() {
    return {
      isPopupOpen: true
    }
  },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    isOpen: {
      default: boolean('is-open', true)
    },
    title: {
      default: text('title', 'Are you sure you want to log out?')
    },
    desc: {
      default: text('desc', '')
    },
    buttonType: {
      default: text('button-type', 'error')
    },
    popupType: {
      default: optionsKnob('popup-type', popupTypeOptions, 'confirm', { display: 'inline-radio' })
    },
    buttonLeft: {
      default: object('button-left', buttonLeftObj)
    },
    buttonRight: {
      default: object('button-right', buttonRightObj)
    },
    errorMsg: {
      default: text('error-msg', '')
    },
    errorHeader: {
      default: text('error-header', 'Error Message')
    },
    copyMsg: {
      default: text('copy-msg', 'Copy the message')
    },
    successToast: {
      default: text('success-toast', 'Success!')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
    isOpen(newVal) {
      this.isPopupOpen = newVal;
    }
  },
  template: `
    <div>
    <br />
    <mew-popup
      :is-open="isPopupOpen"
      :title="title"
      :desc="desc"
      :button-right="buttonRight"
      :button-left="buttonLeft"
      :popup-type="popupType"
      :error-msg="errorMsg"
      :error-header="errorHeader"
      :copy-msg="copyMsg"
      @onClick="onClick"
      :successToast="successToast"
    />
  </div>`,
  methods: {
    onClick(btn) {
      this.isPopupOpen = false;
      // eslint-disable-next-line no-console
      console.log('Clicked:', btn)
    }
  }
});
