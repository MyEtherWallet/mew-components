<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/views/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({})
};
</script>

<style lang="scss">
@import "@/global.scss";

* {
  color: $color--text--dark-sacramento;
}

p {
  //font-family: "Montserrat", sans-serif;
  font-size: 14px;
}

h1 {
  font-size: 42px;
}

h2 {
  font-size: 30px;
  font-weight: 400;
}

h3 {
  font-size: 24px;
  font-weight: 400;
}

h4 {
  font-size: 20px;
  font-weight: 400;
}

h5 {
  font-size: 16px;
  font-weight: 400;
}

.v-label {
  font-size: 14px !important;
}

.theme--light.v-application {
  background: white !important;
}

@media (min-width: 1904px) {
  .container {
    max-width: 1264px;
  }
}
</style>
