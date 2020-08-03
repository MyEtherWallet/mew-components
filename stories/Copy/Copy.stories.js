import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import Copy from '@/components/Copy/Copy.vue';

export default {
  title: 'Copy',
  parameters: {
    component: Copy
  },
  decorators: [withKnobs]
};

export const copy = () => ({
  components: { 'copy': Copy },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    tooltip: {
      default: text('tooltip', 'Copy')
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
    <copy
      :tooltip="tooltip"
    />
  </div>`
});
