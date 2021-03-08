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
  { title: '1st Links', items: [{ title: 'Link 1'}, {title: 'Link 2'}] },
  { title: '2nd Links', items: [{ title: 'Link 3'}, {title: 'Link 4'}]} ]
};

export const MEWMenu = () => ({
  components: { MewMenu },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    listObj: {
      default: object('list-obj', listObj)
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
    goToPage(link) {
      // eslint-disable-next-line no-console
      console.log('go to:', link)
    }
  }
});
