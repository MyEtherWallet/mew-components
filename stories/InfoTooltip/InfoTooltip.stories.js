import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import InfoTooltip from '@/components/InfoTooltip/InfoTooltip.vue';
import InfoTooltipDoc from './InfoTooltipDoc.mdx';

export default {
  title: 'InfoTooltip',
  parameters: {
    component: InfoTooltip,
    docs: {
      page: InfoTooltipDoc
    }
  },
  decorators: [withKnobs]
};

export const infoTooltip = () => ({
  components: { 'info-tooltip': InfoTooltip },
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
    <info-tooltip
      :text="text"
    />
  </div>`
});
