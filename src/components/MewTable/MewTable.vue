<template>
  <!--
=====================================================================================
  Mew Table 
=====================================================================================
-->
  <v-data-table
    :class="['mew-table', hasSelect ? 'mew-select-table' : '', hasColor ? 'mew-super-primary-table' : '']"
    :items="tableData"
    :item-key="tableHeaders.value"
    :headers="tableHeaders"
    single-select
    :show-select="hasSelect"
    hide-default-footer
    @item-selected="onSelect"
  > 
  <!--
=====================================================================================
  Displays checkboxes next to each row (hasSelect needs to be set to true)
=====================================================================================
-->
    <template v-slot:[`item.data-table-select`]="{ select, isSelected }">
      <v-simple-checkbox
        :value="isSelected"
        @input="select($event)"
        color="primary"
        on-icon="mdi-circle-slice-8"
        off-icon="mdi-circle-outline"
        :ripple="false"
      /> 
    </template>
  <!--
=====================================================================================
  Displays the token image and token title
=====================================================================================
-->
    <template v-slot:[`item.token`]="{item}">
      <div class="d-flex align-center">
        <img
          class="mr-2"
          height="20"
          v-if="item.tokenImg"
          :src="item.tokenImg"
          :alt="item.token"
        >
        <span>{{ item.token }}</span>
      </div>
    </template>
  <!--
=====================================================================================
  Displays the chart change
=====================================================================================
-->
    <template v-slot:[`item.change`]="{ item }">
      <div class="chart-container d-flex align-center">
        <!-- hiding for now because we don't have the data -->
        <!-- <mew-chart
          v-if="item.changeData"
          :data="item.changeData"
          :color="item.status === '+' ? '#05c0a5' : '#ff445b'"
        /> -->
        <span :class="[item.status === '+' ? 'primary--text' : 'error--text', 'd-flex']">{{ '%' + item.change }}
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
  <!--
=====================================================================================
  Displays the balance in ETH and USD
=====================================================================================
-->
    <template v-slot:[`item.balance`]="{ item }">
        <div class="d-flex flex-column py-2">
          <span v-for="(bal, idx) in item.balance" :key="idx" :class="idx === 1 ? 'searchText--text' : ''">{{bal}}</span>
        </div>
    </template>
  <!--
=====================================================================================
  Displays a call to action button
=====================================================================================
-->
    <template v-slot:[`item.callToAction`]="{ item }">
      <div class="d-flex flex-row py-3">
        <mew-button
          v-for="(button, idx) in item.callToAction"
          :key="idx"
          @click.native="button.method(item)"
          :title="button.title"
          :btn-style="button.btnStyle"
          :btn-colorTheme="button.colorTheme"
        />

      </div>
    </template>
  <!--
=====================================================================================
  Displays the tx hash
=====================================================================================
-->
    <template
      v-slot:[`item.txHash`]="{ item }"
    >
      <div :class="[!$vuetify.breakpoint.xs ? 'pr-3' : '']">
        <v-tooltip
          eager
          open-on-hover
          content-class="tooltip-inner"
          color="titlePrimary--text"
          top
        >
          <template v-slot:[`activator`]="{ on }">
            <a
              v-on="on"
              :href="'https://etherscan.io/tx/' + item.txHash"
              target="_blank"
              class="font-weight-medium mew-address d-flex full-width"
            >
              <mew-transform-hash :hash="item.txHash" />
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
  <!--
=====================================================================================
  Displays the address hash
=====================================================================================
-->
    <template v-slot:[`item.address`]="{ item }">
      <div class="d-flex align-center">
        <mew-blockie
          class="mr-2 d-none d-sm-flex"
          :address="item.resolvedAddr ? item.resolvedAddr : item.address"
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
              <mew-transform-hash :hash="item.address" />
              <mew-copy
                class="ml-3"
                :copy-value="item.address"
                :is-ref="false"
              />
              <a
                class="address-link"
                :href="'https://www.ethvm.com/address/' + (item.resolvedAddr ? item.resolvedAddr : item.address)"
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
</template>

<script>
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';
import MewToast from '@/components/MewToast/MewToast.vue';
import MewButton from '@/components/MewButton/MewButton.vue';
import MewChart from '@/components/MewChart/MewChart.vue';
import MewTransformHash from '@/components/MewTransformHash/MewTransformHash.vue';
import MewCopy from '@/components/MewCopy/MewCopy.vue';

export default {
  name: 'MewTable',
  components: {
    MewBlockie,
    MewToast,
    MewButton,
    MewChart,
    MewTransformHash,
    MewCopy
  },
  props: {
    /**
     * The table headers.
     */
    tableHeaders: {
      type: Array,
      default: () => []
    },
    /**
     * The table data.
     */
    tableData: {
      type: Array,
      default: () => []
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
    }
  },
  methods: {
    onSelect(item) {
      if (item.value === true) {
        this.$emit('selectedRow', item)
      }
    },
    onClick(item) {
      this.$emit('onClick', item);
    }
  }
}
</script>

<style lang="scss">
/**
  * Mew Table
  */
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
  // hiding for now because we are hiding the chart, see line 56
  // .chart-container {
  //   justify-content: flex-end;
  // }

  .v-icon {
    color: inherit;
    font-size: 18px;
  }

/**
  * Table footer
  */
  .v-data-footer {
    border-top: none;
  }

/**
  * Selected table
  */
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

/**
  * Super primary color table
  */
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

/**
  * Mobile 
  */
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