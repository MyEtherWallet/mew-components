<template>
  <div>
    <v-text-field
      :class="getClasses()"
      :disabled="disabled"
      :label="label === '' || isSearch ? '' : label"
      :placeholder="placeholder"
      outlined
      color="basic"
      v-model="inputValue"
      :hint="hint"
      :suffix="rightLabel"
      :clearable="hasClearBtn"
      :rules="rules"
      :prepend-inner-icon="isSearch ? 'mdi-magnify' : ''"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "MewInput",
  props: {
    /**
     * Disables the input.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The input label.
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * The input placeholder.
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * The input value.
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * Displays a label on the right side of the input.
     */
    rightLabel: {
      type: String,
      default: ""
    },
    /**
     * Displays a hint for the input value.
     */
    hint: {
      type: String,
      default: ""
    },
    /**
     * Enables input clear functionality. Clear symbol will be displayed on the right side.
     */
    hasClearBtn: {
      type: Boolean,
      default: false
    },
    /**
     * For validating your input - accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message.
     */
    rules: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * Displays search input
     */
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  watch: {
    inputValue(newValue) {
      console.log("input value:", newValue);
    }
  },
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    getClasses() {
      const classes = [];

      if (this.isSearch) {
        classes.push("search-input");
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
.v-application,
.v-application--is-ltr {
  .theme--light.v-label {
    color: var(--v-input-label-base);
    font-weight: 500;
    text-transform: capitalize;
  }

  .v-input {
    input::placeholder {
      color: var(--v-input-placeholder-base);
    }

    .v-text-field__suffix {
      color: var(--v-input-placeholder-base) !important;
    }

    .v-text-field--outlined fieldset:before {
      border: 1px solid var(--v-form-base);
    }
  }

  .search-input {
    fieldset {
      background-color: var(--v-primary-silver-base);
      border: none;
      z-index: -1;
    }
  }
}
</style>
