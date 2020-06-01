import {
  withKnobs,
  object,
  boolean,
  files
} from '@storybook/addon-knobs';
import MewBanner from '@/components/MewBanner/MewBanner.vue';

export default {
  title: 'MewBanner',
  parameters: {
    component: MewBanner
  },
  decorators: [withKnobs]
};

const textObj = {
  title: 'MakerDao',
  subtext: 'DAI is a stable, decentralized currency that does not discriminate. Any business or individual can realize the advantages of digital money.',
  exit: 'Exit Dapp'
}

export const mewBanner = () => ({
  components: { 'mew-banner': MewBanner },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    textObj: {
      default: object('text-obj', textObj)
    },
    bannerImg: {
      default: files('banner-img', '.png, .svg', '')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-banner @closeBanner="closeBanner" :bannerImg="bannerImg" :textObj="textObj" />
  </div>`,
  methods: {
    closeBanner() {
      // eslint-disable-next-line no-console
      console.log('close banner');
    }
  }
});
