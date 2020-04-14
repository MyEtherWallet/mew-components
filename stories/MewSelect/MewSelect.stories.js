import { withKnobs, text, boolean, array } from "@storybook/addon-knobs";
import MewSelect from "@/components/MewSelect/MewSelect.vue";

export default {
  title: "MewSelect",
  parameters: {
    component: MewSelect
  },
  decorators: [withKnobs]
};

const itemsArray = ["Green", "Orange", "Blue"];

export const MEWSelect = () => ({
  components: { "mew-select": MewSelect },
  props: {
    disabled: {
      default: boolean("Disabled", false)
    },
    label: {
      default: text("select-label", "label")
    },
    items: {
      default: array("items", itemsArray)
    }
  },
  template: `
    <div>
    <br />
    <mew-select :label="label" :items="items" :disabled="disabled"
    />
  </div>`
});
