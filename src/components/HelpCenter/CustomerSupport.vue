<template>
  <v-card
    class="d-flex flex-no-wrap align-center justify-space-between community px-7 py-5"
    max-width="400"
    flat
  >
    <v-avatar size="75" tile>
      <v-img src="@/assets/icons/icon24.png"></v-img>
    </v-avatar>
    <div class="ml-6">
      <h3 class="font-weight-medium">Customer Support</h3>
      <p class="">
        Can't find answer? Get in touch and we'll get back ASAP.
      </p>
      <div class="d-flex flex-no-wrap align-center">
        <p class="ma-0 mr-1 teal--text text--lighten-2 font-weight-medium">
          Email us
        </p>
        <v-icon class="icon teal--text text--lighten-2">mdi-arrow-right</v-icon>
      </div>
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

.icon {
  color: $color--text--dark-sacramento;
  font-size: 18px;
}
</style>
