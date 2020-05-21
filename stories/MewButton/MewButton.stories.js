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

const btnButtonOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
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
    buttonSize: {
      default: optionsKnob('button-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
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
      :btn-link="btnLink"
      :icon-align="iconAlign"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      :btn-style="btnStyle"
      :icon="icon"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
    />
  </div>`
});

