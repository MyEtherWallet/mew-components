<template>
  <div class="mew-components--mew-notification">
    <!-- ===================================================================================== -->
    <!-- NEW -->
    <!-- ===================================================================================== -->
    <div class="notification-container">
      <v-expansion-panels flat>
        <v-expansion-panel
          :class="
            getBorderClasses(
              notification.status.value.toLowerCase(),
              notification.read
            )
          "
        >
          <v-expansion-panel-header
            hide-actions
            class="px-2 py-0"
            :color="backgroundColor"
          >
            <v-container
              fluid
              class="px-0"
            >
              <v-row dense>
                <v-col
                  class="d-flex align-center"
                  cols="8"
                >
                  <!-- ===================================================================================== -->
                  <!-- Displays indicator if notification not read -->
                  <!-- ===================================================================================== -->
                  <div
                    v-if="
                      $vuetify.breakpoint.smAndUp &&
                        !notification.read &&
                        showIndicator
                    "
                    :class="[
                      getClasses(notification.status.value.toLowerCase()),
                      'indicator',
                      'ml-2',
                      'd-none',
                      'd-sm-flex'
                    ]"
                  />

                  <!-- ===================================================================================== -->
                  <!-- Displays blockie if it is not a swap notification -->
                  <!-- ===================================================================================== -->
                  <mew-blockie
                    v-if="!isSwap"
                    class="d-flex ml-2"
                    width="24px"
                    height="24px"
                    :address="notification.from.value"
                  />

                  <!-- ===================================================================================== -->
                  <!-- Displays swap icons if it is a swap notification -->
                  <!-- ===================================================================================== -->
                  <div
                    v-else
                    class="d-flex flex-column currency-symbol ml-2"
                  >
                    <MewTokenContainer
                      :img="
                        notification.fromObj.icon
                          ? notification.fromObj.icon
                          : ethTokenPlaceholder
                      "
                      token-border
                    />
                    <MewTokenContainer
                      :img="notification.toObj.icon"
                      class="overlap"
                      token-border
                    />
                  </div>

                  <!-- ===================================================================================== -->
                  <!-- Displays different notification info based on notification type -->
                  <!-- ===================================================================================== -->
                  <div
                    :class="['detail-container pr-1', isSwap ? 'ml-5' : 'ml-2']"
                  >
                    <div v-if="!isSwap">
                      <div class="caption font-weight-medium d-flex">
                        {{ notification.from.string }}:
                        <mew-transform-hash
                          :hash="notification.from.value"
                          class="ml-1 detail-hash"
                        />
                      </div>

                      <div class="caption font-weight-medium d-flex">
                        {{ notification.amount.string }}:
                        {{ notification.amount.value }}
                      </div>
                    </div>
                    <div v-else>
                      <div class="caption font-weight-medium d-flex">
                        {{ notification.to.string }}:
                        <mew-transform-hash
                          :hash="notification.toObj.to"
                          class="ml-1 detail-hash"
                        />
                      </div>
                      <div class="caption mew-heading-2 mr-3 align-center">
                        <div
                          class="mr-1 line-height-initial d-flex amount-font"
                        >
                          {{ fromAmount }}
                          <span class="textPrimary--text ml-1">{{
                            notification.fromObj.currency
                          }}</span>
                        </div>
                        <div
                          class="amount-container amount-font mr-3 d-flex line-height-initial"
                        >
                          <v-icon class="subtitle-1 mr-1">
                            mdi-arrow-right
                          </v-icon>
                          {{ toAmount }}
                          <span class="textPrimary--text ml-1">{{
                            notification.toObj.currency
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col
                  cols="4"
                  class="text-right pr-2"
                >
                  <mew-badge
                    :badge-title="notification.type.string"
                    :badge-type="getBadgeType"
                  />
                  <div
                    class="caption mt-1 textPrimary--text font-weight-medium"
                  >
                    {{ notification.timestamp.value }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-header>

          <v-expansion-panel-content
            class="pa-0"
            :color="backgroundColor"
          >
            <div class="expanded-container capitalize">
              <v-container>
                <v-row
                  v-for="(detail, idx) in getDetails"
                  :key="idx"
                >
                  <v-col
                    cols="6"
                    class="textPrimary--text"
                  >
                    {{ detail.string }}:
                  </v-col>
                  <v-col
                    v-if="!isHash(detail.string)"
                    cols="6"
                    :class="[getClasses(detail.value) + '--text', 'text-right']"
                  >
                    {{ detail.value }}
                  </v-col>
                  <v-col
                    v-if="isHash(detail.string)"
                    cols="6"
                    class="text-right"
                  >
                    <mew-tooltip
                      content-class="tooltip-inner"
                      color="titlePrimary--text"
                      max-width="550px"
                      hide-icon
                    >
                      <template #activatorSlot="{ on }">
                        <a
                          :href="detail.link"
                          target="_blank"
                          v-on="on"
                        >
                          <mew-transform-hash :hash="detail.value" />
                        </a>
                      </template>
                      <template #contentSlot>
                        <span>{{ detail.value }}</span>
                      </template>
                    </mew-tooltip>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import MewTokenContainer from '@/components/MewTokenContainer/MewTokenContainer.vue';
import MewBadge from '@/components/MewBadge/MewBadge.vue';
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';
import MewTransformHash from '@/components/MewTransformHash/MewTransformHash.vue';
import ethTokenPlaceholder from '@/assets/images/icons/eth.svg';
import MewTooltip from '@/components/MewTooltip/MewTooltip.vue';

export default {
  name: 'MewNotification',
  components: {
    MewTokenContainer,
    MewBadge,
    MewBlockie,
    MewTransformHash,
    MewTooltip
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
            currency: '',
            amount: '',
            icon: ''
          },
          toObj: {
            currency: '',
            amount: '',
            icon: '',
            to: ''
          },
          read: false
        };
      }
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ethTokenPlaceholder: ethTokenPlaceholder,
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
    };
  },
  computed: {
    fromAmount() {
      return this.notification.fromObj.amount.length > 10
        ? this.notification.fromObj.amount.slice(0, 9 - 1) + '...'
        : this.notification.fromObj.amount;
    },
    toAmount() {
      return this.notification.toObj.amount.length > 10
        ? this.notification.toObj.amount.slice(0, 9 - 1) + '...'
        : this.notification.toObj.amount;
    },
    backgroundColor() {
      if (this.$vuetify.theme.dark) {
        return 'buttonGrayLight';
      }
      if (this.notification.status.value == this.txStatusOptions.pending) {
        return 'warning';
      }
      if (this.notification.status.value == this.txStatusOptions.failed) {
        return 'error lighten-1';
      }
      return 'buttonGrayLight';
    },
    getBadgeType() {
      const type = this.notification.type.value.toLowerCase();
      return this.txTypes[type];
    },
    getDetails() {
      const details = [],
        detailTypes = [
          'txHash',
          'gasPrice',
          'gasLimit',
          'total',
          'timestamp',
          'status'
        ];
      for (const key in this.notification) {
        if (detailTypes.indexOf(key) >= 0) {
          details.push(this.notification[key]);
        }
      }
      return details;
    },
    isSwap() {
      return this.notification.type.value.toLowerCase() === this.txTypes.swap;
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
        return 'error';
      }
    },
    getBorderClasses(status, read) {
      if (status === this.txStatusOptions.success) {
        if (read) {
          return 'success-type read';
        }
        return 'success-type';
      }
      if (status === this.txStatusOptions.pending) {
        if (read) {
          return 'sucpendingcess-type read';
        }
        return 'pending-type';
      }
      if (status === this.txStatusOptions.failed) {
        if (read) {
          return 'failed-type read';
        }
        return 'failed-type';
      }
    }
  }
};
</script>

