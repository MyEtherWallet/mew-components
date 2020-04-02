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
      default: boolean("Disabled", false)
    },
    title: {
      default: text("Title", "MEW Button")
    },
    colorTheme: {
      default: optionsKnob(
        "ColorTheme",
        colorThemeOptions,
        "primary",
        optionsObj
      )
    },
    btnStyle: {
      default: optionsKnob(
        "BtnStyle",
        btnStyleOptions,
        "background",
        optionsObj
      )
    },
    icon: {
      default: files("Icon", ".png, .svg", "")
    },
    iconAlign: {
      default: optionsKnob("IconAlign", iconAlignOptions, "none", optionsObj)
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
