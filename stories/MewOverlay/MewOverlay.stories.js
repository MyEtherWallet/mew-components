import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewOverlay from '@/components/MewOverlay/MewOverlay.vue';

export default {
  title: 'MewOverlay',
  parameters: {
    component: MewOverlay
  },
  decorators: [withKnobs]
};

export const MEWOverlay = () => ({
  components: { 'mew-overlay': MewOverlay },
  props: {
    showOverlay: {
      default: boolean('show-overlay', false)
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    title: {
      default: text('title', 'Title')
    },
    btnText: {
      default: text('btn-text', '')
    },
    hasBackBtn: {
      default: boolean('has-back-btn', false)
    },
    warningTitle: {
      default: text('warning-title', '')
    },
    warningDesc: {
      default: text('warning-desc', '')
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-overlay
      :show-overlay="showOverlay"
      :title="title"
      :has-back-btn="hasBackBtn"
      :btn-text="btnText"
      :warning-title="warningTitle"
      :warning-desc="warningDesc"
    />
  </div>`
});
