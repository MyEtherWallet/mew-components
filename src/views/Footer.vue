<template>
  <div>
    <v-app-bar color="#0b2840" class="headline text-uppercase">
      <v-app-bar-nav-icon hidden></v-app-bar-nav-icon>
      <v-toolbar-title hidden>MEW Components</v-toolbar-title>
      <img src="@/assets/logo.png" width="120" class="mr-1" />
      <span class="font-weight-light white--text">Styles & Components</span>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/MyEtherWallet/mew-components"
        target="_blank"
      >
        <span class="mr-2 white--text">Github</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => ({})
};
</script>
