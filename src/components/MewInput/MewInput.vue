<template>  
  <!--
=====================================================================================
  Mew Input
=====================================================================================
-->
  <v-text-field
    class="mew-input"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :error-messages="errorMessages"
    :outlined="!hasNoBorder"
    :solo="hasNoBorder"
    color="titlePrimary"
    v-model="inputValue"
    :hint="resolvedAddr ? resolvedAddr : hint"
    :persistent-hint="persistentHint || resolvedAddr.length > 0"
    :suffix="rightLabel"
    :clearable="!hideClearBtn"
    :rules="rules"
    :type="inputType"
    :append-icon="showPasswordIcon"
    @click:append="onPasswordIconClick"
    validate-on-blur
    height="62"
  >
    <template v-slot:prepend-inner>
  <!--
=====================================================================================
  Mew Input: Blockie (displays at the beginning of the input)
=====================================================================================
-->
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
  <!--
=====================================================================================
  Mew Input: Token Image  (displays at the beginning of the input)
=====================================================================================
-->
    <div class="d-flex align-center justify-center">
      <img v-if="image" height="30" :src="image" alt="token image" />
    </div>
    </template>
  <!--
=====================================================================================
  Max Button (displays at the end of the input)
=====================================================================================
-->
    <template v-slot:append>
      <v-btn v-if="maxBtnObj.method" @click="maxBtnObj.method" 
          :class="[maxBtnObj.disabled ? 'disabled--text no-pointer-events' : 'inputLabel--text', 'rounded-lg mt-n2 mew-body font-weight-medium text-capitalize']" 
          min-width="40" min-height="40" height="40" width="40" depressed color="maxButton">{{maxBtnObj.title}}</v-btn>
    </template>
  </v-text-field>
</template>

<script>
import MewBlockie from '@/components/MewBlockie/MewBlockie.vue';

const types = ['password', 'text'];

export default {
  name: 'MewInput',
  components: {
    MewBlockie
  },
  props: {
    /**
     * Error messages to display
     */
    errorMessages: {
      type: [ String, Array],
      default: ''
    },
    /**
     * Displays the blockie.
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
     * The input id.
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
     * Enables persistent hint
     */
    persistentHint: {
      type: Boolean,
      default: false
    },
    /**
     * Hint text
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
    },
    /**
     * Prepends an image in the input
     */
    image: {
      type: String,
      default: ''
    },
    /**
     * Object for max button, i.e. {title: 'Max', disabled: false, method: () => {}}
     */
    maxBtnObj: {
      type: Object,
      default: () => {
        return {};
      }
    },
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
        return types[1];
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
    clear(val) {
      this.inputValue = val;
    }
  }
};
</script>
<style lang="scss">
.mew-input {
  .v-text-field__slot {
    .v-label {
      margin-top: 5px;
    }
    .v-label--active {
      margin-top: 0;
    }
  }
  .v-input__icon--append {
    .mdi {
      color: var(--v-disabled-base);
    }
  }
}
</style>