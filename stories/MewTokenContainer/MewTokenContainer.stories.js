import {
  withKnobs,
  boolean,
  optionsKnob,
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

const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const MEWTokenContainer = () => ({
  components: { MewTokenContainer },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    size: {
      default: optionsKnob('size', sizeOptions, sizeOptions.small, { display: 'inline-radio' })
    },
    borderSize: {
      default: boolean('border-size', false)
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
    <div>
    <br />
    <mew-token-container
      :size="size"
      :border-size="borderSize"
      :img="img"
      :name="name"
      :loading="loading"
    />
  </div>`
});
