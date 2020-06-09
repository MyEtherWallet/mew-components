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
  total: 20.32,
  data: [
    { title: 'sendBal', color: 'titlePrimary', amount: 5.3, tooltip: 'Send: 5.3'},
    { title: 'feeBal', color: 'warning darken-1', amount: 3.2, tooltip: 'Fee: 3.2'}
  ]
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
