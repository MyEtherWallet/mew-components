import {
  withKnobs,
  boolean,
  number,
  text
} from '@storybook/addon-knobs';
import MewCarousel from '@/components/MewCarousel/MewCarousel.vue';

export default {
  title: 'MewCarousel',
  parameters: {
    component: MewCarousel
  },
  decorators: [withKnobs]
};

export const MEWCarousel = () => ({
  components: { 'mew-carousel': MewCarousel },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    totalSlides: {
      default: number('total-slides', 3)
    },
    carouselHeight: {
      default: text('carousel-height', '200')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-carousel
      :carousel-height="carouselHeight"
      :total-slides="totalSlides"
    >
      <template v-slot:slide1>
        <div class="text-center black--text">SLIDE 1</div>
      </template>
      <template v-slot:slide2>
        <div class="text-center black--text">SLIDE 2</div>
      </template>
      <template v-slot:slide3>
        <div class="text-center black--text">SLIDE 3</div>
      </template>
    </mew-carousel>
  </div>`
});
