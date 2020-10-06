import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import MewAddressSelect from '@/components/MewAddressSelect/MewAddressSelect.vue';

export default {
  title: 'MewAddressSelect',
  parameters: {
    component: MewAddressSelect
  },
  decorators: [withKnobs]
};

const addressesArray = [
  {
    address: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    currency: 'ETH',
    nickname: 'My Address',
    resolverAddr: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
  },
  {
    address: '0x43689531907482BEE7e650D18411E284A7337A66',
    currency: 'ETH',
    nickname: 'nickname',
    resolverAddr: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
  }
];

export const mewAddressSelect = () => ({
  components: { MewAddressSelect },
  props: {
    label: {
      default: text('label', 'To Address')
    },
    items: {
      default: object('items', addressesArray)
    },
    placeholder: {
      default: text('placeholder', 'Please enter an address')
    },
    isValidAddress: {
      default: boolean('is-valid-address', false)
    },
    enableSaveAddress: {
      default: boolean('enable-save-address', false)
    },
    disabled: {
      default: boolean('disabled', false)
    },
    copyTooltip: {
      default: text('copy-tooltip', 'Copy')
    },
    saveTooltip: {
      default: text('save-tooltip', 'Save Address')
    },
    successToast: {
      default: text('success-toast', 'Success!')
    },
    errorMsg: {
      default: text('error-msg', '')
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
    <mew-address-select ref="address" @saveAddress="onSaveAddress" :error-msg="errorMsg" :success-toast="successToast" :copy-tooltip="copyTooltip" :save-tooltip="saveTooltip" :disabled="disabled" :enable-save-address="enableSaveAddress" @input="getSelectedValue" :is-valid-address="isValidAddress" :label="label" :items="items" />
  </div>`,
  methods: {
    getSelectedValue(value) {
      // eslint-disable-next-line no-console
      console.log('selected value:', value);
    },
    onSaveAddress() {
      // eslint-disable-next-line no-console
      console.log('saveAddress: clicked')
    }
  }
});
