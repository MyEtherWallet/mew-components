import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';
import MewIcon from '@/components/MewIcon/MewIcon.vue';

export default {
  title: 'MewIcon',
  parameters: {
    component: MewIcon
  },
  decorators: [withKnobs]
};

export const MEWIcon = () => ({
  components: { 'mew-icon': MewIcon },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    }
  },
  data() {
    return {
      footerIcons: ['btc', 'eth', 'facebook', 'github', 'instagram', 'linkedin', 'love', 'medium', 'reddit', 'twitter', 'youtube'], 
      icons: ['aave', 'account', 'acct-value', 'advanced-tools', 'arrow', 'bcvault', 'bicycle', 'bitbox', 'buy-eth', 'calendar', 'car', 'chrome', 'clock', 'cool-wallet', 'copy', 'diploma', 'edit', 'ens-manager', 'eth-balance', 'finney', 'keepkey', 'keystore', 'ledger', 'lock', 'makerdao', 'message', 'mewtopia', 'mnemonic', 'nav-bar', 'network-nodes', 'new-wallet', 'night-mode', 'notification', 'paper-plane', 'private-key', 'quick-help', 'rocket', 'secalot', 'shield', 'swap-token', 'tags', 'team', 'thief', 'tokens-list', 'trezor', 'view-only', 'xwallet']
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
    <span class="mew-heading-1">SVG Icons</span>
    <br />
    <v-row align="center"> 
      <v-col cols="2" v-for="(icon, idx) in icons" :key="icon + idx">
        <div class="d-flex justify-center flex-column">
          <mew-icon :icon-name="icon"/>
          <span class="mew-caption">{{icon}}</span>
        </div>
      </v-col>
    </v-row>
    <br />
    <span class="mew-heading-1">PNG Icons</span>
    <br />
    <v-row align="center"> 
    <v-col cols="2" v-for="(icon, idx) in footerIcons" :key="icon + idx">
        <div class="d-flex justify-center flex-column">
          <mew-icon :img-height="30"  :is-png="true" :icon-name="icon"/>
          <span class="mew-caption">{{icon}}</span>
        </div>
      </v-col>
    </v-row>
  </div>`
});
