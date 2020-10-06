<template>
  <div>
    <v-select
      height="62"
      class="mew-select"
      color="basic"
      append-icon="mdi-chevron-down"
      :disabled="disabled"
      :items="items"
      item-text="name"
      item-value="value"
      :label="label"
      v-model="selectModel"
      return-object
      outlined
    >
      <template
        v-slot:selection="{ item }"
      >
        <div class="d-flex align-center justify-center">
          <v-img
            v-if="item.img"
            class="item-img"
            :src="item.img"
            :alt="item.name ? item.name : item"
            :contain="true"
            max-width="25"
            max-height="25"
          />
          <span class="text-capitalize mt-1">{{ item.name ? item.name : item }} <span
            v-if="item.value"
            class="searchText--text text-capitalize"
          >- {{ item.value }}</span></span>
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
            v-if="data.item.value"
            class="textSecondary--text text-capitalize"
          >- {{ data.item.value }}</span></span>
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
     * Disables the select dropdown.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text and value field.
     * Can also add an img attribute to the object to append an img to the value.
     * Example: { name: "Orange", value: "Orange", img: orangeImg }
     */
    items: {
      type: Array,
      default: function() {
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
      selectModel: null
    };
  },
  watch: {
    selectModel(newValue) {
      this.$emit('input', newValue);
    }
  },
  mounted() {
    this.selectModel = this.items[0];
  },
  methods: {
    clear() {
      this.selectModel = this.items[0];
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
}
</style>
