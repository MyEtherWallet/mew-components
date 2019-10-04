<template>
  <v-text-field
    :label="title"
    :placeholder="placeholder"
    outlined
    color="teal accent-4"
    :model="input1"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: String
  },
  data: () => ({
    input1: this.value
  }),
  watch: {
    input1(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

<style lang="scss">
@import "@/global.scss";

.the-switch-component-47593549909b70d53c2eb634ce982523 label {
  color: $switch--font-color !important;
  font-size: $switch--font-size !important;
  font-weight: $switch--font-weight !important;
}
</style>
