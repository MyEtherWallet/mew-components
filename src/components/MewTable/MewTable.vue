<template>
  <div>
    <v-data-table
      :class="['mew-table', hasSelect ? 'mew-select-table' : '', hasColor ? 'mew-super-primary-table' : '']"
      :items="tableData"
      :item-key="tableHeaders[0].value"
      :headers="tableHeaders"
      :calculate-widths="true"
      :single-select="true"
      :show-select="hasSelect"
      hide-default-footer
      @item-selected="onSelect"
    > 
      <template v-slot:item.data-table-select="{ select, isSelected }">
        <v-simple-checkbox
          :value="isSelected"
          @input="select($event)"
          color="primary"
          on-icon="mdi-circle-slice-8"
          off-icon="mdi-circle-outline"
          :ripple="false"
        /> 
      </template>
      <template v-slot:item.token="{item}">
        <div class="d-flex align-center">
          <img
            height="20"
            v-if="item.tokenImg"
            :src="item.tokenImg"
            :alt="item.token"
          >
          <span>{{ item.token }}</span>
        </div>
      </template>
      <template v-slot:item.change="{ item }">
        <div class="chart-container d-flex align-center">
          <mew-chart
            v-if="item.changeData"
            :data="item.changeData"
            :color="item.status === '+' ? '#05c0a5' : '#ff445b'"
          />
          <span :class="[item.status === '+' ? 'primary--text' : 'error--text', 'pl-3', 'd-flex']">{{ item.change }}
            <v-icon
              class="primary--text"
              v-if="item.status === '+'"
            >mdi-arrow-up-thick</v-icon>
            <v-icon
              class="error--text"
              v-if="item.status === '-'"
            >mdi-arrow-down-thick</v-icon>
          </span>
        </div>
      </template>
      <template v-slot:item.callToAction="{ item }">
        <mew-btn
          @click.native="onClick(item)"
          :title="item.callToAction"
          btn-style="transparent"
        />
      </template>
      <template
        v-slot:item.txHash="{ item }"
      >
        <div :class="[!$vuetify.breakpoint.xs ? 'pr-3' : '']">
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
                :href="'https://etherscan.io/tx/' + item.txHash"
                target="_blank"
                class="font-weight-medium mew-address d-flex full-width"
              >
                <transform-hash :hash="item.txHash" />
                <v-icon
                  class="arrow-top-right"
                  color="primary"
                >mdi-arrow-top-right</v-icon>
              </a>
            </template>
            <span>{{ item.txHash }}</span>
          </v-tooltip>
        </div>
      </template>
      <template v-slot:item.address="{ item }">
        <div class="d-flex align-center">
          <blockie
            class="mr-2 d-none d-sm-flex"
            :address="item.address"
            width="25px"
            height="25px"
          />
          <v-tooltip
            eager
            open-on-hover
            content-class="tooltip-inner"
            color="titlePrimary--text"
            top
          >
            <template v-slot:activator="{ on }">
              <div
                v-on="on"
                class="address-container font-weight-medium mew-address d-flex"
              >
                <transform-hash :hash="item.address" />
                <v-icon 
                  @click="copyToClipboard('mew-table-address')"
                  class="content-copy cursor-pointer ml-1"
                >
                  mdi-content-copy
                </v-icon>
                <a
                  class="address-link"
                  :href="'https://etherscan.io/address/' + item.address"
                  target="_blank"
                >
                  <v-icon
                    class="call-made"
                  >
                    mdi-call-made
                  </v-icon>
                </a>
              </div>
            </template>
            <span id="mew-table-address">{{ item.address }}</span>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
    <toast
      ref="toast"
      :duration="2000"
      toast-type="success"
      :text="successToast"
    />
  </div>
</template>

<script>
import copy from '@/helpers/copy.js';
import Blockie from '@/components/Blockie/Blockie.vue';
import Toast from '@/components/Toast/Toast.vue';
import MewButton from '@/components/MewButton/MewButton.vue';
import MewChart from '@/components/MewChart/MewChart.vue';
import TransformHash from '@/components/TransformHash/TransformHash.vue';

export default {
  components: {
    'blockie': Blockie,
    'toast': Toast,
    'mew-btn': MewButton,
    'mew-chart': MewChart,
    'transform-hash': TransformHash
  },
  props: {
    /**
     * The table headers.
     */
    tableHeaders: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * The table data.
     */
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * Applies select button to each row. 
     */
    hasSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Applies superPrimary color to table.
     */
    hasColor: {
      type: Boolean,
      default: false
    },
    /**
     * Text for toast success.
     */
    successToast: {
      type: String,
      default: ''
    }
  },
  methods: {
    onSelect(item) {
      if (item.value === true) {
        this.$emit('selectedRow', item)
      }
    },
    copyToClipboard(id) {
      copy(id, false);
      this.$refs.toast.showToast();
    },
    onClick(item) {
      this.$emit('onClick', item);
    }
  }
}
</script>

<style lang="scss">
// mew-table
.mew-table {
  &.v-data-table {
    background-color: var(--v-mewBg-base);
  }
  table {
    border: 1px solid var(--v-selectHover-base);
    border-radius: 4px;
    table-layout: fixed;
    .v-data-table-header {
      background-color: var(--v-tableHeader-base);
      th {
        border-bottom: none !important;
        font-size: 11px;
        font-weight: bold;
        height: 25px;
        text-transform: uppercase;
        span {
          color: var(--v-searchText-base) !important;
        }
      }
    }
    .address-container {
      width: 80%;
    }
  }
  .chart-container {
    justify-content: flex-end;
  }

  .v-icon {
    color: inherit;
    font-size: 18px;
  }

  // for table footer
  .v-data-footer {
    border-top: none;
  }

  // selected table
  .v-simple-checkbox {
    i {
      color: var(--v-searchText-base);
    }
  }

  .address-link {
    color: inherit;
  }

  
  &.mew-select-table {
    tbody {
      tr:nth-of-type(odd) {
        background-color: var(--v-swapDisable-base) !important;
      }
      td {
        color: var(--v-searchText-base) !important;
      }
      .v-icon.call-made {
        font-size: 21px;
      }
    }
    .v-data-table__selected {
      background: inherit !important;
      td {
        color: var(--v-basic-base) !important;
      }
    }
  }

  // super primary table
  &.mew-super-primary-table {
    thead {
      tr {
        background-color: var(--v-superPrimary-darken1);
      }
    }
    tbody {
      tr {
        background-color: var(--v-superPrimary-base);
        &:hover {
          background-color: var(--v-primaryOutlineActive-base) !important;
        }
      }
    }
  }
}

// for mobile
.v-data-table__mobile-row__cell {
  width: 60%;

  div, a {
    justify-content: flex-end;
  }
}

.v-data-table-header-mobile {
  tr > th {
    width: 100%;
  }
}
</style>