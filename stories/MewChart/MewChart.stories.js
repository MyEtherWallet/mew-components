import {
  withKnobs,
  boolean,
  object, 
  text
} from '@storybook/addon-knobs';
import MewChart from '@/components/MewChart/MewChart.vue';
import MewChartDoc from './MewChart.mdx';

export default {
  title: 'MewChart',
  parameters: {
    component: MewChart,
    docs: {
      page: MewChartDoc,
      inlineStories: true
    }
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
    },
    color: {
      default: text('color', '#05c0a5')
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
    <mew-chart :data="data" :color="color"/>
  </div>`
});
