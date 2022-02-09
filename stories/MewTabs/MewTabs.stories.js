import {
  withKnobs,
  boolean,
  object,
  number,
  text
} from '@storybook/addon-knobs';
import MewTabs from '@/components/MewTabs/MewTabs.vue';
import MewTabsDoc from './MewTabs.mdx';

export default {
  title: 'MewTabs',
  parameters: {
    component: MewTabs,
    docs: {
      page: MewTabsDoc
    } 
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
    },
    isCentered: {
      default: boolean('is-centered', false)
    },
    activeTab: {
      default: number('active-tab', 0)
    },
    showArrows: {
      default: boolean('show-arrows', false)
    },
    activeColor: {
      default: text('active-color', 'titlePrimary')
    },
    background: {
      default: text('background', 'transparent')
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
      :active-color="activeColor"
      :background="background"
      :show-arrows="showArrows"
      :is-vertical="isVertical"
      :has-underline="hasUnderline"
      :items="items"
      :is-block="isBlock"
      :is-centered="isCentered"
      :active-tab="activeTab"
      @onTab="onTab"
    >
      <template v-slot:tabItemContent1>
        <span v-if="!isBlock"> I am a placeholder tab 1 </span>
      </template>
      <template v-slot:tabItemContent2>
        <span v-if="!isBlock"> I am a placeholder tab 2</span>
      </template>
      <template v-slot:tabContent1>
        <span v-if="isBlock"> I am a placeholder tab 1</span>
      </template>
      <template v-slot:tabContent2>
        <span v-if="isBlock"> I am a placeholder tab 2</span>
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
