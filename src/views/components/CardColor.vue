<template>
  <v-col cols="12" sm="3" md="3">
    <v-card class="" flat>
      <div class="py-12" style="background-color: red"></div>
      <v-card-text>I'm card text</v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    color: String,
    colorName: String
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
