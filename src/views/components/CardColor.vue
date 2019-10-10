<template>
  <v-col cols="12" sm="3" md="3">
    <v-card class="" flat>
      <div class="py-12" :style="background"></div>
      <v-card-text>{{ colorName }}</v-card-text>
      <v-card-text>HEX: {{ color }}</v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    color: String,
    colorName: String
  },
  data: () => ({}),
  computed: {
    background() {
      return `background-color: ${this.color}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
