import { withKnobs, boolean, text, object } from "@storybook/addon-knobs";
import MewPopup from "@/components/MewPopup/MewPopup.vue";
// import MewPopupDoc from './MewPopup.mdx';

export default {
  title: "MewPopup",
  parameters: {
    component: MewPopup,
    // docs: {
    //   page: MewPopupDoc
    // }
  },
  decorators: [withKnobs],
};
// eslint-disable-next-line no-console
const leftBtn = {
  text: "Cancel",
  color: "primary",
  method: () => {
    console.log("clicked left button");
  },
};
// eslint-disable-next-line no-console
const rightBtn = {
  text: "Confirm",
  color: "primary",
  enabled: true,
  method: () => {
    console.log("clicked right button");
  },
};

export const MEWPopup = () => ({
  components: { MewPopup },
  data() {
    return {
      isPopupOpen: true,
    };
  },
  props: {
    enableDarkMode: {
      default: boolean("dark mode ?", false),
    },
    show: {
      default: boolean("show", true),
    },
    title: {
      default: text("title", "Are you sure you want to log out?"),
    },
    leftBtn: {
      default: object("left-btn", leftBtn),
    },
    rightBtn: {
      default: object("right-btn", rightBtn),
    },
    scrollable: {
      default: boolean("scrollable", false),
    },
    hideCloseBtn: {
      default: boolean("hide-close-btn", false),
    },
    maxWidth: {
      default: text("max-width", "600"),
    },
    hasBodyContent: {
      default: boolean("has-body-content", true),
    },
    hasPadding: {
      default: boolean("has-padding", true),
    },
    hasButtons: {
      default: boolean("has-buttons", true),
    },
    hasTitle: {
      default: boolean("has-title", true),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
    <div>
    <br />
    <mew-popup
      :show="show"
      :title="title"
      :hide-close-btn="hideCloseBtn"
      :left-btn="leftBtn"
      :right-btn="rightBtn"
      :scrollable="scrollable"
      :max-width="maxWidth"
      :has-body-content="hasBodyContent"
      :has-padding="hasPadding"
      :has-buttons="hasButtons"
      :has-title="hasTitle"
    > 
      <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </mew-popup>
  </div>`,
});
