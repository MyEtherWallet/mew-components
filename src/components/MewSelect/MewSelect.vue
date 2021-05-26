<template>
    <!--
  =====================================================================================
    Mew Select
  =====================================================================================
  -->
  <v-select
    height="62"
    class="mew-select"
    color="basic"
    append-icon="mdi-chevron-down"
    :items="selectItems"
    item-text="name"
    item-value="value"
    :label="label"
    :disabled="disabled"
    v-model="selectModel"
    @click="onClick"
    return-object
    :menu-props="{ bottom: true, offsetY: true, maxHeight: '419px' }"
    outlined
  >
      <!--
  =====================================================================================
    Filter for dropdown items
  =====================================================================================
  -->
    <template v-slot:prepend-item>
      <v-text-field
        v-if="hasFilter || isSwap"
        ref="filterTextField"
        height="35"
        class="px-2 mew-select-search d-flex align-center"
        color="disabled"
        :placeholder="filterPlaceholder"
        v-model="search"
        flat
        solo
        dense
        hide-details
        prepend-inner-icon="mdi-magnify"
      />
    </template>
    <template
      v-slot:selection="{ item }"
    >
      <!--
  =====================================================================================
    Select Token Placeholder
  =====================================================================================
  -->
      <div v-if="item.selectTokenLabel" class="d-flex align-center flex-row justify-space-between full-width">
        <span>{{item.text }}</span>
        <v-skeleton-loader
        class="no-pointer-events"
        v-if="loading"
        type="chip" />
        <div v-if="!loading" class="flex-row d-flex align-center">
          <img class="label-token-img" width="35" height="35" :src="url" v-for="(url, idx) in item.imgs" :key="url + idx" />
          <div
            class="total-token-placeholder inputBorder d-flex align-center justify-center mew-caption"
          >
            <span class="textSecondary--text">+{{item.total}}</span>
          </div>
        </div>
      </div>
      <!--
  =====================================================================================
    Selected item
  =====================================================================================
  -->
      <div v-if="!item.selectTokenLabel"  class="d-flex align-center justify-center">
        <v-img
          v-if="item.img"
          class="item-img selected-img"
          :src="!item.img ? ethTokenPlaceholder : item.img"
          :alt="item.name ? item.name : item"
          :contain="true"
          max-width="25"
          max-height="25"
        />
        <span class="text-capitalize mt-1 ml-2">{{ item.name ? item.name : item }} <span
          v-if="item.subtext"
          class="searchText--text text-capitalize"
        >- {{ item.subtext }}</span></span>
      </div>
    </template>
    <template v-slot:item="data">
      <!--
  =====================================================================================
    Loading Select Dropdown items
  =====================================================================================
  -->
      <v-skeleton-loader
        class="no-pointer-events mew-select-loading"
        min-width="100%"
        v-if="loading"
        type="list-item-avatar" />
      <!--
  =====================================================================================
    Default Select Dropdown items
  =====================================================================================
  -->
      <div v-if="!isSwap && !loading" class="d-flex align-center justify-center">
        <v-img
          class="item-img"
          v-on:error="onImgErr(data)"
          :src="!data.item.img ? ethTokenPlaceholder : data.item.img"
          :alt="!data.item.img ? 'token placeholder' : data.item.img"
          :contain="true"
          max-width="25"
          max-height="25"
        /> 
        <span class="text-capitalize ml-2 mt-1">{{ data.item.name ? data.item.name : data.item }} <span
          v-if="data.item.subtext"
          class="textSecondary--text text-capitalize"
        >- {{ data.item.subtext }}</span></span>
      </div>
      <!--
  =====================================================================================
    Swap Select Dropdown items
  =====================================================================================
  -->
      <div v-if="isSwap && !loading" class="d-flex align-center full-width">
      <!--
  =====================================================================================
      Empty Wallet Link
  =====================================================================================
  -->
        <div class="no-pointer-events titlePrimary--text" v-if="data.item.hasNoEth">
          {{ data.item.text }} <a class="all-pointer-events" target="_blank" :href="data.item.link">{{ data.item.linkText }}</a>
        </div>
      <!--
  =====================================================================================
    Swap Dropdown Item
  =====================================================================================
  -->
        <div class="d-flex align-center justify-space-between full-width" v-if="data.item.name">
          <div v-if="!loading" class="d-flex align-center">
            <v-img
              class="item-img"
              v-on:error="onImgErr(data)"
              :src="!data.item.img ? ethTokenPlaceholder : data.item.img"
              :alt="!data.item.img ? 'token placeholder' : data.item.img"
              :contain="true"
              max-width="25"
              max-height="25"
            /> 
            <span class="text-capitalize ml-2 my-2 d-flex flex-column">{{ data.item.symbol || data.item.name || data.item }} <span
              v-if="data.item.tokenBalance || data.item.subtext"
              class="mew-caption font-weight-regular textSecondary--text text-capitalize"
            >{{ data.item.tokenBalance ? data.item.tokenBalance + ' ' + data.item.symbol : data.item.subtext }}</span></span>
          </div>
          <div class="d-flex justify-center flex-column">
            <span>${{ data.item.totalBalance || data.item.price }}</span>
            <span class="mew-caption font-weight-regular textSecondary--text" v-if="data.item.totalBalance">@ ${{ data.item.price }}</span>
          </div>

        </div>
      </div>
    </template>
  </v-select>
