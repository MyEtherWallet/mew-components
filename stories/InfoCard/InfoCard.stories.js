import {
  withKnobs,
  boolean,
  text,
  object
} from '@storybook/addon-knobs';
import InfoCard from '@/components/InfoCard/InfoCard.vue';

export default {
  title: 'InfoCard',
  parameters: {
    component: InfoCard
  },
  decorators: [withKnobs]
};

const linkObj = {
  title: 'Learn more',
  url: 'www.myetherwallet.com'
}

export const infoCard = () => ({
  components: { 'info-card': InfoCard },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    title: {
      default: text('title', 'Title')
    },
    desc: {
      default: text('desc', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    },
    link: {
      default: object('link', linkObj)
    },
    maxWidth: {
      default: text('max-width', '')
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <info-card
      :title="title"
      :desc="desc"
      :link="link"
      :max-width="maxWidth"
    />
  </div>`
});
