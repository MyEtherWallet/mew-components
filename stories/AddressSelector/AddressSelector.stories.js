import { withKnobs, text, array } from "@storybook/addon-knobs";
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
    address: "123",
    currency: "ETH",
    nickname: "nickname",
    resolverAddr: "123"
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
    }
  },
  template: `
    <div>
    <br />
    <address-selector @emitSelectedValue="getSelectedValue" :label="label" :items="items">
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
