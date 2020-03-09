<template>
  <div>
    <p>Hello</p>
    <v-btn
      x-large
      depressed
      v-text="label"
      :disabled="disabled"
      :color="color"
      :outlined="outlined"
    ></v-btn>
  </div>
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
p {
  color: var(--v-example-base);
}
@import "@/global.scss";
</style>
