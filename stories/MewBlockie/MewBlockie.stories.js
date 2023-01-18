import {
  withKnobs,
  text,
  boolean
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

export const MEWBlockie = () => ({
  components: { MewBlockie },
  props: {
    address: {
      default: text('address', '')
    },
    width: {
      default: text('width', ' 64px')
    },
    height: {
      default: text('height', ' 64px')
    },
    flat: {
      default: boolean('flat', false)
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-blockie :address="address" :width="width" :height="height" :flat="flat"
    />
  </div>`
});
