import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import MewIcon from '@/components/MewIcon/MewIcon.vue';
import MewIconDoc from './MewIcon.mdx';

export default {
  title: 'MewIcon',
  parameters: {
    component: MewIcon,
    docs: {
      page: MewIconDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs],
};

export const MEWIcon = () => ({
  components: { MewIcon },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false),
    },
    imgHeight: {
      default: number('img-height', 40),
    }
  },
  data() {
    return {
      icons: [
        'aave',
        'account',
        'acctValue',
        'advancedTools',
        'arrow',
        'bcvault',
        'bicycle',
        'bitbox',
        'buyEth',
        'calendar',
        'car',
        'chrome',
        'clock',
        'coolWallet',
        'copy',
        'diploma',
        'edit',
        'ensManager',
        'ethBalance',
        'finney',
        'keepkey',
        'keystore',
        'ledger',
        'lock',
        'makerdao',
        'message',
        'mewtopia',
        'mnemonic',
        'navBar',
        'networkNodes',
        'wallet',
        'nightMode',
        'notification',
        'paperPlane',
        'privateKey',
        'quickHelp',
        'rocket',
        'secalot',
        'shield',
        'stake',
        'swapToken',
        'tags',
        'team',
        'thief',
        'tokensList',
        'trezor',
        'viewOnly',
        'xwallet',
        'btc',
        'eth',
        'facebook',
        'github',
        'instagram',
        'linkedin',
        'love',
        'medium',
        'reddit',
        'twitter',
        'youtube',
        'ethBlocks',
      ],
    };
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <span class="mew-heading-1 mb-3">Icons</span>
    <v-row class="mt-3" align="center"> 
      <v-col cols="6" sm="4" lg="2" xl="2" v-for="(icon, idx) in icons" :key="icon + idx">
        <div class="d-flex justify-center flex-column align-baseline">
          <mew-icon :icon-name="icon" :img-height="imgHeight" />
          <span class="mew-body font-weight-bold">{{icon}}</span>
        </div>
      </v-col>
    </v-row>
  </div>`,
});
