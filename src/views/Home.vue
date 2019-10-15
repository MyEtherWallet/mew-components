<template>
  <div>
    <div class="title-container white--text py-12">
      <v-container>
        <h1 class="text-uppercase display-2 font-weight-bold">
          Styles and Components
        </h1>
        <div class="">MyEtherWallet V6</div>
      </v-container>
    </div>
    <div class="py-12">
      <Typography />
      <Colors />
      <Icons />
      <Components />
    </div>
  </div>
</template>

<script>
import Typography from "./Typography";
import Colors from "./Colors";
import Icons from "./Icons";
import Components from "./Components";

export default {
  components: {
    Typography,
    Colors,
    Icons,
    Components
  }
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";

.title-container {
  background-color: $color--primary--dark-space;
}
</style>
