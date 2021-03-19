import { withKnobs, number, text, boolean, array, optionsKnob } from '@storybook/addon-knobs';
import MewSearch from '@/components/MewSearch/MewSearch.vue';

export default {
  title: 'MewSearch',
  parameters: {
    component: MewSearch
  },
  decorators: [withKnobs]
};

export const MEWSearch = () => ({
  components: { MewSearch },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    placeholder: {
      default: text('placeholder', 'placeholder')
    },
    value: {
      default: text('value', '')
    },
    isSearchBlock: {
      default: boolean('is-search-block', false)
    },
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
    <mew-search :is-search-block="isSearchBlock" :disabled="disabled" :placeholder="placeholder" :value="value"
    />
  </div>`
});
