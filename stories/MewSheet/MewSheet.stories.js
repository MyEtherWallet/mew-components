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
