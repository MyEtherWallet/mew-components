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
  data() {
    return {
      showsOverlay: false
    }
  },
  components: { MewOverlay },
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
    warningTitle: {
      default: text('warning-title', '')
    },
    warningDesc: {
      default: text('warning-desc', '')
    },
    rightBtnText: {
      default: text('right-btn-text', 'Cancel')
    },
    leftBtnText: {
      default: text('left-btn-text', 'Back')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
    showOverlay(newVal) {
      this.showsOverlay = newVal;
    }
  },
  methods: {
    close() {
      // eslint-disable-next-line no-console
      this.showsOverlay = false;
    },
    back() {
      // eslint-disable-next-line no-console
      this.showsOverlay = false;
    }
  },
  template: `
    <div>
    <br />
    <mew-overlay
      :back="back"
      :close="close"
      :show-overlay="showsOverlay"
      :title="title"
      :btn-text="btnText"
      :warning-title="warningTitle"
      :warning-desc="warningDesc"
      :right-btn-text="rightBtnText"
      :left-btn-text="leftBtnText"
    >
      <template v-slot:mewOverlayBody>
        <span>MEW overlay body</span>
      </template>
    </mew-overlay>
  </div>`
});
