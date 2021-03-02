import {
  withKnobs,
  boolean,
  object,
  number
} from '@storybook/addon-knobs';
import MewSheet from '@/components/MewSheet/MewSheet.vue';

export default {
  title: 'MewSheet',
  parameters: {
    component: MewSheet
  },
  decorators: [withKnobs]
};

const itemsObj = [
  { name: 'Tab 1' },
  { name: 'Tab 2' }
];

export const MEWSheet = () => ({
  components: { MewSheet },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
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
      :is-centered="isCentered"
      :active-tab="activeTab"
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
