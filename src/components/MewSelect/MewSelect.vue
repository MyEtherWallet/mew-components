<template>
  <div>
    <v-select
      height="62"
      class="mew-select"
      color="basic"
      append-icon="mdi-chevron-down"
      :disabled="disabled"
      :items="selectItems"
      item-text="name"
      item-value="value"
      :label="label"
      v-model="selectModel"
      return-object
      :menu-props="{ bottom: true, offsetY: true}"
      outlined
    >
      <template v-slot:prepend-item>
        <v-text-field
          v-if="hasFilter"
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
        <div class="d-flex align-center justify-center">
          <v-img
            v-if="item.img"
            class="item-img selected-img"
            :src="item.img"
            :alt="item.name ? item.name : item"
            :contain="true"
            max-width="25"
            max-height="25"
          />
          <span class="text-capitalize mt-1">{{ item.name ? item.name : item }} <span
            v-if="item.subtext"
            class="searchText--text text-capitalize"
          >- {{ item.subtext }}</span></span>
        </div>
      </template>
      <template v-slot:item="data">
        <div class="d-flex align-center justify-center">
          <v-img
            class="item-img"
            v-if="data.item.img"
            :src="data.item.img"
            :alt="data.item.img"
            :contain="true"
            max-width="25"
            max-height="25"
          />
          <span class="text-capitalize pl-1 mt-1">{{ data.item.name ? data.item.name : data.item }} <span
            v-if="data.item.subtext"
            class="textSecondary--text text-capitalize"
          >- {{ data.item.subtext }}</span></span>
        </div>
      </template>
    </v-select>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      selectModel: null,
      selectItems: [],
      search: ''
    };
  },
  watch: {
    search(newVal) {
      if (newVal === '') {
        this.selectItems = this.items;
      } else {
        const valLowerCase = newVal.toLowerCase();
        const foundItems = this.items.filter(item => item.name.toLowerCase().includes(valLowerCase) || item.subtext.toLowerCase().includes(valLowerCase) || item.value.toLowerCase().includes(valLowerCase));
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
    items: {
      handler: function(newVal) {
        this.selectItems = newVal;
        this.selectModel = newVal[0] || this.value;
      },
      deep: true
    }
  },
  mounted() {
    this.selectItems = this.items;
    this.selectModel = this.items[0] || this.value;
  },
  methods: {
    clear(val) {
      this.selectModel = val ? val : this.item[0];
    }
  }
};
</script>

<style lang="scss">
.mew-select {
  &.v-text-field--enclosed .v-input__append-inner {
    height: 100%;
    margin-top: 0;

    .v-input__icon {
      height: 100%;
    }
  }

  .item-img {
    margin-right: 5px;
    max-height: 25px;
  }

  .selected-img {
    margin-left: 6px;
  }
}
.mew-select-search {
  border-bottom: 1px solid var(--v-dropdownBorder-base);
  .v-icon {
    font-size: 18px;
  }
}
</style>
