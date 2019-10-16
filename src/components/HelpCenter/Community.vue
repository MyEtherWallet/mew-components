<template>
  <v-card
    class="d-flex flex-no-wrap align-center justify-space-between community pa-7"
    max-width="400"
    flat
  >
    <v-avatar size="75" tile>
      <v-img src="@/assets/icons/icon25.png"></v-img>
    </v-avatar>
    <div class="ml-6">
      <h3 class="font-weight-medium">Community</h3>
      <p class="ma-0">
        Join our MEW community, and get more information from us.
      </p>
    </div>
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

.community {
  border: 2px solid #e0e0e0;
  border-radius: 5px;
}
</style>
