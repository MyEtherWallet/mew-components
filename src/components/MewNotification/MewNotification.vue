<template>
  <!--
  =====================================================================================
    Mew Notifications
  =====================================================================================
  -->
  <div
    @click="onToggle"
    :class="[active ? 'activated' : '', notification.status.value + '-type', 'notification-container', 'px-3', 'titlePrimary--text', notification.read ? 'read' : '']"
  >
    <v-container fluid>
      <v-row>
        <v-col
          class="d-flex align-center"
          cols="6"
        >
          <!--
  =====================================================================================
    Displays indicator if notification not read
  =====================================================================================
  -->
          <div
            :class="[ getClasses(notification.status.value.toLowerCase()), 'indicator', 'd-none', 'd-sm-flex']"
            v-if="!notification.read"
          />
          <!--
  =====================================================================================
   Displays blockie if it is not a swap notification 
  =====================================================================================
  -->
          <mew-blockie
            class="d-flex"
            v-if="!isSwap"
            width="30px"
            height="30px"
            :address="notification.from.value"
          />
          <!--
  =====================================================================================
   Displays swap icons if it is a swap notification 
  =====================================================================================
  -->
          <div
            v-else
            class="d-flex flex-column currency-symbol"
          >
            <img
              :src="notification.fromObj.icon"
              width="30px"
              height="30px"
            >
            <img
              :src="notification.toObj.icon"
              width="30px"
              height="30px"
              class="overlap"
            >
          </div>
          <!--
  =====================================================================================
   Displays different notification info based on notification type
  =====================================================================================
  -->
          <div class="ml-5 detail-container full-width">
            <div v-if="!isSwap">
              <div
                class="caption font-weight-medium d-flex"
              >
                {{ notification.from.string }}: <mew-transform-hash :hash="notification.from.value" /> 
              </div>
              <div
                class="caption font-weight-medium d-flex"
              >
                {{ notification.amount.string }}: {{ notification.amount.value }}
              </div>
            </div>
            <div v-else>
              <div
                class="caption font-weight-medium d-flex"
              >
                {{ notification.to.string }}: <mew-transform-hash :hash="notification.toObj.to" /> 
              </div>
              <div
                class="caption mew-heading-2 d-flex"
              >
                {{ notification.fromObj.amount }} {{ notification.fromObj.currency }}
                <v-icon
                  class="subtitle-1 ml-1"
                >
                  mdi-arrow-right
                </v-icon>
                {{ notification.toObj.amount }} {{ notification.toObj.currency }}
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          class="text-right"
        >
          <mew-badge
            :badge-title="notification.type.string"
            :badge-type="getBadgeType"
          />
          <div class="caption mt-1 textPrimary--text font-weight-medium">
            {{ notification.timestamp.value }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!--
  =====================================================================================
   Displays more info if the notification is expanded
  =====================================================================================
  -->
    <div
      class="activated-container capitalize"
      v-if="active"
    >
      <v-container>
        <v-row
          v-for="(detail, idx) in getDetails"
          :key="idx"
        >
          <v-col cols="6">
            {{ detail.string }}: 
          </v-col>
          <v-col
            cols="6"
            :class="[getClasses(detail.value) + '--text', 'text-right']"
            v-if="!isHash(detail.string)"
          >
            {{ detail.value }}
          </v-col>
          <v-col
            cols="6"
            class="text-right"
            v-if="isHash(detail.string)"
          >
            <v-tooltip
              eager
              open-on-hover
              content-class="tooltip-inner"
              color="titlePrimary--text"
              top
            >
              <template v-slot:activator="{ on }">
                <a
                  v-on="on"
                  :href="detail.link"
                  target="_blank"
                > <mew-transform-hash :hash="detail.value" /> </a>
              </template>
              <span>{{ detail.value }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import MewBadge from '@/components/MewBadge/MewBadge.vue';
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';
import MewTransformHash from '@/components/MewTransformHash/MewTransformHash.vue';

export default {
  name: 'MewNotification',
  components: {
    MewBadge,
    MewBlockie,
    MewTransformHash
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
        failed: 'failed'
      },
      hashType: 'Transaction Hash'
    }
  },
  computed: {
    getBadgeType() {
      const type = this.notification.type.value.toLowerCase()
      return this.txTypes[type]
    },
    getDetails() {
      const details = [], detailTypes = ['txHash', 'gasPrice', 'gasLimit', 'total', 'timestamp', 'status']
      for (const key in this.notification) {
        if (detailTypes.indexOf(key) >= 0) {
          details.push(this.notification[key])
        }
      }
      return details;
    },
    isSwap() {
      return this.notification.type.value.toLowerCase() === this.txTypes.swap;
    }
  },
  props: {
    /**
     * Takes an object of notification information
     * i.e. { txHash: { value: '', string: '' },
     *        gasPrice: { value: '', string: '' }, gasLimit: { value: '', string: '' }, 
     *        total: { value: '', string: '' }, from: { value: '', string: '' },
     *        to: { value: '', string: '' }, amount: { value: '', string: '' },
     *        timestamp: { value: '', string: '' }, status: { value: '', string: '' },
     *        type: { value: '', string: '' }, fromObj: { currency: '', amount: '', icon: ''},
     *        toObj: { currency: '', amount: '', icon: ''}, read: boolean }
     */
    notification: {
      type: Object,
      default: () => {
        return {
          txHash: {
            value: '',
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
          },
          from: {
            value: '',
            string: ''
          },
          to: {
            value: '',
            string: ''
          },
          amount: {
            value: '',
            string: ''
          },
          timestamp: {
            value: '',
            string: ''
          },
          status: {
            value: '',
            string: ''
          },
          type: {
            value: '',
            string: ''
          },
          fromObj: {
            'currency': '',
            'amount': '',
            'icon': ''
          },
          toObj: {
            'currency': '',
            'amount': '',
            'icon': '',
            'to': ''
          },
          read: false
        }
      }
    }
  },
  methods: {
    isHash(type) {
      return type === this.hashType;
    },
    getClasses(status) {
      if (status === this.txStatusOptions.success) {
        return 'primary';
      }
      if (status === this.txStatusOptions.pending) {
        return 'text--darken-1 darken-1 warning';
      }
      if (status === this.txStatusOptions.failed) {
        return 'failed';
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
  border-radius: 6px;
  overflow: auto;

  .detail-container {
    max-width: 250px;
  }

  .indicator {
    border-radius: 50%;
    display: table;
    height: 6px;
    margin-right: 10px;
    width: 6px;
  }

  .activated-container {
    .container {
      border-top: 1px solid var(--v-inputBorder-base);
    }

  }
}

.success-type {
  background-color: var(--v-superPrimary-base);
  border: 1px solid var(--v-primary-base);  
  &.activated {
    border: 1px solid var(--v-superPrimary-base);
  }

  &.read {
    border: 1px solid var(--v-superPrimary-base);
  }
}

.pending-type {
  background-color: var(--v-warning-base);
  border: 1px solid var(--v-warning-darken1);  
  &.activated {
    border: 1px solid var(--v-warning-base);
  }

  &.read {
    border: 1px solid var(--v-warning-base);
  }
}

.failed-type {
  background-color: var(--v-error-lighten1);
  border: 1px solid var(--v-error-base); 
  &.activated {
    border: 1px solid var(--v-error-lighten1);
  }

  &.read {
    border: 1px solid var(--v-error-lighten1);
  } 
}

.currency-symbol {
  position: relative;
  width: 35px;

  img {
    border-radius: 50%;
  }
  .overlap {
      position: absolute;
      left: 14px;
  }
}
</style>