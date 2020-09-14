import {
  withKnobs,
  boolean,
  text,
  button
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
  components: { 'mew-switch': MewSwitch },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    label: {
      default: text('label', 'Label')
    },
    value: {
      default: boolean('is switch on?', false)
    },
    switchToggle: {
      default: button('Toggle switch', () => {console.log('clicked'); return false})
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
      :switch-toggle="switchToggle"
    />
  </div>`
});
