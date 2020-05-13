import {
  withKnobs,
  text,
  boolean,
  optionsKnob,
  files
} from '@storybook/addon-knobs';
import MewButton from '@/components/MewButton/MewButton.vue';
import MewButtonDoc from './MewButtonDoc.mdx';

export default {
  title: 'MewButton',
  parameters: {
    component: MewButton,
    docs: {
      page: MewButtonDoc
    }
  },
  decorators: [withKnobs]
};

const iconAlignOptions = {
  left: 'left',
  right: 'right',
  none: 'none'
};

const colorThemeOptions = {
  primary: 'primary',
  basic: 'basic',
  error: 'error',
  secondary: 'secondary',
  white: 'white'
};

const btnStyleOptions = {
  outline: 'outline',
  background: 'background',
  transparent: 'transparent'
};

const optionsObj = {
  display: 'inline-radio'
};

export const MEWButton = () => ({
  components: { 'mew-button': MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', true)
    },
    disabled: {
      default: boolean('disabled', false)
    },
    btnLink: {
      default: text('btn-link', '')
    },
    title: {
      default: text('title', 'MEW Button')
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    btnStyle: {
      default: optionsKnob(
        'btn-style',
        btnStyleOptions,
        'background',
        optionsObj
      )
    },
    icon: {
      default: files('icon', '.png, .svg', '')
    },
    iconAlign: {
      default: optionsKnob('icon-align', iconAlignOptions, 'none', optionsObj)
    },
    showsActiveState: {
      default: boolean('shows-active-state', false)
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
    <mew-button
      title="Default MEW Button"
    />
  </div>`
});

