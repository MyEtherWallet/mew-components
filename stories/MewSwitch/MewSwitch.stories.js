import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewSwitch from '@/components/MewSwitch/MewSwitch.vue';

export default {
  title: 'MewSwitch',
  parameters: {
    component: MewSwitch
  },
  decorators: [withKnobs]
};

export const MEWSwitch = () => ({
  components: { MewSwitch },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    label: {
      default: text('label', 'Label')
    },
    value: {
      default: boolean('is switch on?', false)
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
    <mew-switch
      :label="label"
      :value="value"
    />
  </div>`
});
