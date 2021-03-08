import {
  withKnobs,
  boolean,
  text,
  files,
  optionsKnob
} from '@storybook/addon-knobs';
import MewModule from '@/components/MewModule/MewModule.vue';
import MewModuleDoc from './MewModule.mdx';

export default {
  title: 'MewModule',
  parameters: {
    component: MewModule,
    docs: {
      page: MewModuleDoc
    } 
  },
  decorators: [withKnobs]
};

const iconAlignOptions = {
  left: 'left',
  right: 'right',
  none: 'none'
};

const optionsObj = {
  display: 'inline-radio'
};

export const MEWModule = () => ({
  components: { 'mew-module': MewModule },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    colorType: {
      default: text('color-type', 'mewBg')
    },
    title: {
      default: text('title', 'Title')
    },
    titleSize: {
      default: text('title-size', 'mew-heading-1')
    },
    subtitle: {
      default: text('subtitle', 'subtitle')
    },
    caption: {
      default: text('caption', 'caption')
    },
    icon: {
      default: files('icon', '.png, .svg', '')
    },
    iconAlign: {
      default: optionsKnob('icon-align', iconAlignOptions, 'none', optionsObj)
    },
    hasIndicator: {
      default: boolean('has-indicator', false)
    },
    hasElevation: {
      default: boolean('has-elevation', true)
    },
    hasFullHeight: {
      default: boolean('has-full-height', false)
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
    <mew-module
      :has-full-height="hasFullHeight"
      :color-type="colorType"
      :title="title"
      :title-size="titleSize"
      :subtitle="subtitle"
      :caption="caption"
      :has-indicator="hasIndicator"
      :has-elevation="hasElevation"
      :icon="icon"
      :icon-align="iconAlign"
    />
  </div>`
});
