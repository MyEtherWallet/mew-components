import { withKnobs, text, array, boolean } from "@storybook/addon-knobs";
import mewAddressSelector from "@/components/AddressSelect/AddressSelect.vue";

export default {
  title: "AddressSelector",
  parameters: {
    component: AddressSelector
  },
  decorators: [withKnobs]
};

const addressesArray = [
  {
    address: "0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D",
    currency: "ETH",
    nickname: "nickname",
    resolverAddr: "0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
  }
];

export const AddressSelector = () => ({
  components: { "address-selector": mewAddressSelector },
  props: {
    label: {
      default: text("label", "To Address")
    },
    items: {
      default: array("addresses", addressesArray)
    },
    placeholder: {
      default: text("placeholder", "Please enter an address")
    },
    isValidAddress: {
      default: boolean("is-valid-address", false)
    }
  },
  template: `
    <div>
    <br />
    <address-selector @emitSelectedValue="getSelectedValue" :is-valid-address="isValidAddress" :label="label" :items="items">
      <template v-slot:blockie>
      </template>
    </address-selector>
  </div>`,
  methods: {
    getSelectedValue(value) {
      console.log("selected value:", value);
    }
  }
});
