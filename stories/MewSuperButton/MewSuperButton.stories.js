import {
  withKnobs,
  text,
  boolean,
  optionsKnob,
  files
} from "@storybook/addon-knobs";
import MewSuperButton from "@/components/MewSuperButton/MewSuperButton.vue";

export default {
  title: "MewSuperButton",
  decorators: [withKnobs],
  parameters: {
    component: MewSuperButton
  }
};

const colorThemeOptions = {
  basic: "basic",
  lightGreen: "light-green",
  outline: "outline"
};

const optionsObj = {
  display: "inline-radio"
};

export const MEWSuperButton = () => ({
  components: { "mew-super-button": MewSuperButton },
  props: {
    disabled: {
      default: boolean("Disabled", false)
    },
    title: {
      default: text("Title", "MEW Super Button")
    },
    subtitle: {
      default: text("Subtitle", "Subtitle")
    },
    tag: {
      default: text("Tag", "Tag")
    },
    note: {
      default: text("Note", "")
    },
    isNew: {
      default: boolean("IsNew", false)
    },
    colorTheme: {
      default: optionsKnob(
        "ColorTheme",
        colorThemeOptions,
        "primary",
        optionsObj
      )
    },
    titleIcon: {
      default: files("TitleIcon", ".png, .svg", "")
    },
    rightIcon: {
      default: files("RightIcon", ".png, .svg", "")
    }
  },
  template: `
    <div>
    <br />
    <mew-super-button
      :title="title"
      :subtitle="subtitle"
      :tag="tag"
      :titleIcon="titleIcon"
      :rightIcon="rightIcon"
      :note="note"
      :isNew="isNew"
      :colorTheme="colorTheme"
      :disabled="disabled"
    />
  </div>`
});
