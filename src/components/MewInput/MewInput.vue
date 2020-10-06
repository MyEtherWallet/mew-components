<template>
  <div>
    <v-text-field
      :class="[getClasses(), 'mew-input']"
      :disabled="disabled"
      :label="label === '' || isSearch ? '' : label"
      :placeholder="placeholder"
      :outlined="!hasNoBorder"
      :solo="hasNoBorder"
      color="titlePrimary"
      v-model="inputValue"
      :hint="hint"
      :suffix="rightLabel"
      :clearable="hasClearBtn"
      :rules="rules"
      :prepend-inner-icon="isSearch ? 'mdi-magnify' : ''"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: 'MewInput',
  props: {
    /**
     * Removes the border.
     */
    hasNoBorder: {
      type: Boolean,
      default: false
    },
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
      default: ''
    },
    /**
     * The input placeholder.
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * The input value.
     */
    value: {
      type: String,
      default: ''
    },
    /**
     * Displays a label on the right side of the input.
     */
    rightLabel: {
      type: String,
      default: ''
    },
    /**
     * Displays a hint for the input value.
     */
    hint: {
      type: String,
      default: ''
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
      default: () => {
        return [];
      }
    },
    /**
     * Displays search input
     */
    isSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Sets input type
     */
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal !== oldVal) {
         this.$emit('input', newVal) 
      }
    },
    value(newVal) {
      this.inputValue = newVal; 
    }
  },
  methods: {
    getClasses() {
      const classes = [];

      if (this.isSearch) {
        classes.push('search-input');
      }
      return classes;
    },
    clear(val) {
      this.inputValue = val;
    }
  }
};
</script>
