<template>
  <v-col cols="12" sm="6" md="6">
    <v-card class="pb-12" flat>
      <div class="caption" :text="subtitle">
        {{ subtitle }}
      </div>
      <div class="title mb-3 mt-n1">
        {{ title }}
      </div>
      <slot />
      <v-btn class="mt-1" color="grey-1" depressed text>Show Code</v-btn>
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