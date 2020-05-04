import {
  withKnobs,
  boolean,
  optionsKnob,
  text
} from '@storybook/addon-knobs';
import TxNotification from '@/components/TxNotification/TxNotification.vue';

export default {
  title: 'TxNotification',
  parameters: {
    component: TxNotification
  },
  decorators: [withKnobs]
};

const txTypeOptions = {
  in: 'txIn',
  out: 'txOut',
  swap: 'swap'
}

const txStatusOptions = {
  success: 'success',
  pending: 'pending',
  error: 'error'
}

export const txNotification = () => ({
  components: { 'tx-notif': TxNotification },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    txType: {
      default: optionsKnob('badge-type', txTypeOptions, txTypeOptions.in , { display: 'inline-radio' })
    },
    txStatus: {
      default: optionsKnob('tx-status', txStatusOptions, txStatusOptions.success, { display: 'inline-radio' } )
    },
    fromAddress: {
      default: text('from-address', '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D')
    },
    amount: {
      default: text('amount', '0.004 ETH')
    },
    duration: {
      default: text('duration', '1')
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
    <tx-notif
      :tx-type="txType"
      :tx-status="txStatus"
      :from-address="fromAddress"
      :amount="amount"
      :duration="duration"
    />
  </div>`
});
