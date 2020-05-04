<template>
  <div :class="[ txStatus + '-type', 'd-flex', 'justify-space-between', 'align-center', 'pa-4', 'notification-container']">
    <div class="left-container d-flex align-center">
      <div :class="[ getClasses(), 'indicator']" />
      <blockie
        v-if="txType.toLowerCase() !== txTypes.swap"
        width="30px"
        height="30px"
        address="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
      />
      <div class="ml-5 detail-container">
        <!-- need to translate -->
        <div class="caption titlePrimary--text truncate font-weight-medium">
          From: <span class="mew-address font-weight-medium">{{ fromAddress }} </span>
        </div>
        <div class="caption titlePrimary--text font-weight-medium">
          Amount: {{ amount }}
        </div>
      </div>
    </div>
    <div class="right-container">
      <tx-badge :badge-type="txType" />
      <div class="caption mt-1 textPrimary--text font-weight-medium">
        {{ duration }} min ago
      </div>
    </div>
  </div>
</template>

<script>
import TxBadge from '@/components/TxBadge/TxBadge.vue';
import Blockie from '@/components/Blockie/Blockie.vue';

export default {
  components: {
    'tx-badge': TxBadge,
    'blockie': Blockie
  },
  data() {
    return {
      txTypes: {
        in: 'txIn',
        out: 'txOut',
        swap: 'swap'
      },
      txStatusOptions: {
        success: 'success',
        pending: 'pending',
        error: 'error'
      }
    }
  },
  props: {
    /**
     * Badge types: 'txIn', 'txOut', 'swap'
     */
    txType: {
      type: String,
      default: ''
    },
    /**
     * Badge types: 'success', 'pending', 'error', 
     */
    txStatus: {
      type: String,
      default: ''
    },
    /**
     * From address.
     */
    fromAddress: {
      type: String,
      default: ''
    },
    /**
     * Amount of tx.
     */
    amount: {
      type: String,
      default: ''
    },
    /**
     * Duration of tx.
     */
    duration: {
      type: String,
      default: ''
    }
  },
  methods: {
    getClasses() {
      if (this.txStatus.toLowerCase() === this.txStatusOptions.success) {
        return 'primary';
      }
      if (this.txStatus.toLowerCase() === this.txStatusOptions.pending) {
        return 'warning darken-1';
      }
      if (this.txStatus.toLowerCase() === this.txStatusOptions.error) {
        return 'error';
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.notification-container {
  overflow: auto;

  .detail-container {
    max-width: 250px;
    width: 100%;
  }

  .right-container {
    text-align: right;
  }
  .indicator {
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    margin-right: 10px;
    width: 6px;
  }
}

.success-type {
  background-color: var(--v-superPrimary-base);
  border: 1px solid var(--v-primary-base);  
  border-radius: 6px;
}

.pending-type {
  background-color: var(--v-warning-base);
  border: 1px solid var(--v-warning-darken1);  
  border-radius: 6px;
}

.error-type {
  background-color: var(--v-errorOutlineActive-base);
  border: 1px solid var(--v-error-base);  
  border-radius: 6px;
}
</style>