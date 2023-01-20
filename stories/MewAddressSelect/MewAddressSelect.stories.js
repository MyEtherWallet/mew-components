import {
  withKnobs,
  text,
  boolean,
  object,
  array,
} from '@storybook/addon-knobs';
import MewAddressSelect from '@/components/MewAddressSelect/MewAddressSelect.vue';
import MewAddressSelectDoc from './MewAddressSelect.mdx';

export default {
  title: 'MewAddressSelect',
  parameters: {
    component: MewAddressSelect,
    docs: {
      page: MewAddressSelectDoc,
      inlineStories: true,
    },
  },
  decorators: [withKnobs],
};

const ruleValue = [(value) => !!value || 'Required.'];

const addressesArray = [
  {
    address: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    currency: 'ETH',
    nickname: 'My Address',
  },
  {
    address: 'jessp.eth',
    currency: 'ETH',
    nickname: 'nickname',
    resolvedAddr: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
  },
];

export const MEWAddressSelect = () => ({
  components: { MewAddressSelect },
  props: {
    label: {
      default: text('label', 'To Address'),
    },
    items: {
      default: object('items', addressesArray),
    },
    placeholder: {
      default: text('placeholder', 'Please enter an address'),
    },
    isValidAddress: {
      default: boolean('is-valid-address', false),
    },
    enableSaveAddress: {
      default: boolean('enable-save-address', false),
    },
    disabled: {
      default: boolean('disabled', false),
    },
    copyTooltip: {
      default: text('copy-tooltip', 'Copy'),
    },
    showCopy: {
      default: boolean('show-copy', true),
    },
    showSave: {
      default: boolean('show-save', true),
    },
    noDataText: {
      default: text('no-data-text', ''),
    },
    saveTooltip: {
      default: text('save-tooltip', 'Save Address'),
    },
    resolvedAddr: {
      default: text('resolved-addr', ''),
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false),
    },
    rules: {
      default: array('rules', ruleValue),
    },
    errorMessages: {
      default: text('error-messages', ''),
    },
    hint: {
      default: text('hint', ''),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-address-select ref="address" :show-save="showSave" :hint="hint" :error-messages="errorMessages" :no-data-text="noDataText" :rules="rules" :resolved-addr="resolvedAddr" :copy-tooltip="copyTooltip" :save-tooltip="saveTooltip" :disabled="disabled" :enable-save-address="enableSaveAddress" :is-valid-address="isValidAddress" :show-copy="showCopy" :label="label" :items="items" @saveAddress="onSaveAddress" @input="onSelectValue"/>
  </div>`,
  methods: {
    onSaveAddress() {
      // eslint-disable-next-line no-console
      console.log('saveAddress: clicked');
    },
    onSelectValue(value, type) {
      console.log(value, type);
    },
  },
});
