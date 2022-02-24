import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import MewIconButton from '@/components/MewIconButton/MewIconButton.vue';
import MewIconButtonDoc from './MewIconButton.mdx';

export default {
  title: 'MewIconButton',
  decorators: [withKnobs],
  parameters: {
    component: MewIconButton,
    docs: {
      page: MewIconButtonDoc,
      inlineStories: true,
    },
  },
};
const colorThemeOptions = {
  secondary: 'secondary',
  primary: 'primary',
  basic: 'basic',
  error: 'error',
};

const btnSizeOptions = {
  small: 'small',
  medium: 'medium',
};

const mdiIconSizeOptions = {
  xsmall: 'x-small',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'x-large',
};

const btnStyleOptions = {
  background: 'background',
  outline: 'outline',
  light: 'light',
  transparent: 'transparent',
};

// used to display options on knob
const optionsObj = {
  display: 'inline-radio',
};

export const MEWIconButton = () => ({
  components: { MewIconButton },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    btnLink: {
      default: text('btn-link', ''),
    },
    mdiIcon: {
      default: text('mdi-icon', 'chevron-right'),
    },
    mdiIconSize: {
      default: optionsKnob(
        'mdi-icon-size',
        mdiIconSizeOptions,
        mdiIconSizeOptions.medium,
        optionsObj
      ),
    },
    btnStyle: {
      default: optionsKnob(
        'btn-style',
        btnStyleOptions,
        'background',
        optionsObj
      ),
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      ),
    },
    btnSize: {
      default: optionsKnob(
        'btn-size',
        btnSizeOptions,
        btnSizeOptions.medium,
        optionsObj
      ),
    },
    loading: {
      default: boolean('loading', false),
    },
    rounded: {
      default: boolean('rounded', false),
    },
  },
  watch: {},
  template: `
    <div>
    <br />
    <mew-icon-button
      :mdi-icon="mdiIcon"
      :mdi-icon-size="mdiIconSize"
      :loading="loading"
      :btn-link="btnLink"
      :disabled="disabled"
      :rounded="rounded"
      :btn-style="btnStyle"
      :color-theme="colorTheme"
      :btn-size="btnSize"
    />
  </div>`,
});
