<template>
  <div>
    <v-app-bar color="transparent" class="headline text-uppercase">
      <v-app-bar-nav-icon hidden></v-app-bar-nav-icon>
      <v-toolbar-title hidden>MEW Components</v-toolbar-title>
      <v-img
        src="@/assets/logo-small.png"
        aspect-ratio="1"
        max-width="40"
        class="mr-2"
      ></v-img>
      <span class="mr-2">MEW</span>
      <span class="font-weight-light">Components</span>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Github</span>
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
