import {
  withKnobs,
  text
} from '@storybook/addon-knobs';
import MewBlockie from '@/components/Blockie/Blockie.vue';
import BlockieDoc from './Blockie.mdx';

export default {
  title: 'Blockie',
  parameters: {
    component: MewBlockie,
    docs: {
      page: BlockieDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

export const Blockie = () => ({
  components: { blockie: MewBlockie },
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
    <blockie :address="address" :width="width" :height="height"
    />
  </div>`
});
