import {
  withKnobs,
  boolean,
  text,
  optionsKnob,
  object
} from '@storybook/addon-knobs';
import MewOverlay from '@/components/MewOverlay/MewOverlay.vue';

export default {
  title: 'MewOverlay',
  parameters: {
    component: MewOverlay
  },
  decorators: [withKnobs]
};

const options = {
  display: 'inline-radio'
};

const sizes = {
  mobile: 'mobile',
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
      default: object('footer-text', {text: 'Need help?', linkTitle: 'Contact support',
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
      :footer="footer"
      :content-size="contentSize"
      :show-overlay="showOverlay"
      :title="title"
    >
      <span>MEW overlay body</span>
      <div>
      Where does it come from?
Contrary to popular belief,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm  Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </div>
    </mew-overlay>
  </div>`
});
