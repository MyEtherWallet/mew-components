import {
  withKnobs,
  boolean,
  text,
  optionsKnob,
  object
} from '@storybook/addon-knobs';
import MewOverlay from '@/components/MewOverlay/MewOverlay.vue';
import MewOverlayDoc from './MewOverlay.mdx';

export default {
  title: 'MewOverlay',
  parameters: {
    component: MewOverlay,
    docs: {
      page: MewOverlayDoc
    } 
  },
  decorators: [withKnobs]
};

const options = {
  display: 'inline-radio'
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
}

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
    contentSize: {
      default: optionsKnob(
        'content-size',
        sizes,
        '',
        options
      )
    },
    footer: {
      default: object('footer', {text: 'Need help?', linkTitle: 'Contact support',
      link: 'mailto:support@myetherwallet.com'})
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
      this.showOverlay = false;
    },
    back() {
      // eslint-disable-next-line no-console
      this.showOverlay = false;
    }
  },
  template: `
    <div>
    <br />
    <mew-overlay
      :back="back"
      :footer="footer"
      :close="close"
      :content-size="contentSize"
      :show-overlay="showOverlay"
      :title="title"
    >
      <span class="pt-5">MEW overlay body</span>
    </mew-overlay>
  </div>`
});
