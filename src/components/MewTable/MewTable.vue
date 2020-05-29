<template>
  <div>
    <v-data-table
      :class="['mew-table', hasSelect ? 'mew-select-table' : '']"
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
      <template
        v-slot:item.txHash="{ item }"
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
              :href="'https://etherscan.io/tx/' + item.txHash"
              target="_blank"
              class="font-weight-medium mew-address"
            >{{ getEllipsis(item.txHash) }}
              <v-icon
                class="arrow-top-right"
                color="primary"
              >mdi-arrow-top-right</v-icon>
            </a>
          </template>
          <span>{{ item.txHash }}</span>
        </v-tooltip>
      </template>
      <template v-slot:item.address="{ item }">
        <div class="d-flex align-end">
          <blockie
            class="mr-2"
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
                class="address-container font-weight-medium mew-address d-flex align-end"
              >
                {{ item.address }}
                <v-icon
                  class="content-copy ml-2 cursor-pointer"
                >
                  mdi-content-copy
                </v-icon>
                <a
                  :href="'https://etherscan.io/address/' + item.address"
                  target="_blank"
                >
                  <v-icon
                    class="call-made ml-1"
                  >
                    mdi-call-made
                  </v-icon>
                </a>
              </div>
            </template>
            <span id="MewTableAddress">{{ item.address }}</span>
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
import CopyToClipboard from '@/helpers/copy.js';
import Blockie from '@/components/Blockie/Blockie.vue';

export default {
  components: {
    'blockie': Blockie
  },
  props: {
    tableHeaders: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hasSelect: {
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
    getEllipsis(str) {
      return str.substr(0, 6) + '...' + str.substr(str.length-7, str.length);
    },
    onSelect(item) {
      if (item.value === true) {
        this.$emit('selectedRow', item)
      }
    },
    copyToClipboard() {
      CopyToClipboard('MewTableAddress');
      this.$refs.toast.showToast();
    }
  }
}
</script>

<style lang="scss">
.mew-table {
  table {
    border: 1px solid var(--v-selectHover-base);
    border-radius: 4px;
    table-layout: fixed;
    .v-data-table-header {
      background-color: var(--v-selectHover-base);
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
  }
  .v-data-footer {
    border-top: none;
  }

  .v-simple-checkbox {
    i {
      color: var(--v-searchText-base);
    }
  }

  .address-container {
    a {
      color: inherit;
    }
  }

  .v-icon {
    color: inherit;
    font-size: 18px;
  }

  // selected table
  &.mew-select-table {
    tbody {
      tr:nth-of-type(odd) {
        background-color: var(--v-swapDisable-base) !important;
      }
      td {
        color: var(--v-searchText-base) !important;
      }
      .v-icon.content-copy {
        margin-bottom: 5px;
      }
      .v-icon.call-made {
        font-size: 21px;
        margin-bottom: 2px;
      }
    }
    .v-data-table__selected {
      background: inherit !important;
      td {
        color: var(--v-basic-base) !important;
      }
    }
  }
}
</style>