<template>
  <div>
    <v-tooltip
      content-class="tooltip-inner"
      color="titlePrimary--text"
      top
    >
      <template v-slot:activator="{ on }">
        <v-icon
          class="copy-icon cursor-pointer basic--text"
          v-on="on"
          @click="copyToClipboard"
        >
          mdi-content-copy
        </v-icon> 
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
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
  name: "MewCopy",
  components: {
    MewToast
  },
  props: {
    /**
     * Pass the value you would like to copy
     */
    copyValue: {
      type: String,
      default: ''
    },
    /**
     * Pass true if you are using $ref to select the element
     */
    isRef: {
      type: Boolean,
      default: false
    },
    /**
     * The ref of the element to copy
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
      copy(value, this.isRef)
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