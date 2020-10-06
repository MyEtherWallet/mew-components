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
  components: { MewTabs },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    items: {
      default: object('items', itemsObj)
    },
    isBlock: {
      default: boolean('is-block', false)
    },
    isVertical: {
      default: boolean('is-vertical', false)
    },
    hasUnderline: {
      default: boolean('has-underline', false)
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
      :is-vertical="isVertical"
      :has-underline="hasUnderline"
      :items="items"
      :is-block="isBlock"
      @onTab="onTab"
    >
      <template v-slot:tabItemContent1>
        <span v-if="!isBlock"> I am a placeholder tab </span>
      </template>
      <template v-slot:tabContent2>
        <span v-if="isBlock"> I am a placeholder tab </span>
      </template>
    </mew-tabs>
  </div>`,
  methods: {
    onTab(newVal) {
      // eslint-disable-next-line no-console
      console.log('on tab:', newVal)
    }
  }
});
