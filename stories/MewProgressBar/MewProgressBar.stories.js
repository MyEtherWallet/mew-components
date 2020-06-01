import {
  withKnobs,
  object,
  boolean
} from '@storybook/addon-knobs';
import MewProgressBar from '@/components/MewProgressBar/MewProgressBar.vue';

export default {
  title: 'MewProgressBar',
  parameters: {
    component: MewProgressBar
  },
  decorators: [withKnobs]
};

const balanceObj = {
  send: 0.5,
  total: 2.00,
  fee: 0.01
}

export const mewProgressBar = () => ({
  components: { 'mew-progress-bar': MewProgressBar },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    balanceObj: {
      default: object('balance-obj', balanceObj)
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
    <mew-progress-bar :balance-obj="balanceObj" />
  </div>`
});
