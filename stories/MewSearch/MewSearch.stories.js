import {
  withKnobs,
  object,
  text,
  boolean,
  optionsKnob,
} from '@storybook/addon-knobs';
import MewSearch from '@/components/MewSearch/MewSearch.vue';
import MewSearchDoc from './MewSearch.mdx';

export default {
  title: 'MewSearch',
  parameters: {
    component: MewSearch,
    docs: {
      page: MewSearchDoc
    } 
  },
  decorators: [withKnobs],
};

const menuSelect = {
  label: 'Extensions',
  items: [{ name: '.crypto', value: '.crypto' }],
};

const textInputTypes = {
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
  month: 'month',
  number: 'number',
  password: 'password',
  datetime: 'datetime-local',
  email: 'email',
};

const optionsObj = {
  display: 'inline-radio',
};

export const MEWSearch = () => ({
  components: { MewSearch },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    placeholder: {
      default: text('placeholder', 'placeholder'),
    },
    value: {
      default: text('value', ''),
    },
    isSearchBlock: {
      default: boolean('is-search-block', true),
    },
    canSearchDate: {
      default: boolean('can-search-date', false),
    },
    menuSelect: {
      default: object('menu-select', menuSelect),
    },
    isCompact: {
      default: boolean('is-compact', false),
    },
    isFilled: {
      default: boolean('is-filled', true),
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false),
    },
    errorMessages: {
      default: text('error-messages', ''),
    },
    type: {
      default: optionsKnob('type', textInputTypes, 'text', optionsObj),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  methods: {
    onSearch() {
      console.log('search button clicked');
    },
    onDateSearch() {
      console.log('search button clicked');
    },
  },
  template: `
    <div>
    <br />
    <mew-search :on-search="onSearch" :on-date-search="onDateSearch" :is-filled="isFilled" :error-messages="errorMessages" :is-compact="isCompact" :menu-select="menuSelect" :is-search-block="isSearchBlock" :can-search-date="canSearchDate" :disabled="disabled" :placeholder="placeholder" :value="value" :type="type"
    />
  </div>`,
});
