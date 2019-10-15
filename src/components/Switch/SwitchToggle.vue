<template>
  <v-switch
    class="the-switch-component-47593549909b70d53c2eb634ce982523"
    inset
    v-model="switch1"
    :label="switch1 ? labelOn : labelOff"
    color="teal accent-4"
  ></v-switch>
</template>

<script>
export default {
  props: {
    labelOn: String,
    labelOff: String
  },
  data: () => ({
    switch1: false
  }),
  watch: {
    switch1(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

<style lang="scss">
@import "@/global.scss";

.the-switch-component-47593549909b70d53c2eb634ce982523 label {
  color: $switch--font-color !important;
}
</style>
