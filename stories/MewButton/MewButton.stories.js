import {
  withKnobs,
  text,
  boolean,
  optionsKnob
} from '@storybook/addon-knobs';
import MewButton from '@/components/MewButton/MewButton.vue';
import MewButtonDoc from './MewButton.mdx';

export default {
  title: 'MewButton',
  decorators: [withKnobs],
  parameters: {
    component: MewButton,
    docs: {
      page: MewButtonDoc,
      inlineStories: true
    }
  },
};
const colorThemeOptions = {
  secondary: 'secondary',
  primary: 'primary',
  basic: 'basic',
  error: 'error'
};

const btnSizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
};

const btnStyleOptions = {
  background: 'background',
  outline: 'outline',
  light: 'light',
  transparent: 'transparent'
};

// used to display options on knob
const optionsObj = {
  display: 'inline-radio'
};

export const MEWButton = () => ({
  components: { MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', false)
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
    btnStyle: {
      default: optionsKnob(
        'btn-style',
        btnStyleOptions,
        'background',
        optionsObj
      )
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    buttonSize: {
      default: optionsKnob('btn-size', btnSizeOptions, btnSizeOptions.large , optionsObj)
    },
    loading: {
      default: boolean('loading', false)
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
  <div class="bgStorybook pa-15">
    <mew-button
      :loading="loading"
      :btn-link="btnLink"
      :disabled="disabled"
      :btn-style="btnStyle"
      :title="title"
      :color-theme="colorTheme"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    />
  </div>`
});


export const BackgroundButton = () => ({
  components: { 'mew-button': MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', false)
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
    buttonSize: {
      default: optionsKnob('btn-size', btnSizeOptions, btnSizeOptions.large , optionsObj)
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
  <div class="bgStorybook pa-15">
    <mew-button
      :btn-link="btnLink"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="background"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    />
  </div>`
});


export const OutlineButton = () => ({
  components: { 'mew-button': MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', false)
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
    buttonSize: {
      default: optionsKnob('btn-size', btnSizeOptions, btnSizeOptions.large , optionsObj)
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
  <div class="bgStorybook pa-15">
    <mew-button
      :btn-link="btnLink"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="outline"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    />
  </div>`
});


export const TransparentButton = () => ({
  components: { 'mew-button': MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', false)
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
    buttonSize: {
      default: optionsKnob('btn-size', btnSizeOptions, btnSizeOptions.large , optionsObj)
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
  <div class="bgStorybook pa-15">
    <mew-button
      :btn-link="btnLink"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="transparent"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    />
  </div>`
});


export const SlotButton = () => ({
  components: { 'mew-button': MewButton },
  props: {
    hasFullWidth: {
      default: boolean('has-full-width', false)
    },
    disabled: {
      default: boolean('disabled', false)
    },
    btnLink: {
      default: text('btn-link', '')
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    buttonSize: {
      default: optionsKnob('btn-size', btnSizeOptions, btnSizeOptions.large , optionsObj)
    }, 
    btnStyle: {
      default: optionsKnob(
        'btn-style',
        btnStyleOptions,
        'background',
        optionsObj
      )
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
  <div class="bgStorybook pa-15">
    <mew-button
      :btn-link="btnLink"
      :disabled="disabled"
      :color-theme="colorTheme"
      :btn-style="btnStyle"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    >
      <span>Hello</span> 
    </mew-button>
  </div>`
});

