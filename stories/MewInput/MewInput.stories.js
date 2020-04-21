import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';
import MewInput from '@/components/MewInput/MewInput.vue';

export default {
  title: 'MewInput',
  parameters: {
    component: MewInput
  },
  decorators: [withKnobs]
};

const ruleValue = [value => !!value || 'Required.'];

export const MEWInput = () => ({
  components: { 'mew-input': MewInput },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    label: {
      default: text('label', 'label')
    },
    placeholder: {
      default: text('placeholder', 'placeholder')
    },
    value: {
      default: text('value', '')
    },
    hint: {
      default: text('hint', 'Hint')
    },
    symbol: {
      default: text('symbol', '')
    },
    rightLabel: {
      default: text('right-label', '')
    },
    hasClearBtn: {
      default: boolean('has-clear-btn', false)
    },
    rules: {
      default: array('rules', ruleValue)
    },
    isSearch: {
      default: boolean('is-search', false)
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
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
    <mew-input :is-search="isSearch" :rules="rules" :has-clear-btn="hasClearBtn" :symbol="symbol" :right-label="rightLabel" :hint="hint" :disabled="disabled" :label="label" :placeholder="placeholder" :value="value"
    />
  </div>`
});
