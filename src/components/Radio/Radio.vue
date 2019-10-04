<template>
  <v-radio-group
    v-model="radio1"
    :mandatory="false"
    class="the-radio-component-45472e5249a2adba1b1bf01d22e405c3"
  >
    <v-radio
      :label="i.label"
      v-for="(i, key) in items"
      :key="key"
      color="teal accent-4"
    />
  </v-radio-group>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data: () => ({
    radio1: false
  }),
  watch: {
    radio1(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

<style lang="scss">
@import "@/global.scss";
.the-radio-component-45472e5249a2adba1b1bf01d22e405c3 {
}
</style>
