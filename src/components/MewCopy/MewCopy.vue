<template>
    <!--
  =====================================================================================
    Mew Copy
  =====================================================================================
  -->
  <div>
    <v-tooltip
      content-class="tooltip-inner"
      color="titlePrimary--text"
      top
    >
      <template v-slot:activator="{ on }">
        <v-icon
          :small="isSmall"
          :class="['copy-icon cursor-pointer', color]"
          v-on="on"
          @click="copyToClipboard"
        >
          mdi-content-copy
        </v-icon> 
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <!--
  =====================================================================================
    Success toast
  =====================================================================================
  -->
    <mew-toast
      ref="toast"
      :duration="2000"
      toast-type="success"
      :text="successToast"
    />
  </div>
</template>

<script>
import copy from '@/helpers/copy.js';
import MewToast from '@/components/MewToast/MewToast.vue';

export default {
  name: 'MewCopy',
  components: {
    MewToast
  },
  props: {
    /**
     * Assigns the color of the icon. Accepts a text class color from mew-color. 
     */
    color: {
      type: String,
      default: 'basic--text'
    },
    /**
     * Makes the icon small.
     */
    isSmall: {
      type: Boolean,
      default: false
    },
    /**
     * Pass the value you would like to copy.
     */
    copyValue: {
      type: String,
      default: ''
    },
    /**
     * The ref of the element to copy.
     */
    copyRef: {
      type: [String, HTMLInputElement],
      default: ''
    },
    /**
     * The tooltip text
     */
    tooltip: {
      type: String,
      default: 'Copy'
    },
    /**
     * The toast text after successfully copying
     */
    successToast: {
      type: String,
      default: 'Copied!'
    }
  },
  methods: {
   copyToClipboard() {
      const value = this.copyRef ? this.copyRef : this.copyValue;
      copy(value, this.copyRef ? true : false)
      document.activeElement.blur()
      this.$refs.toast.showToast();
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-icon.copy-icon {
    &:hover {
      color: var(--v-primary-base) !important;
    }
  }
</style>