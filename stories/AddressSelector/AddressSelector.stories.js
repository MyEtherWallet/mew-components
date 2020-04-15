import {
  withKnobs,
  text,
  array,
  files
} from "@storybook/addon-knobs";
import mewAddressSelector from "@/components/AddressSelect/AddressSelect.vue";

export default {
  title: "AddressSelector",
  parameters: {
    component: AddressSelector
  },
  decorators: [withKnobs]
};

const addressesArray = [
  "Hello"
]

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
    <address-selector :label="label" :items="items">
      <template v-slot:blockie>
      </template>
    </address-selector>
  </div>`
});
