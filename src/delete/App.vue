<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/views/components/HeaderComponent';
import Footer from '@/views/components/FooterComponent';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({})
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  color: var(--v-info-base);
}

html,
body {
  font-family: "Roboto", sans-serif;
}

.v-application {
  code {
    color: var(--v-cerise-base) !important;
  }
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

@media (min-width: 1904px) {
  .container {
    max-width: 1264px;
  }
}
</style>
