import { withKnobs, text, boolean } from '@storybook/addon-knobs';
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
    hasMenuSelect: {
      default: boolean('has-menu-select', true)
    },
    isCompact: {
      default: boolean('is-compact', true)
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
    <mew-search :is-compact="isCompact" :has-menu-select="hasMenuSelect" :is-search-block="isSearchBlock" :disabled="disabled" :placeholder="placeholder" :value="value"
    />
  </div>`
});
