<template>
  <div>
    <v-row class="mb-6">
      <v-col
        class="pt-2"
        cols="12"
        sm="2"
        md="2"
        v-for="(color, idx) in colors"
        :key="idx"
      >
        <v-card :color="color.type" class="py-12"></v-card>
        <p class="mt-2">{{ color.type }}:{{ color.hex }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
