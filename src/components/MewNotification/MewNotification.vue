<template>
  <div
    @click="onToggle"
    :class="[active ? 'activated' : '', notification.status.value + '-type', 'notification-container']"
  >
    <div class="d-flex justify-space-between align-center pa-4  ">
      <div class="d-flex align-center">
        <div :class="[ getClasses(notification.status.value.toLowerCase()), 'indicator']" />
        <blockie
          v-if="notification.type.string.toLowerCase() !== txTypes.swap"
          width="30px"
          height="30px"
          address="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
        />
        <div class="ml-5 detail-container full-width">
          <!-- need to translate -->
          <div class="caption titlePrimary--text font-weight-medium d-flex">
            {{ notification.from.string }}: <span class="mew-address font-weight-medium ml-1"><transform-hash :hash="notification.from.value" /> </span>
          </div>
          <div class="caption titlePrimary--text font-weight-medium d-flex">
            {{ notification.amount.string }}: {{ notification.amount.value }}
          </div>
        </div>
      </div>
      <div class="text-right">
        <tx-badge
          :badge-title="notification.type.string"
          :badge-type="getBadgeType"
        />
        <div class="caption mt-1 textPrimary--text font-weight-medium">
          {{ notification.timestamp.string }}
        </div>
      </div>
    </div>
    <div
      class="px-8 activated-container"
      v-if="active"
    >
      <hr>
      <!-- <v-container>
        <v-row>
          <v-col>
            {{ string.txHash }}: 
          </v-col>
          <v-row>
          <v-col>
            {{ string.txHash }}: 
          </v-col>
        </v-row>
      </v-container> -->
    </div>
  </div>
</template>

<script>
import TxBadge from '@/components/TxBadge/TxBadge.vue';
import Blockie from '@/components/Blockie/Blockie.vue';
import TransformHash from '@/components/TransformHash/TransformHash.vue';

export default {
  name: 'MewNotification',
  components: {
    'tx-badge': TxBadge,
    'blockie': Blockie,
    'transform-hash': TransformHash
  },
  data() {
    return {
      active: false,
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
  computed: {
    getBadgeType() {
      const type = this.notification.type.string.toLowerCase()
      return this.txTypes[type]
    }
  },
  mounted() {
    console.error('this', this.notification)
  },
  props: {
    /**
     * Notification data (Badge type: 'txIn', 'txOut', 'swap'; status: 'success', 'pending', 'error')
     * 
     */
    notification: {
      type: Object,
      default: function() {
        return {
          amount: {
            value: '',
            string: ''
          },
          timestamp: {
            value: '',
            string: ''
          },
          from: {
            value: '',
            string: ''
          },
          to: {
            value: '',
            string: ''
          },
          status: {
            value: '',
            string: ''
          },
          txHash: {
            value: '',
            string: ''
          },
          type: {
            string: ''
          }, 
          gasPrice: {
            value: '',
            string: ''
          },
          gasLimit: {
            value: '',
            string: ''
          },
          total: {
            value: '',
            string: ''
          }
        };
      }
    }
  },
  methods: {
    getClasses(status) {
      if (status === this.txStatusOptions.success) {
        return 'primary';
      }
      if (status === this.txStatusOptions.pending) {
        return 'warning darken-1';
      }
      if (status === this.txStatusOptions.error) {
        return 'error';
      }
    },
    onToggle() {
      this.active = !this.active;
    }
  }
}
</script>


<style lang="scss" scoped>
.notification-container {
  &.activated {
    border: none;
  }
  border-radius: 6px;
  overflow: auto;

  .detail-container {
    max-width: 250px;
  }

  .indicator {
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    margin-right: 10px;
    width: 6px;
  }

  .activated-container {
    hr {
      border: 1px solid var(--v-inputBorder-base);
    }

  }
}

.success-type {
  background-color: var(--v-superPrimary-base);
  border: 1px solid var(--v-primary-base);  
}

.pending-type {
  background-color: var(--v-warning-base);
  border: 1px solid var(--v-warning-darken1);  
}

.error-type {
  background-color: var(--v-error-lighten1);
  border: 1px solid var(--v-error-base);  
}
</style>