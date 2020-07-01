import {
  withKnobs,
  text,
  boolean,
  optionsKnob
} from '@storybook/addon-knobs';
import MewButton from '@/components/MewButton/MewButton.vue';
import MewButtonDoc from './MewButtonDoc.mdx';

export default {
  title: 'MewButton',
  component: MewButton,
  parameters: {
    component: MewButton,
    docs: {
      page: MewButtonDoc,
      inlineStories: true
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

const iconTypes = {
  mdi: 'mdi',
  mew: 'mew'
}

export const MEWButton = () => ({
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
    btnStyle: {
      default: optionsKnob(
        'btn-style',
        btnStyleOptions,
        'background',
        optionsObj
      )
    },
    iconType: {
      default: optionsKnob(
        'icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    icon: {
      default: text('icon', '')
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
      :icon-type="iconType"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
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
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="background"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
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
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="outline"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
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
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="transparent"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
    />
  </div>`
});


export const IconButton = () => ({
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
    icon: {
      default: text('icon', 'quickHelp')
    },
    iconAlign: {
      default: optionsKnob('icon-align', iconAlignOptions, iconAlignOptions.left , optionsObj)
    },
    iconType: {
      default: optionsKnob(
        'icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
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
      icon-align="left"
      :disabled="disabled"
      title=""
      :color-theme="colorTheme"
      btn-style="transparent"
      icon="quickHelp"
      icon-type="mew"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
    />
  </div>`
});



export const IconTitleButton = () => ({
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
      default: text('title', 'Mew Button')
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    iconName: {
      default: text('icon', 'quickHelp')
    },
    iconTitleAlign: {
      default: optionsKnob('icon-align', iconAlignOptions, iconAlignOptions.left , optionsObj)
    },
    iconTitleType: {
      default: optionsKnob(
        'icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
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
      :icon-align="iconTitleAlign"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      btn-style="transparent"
      :icon="iconName"
      :icon-type="iconTitleType"
      :has-full-width="hasFullWidth"
      :shows-active-state="showsActiveState"
      :button-size="buttonSize"
    />
  </div>`
});