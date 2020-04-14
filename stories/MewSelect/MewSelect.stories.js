import { withKnobs, text, boolean, array } from "@storybook/addon-knobs";
import MewSelect from "@/components/MewSelect/MewSelect.vue";

export default {
  title: "MewSelect",
  parameters: {
    component: MewSelect
  },
  decorators: [withKnobs]
};

const itemsArray = ["Green", "Orange", "Blue"]
export const MEWSelect = () => ({
  components: { "mew-select": MewSelect },
  props: {
    disabled: {
      default: boolean("Disabled", false)
    },
    selectLabel: {
      default: text("select-label", "label")
    },
    items: {
      default: array("items", itemsArray)
    },
    inputValue: {
      default: text("input-value", "")
    }
  },
  template: `
    <div>
    <br />
    <mew-select :select-label="selectLabel" :items="items"
    />
  </div>`
});
