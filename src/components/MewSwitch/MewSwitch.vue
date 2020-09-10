<template>
  <div class="d-flex align-center"> 
    <span
      class="mew-body textPrimary--text mr-4 cursor-pointer"
    >{{ label }}</span>
    <v-switch
      :ripple="false"
      color="white"
      class="mew-switch"
      inset
      v-model="switchStatus"
    />
  </div>
</template>

<script>

export default {
  name: 'MewSwitch',
  props: {
    label: {
      type: String,
      default: ''
    },
    switchStatus: {
      type: Boolean,
      default: false
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