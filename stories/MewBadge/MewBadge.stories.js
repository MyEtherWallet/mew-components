import {
  withKnobs,
  boolean,
  optionsKnob,
  text
} from '@storybook/addon-knobs';
import MewBadge from '@/components/MewBadge/MewBadge.vue';
import MewBadgeDoc from './MewBadge.mdx';

export default {
  title: 'MewBadge',
  parameters: {
    component: MewBadge,
    docs: {
      page: MewBadgeDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};

const badgeOptions = {
  in: 'txIn',
  out: 'txOut',
  swap: 'swap',
  error: 'error',
  warning: 'warning'
}

export const mewBadge = () => ({
  components: { MewBadge },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    badgeType: {
      default: optionsKnob('badge-type', badgeOptions, badgeOptions.in , { display: 'inline-radio' })
    },
    badgeTitle: {
      default: text('badge-title', 'In')
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
    <mew-badge
      :badge-type="badgeType"
      :badge-title="badgeTitle"
    />
  </div>`
});
