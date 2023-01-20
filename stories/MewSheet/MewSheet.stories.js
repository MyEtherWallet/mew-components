import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';
import MewSheet from '@/components/MewSheet/MewSheet.vue';
import MewSheetDoc from './MewSheet.mdx';

export default {
  title: 'MewSheet',
  parameters: {
    component: MewSheet,
    docs: {
      page: MewSheetDoc
    } 
  },
  decorators: [withKnobs]
};

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
  <div class="bgStorybook pa-15">
    <mew-sheet
    >
      <template>
        <div class="pa-10">
          <span>Hi I'm mew-sheet</span>
        </div>
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
