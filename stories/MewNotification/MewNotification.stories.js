import {
  withKnobs,
  boolean,
  optionsKnob,
  text
} from '@storybook/addon-knobs';
import MewNotification from '@/components/MewNotification/MewNotification.vue';

export default {
  title: 'MewNotification',
  parameters: {
    component: MewNotification
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

export const MEWNotification = () => ({
  components: { 'mew-notification': MewNotification },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    txTitle: {
      default: text('tx-title', 'in')
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
      default: text('duration', '1 min ago')
    },
    fromStr: {
      default: text('from-str', 'From')
    },
    amtStr: {
      default: text('amt-str', 'Amount')
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
      :tx-title="txTitle"
      :tx-type="txType"
      :tx-status="txStatus"
      :from-address="fromAddress"
      :amount="amount"
      :duration="duration"
      :from-str="fromStr"
      :amt-str="amtStr"
    />
  </div>`
});
