import {
  withKnobs,
  text,
  boolean,
  object
} from '@storybook/addon-knobs';
import WarningSheet from '@/components/WarningSheet/WarningSheet.vue';

export default {
  title: 'WarningSheet',
  parameters: {
    component: WarningSheet
  },
  decorators: [withKnobs]
};

const linkObj = {
  title: 'Link',
  url: 'https://www.myetherwallet.com/'
};

export const warningSheet = () => ({
  components: { 'warning-sheet': WarningSheet },
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
    <div>
    <br />
    <warning-sheet
      :title="title"
      :description="description"
      :linkObj="linkObj"
    />
  </div>`
});
