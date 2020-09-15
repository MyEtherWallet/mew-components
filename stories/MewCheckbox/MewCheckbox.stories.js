import {
  withKnobs,
  boolean,
  text,
  object
} from '@storybook/addon-knobs';
import MewCheckbox from '@/components/MewCheckbox/MewCheckbox.vue';

export default {
  title: 'MewCheckbox',
  parameters: {
    component: MewCheckbox
  },
  decorators: [withKnobs]
};

const linkObj = {
  title: '',
  url: ''
}

export const MEWCheckbox = () => ({
  components: { 'mew-checkbox': MewCheckbox },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    label: {
      default: text('label', 'Label')
    },
    link: {
      default: object('link', linkObj)
    },
    value: {
      default: boolean('value', false)
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
    <mew-checkbox
      :label="label"
      :link="link"
    />
  </div>`
});
