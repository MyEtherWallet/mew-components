import {
  withKnobs,
  boolean,
  object
} from '@storybook/addon-knobs';
import MewNotification from '@/components/MewNotification/MewNotification.vue';

export default {
  title: 'MewNotification',
  parameters: {
    component: MewNotification
  },
  decorators: [withKnobs]
};

const notifObj = {
  from: {
    value: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    string: 'From'
  },
  amount: {
    value: '0.004 ETH',
    string: 'Amount'
  },
  timestamp: {
    value: 'o',
    string: '1 min ago'
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

export const MEWNotification = () => ({
  components: { 'mew-notification': MewNotification },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    notification: {
      default: object('notification', notifObj)
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
    />
  </div>`
});
