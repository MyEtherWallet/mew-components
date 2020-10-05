import {
  withKnobs,
  text
} from '@storybook/addon-knobs';
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';
import MewBlockieDoc from './MewBlockie.mdx';

export default {
  title: 'MewBlockie',
  parameters: {
    component: MewBlockie,
    docs: {
      page: MewBlockieDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

export const mewBlockie = () => ({
  components: { 'mew-blockie': MewBlockie },
  props: {
    address: {
      default: text('address', '')
    },
    width: {
      default: text('width', ' 64px')
    },
    height: {
      default: text('height', ' 64px')
    }
  },
  template: `
    <div>
    <br />
    <mew-blockie :address="address" :width="width" :height="height"
    />
  </div>`
});
