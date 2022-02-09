import {
  withKnobs,
  object,
  boolean
} from '@storybook/addon-knobs';
import MewProgressBar from '@/components/MewProgressBar/MewProgressBar.vue';
import MewProgressBarDoc from './MewProgressBar.mdx';

export default {
  title: 'MewProgressBar',
  parameters: {
    component: MewProgressBar,
    docs: {
      page: MewProgressBarDoc
    } 
  },
  decorators: [withKnobs]
};

const data =  [
    { color: 'titlePrimary', percentage: '20', tooltip: 'Aave: 5.3'},
    { color: 'warning darken-1', percentage: '80', tooltip: 'ETH: 3.2'}
  ]

export const MEWProgressBar = () => ({
  components: { MewProgressBar },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    data: {
      default: object('data', data)
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
    <mew-progress-bar :data="data" />
  </div>`
});
