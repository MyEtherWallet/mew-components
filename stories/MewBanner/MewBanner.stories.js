import {
  withKnobs,
  object,
  boolean,
  files
} from '@storybook/addon-knobs';
import MewBanner from '@/components/MewBanner/MewBanner.vue';
import MewBannerDoc from './MewBannerDoc.mdx';

export default {
  title: 'MewBanner',
  parameters: {
    component: MewBanner,
    docs: {
      page: MewBannerDoc
    }
  },
  decorators: [withKnobs]
};

const textObj = {
  title: 'MakerDao',
  subtext: 'DAI is a stable, decentralized currency that does not discriminate. Any business or individual can realize the advantages of digital money.',
  exit: 'Exit Dapp'
}

export const mewBanner = () => ({
  components: { MewBanner },
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
    <mew-banner @close-banner="closeBanner" :banner-img="bannerImg" :text-obj="textObj" />
  </div>`,
  methods: {
    closeBanner() {
      // eslint-disable-next-line no-console
      console.log('close banner');
    }
  }
});
