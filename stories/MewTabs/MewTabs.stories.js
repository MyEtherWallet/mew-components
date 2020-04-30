import {
  withKnobs,
  boolean,
  object
} from '@storybook/addon-knobs';
import MewTabs from '@/components/MewTabs/MewTabs.vue';

export default {
  title: 'MewTabs',
  parameters: {
    component: MewTabs
  },
  decorators: [withKnobs]
};

const itemsObj = [
  { name: 'Tab 1' },
  { name: 'Tab 2' }
];

export const MEWTabs = () => ({
  components: { 'mew-tabs': MewTabs },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    items: {
      default: object('items', itemsObj)
    },
    isBlock: {
      default: boolean('is-block', false)
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
    <mew-tabs
      :items="items"
      :is-block="isBlock"
    />
  </div>`
});
