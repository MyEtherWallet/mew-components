import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';
import MewStepper from '@/components/MewStepper/MewStepper.vue';

export default {
  title: 'MewStepper',
  parameters: {
    component: MewStepper
  },
  decorators: [withKnobs]
};

export const MEWStepper = () => ({
  components: { 'mew-stepper': MewStepper },
  props: {
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
    <mew-stepper
    />
  </div>`
});
