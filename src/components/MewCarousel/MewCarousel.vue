<template>
  <v-carousel
    class="mew-carousel"
    active-class="active-carousel-item"
    :cycle="cycle"
    :show-arrows-on-hover="showArrows"
    :show-arrows="showArrows"
    :height="carouselHeight"
    v-model="currentSlide"
  >
    <v-carousel-item
      :ripple="ripple"
      eager
      v-for="(slide, idx) in totalSlides"
      :link="typeof slide === 'string'"
      :href="typeof slide === 'string' ? slide : null"
      :key="idx"
    >
      <slot :name="'slide' + (idx + 1)" />
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  name: 'MewCarousel',
  props: {
    /**
     * Pass the total number of slides if there are no links or else pass in an array of links, i.e ['https://www.google.com/', 'https://www.myetherwallet.com/']
     */
    totalSlides: {
      type: [ Number, Array ],
      default: 0
    },
    /**
     * The height of the carousel
     */
    carouselHeight: {
      type: String,
      default: '200'
    },
    /**
     * Whether the carousel ripples on click
     */
    ripple: {
      type: Boolean,
      default: true
    },
    /**
     * Whether show the arrows on hover
     */
    showArrows: {
      type: Boolean,
      default: true
    },
    /**
     * Whether carousel cycles automatically
     */
    cycle: {
      type: Boolean,
      default: true
    },
    /**
     * Indicates current cycle
     */
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentSlide:{
      set(newVal) {
        this.$emit('input', newVal)
      },
      get() {
        return this.value;
      }
    }
  }

}
</script>

<style lang="scss">
.mew-carousel {
  .v-carousel__controls {
    background: transparent !important;
  }
  .v-carousel__controls__item {
    color: var(--v-inputBorder-base) !important;

    &.v-item--active {
      color: var(--v-primary-base) !important;
    }
  }
}
</style>