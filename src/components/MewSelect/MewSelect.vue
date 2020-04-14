<template>
  <div>
    <v-select
      color="basic"
      append-icon="mdi-chevron-down"
      :disabled="disabled"
      :items="items"
      item-text="name"
      item-value="value"
      :label="label"
      v-model="selectModel"
      outlined
    >
      <template slot="item" slot-scope="data">
        <img class="item-img" v-if="data.item.img" :src="data.item.img" />{{
          data.item.name ? data.item.name : data.item
        }}
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "MewSelect",
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
      default: ""
    },
    /**
     * Sets the select value
     */
    value: {
      type: [String, Object]
    }
  },
  data() {
    return {
      selectModel: ""
    };
  },
  watch: {
    selectModel(newValue) {
      console.log("select value:", newValue);
    }
  },
  mounted() {
    this.selectModel = this.value;
  }
};
</script>

<style lang="scss">
.v-application {
  .theme--light.v-label {
    color: var(--v-input-label-base);
    font-weight: 500;
    text-transform: capitalize;
  }

  .v-input {
    input::placeholder {
      color: var(--v-input-placeholder-base);
    }
  }

  .v-text-field--outlined fieldset:before {
    border: 1px solid var(--v-form-base);
  }

  .item-img {
    margin-right: 5px;
    max-height: 25px;
  }
}
</style>
