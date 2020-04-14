import {
  withKnobs,
  text,
  boolean,
  optionsKnob,
  files
} from "@storybook/addon-knobs";
import MewButton from "@/components/MewButton/MewButton.vue";

export default {
  title: "MewButton",
  parameters: {
    component: MewButton
  },
  decorators: [withKnobs]
};

const iconAlignOptions = {
  left: "left",
  right: "right",
  none: "none"
};

const colorThemeOptions = {
  primary: "primary",
  basic: "basic",
  error: "error",
  secondary: "secondary",
  white: "white"
};

const btnStyleOptions = {
  outline: "outline",
  background: "background",
  transparent: "transparent"
};

const optionsObj = {
  display: "inline-radio"
};

export const MEWButton = () => ({
  components: { "mew-button": MewButton },
  props: {
    disabled: {
      default: boolean("disabled", false)
    },
    title: {
      default: text("title", "MEW Button")
    },
    colorTheme: {
      default: optionsKnob(
        "color-theme",
        colorThemeOptions,
        "primary",
        optionsObj
      )
    },
    btnStyle: {
      default: optionsKnob(
        "btn-style",
        btnStyleOptions,
        "background",
        optionsObj
      )
    },
    icon: {
      default: files("icon", ".png, .svg", "")
    },
    iconAlign: {
      default: optionsKnob("icon-align", iconAlignOptions, "none", optionsObj)
    }
  },
  template: `
    <div>
    <br />
    <mew-button
      :icon-align="iconAlign"
      :disabled="disabled"
      :title="title"
      :color-theme="colorTheme"
      :btn-style="btnStyle"
      :icon="icon"
    />
  </div>`
});
