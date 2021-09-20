import {
  withKnobs,
  boolean,
  text,
  object,
  number
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
  components: { MewCheckbox },
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
    colorText: {
      default: text('color-text', '')
    },
    value: {
      default: boolean('value', false)
    },
    dense: {
      default: boolean('dense', false)
    },
    id: {
      default: number('id', null),
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
    <mew-checkbox
      :label="label"
      :dense="dense"
      :color-text="colorText"
      :link="link"
      :id="id"
    />
  </div>`
});