<style lang="scss">
.mew-components--mew-notification {
  .v-expansion-panel-content__wrap {
    padding: 10px !important;
  }
}
</style>

<style lang="scss" scoped>
.amount-font {
  font-size: 12px;
}
.warning,
.error,
.primary {
  border-radius: 0 !important;
}

.v-expansion-panel {
  overflow: hidden;
}

.notification-container {
  .detail-container {
    max-width: 85%;

    .detail-hash {
      max-width: 60%;
    }
  }

  .indicator {
    border-radius: 50% !important;
    display: table;
    height: 6px;
    width: 6px;
  }

  .expanded-container {
    .container {
      border-top: 1px solid var(--v-inputBorder-base);
    }
  }
}

.success-type {
  //background-color: var(--v-superPrimary-base);
  border: 1px solid var(--v-primary-base);
  &.expanded {
    border: 1px solid var(--v-superPrimary-base);
  }

  &.read {
    border: 1px solid var(--v-superPrimary-base);
  }
}

.pending-type {
  //background-color: var(--v-warning-base);
  border: 1px solid var(--v-warning-darken1);
  &.expanded {
    border: 1px solid var(--v-warning-base);
  }

  &.read {
    border: 1px solid var(--v-warning-base);
  }
}

.failed-type {
  //background-color: var(--v-error-lighten1);
  border: 1px solid var(--v-error-base);
  &.expanded {
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
    left: 15px;
  }
}

.line-height-initial {
  line-height: initial;
}
</style>
