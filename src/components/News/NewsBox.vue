<template>
  <v-card max-width="280">
    <!-- <v-img src="@/assets/news.jpg" height="194"></v-img> -->
    <v-card-title>Cafe Badilico</v-card-title>
    <v-card-text>
      Visit ten places on our planet that are undergoing the biggest changes
      today.
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal lighten-2">
        Read More...
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-twitter</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    text: String
  },
  data: () => ({}),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
