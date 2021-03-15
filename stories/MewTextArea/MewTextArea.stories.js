import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewTextArea from '@/components/MewTextArea/MewTextArea.vue';

export default {
  title: 'MewTextArea',
  parameters: {
    component: MewTextArea
  },
  decorators: [withKnobs]
};

export const MEWTextArea = () => ({
  components: { MewTextArea },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    label: {
      default: text('label', '')
    },
    value: {
      default: text('value', '')
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
    <mew-text-area :label="label" :value="value" />
  </div>`,
  methods: {
    onTab(newVal) {
      // eslint-disable-next-line no-console
      console.log('on tab:', newVal)
    }
  }
});
