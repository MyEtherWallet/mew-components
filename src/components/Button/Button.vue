<template>
  <v-btn
    x-large
    depressed
    v-text="label"
    :disabled="disabled"
    :color="color"
    :outlined="outlined"
  ></v-btn>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
    color: String,
    outlined: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
