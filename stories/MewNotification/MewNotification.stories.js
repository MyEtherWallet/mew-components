import {
  withKnobs,
  boolean,
  object
} from '@storybook/addon-knobs';
import MewNotification from '@/components/MewNotification/MewNotification.vue';
import MewNotificationDoc from './MewNotification.mdx';

export default {
  title: 'MewNotification',
  parameters: {
    component: MewNotification,
    docs: {
      page: MewNotificationDoc
    }
  },
  decorators: [withKnobs]
};

const notifObj = {
  txHash: {
    value: '0xbec98e60cb45670350ed52b91269ec9c7a89abb929cd2459709271ec91069a2d',
    string: 'Transaction Hash'
  },
  gasPrice: {
    value: '8 Gwei',
    string: 'Gas Price'
  },
  gasLimit: {
    value: '40000',
    string: 'Gas Limit'
  },
  total: {
    value: '0.00003 ETH ($0.02)',
    string: 'Total Transaction fee'
  },
  from: {
    value: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    string: 'From'
  },
  to: {
    value: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    string: 'To'
  },
  amount: {
    value: '0.004 ETH',
    string: 'Amount'
  },
  timestamp: {
    value: '1 min ago',
    string: 'Time'
  },
  status: {
    value: 'pending',
    string: 'Status'
  },
  type: {
    value: 'in',
    string: 'in'
  },
  fromObj: {
    'currency': 'KNC',
    'amount': '.0001',
    'icon': 'https://raw.githubusercontent.com/MyEtherWallet/ethereum-lists/master/src/icons/KNC-0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png'
  },
  toObj: {
    'currency': 'MKR',
    'amount': '.0001',
    'icon': 'https://raw.githubusercontent.com/MyEtherWallet/ethereum-lists/master/src/icons/MKR-0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png',
    'to': '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
  },
  read: false
}

export const MEWNotification = () => ({
  components: { MewNotification },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    notification: {
      default: object('notification', notifObj)
    },
    showIndicator: {
      default: boolean('show-indicator', true)
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
    <mew-notification
      :show-indicator="showIndicator"
      :notification="notification"
    />
  </div>`
});
