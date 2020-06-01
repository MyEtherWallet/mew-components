import {
  withKnobs,
  boolean,
  optionsKnob,
  files
} from '@storybook/addon-knobs';
import TokenContainer from '@/components/TokenContainer/TokenContainer.vue';

export default {
  title: 'TokenContainer',
  parameters: {
    component: TokenContainer
  },
  decorators: [withKnobs]
};

const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const tokenContainer = () => ({
  components: { 'token-container': TokenContainer },
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
    <token-container
      :size="size"
      :icon="icon"
    />
  </div>`
});
