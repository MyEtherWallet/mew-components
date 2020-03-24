<template>
  <div class="d-flex flex-no-wrap align-center">
    <!-- <v-sheet class="text-center pr-10" v-for="(b, k) in buttons" :key="k">
      <img :src="b.icon" width="60" />
      <p>{{ b.title }}</p>
    </v-sheet> -->
  </div>
</template>

<script>
// import Telegram from "@/assets/icons/Community/telegram.png";
// import Slack from "@/assets/icons/Community/slack.png";
// import Github from "@/assets/icons/Community/github.png";
// import Reddit from "@/assets/icons/Community/reddit.png";

export default {
  props: {
    na: Array
  },
  // data: () => ({
  //   buttons: [
  //     { title: "Telegram", icon: Telegram },
  //     { title: "Slack", icon: Slack },
  //     { title: "Github", icon: Github },
  //     { title: "Reddit", icon: Reddit }
  //   ]
  // }),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
