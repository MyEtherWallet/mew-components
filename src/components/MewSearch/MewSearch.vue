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
    color="primary"
    :filled="isSearchBlock"
    v-model="inputValue"
    prepend-inner-icon="mdi-magnify"
    clearable
    hide-details
    :height="isCompact ? '36px' : '64px'"
    :solo="isSearchBlock"
    :flat="isSearchBlock"
    validate-on-blur
    type="search"
  > 
    <template v-slot:append>
      <!--
=====================================================================================
  Menu Select
=====================================================================================
-->
      <v-select
        :height="isCompact ? '36px' : '64px'"
        v-if="hasMenuSelect"
        append-icon="mdi-chevron-down"
        label="All extensions"
        class="mew-search-menu-select ma-0 pt-0"
      />
    </template>
  </v-text-field>
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
    },
    /**
     * Adds a menu select dropdown
     */
    hasMenuSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Adds a 36px height 
     * if not passed then 62px height will be used
     */
    isCompact: {
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
<style lang="scss">
/**
  * Mew Search
  * using global styles to override vuetify
  * TODO: probably not everything has to be global so move the correct styles under scoped
  */
  .mew-search {
  /**
    * styling for search block
    */
    .search-block {
      input::placeholder {
        color: var(--v-searchText-base);
      }
    }
    &.v-text-field > .v-input__control > .v-input__slot:before  {
      border-color: var(--v-greyMedium-base) !important;
      transition: none;
    }
  /**
    * search icon
    */
    .mdi-magnify {
      color: var(--v-textMedium-base) !important;
      &.primary--text {
        color: var(--v-textMedium-base) !important;
      }
    }
  /**
    * close icon
    */
    .mdi-close {
      color: var(--v-textMedium-base) !important;
      margin-right: 32px;
      margin-top: 11px;
      &.primary--text {
        color: var(--v-textMedium-base) !important;
      }
    }
  /**
    * used for menu select dropdown
    */
    .v-input__append-inner {
      margin-top: 0;
      margin-left: 0;
      .mew-search-menu-select {
        &.v-text-field > .v-input__control > .v-input__slot:before  {
          border-color: var(--v-greyMedium-base) !important;
        }
        .mdi-chevron-down {
          margin-top: 10px;
        }
      }
    }
  /**
    * menu select dropdown icon
    */
    .v-input__icon--append {
      .mdi-chevron-down {
        color: var(--v-textMedium-base);
      }
    }
  }
</style>