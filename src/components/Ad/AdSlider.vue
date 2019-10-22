<template>
  <v-carousel>
    <v-carousel-item v-for="(i, k) in items" :key="k">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <img :src="i.image" />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Slider1 from "@/assets/slider/mewconnect.png";
import Slider2 from "@/assets/slider/myetherwallet.png";

export default {
  props: {},

  data: () => ({
    image1: Slider1,
    items: [
      {
        image: Slider1
      },
      {
        image: Slider2
      }
    ]
  }),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
