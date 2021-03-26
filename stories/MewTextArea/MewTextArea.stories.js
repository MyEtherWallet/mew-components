import {
  withKnobs,
  boolean,
  text,
  array
} from '@storybook/addon-knobs';
import MewTextArea from '@/components/MewTextArea/MewTextArea.vue';

export default {
  title: 'MewTextArea',
  parameters: {
    component: MewTextArea
  },
  decorators: [withKnobs]
};

const ruleValue = [value => !!value || 'Required.'];

export const MEWTextArea = () => ({
  components: { MewTextArea },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    label: {
      default: text('label', 'label')
    },
    value: {
      default: text('value', 'text')
    },
    rules: {
      default: array('rules', ruleValue)
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
    <mew-text-area @input="onInput" :rules="rules" :label="label" :value="value" />
  </div>`,
  methods: {
    onInput(newVal) {
      // eslint-disable-next-line no-console
      console.log('input val:', newVal)
    }
  }
});
