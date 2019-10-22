<template>
  <div class="carousel-container">
    <v-carousel height="200">
      <v-carousel-item v-for="(i, k) in items" :key="k">
        <v-sheet tile>
          <v-row class="fill-height" align="center" justify="center">
            <img :src="i.image" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Slider1 from "@/assets/slider/mewconnect.png";

export default {
  props: {},

  data: () => ({
    image1: Slider1,
    items: [
      {
        image: Slider1
      },
      {
        image: Slider1
      }
    ]
  }),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";

.carousel-container {
  width: 500px;
}
</style>
