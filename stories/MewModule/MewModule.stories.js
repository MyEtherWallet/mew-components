import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewModule from '@/components/MewModule/MewModule.vue';

export default {
  title: 'MewModule',
  parameters: {
    component: MewModule
  },
  decorators: [withKnobs]
};

export const MEWModule = () => ({
  components: { 'mew-module': MewModule },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    colorType: {
      default: text('color-type', 'white')
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
      :color-type="colorType"
      :title="title"
      :title-size="titleSize"
      :subtitle="subtitle"
      :caption="caption"
    />
  </div>`
});
