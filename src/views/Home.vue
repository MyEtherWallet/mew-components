<template>
  <div>
    <div class="title-container white--text py-12">
      <v-container>
        <h1 class="text-uppercase display-2 font-weight-bold white--text">
          Styles and Components
        </h1>
        <div class="headline text--color--primary--emerald font-weight-bold">
          MyEtherWallet V6
        </div>
        <v-sheet
          max-width="800"
          class="transparent white--text grey--text text--lighten-2"
        >
          Presenting MEW - Ethereum's original and most popular wallet. Check
          out our style! We wanted to create a fresh design with a distinctive
          color scheme, while preserving the space necessary for a minimalistic
          and intuitive interface. The MEW Style Guide and UI components can be
          found below.
        </v-sheet>

        <v-card class="mt-8 mb-3 grey lighten-3" max-width="300">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-2">
                Powered by
                <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                &amp;
                <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>
                Material Design Component Framework.
              </div>

              <v-row class="pa-0 ma-0">
                <a href="https://vuejs.org/" target="_blank" class="mr-2">
                  <img src="@/assets/vue.png" width="70" />
                </a>
                <a href="https://vuetifyjs.com/en/" target="_blank">
                  <img src="@/assets/vuetify.png" width="70" />
                </a>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <a href="https://www.myetherwallet.com/" target="_blank">
          <v-img src="@/assets/logo.png" max-width="110" />
        </a>
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

.text--color--text--silver {
  $color--text--silver: #cecece;
}
</style>
