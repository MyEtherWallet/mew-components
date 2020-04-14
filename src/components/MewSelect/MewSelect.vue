<template>
  <div>
    <v-select
      color="basic"
      append-icon="mdi-chevron-down"
      :disabled="disabled"
      :items="items"
      :label="selectLabel"
      outlined
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "MewSelect",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    selectLabel: String
  },
  data() {
    return {
      inputModel: ""
    };
  },
  watch: {
    inputModel(newValue) {
      this.$emit("input", newValue);
    }
  },
  mounted() {
    this.inputModel = this.inputValue;
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
}
</style>
