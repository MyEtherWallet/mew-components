import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import AddressSelector from '@/components/AddressSelect/AddressSelect.vue';

export default {
  title: 'AddressSelector',
  parameters: {
    component: AddressSelector
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

export const addressSelector = () => ({
  components: { 'address-selector': AddressSelector },
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
    <address-selector :disabled="disabled" :enable-save-address="enableSaveAddress" @emitSelectedValue="getSelectedValue" :is-valid-address="isValidAddress" :label="label" :items="items">
      <template v-slot:blockie>
      </template>
    </address-selector>
  </div>`,
  methods: {
    getSelectedValue(value) {
      console.log('selected value:', value);
    }
  }
});