</template>

<script>
import ethTokenPlaceholder from '@/assets/images/icons/eth.svg';

export default {
  name: 'MewSelect',
  props: {
    /**
     * Adds filter to select items
     */
    hasFilter: {
      type: Boolean,
      default: true //  change to false
    },
    /**
     * Filter placeholder
     */
    filterPlaceholder: {
      type: String,
      default: 'Search token name'
    },
    /**
     * MEW select value
     */
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * Disables the select dropdown.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text and value field.
     * Can also add an img attribute to the object to append an img to the value.
     * Also takes in header objs and a select token label obj, i.e. {text: 'Select Token', imgs: [], total: '', selectTokenLabel: true, divider: true}
     * Please check swapItems for more info
     * Example: { name: "Eth", subtext: "Ethereum", value: "Ethereum", img: ethIcon }
     */
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /**
     * Sets the select label
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * Applies Swap Select styles
     */
    isSwap: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      imgError: false,
      selectModel: null,
      selectItems: [],
      search: '',
      ethTokenPlaceholder: ethTokenPlaceholder
    };
  },
  watch: {
    search(newVal) {
      if (newVal === '') {
        this.selectItems = this.items;
      } else {
        const valLowerCase = newVal.toLowerCase();
        const foundItems = this.items.filter(item => {
            const name = item.hasOwnProperty('name') && item.name !== '' ? item.name.toLowerCase() : '';
            const subtext = item.hasOwnProperty('subtext') && item.subtext !== '' ? item.subtext.toLowerCase() : '';
            const value = item.hasOwnProperty('value') && item.value !== '' ? item.value.toLowerCase() : '';

            return name.includes(valLowerCase) || subtext.includes(valLowerCase) || value.includes(valLowerCase);
        })
        this.selectItems = foundItems;
      }
    },
    selectModel(newVal) {
      setTimeout(() => {
        this.search = '';
        this.selectItems = this.items;
      }, 1000)
      this.$emit('input', newVal);
    },
    value(newVal) {
      if (newVal) {
        this.selectModel = newVal;
      }
    },
    loading() {
      if (!this.loading) {
        this.togglePointerEventStyle();
        this.selectModel = this.value && Object.keys(this.value).length !== 0 ? this.value : this. defaultItem;
      }
    },
    items: {
      handler: function(newVal) {
        this.selectItems = newVal;
        this.selectModel = this.value && Object.keys(this.value).length !== 0 ? this.value : this. defaultItem;
      },
      deep: true
    }
  },
  computed: {
    defaultItem() {
      return this.items.find(obj => {
        return obj.selectTokenLabel || obj.name
      })
    }
  },
  mounted() {
    this.selectItems = this.items;
    this.selectModel = this.value && Object.keys(this.value).length !== 0 ? this.value : this. defaultItem;

  },
  methods: {
    onImgErr(data) {
      data.item.img = ethTokenPlaceholder;
    },
    clear(val) {
      this.selectModel = val ? val : this.defaultItem;
    },
    togglePointerEventStyle() {
      const elems = document.querySelectorAll("div.v-list-item--link");
      if (elems) {
        const pointerEventStyle = this.loading ? 'none' : 'all'
        for (let i = 0 ; i < elems.length ; i++) {
          elems[i].style.pointerEvents = pointerEventStyle;
        }
      }
    },
    onClick() {
      setTimeout(() => {
        this.togglePointerEventStyle();
        this.$refs.filterTextField.$refs.input.focus();
      }, 100)
    }
  }
};
</script>
<style lang="scss">
.mew-select-loading {
  .v-skeleton-loader__list-item-avatar {
    .v-skeleton-loader__avatar {
      height: 22px;
      width: 22px;
    }
    .v-skeleton-loader__text {
      height: 14px;
    }
  }
}
</style>