import { withKnobs, boolean, text, optionsKnob } from '@storybook/addon-knobs';
import MewMenuPopup from '@/components/MewMenuPopup/MewMenuPopup.vue';
import MewMenuDoc from './MewMenuPopup.mdx';

export default {
  title: 'MewMenuPopup',
  parameters: {
    component: MewMenuPopup,
    docs: {
      page: MewMenuDoc,
      inlineStories: true,
    },
  },
  decorators: [withKnobs],
};

const btnSizeOptions = {
  'x-small': 'x-small',
  small: 'small',
  default: 'default',
  large: 'large',
  'x-large': 'x-large',
};

// used to display options on knob
const optionsObj = {
  display: 'inline-radio',
};

export const MEWMenuPopup = () => ({
  components: { MewMenuPopup },
  props: {
    btnTitle: {
      default: text('btn-title', 'Click'),
    },
    btnSize: {
      default: optionsKnob(
        'btn-size',
        btnSizeOptions,
        btnSizeOptions.large,
        optionsObj
      ),
    },
    left: {
      default: boolean('left', false),
    },
    right: {
      default: boolean('right', false),
    },
    icon: {
      default: boolean('icon', false),
    },
    outlined: {
      default: boolean('outlined', false),
    },
    btnFontSize: {
      default: text('btn-font-size', '12px'),
    },
    color: {
      default: text('color', 'primary'),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
  <div class="bgStorybook pa-15" style="display: inline-block; margin: 0 auto">
    <mew-menu-popup
      :btn-title="btnTitle"
      :btn-size="btnSize"
      :left="left"
      :right="right"
      :btn-font-size="btnFontSize"
      :color="color"
      :outlined="outlined"
      :icon="icon"
    >
      <div style="padding: 30px; min-width: 300px;">
        <ul>
          <li>Menu A</li>
          <li>Menu B</li>
          <li>Menu C</li>
        </ul>
      </div>
    </mew-menu-popup>
  </div>`,
});
