<template>
  <v-btn
    x-large
    outlined
    class="the-button-component"
    v-text="label"
    :disabled="disabled"
  ></v-btn>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";

.the-button-component {
  border: 2px solid $color--primary--royal-blue;
  color: $color--primary--royal-blue;
  height: $button--height !important;
  min-width: $button--min-width !important;
  text-transform: $button--text-transform;
  letter-spacing: $button--letter-spacing;
}

.theme--light.v-btn.v-btn--disabled {
  border: 2px solid $button--secondary--disabled--border-color !important;
  color: $button--secondary--disabled--text-color !important;
}
</style>
