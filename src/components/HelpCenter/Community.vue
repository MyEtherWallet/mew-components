<template>
  <v-card
    class="d-flex flex-no-wrap align-center justify-space-between community px-7 py-5"
    :max-width="maxwidth"
    flat
  >
    <v-avatar size="75" tile>
      <v-img src="@/assets/icons/Common/icon25.png"></v-img>
    </v-avatar>
    <div class="ml-6">
      <h3 class="font-weight-medium">Community</h3>
      <p class="mb-1">
        Join our MEW community, and get more information from us.
      </p>
      <div class="social-icons">
        <a href="#" target="_blank">
          <v-icon>mdi-telegram</v-icon>
        </a>
        <a href="#" target="_blank">
          <v-icon>mdi-slack</v-icon>
        </a>
        <a href="#" target="_blank">
          <v-icon>mdi-reddit</v-icon>
        </a>
        <a href="#" target="_blank">
          <v-icon>mdi-github-face</v-icon>
        </a>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    maxwidth: String
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

.social-icons {
  a {
    text-decoration: none;
  }
  i {
    color: $color--text--dark-sacramento;
    font-size: 22px;
    margin-right: 13px;
  }
}
</style>
