import {
  withKnobs,
  boolean,
  text,
  files
} from '@storybook/addon-knobs';
import MewTokenContainer from '@/components/MewTokenContainer/MewTokenContainer.vue';
import MewTokenContainerDoc from './MewTokenContainer.mdx';

export default {
  title: 'MewTokenContainer',
  parameters: {
    component: MewTokenContainer,
    docs: {
      page: MewTokenContainerDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

export const MEWTokenContainer = () => ({
  components: { MewTokenContainer },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    size: {
      default: text('size', 'small')
    },
    borderSize: {
      default: text('border-size', '')
    },
    img: {
      default: files('img', '.png, .svg', '')
    },
    loading: {
      default: boolean('loading', false)
    },
    name: {
      default: text('name', 'MEW')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-token-container
      :size="size"
      :border-size="borderSize"
      :img="img"
      :name="name"
      :loading="loading"
    />
  </div>`
});
