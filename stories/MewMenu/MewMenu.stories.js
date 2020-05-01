import {
  withKnobs,
  boolean,
  object,
  text
} from '@storybook/addon-knobs';
import MewMenu from '@/components/MewMenu/MewMenu.vue';

export default {
  title: 'MewMenu',
  parameters: {
    component: MewMenu
  },
  decorators: [withKnobs]
};

const listObj = {
  name: 'Links',
  items: [
  { title: 'Link 1' },
  { title: 'Link 2' } ]
};

export const MEWMenu = () => ({
  components: { 'mew-menu': MewMenu },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    listObj: {
      default: object('items', listObj)
    },
    textColor: {
      default: text('text-color', 'basic--text')
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
    <mew-menu
      :list-obj="listObj"
      :text-color="textColor"
      @goToPage="goToPage"
    />
  </div>`,
  methods: {
    goToPage(item) {
      // eslint-disable-next-line no-console
      console.log('Go to:', item);
    }
  }
});
