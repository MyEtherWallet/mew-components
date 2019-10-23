<template>
  <v-col cols="12" sm="6" md="6">
    <v-card class="pb-12" flat>
      <div class="dark-sacramento caption" :text="subtitle">
        {{ subtitle }}
      </div>
      <div class="dark-sacramento title mb-3 mt-n1">
        {{ title }}
      </div>
      <slot />
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.dark-sacramento {
  color: $color--text--dark-sacramento;
}
</style>
