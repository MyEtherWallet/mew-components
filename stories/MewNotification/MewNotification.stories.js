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
  }
}

const fromObj = {
  'currency': 'ETH',
  'amount': '.0001',
  'icon': ''
}

const toObj = {
  'currency': 'BTC',
  'amount': '.0001',
  'icon': '',
  'to': '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D'
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
    read: {
      default: boolean('read', false)
    },
    fromObj: {
      default: object('fromObj', fromObj)
    },
    toObj: {
      default: object('toObj', toObj)
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
      :notification="notification"
      :read="read"
      :from-obj="fromObj"
      :to-obj="toObj"
    />
  </div>`
});
