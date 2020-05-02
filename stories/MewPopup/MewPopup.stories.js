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
      default: optionsKnob('popup-type', popupTypeOptions, 'error', { display: 'inline-radio' })
    },
    buttonLeft: {
      default: object('button-left', buttonLeftObj)
    },
    buttonRight: {
      default: object('button-right', buttonRightObj)
    },
    errorMsg: {
      default: text('error-msg', '')
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
    <mew-popup
      :is-open="isOpen"
      :title="title"
      :desc="desc"
      :button-right="buttonRight"
      :button-left="buttonLeft"
      :popup-type="popupType"
      :error-msg="errorMsg"
    />
  </div>`
});
