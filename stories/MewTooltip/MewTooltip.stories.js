import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewTooltip from '@/components/MewTooltip/MewTooltip.vue';
import MewTooltipDoc from './MewTooltipDoc.mdx';

export default {
  title: 'MewTooltip',
  parameters: {
    component: MewTooltip,
    docs: {
      page: MewTooltipDoc
    }
  },
  decorators: [withKnobs]
};

export const mewTooltip = () => ({
  components: { 'mew-tooltip': MewTooltip },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    text: {
      default: text('text', 'I am a tooltip')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div class="text-center mt-10">
    <br />
    <mew-tooltip
      :text="text"
    />
  </div>`
});
