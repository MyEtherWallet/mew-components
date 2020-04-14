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
      default: boolean("disabled", false)
    },
    title: {
      default: text("title", "MEW Super Button")
    },
    subtitle: {
      default: text("subtitle", "Subtitle")
    },
    tag: {
      default: text("tag", "Tag")
    },
    note: {
      default: text("note", "")
    },
    isNew: {
      default: boolean("is-new", false)
    },
    colorTheme: {
      default: optionsKnob(
        "color-theme",
        colorThemeOptions,
        "primary",
        optionsObj
      )
    },
    titleIcon: {
      default: files("title-icon", ".png, .svg", "")
    },
    rightIcon: {
      default: files("right-icon", ".png, .svg", "")
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
