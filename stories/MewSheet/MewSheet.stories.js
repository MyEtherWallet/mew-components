import {
  withKnobs,
  boolean
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
    <mew-sheet
    >
      <template #content>
        <span>Hi I'm mew-sheet and I am still in the works </span>
      </template>
    </mew-sheet>
  </div>`,
  methods: {
    onTab(newVal) {
      // eslint-disable-next-line no-console
      console.log('on tab:', newVal)
    }
  }
});
