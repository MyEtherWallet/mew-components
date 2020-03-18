<template>
  <div class="carousel-container">
    <v-carousel
      cycle
      class="border-radius--4"
      height="180"
      hide-delimiter-background
      show-arrows
      show-arrows-on-hover
      vertical
    >
      <v-carousel-item>
        <v-sheet tile color="grey lighten-4">
          <div class="text-content">
            <h2 class="font-weight-medium">MEWconnect</h2>
            <v-sheet width="170" color="transparent">
              <div class="font-weight-light line-height--medium">
                Free and secure mobile wallet
              </div>
            </v-sheet>
          </div>
          <!-- <img src="@/assets/slider/mewconnect.png" /> -->
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet tile color="grey lighten-4">
          <!-- <img src="@/assets/slider/myetherwallet.jpg" /> -->
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet tile color="grey lighten-4">
          <!-- <img src="@/assets/slider/spaceman.jpg" /> -->
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {},

  data: () => ({}),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";

.carousel-container {
  width: 500px;
}

.text-content {
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px 30px;
}
</style>
