import {
  withKnobs,
  boolean,
  text,
  object,
  optionsKnob
} from '@storybook/addon-knobs';
import MewPopup from '@/components/MewPopup/MewPopup.vue';
import MewPopupDoc from './MewPopup.mdx';

export default {
  title: 'MewPopup',
  parameters: {
    component: MewPopup,
    docs: {
      page: MewPopupDoc
    }
  },
  decorators: [withKnobs]
};

const buttonLeftObj = {
  title: 'Cancel',
  colorTheme: 'basic'
}

const buttonRightObj = {
  title: 'Log out',
  colorTheme: 'error'
}

const popupTypeOptions = {
  error: 'error',
  confirm: 'confirm'
}

export const MEWPopup = () => ({
  components: { MewPopup },
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
    popupType: {
      default: optionsKnob('popup-type', popupTypeOptions, 'confirm', { display: 'inline-radio' })
    },
    buttonLeft: {
      default: object('button-left', buttonLeftObj)
    },
    buttonRight: {
      default: object('button-right', buttonRightObj)
    },
    error: {
      default: object('error', {title: '', msg: ''})
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
      :error="error"
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
