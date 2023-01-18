import {
  withKnobs,
  boolean,
  number,
  text
} from '@storybook/addon-knobs';
import MewCarousel from '@/components/MewCarousel/MewCarousel.vue';
import MewCarouselDoc from './MewCarousel.mdx';

export default {
  title: 'MewCarousel',
  parameters: {
    component: MewCarousel,
    docs: {
      page: MewCarouselDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

export const MEWCarousel = () => ({
  components: { MewCarousel },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    totalSlides: {
      default: number('total-slides', 3)
    },
    carouselHeight: {
      default: text('carousel-height', '200')
    },
    value: {
      default: number('value', 0) // currently wont work as props cant be adjusted by v-model
    },
    ripple: {
      default: boolean('ripple?', true)
    },
    showArrows: {
      default: boolean('show-arrows', true)
    },
    cycle: {
      default: boolean('cycle?', true)
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-carousel
      :carousel-height="carouselHeight"
      :total-slides="totalSlides"
      :value="value"
      :cycle="cycle"
      :show-arrows="showArrows"
      :ripple="ripple"
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
