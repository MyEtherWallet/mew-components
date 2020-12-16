<template>  
  <v-text-field
    :class="[getClasses(), 'mew-input']"
    :disabled="disabled"
    :label="label === '' || isSearch ? '' : label"
    :placeholder="placeholder"
    :outlined="!hasNoBorder"
    :solo="hasNoBorder"
    color="titlePrimary"
    v-model="inputValue"
    :hint="resolvedAddr ? resolvedAddr : ''"
    :persistent-hint="resolvedAddr.length > 0"
    :suffix="rightLabel"
    :clearable="hasClearBtn"
    :rules="rules"
    :prepend-inner-icon="isSearch ? 'mdi-magnify' : ''"
    :type="type"
  >
    <template v-slot:prepend-inner>
      <div
        v-if="showBlockie && !value"
        class="blockie-placeholder mr-1 selectHover"
      />
      <mew-blockie v-if="showBlockie && value" :address="resolvedAddr ? resolvedAddr : value" width="25px" height="25px" />
    </template>
  </v-text-field>
</template>

<script>
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';

export default {
  name: 'MewInput',
  components: {
    MewBlockie
  },
  props: {
    /**
     * Show the blockie.
     */
    showBlockie: {
      type: Boolean,
      default: false
    },
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
     * Resolved address
     */
    resolvedAddr: {
      type: String,
      default: ''
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
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.inputValue = newVal;
      }
    }
  },
  mounted() {
    this.inputValue = this.value;
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
