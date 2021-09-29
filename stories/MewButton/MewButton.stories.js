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
  royal: 'royal',
  primary: 'primary',
  grey: 'grey',
  error: 'error'
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
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    buttonSize: {
      default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
    },
    showsActiveState: {
      default: boolean('shows-active-state', false)
    },
    hasOutline: {
      default: boolean('has-outline', false)
    },
    isSubtle: {
      default: boolean('is-subtle', false)
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
    <div>
    <br />
    <mew-button
      :is-subtle="isSubtle"
      :has-outline="hasOutline"
      :loading="loading"
      :btn-link="btnLink"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      :has-full-width="hasFullWidth"
      :btn-size="buttonSize"
    />
  </div>`
});


// export const BackgroundButton = () => ({
//   components: { 'mew-button': MewButton },
//   props: {
//     hasFullWidth: {
//       default: boolean('has-full-width', false)
//     },
//     disabled: {
//       default: boolean('disabled', false)
//     },
//     btnLink: {
//       default: text('btn-link', '')
//     },
//     title: {
//       default: text('title', 'MEW Button')
//     },
//     colorTheme: {
//       default: optionsKnob(
//         'color-theme',
//         colorThemeOptions,
//         'primary',
//         optionsObj
//       )
//     },
//     buttonSize: {
//       default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
//     },
//     showsActiveState: {
//       default: boolean('shows-active-state', false)
//     },
//     enableDarkMode: {
//       default: boolean('dark mode ?', false)
//     }
//   },
//   watch: {
//     enableDarkMode(newVal) {
//       this.$vuetify.theme.dark = newVal === true ? true : false;
//     }
//   },
//   template: `
//     <div>
//     <br />
//     <mew-button
//       :btn-link="btnLink"
//       :disabled="disabled"
//       :title="title"
//       :color-theme="colorTheme"
//       btn-style="background"
//       :has-full-width="hasFullWidth"
//       :btn-size="buttonSize"
//     />
//   </div>`
// });


// export const OutlineButton = () => ({
//   components: { 'mew-button': MewButton },
//   props: {
//     hasFullWidth: {
//       default: boolean('has-full-width', false)
//     },
//     disabled: {
//       default: boolean('disabled', false)
//     },
//     btnLink: {
//       default: text('btn-link', '')
//     },
//     title: {
//       default: text('title', 'MEW Button')
//     },
//     colorTheme: {
//       default: optionsKnob(
//         'color-theme',
//         colorThemeOptions,
//         'primary',
//         optionsObj
//       )
//     },
//     buttonSize: {
//       default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
//     },
//     enableDarkMode: {
//       default: boolean('dark mode ?', false)
//     }
//   },
//   watch: {
//     enableDarkMode(newVal) {
//       this.$vuetify.theme.dark = newVal === true ? true : false;
//     }
//   },
//   template: `
//     <div>
//     <br />
//     <mew-button
//       :btn-link="btnLink"
//       :disabled="disabled"
//       :title="title"
//       :color-theme="colorTheme"
//       btn-style="outline"
//       :has-full-width="hasFullWidth"
//       :shows-active-state="showsActiveState"
//       :btn-size="buttonSize"
//     />
//   </div>`
// });


// export const TransparentButton = () => ({
//   components: { 'mew-button': MewButton },
//   props: {
//     hasFullWidth: {
//       default: boolean('has-full-width', false)
//     },
//     disabled: {
//       default: boolean('disabled', false)
//     },
//     btnLink: {
//       default: text('btn-link', '')
//     },
//     title: {
//       default: text('title', 'MEW Button')
//     },
//     colorTheme: {
//       default: optionsKnob(
//         'color-theme',
//         colorThemeOptions,
//         'primary',
//         optionsObj
//       )
//     },
//     buttonSize: {
//       default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
//     },
//     showsActiveState: {
//       default: boolean('shows-active-state', false)
//     },
//     enableDarkMode: {
//       default: boolean('dark mode ?', false)
//     }
//   },
//   watch: {
//     enableDarkMode(newVal) {
//       this.$vuetify.theme.dark = newVal === true ? true : false;
//     }
//   },
//   template: `
//     <div>
//     <br />
//     <mew-button
//       :btn-link="btnLink"
//       :disabled="disabled"
//       :title="title"
//       :color-theme="colorTheme"
//       btn-style="transparent"
//       :has-full-width="hasFullWidth"
//       :shows-active-state="showsActiveState"
//       :btn-size="buttonSize"
//     />
//   </div>`
// });


// export const IconButton = () => ({
//   components: { 'mew-button': MewButton },
//   props: {
//     hasFullWidth: {
//       default: boolean('has-full-width', false)
//     },
//     disabled: {
//       default: boolean('disabled', false)
//     },
//     btnLink: {
//       default: text('btn-link', '')
//     },
//     colorTheme: {
//       default: optionsKnob(
//         'color-theme',
//         colorThemeOptions,
//         'primary',
//         optionsObj
//       )
//     },
//     icon: {
//       default: text('icon', 'quickHelp')
//     },
//     iconAlign: {
//       default: optionsKnob('icon-align', iconAlignOptions, iconAlignOptions.left , optionsObj)
//     },
//     iconType: {
//       default: optionsKnob(
//         'icon-type',
//         iconTypes,
//         iconTypes.mew,
//         optionsObj
//       )
//     },
//     buttonSize: {
//       default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
//     },
//     showsActiveState: {
//       default: boolean('shows-active-state', false)
//     },
//     enableDarkMode: {
//       default: boolean('dark mode ?', false)
//     }
//   },
//   watch: {
//     enableDarkMode(newVal) {
//       this.$vuetify.theme.dark = newVal === true ? true : false;
//     }
//   },
//   template: `
//     <div>
//     <br />
//     <mew-button
//       :btn-link="btnLink"
//       icon-align="left"
//       :disabled="disabled"
//       title=""
//       :color-theme="colorTheme"
//       btn-style="transparent"
//       icon="quickHelp"
//       icon-type="mew"
//       :has-full-width="hasFullWidth"
//       :shows-active-state="showsActiveState"
//       :btn-size="buttonSize"
//     />
//   </div>`
// });



// export const IconTitleButton = () => ({
//   components: { 'mew-button': MewButton },
//   props: {
//     hasFullWidth: {
//       default: boolean('has-full-width', false)
//     },
//     disabled: {
//       default: boolean('disabled', false)
//     },
//     btnLink: {
//       default: text('btn-link', '')
//     },
//     title: {
//       default: text('title', 'MEW Button')
//     },
//     colorTheme: {
//       default: optionsKnob(
//         'color-theme',
//         colorThemeOptions,
//         'primary',
//         optionsObj
//       )
//     },
//     iconName: {
//       default: text('icon', 'quickHelp')
//     },
//     iconTitleAlign: {
//       default: optionsKnob('icon-align', iconAlignOptions, iconAlignOptions.left , optionsObj)
//     },
//     iconTitleType: {
//       default: optionsKnob(
//         'icon-type',
//         iconTypes,
//         iconTypes.mew,
//         optionsObj
//       )
//     },
//     buttonSize: {
//       default: optionsKnob('btn-size', btnButtonOptions, btnButtonOptions.large , optionsObj)
//     },
//     showsActiveState: {
//       default: boolean('shows-active-state', false)
//     },
//     enableDarkMode: {
//       default: boolean('dark mode ?', false)
//     }
//   },
//   watch: {
//     enableDarkMode(newVal) {
//       this.$vuetify.theme.dark = newVal === true ? true : false;
//     }
//   },
//   template: `
//     <div>
//     <br />
//     <mew-button
//       :btn-link="btnLink"
//       :icon-align="iconTitleAlign"
//       :disabled="disabled"
//       :title="title"
//       :color-theme="colorTheme"
//       btn-style="transparent"
//       :icon="iconName"
//       :icon-type="iconTitleType"
//       :has-full-width="hasFullWidth"
//       :shows-active-state="showsActiveState"
//       :btn-size="buttonSize"
//     />
//   </div>`
// });