import {
  withKnobs,
  boolean,
  object
} from '@storybook/addon-knobs';
import MewChart from '@/components/MewChart/MewChart.vue';

export default {
  title: 'MewChart',
  parameters: {
    component: MewChart
  },
  decorators: [withKnobs]
};

const exampleData = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  y: [40, 39, 10, 40, 39, 80, 40]
}

export const MEWChart = () => ({
  components: { MewChart },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    data: {
      default: object('data', exampleData)
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
    <mew-chart :data="data" />
  </div>`
});
