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
    hasNoBorder: {
      default: boolean('has-no-border', false)
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
    type: {
      default: text('type', 'text')
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
    <mew-input :has-no-border="hasNoBorder" :is-search="isSearch" :rules="rules" :has-clear-btn="hasClearBtn" :symbol="symbol" :right-label="rightLabel" :hint="hint" :disabled="disabled" :label="label" :placeholder="placeholder" :value="value" :type="type" v-model="value"
    />
  </div>`
});
