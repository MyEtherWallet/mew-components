import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import MewModal from "@/components/MewModal/MewModal.vue";
import MewButton from "@/components/MewButton/MewButton.vue";

export default {
  title: "MewModal",
  parameters: {
    component: MewModal,
  },
  decorators: [withKnobs],
};

export const MEWModal = () => ({
  components: { MewModal, MewButton },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    enableDarkMode: {
      default: boolean("dark mode ?", false),
    },
    title: {
      default: text("title", "Im a modal!"),
    },
    enableButton: {
      default: boolean("enable button?", true),
    },
    btnText: {
      default: text("text btn", "Close"),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
    <div>
    <mew-button
      title="Click me!"
      @click.native="show"
    />
    <br />
    <mew-modal
      :title="title"
      :btn-enabled="enableButton"
      :btn-text="btnText"
      :close="closeModal"
      :show="showModal"
      :btn-action="closeModal"
    />
  </div>`,
  methods: {
    closeModal() {
      this.showModal = false;
    },
    show() {
      this.showModal = true;
    },
  },
});
