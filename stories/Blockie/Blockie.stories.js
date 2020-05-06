import {
  withKnobs,
  text
} from '@storybook/addon-knobs';
import MewBlockie from '@/components/Blockie/Blockie.vue';

export default {
  title: 'Blockie',
  parameters: {
    component: MewBlockie
  },
  decorators: [withKnobs]
};

export const Blockie = () => ({
  components: { blockie: MewBlockie },
  props: {
    address: {
      default: text('address', '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D')
    },
    width: {
      default: text('width', ' 64px')
    },
    height: {
      default: text('height', ' 64px')
    },
    sizes: {
      default: text('sizes', '8')
    },
    scale: {
      default: text('scale', '16')
    }
  },
  template: `
    <div>
    <br />
    <blockie :address="address" :width="width" :height="height" :size=8 :scale=16
    />
  </div>`
});
