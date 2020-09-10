import {
  withKnobs,
  boolean,
  text,
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
    isSwitchOn: {
      default: boolean('switch position', false)
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
      :switch-status="isSwitchOn"
    />
  </div>`
});
