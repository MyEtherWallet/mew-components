import { withKnobs, text, boolean, array, optionsKnob } from '@storybook/addon-knobs';
import MewInput from '@/components/MewInput/MewInput.vue';

export default {
  title: 'MewInput',
  parameters: {
    component: MewInput
  },
  decorators: [withKnobs]
};

const ruleValue = [value => !!value || 'Required.'];

const textInputTypes = {
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
  search: 'search',
  month: 'month',
  number: 'number',
  password: 'password',
  datetime: 'datetime-local',
  email: 'email'
}

const optionsObj = {
  display: 'inline-radio'
};

export const MEWInput = () => ({
  components: { MewInput },
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
      default: optionsKnob('type', textInputTypes, 'text', optionsObj)
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
  methods: {
    clear() {
      this.$refs.input.clear('0')
    }
  },
  template: `
    <div>
    <button @click="clear('0')"> Hello </button>
    <br />
    <mew-input ref="input" :has-no-border="hasNoBorder" :is-search="isSearch" :rules="rules" :has-clear-btn="hasClearBtn" :symbol="symbol" :right-label="rightLabel" :hint="hint" :disabled="disabled" :label="label" :placeholder="placeholder" :value="value" :type="type"
    />
  </div>`
});
