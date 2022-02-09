import {
  withKnobs,
  boolean,
  text,
  object,
  number
} from '@storybook/addon-knobs';
import MewCheckbox from '@/components/MewCheckbox/MewCheckbox.vue';
import MewCheckboxDoc from './MewCheckbox.mdx';

export default {
  title: 'MewCheckbox',
  parameters: {
    component: MewCheckbox,
    docs: {
      page: MewCheckboxDoc,
      inlineStories: true
    }
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
    className: {
      default: text('class-name', '')
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
      :className="className"
      :link="link"
      :id="id"
    />
  </div>`
});
