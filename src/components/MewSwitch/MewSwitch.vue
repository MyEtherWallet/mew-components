<template>
  <!--
  =====================================================================================
    Mew Switch 
  =====================================================================================
  -->
  <div class="d-flex align-center"> 
    <span
      class="mew-body textPrimary--text mr-4 cursor-pointer"
      @click="switchToggle"
    >{{ label }}</span>
    <v-switch
      :ripple="false"
      color="white"
      class="mew-switch"
      inset
      v-model="value"
    />
  </div>
</template>

<script>

export default {
  name: 'MewSwitch',
  data() {
    return {
      value: false
    }
  },
  props: {
    /**
     * The switch label.
     */
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    setToggle(val) {
      this.value = val
    },
    switchToggle() {
      this.value = !this.value;
      this.$emit('switch', this.value);
    }
  }
}
</script>

<style lang="scss">
.mew-switch {
  input {
    pointer-events: all;
  }
  &.v-input--is-label-active {
    .v-input--switch__track {
      color: var(--v-primary-base) !important;
      caret-color: var(--v-primary-base) !important;
      opacity: 1;
    }
  }
}
</style>