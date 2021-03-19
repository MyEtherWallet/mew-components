<template>  
  <!--
=====================================================================================
  Mew Search
=====================================================================================
-->
  <v-text-field
    :class="['mew-search', isSearchBlock ? 'search-block' : '']"
    :disabled="disabled"
    :background-color="isSearchBlock ? 'searchInput' : ''"
    :label="''"
    :placeholder="placeholder"
    color="titlePrimary"
    :filled="isSearchBlock"
    v-model="inputValue"
    prepend-inner-icon="mdi-magnify"
    clearable
    hide-details
    :solo="isSearchBlock"
    :flat="isSearchBlock"
    validate-on-blur
    type="search"
  />
</template>

<script>
export default {
  name: 'MewSearch',
  props: {
    /**
     * Disables the input.
     */
    disabled: {
      type: Boolean,
      default: false
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
     * Displays search input
     */
    isSearchBlock: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal !== oldVal) {
         this.$emit('input', newVal) 
      }
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.inputValue = newVal;
      }
    }
  },
  mounted() {
    this.inputValue = this.value;
  }
};
</script>
