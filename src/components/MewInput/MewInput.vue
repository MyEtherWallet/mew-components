<template>  
  <!--
=====================================================================================
  Mew Input
=====================================================================================
-->
  <v-text-field
    :class="[getClasses(), 'mew-input']"
    :disabled="disabled"
    :label="label === '' || isSearch ? '' : label"
    :placeholder="placeholder"
    :outlined="!hasNoBorder"
    :solo="hasNoBorder"
    color="titlePrimary"
    v-model="inputValue"
    :hint="resolvedAddr ? resolvedAddr : hint"
    :persistent-hint="resolvedAddr.length > 0"
    :suffix="rightLabel"
    :clearable="!hideClearBtn"
    :rules="rules"
    :prepend-inner-icon="isSearch ? 'mdi-magnify' : ''"
    :type="inputType"
    :append-icon="showPasswordIcon"
    @click:append="onPasswordIconClick"
    validate-on-blur
    height="62"
  >
    <template v-slot:prepend-inner>
      <div
        v-if="showBlockie && !value"
        class="blockie-placeholder mr-1 selectHover"
      />
      <mew-blockie
        v-if="showBlockie && value"
        :address="resolvedAddr ? resolvedAddr : value"
        width="25px"
        height="25px"
      />
    </template>
  </v-text-field>
</template>

<script>
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';

const types = ['password'];

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
     * The input value.
     */
    id: {
      type: Number,
      default: null
    },
    /**
     * Displays a label on the right side of the input.
     */
    rightLabel: {
      type: String,
      default: ''
    },
    /**
     * Hides input clear functionality. Clear symbol will be displayed on the right side.
     */
    hideClearBtn: {
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
     * Resolved address
     */
    hint: {
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
      inputValue: '',
      showPassword: false
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal !== oldVal) {
         this.$emit('input', newVal, this.id) 
      }
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.inputValue = newVal;
      }
    }
  },
  computed: {
    isPasswordType() {
      return this.type === types[0];
    },
    showPasswordIcon() {
      if (this.isPasswordType) {
        return !this.showPassword ? 'mdi-eye' : 'mdi-eye-off';
      }
      return ''
    },
    inputType() {
      if (this.isPasswordType && this.showPassword) {
        return 'text';
      } 
      return this.type;
    }
  }, 
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    onPasswordIconClick() {
      if (this.isPasswordType) {
        this.showPassword = !this.showPassword;
      }
    },
    getClasses() {
      if (this.isSearch) {
        return 'search-input'
      }
    },
    clear(val) {
      this.inputValue = val;
    }
  }
};
</script>
<style lang="scss">
.mew-input {
  .v-input__icon--append {
    .mdi {
      color: var(--v-disabled-base);
    }
  }
}
</style>