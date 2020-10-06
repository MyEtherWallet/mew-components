import {
  withKnobs,
  boolean,
  optionsKnob,
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

const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const mewTokenContainer = () => ({
  components: { MewTokenContainer },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    size: {
      default: optionsKnob('size', sizeOptions, sizeOptions.small, { display: 'inline-radio' })
    },
    icon: {
      default: files('icon', '.png, .svg', '')
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
    <mew-token-container
      :size="size"
      :icon="icon"
    />
  </div>`
});
