import {
  withKnobs,
  text,
  boolean,
  object
} from '@storybook/addon-knobs';
import MewWarningSheet from '@/components/MewWarningSheet/MewWarningSheet.vue';
import MewWarningSheetDoc from './MewWarningSheet.mdx';

export default {
  title: 'MewWarningSheet',
  parameters: {
    component: MewWarningSheet,
    docs: {
      page: MewWarningSheetDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

const linkObj = {
  title: 'Link',
  url: 'https://www.myetherwallet.com/'
};

export const MEWWarningSheet = () => ({
  components: { MewWarningSheet },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    title: {
      default: text('title', 'Title')
    },
    description: {
      default: text('description', 'Description')
    },
    linkObj: {
      default: object('link-obj', linkObj)
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-warning-sheet
      :title="title"
      :description="description"
      :linkObj="linkObj"
    />
  </div>`
});
