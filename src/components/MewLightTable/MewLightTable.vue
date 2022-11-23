<template>
  <div>
    <!-- ==================================================================== -->
    <!-- Desktop table -->
    <!-- ==================================================================== -->
    <div 
      v-if="!isMobile"
      class="mt-4 mb-4 core-components--app-table box-shadow border-bottom"
      :style="containerStyle"
    >
      <div
        v-if="title"
        class="font-weight-bold mt-6 ml-5 mb-10"
      >
        {{ title }}
      </div>
      <table v-if="!loading">
        <thead>
          <tr>
            <td
              v-for="(header, dataKey) in tableHeaders"
              :key="dataKey"
            >
              {{ header }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(td, dataKey) in tableData"
            :key="dataKey"
          >
            <td v-if="td.token">
              <div
                class="d-flex align-center"
              >
                <mew-token-container
                  v-if="td.tokenImg"
                  :img="td.tokenImg"
                  size="22px"
                  class="mr-2"
                />
                {{ td.token }}
              </div>
            </td>
            <td>
              <div v-if="td.price">
                {{ td.price }}
                <span
                  style="font-size: 12px"
                  class="textLight--text"
                >/ token</span>
              </div>
            </td>
            <td>{{ td.cap }}</td>
            <td>
              <div v-if="td.change">
                <div
                  v-if="td.status == '+'"
                  class="d-flex align-center"
                >
                  <div class="greenPrimary--text">
                    {{ td.change }}%
                  </div>
                  <v-icon
                    small
                    color="greenPrimary"
                  >
                    mdi-arrow-up-thick
                  </v-icon>
                </div>
                <div
                  v-else
                  class="d-flex align-center"
                >
                  <div class="redPrimary--text">
                    {{ td.change }}%
                  </div>
                  <v-icon
                    small
                    color="redPrimary"
                  >
                    mdi-arrow-down-thick
                  </v-icon>
                </div>
              </div>
            </td>
            <td>
              <div>{{ td.balance[0] }}</div>
              <div
                style="font-size: 12px; margin-top: -2px"
                class="textLight--text"
              >
                {{ td.balance[1] }}
              </div>
            </td>
            <td>
              <template v-if="td.callToAction">
                <v-btn
                  v-for="(button, idx) in td.callToAction"
                  :key="idx"
                  small
                  depressed
                  outlined
                  color="greenPrimary"
                  @click="button.method(td)"
                >
                  {{ button.title }}
                </v-btn>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- ==================================================================== -->
      <!-- Loading state -->
      <!-- ==================================================================== -->
      <div
        v-if="loading"
        class="skeleton-loader-container"
      >
        <div
          v-for="n in Number(loaderCount)"
          :key="n"
        >
          <v-skeleton-loader
            width="100%"
            type="heading"
          />
        </div>
      </div>
    </div>

    <!-- ==================================================================== -->
    <!-- Mobile table -->
    <!-- ==================================================================== -->
    <div
      v-else
      v-for="(td, dataKey) in tableDataPaginated"
      :key="dataKey"
      class="mx-4 mt-2 core-components--app-table border-around padding-around round-corner mobile-background box-shadow"
      :style="containerStyle"
    >
      <div
        v-if="title"
        class="font-weight-bold mt-6 ml-5 mb-10"
      >
        {{ title }}
      </div>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="mew-label font-weight-bold">
          Token
        </div>
        <div class="mew-label d-flex align-center">
          <mew-token-container
            :img="td.tokenImg"
            size="17px"
            class="mr-2"
          />
          {{ td.token }}
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="mew-label font-weight-bold">
          Price
        </div>
        <div class="mew-label">
          {{ td.price }}
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="mew-label font-weight-bold">
          Market Cap
        </div>
        <div class="mew-label">
          {{ td.cap }}
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="mew-label font-weight-bold">
          24H
        </div>
        <div class="mew-label">
          <div class="d-flex align-center">
            <div class="mew-label">
              {{ td.change ? `${td.change}%` : '' }}
            </div>
            <v-icon
              v-if="td.status == '+'"
              small
              color="greenPrimary"
            >
              mdi-arrow-up-thick
            </v-icon>
            <v-icon
              v-else-if="td.change !== '' && td.status === '-'"
              small
              color="redPrimary"
            >
              mdi-arrow-down-thick
            </v-icon>
          </div>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-1">
        <div class="mew-label font-weight-bold">
          Balance
        </div>
        <div class="mew-label d-flex align-center">
          {{ td.balance[0] }} {{ td.balance[1] }}
        </div>
      </div>
      <div class="text-right mt-3">
        <template v-if="td.callToAction">
          <v-btn
            v-for="(button, idx) in td.callToAction"
            :key="idx"
            outlined
            color="greenPrimary"
            small
            depressed
            @click="button.method(td)"
          >
            <div class="greenPrimary--text mew-label text-transform--none">
              {{ button.title }}
            </div>
          </v-btn>
        </template>
      </div>
      <!-- ==================================================================== -->
      <!-- Loading state -->
      <!-- ==================================================================== -->
      <div
        v-if="loading"
        class="skeleton-loader-container"
      >
        <div
          v-for="n in Number(loaderCount)"
          :key="n"
        >
          <v-skeleton-loader
            width="100%"
            type="heading"
          />
        </div>
      </div>
    </div>
    <!-- ==================================================================== -->
    <!-- Pagination for both desktop and mobile -->
    <!-- ==================================================================== -->
    <v-pagination
      v-if="pageLength && false"
      v-model="page"
      class="mt-6"
      :length="pageLength"
    />
  </div>
</template>

<script>
import MewTokenContainer from '@/components/MewTokenContainer/MewTokenContainer.vue';

export default {
  name: 'MewLightTable',
  components: {MewTokenContainer},
  props: {
    /**
     * Applies skeleton loader
     */
    loading: {
      type: Boolean,
      default: false
    },
    loaderCount: {
      type: [String, Number],
      default: 1
    },
    title: {
      type: String,
      default: ''
    },
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
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    // isMobile() {
    //   return this.$vuetify.breakpoint.mdAndDown;
    // },
    pageLength() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
    tableDataPaginated() {
      return this.paginate(this.tableData, this.itemsPerPage, this.page);
    },
    containerStyle() {
      return {
        display: 'block'
      };
    }
  },
  methods: {
    paginate(array, pageSize, pageNumber) {
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
  }
};
</script>

<style lang="scss">
.core-components--app-table {
  // Force style Vuetify skeleton loader
  .v-skeleton-loader__heading {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
.skeleton-loader-container {
  & > div {
    display: flex;
    align-items: center;
    height: 58px;
    padding: 0px 20px;
  }
}
// Default styles
.core-components--app-table {
  --bg-color: #f4f7fe;
  --hover-color: #eaeffb;
  --border-color: #e0e5f2;
  --shadow-color: rgba(0, 0, 0, 0.15);
  table {
    border-collapse: collapse;
    width: 100%;
    thead {
      border-bottom: 1px solid var(--border-color);
      font-size: 12px;
      color: #76848b;
      font-weight: 500;
    }
    td {
      height: 58px;
      padding: 0px 20px;
    }
  }
}
// Options by props
.box-shadow {
  box-shadow: 0 2px 6px var(--shadow-color);
}
.border-around {
  border: 1px solid var(--border-color);
}
.border-top-bottom {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.border-top {
  border-top: 1px solid var(--border-color);
}
.border-bottom {
  border-bottom: 1px solid var(--border-color);
}
.hover-effect {
  tbody {
    tr:hover {
      background-color: var(--hover-color) !important;
    }
  }
}
.alteranting-background {
  tbody {
    tr:nth-child(odd) {
      background-color: var(--bg-color);
    }
  }
}
.loading {
  tbody {
    display: none;
  }
}
.divider {
  tbody {
    tr:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  }
}
.padding-around {
  padding: 15px 15px 15px 15px;
}
.padding-side {
  padding: 0px 10px;
}
.round-corner {
  border-radius: 8px;
  overflow: hidden;
}
.mobile-background {
  background-color: var(--v-blueLight-base);
}
.no-table-padding {
  table {
    td {
      padding: 0 !important;
    }
    td:first-child {
      padding-left: 15px !important;
    }
    td:last-child {
      padding-right: 15px !important;
    }
  }
}
</style>