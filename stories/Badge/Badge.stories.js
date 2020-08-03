import {
  withKnobs,
  boolean,
  optionsKnob,
  text
} from '@storybook/addon-knobs';
import Badge from '@/components/Badge/Badge.vue';

export default {
  title: 'Badge',
  parameters: {
    component: Badge
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

export const badge = () => ({
  components: { 'badge': Badge },
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
    <badge
      :badge-type="badgeType"
      :badge-title="badgeTitle"
    />
  </div>`
});
