import {
  withKnobs,
  files,
  number,
  text,
  boolean,
  array,
  optionsKnob,
  object,
} from '@storybook/addon-knobs';
import MewInput from '@/components/MewInput/MewInput.vue';
import MewInputDoc from './MewInput.mdx';

export default {
  title: 'MewInput',
  parameters: {
    component: MewInput,
    docs: {
      page: MewInputDoc,
      inlineStories: true,
    },
  },
  decorators: [withKnobs],
};

const ruleValue = [(value) => !!value || 'Required.'];

const textInputTypes = {
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
  month: 'month',
  number: 'number',
  password: 'password',
  datetime: 'datetime-local',
  email: 'email',
};

const optionsObj = {
  display: 'inline-radio',
};

const maxBtnObj = {
  title: 'Max',
  disabled: false,
  method: onClick,
  loading: false,
};

function onClick() {
  console.log('mew input: clicked max button!');
}

export const MEWInput = () => ({
  components: { MewInput },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    hasNoBorder: {
      default: boolean('has-no-border', false),
    },
    label: {
      default: text('label', 'label'),
    },
    placeholder: {
      default: text('placeholder', 'placeholder'),
    },
    value: {
      default: text('value', ''),
    },
    rightLabel: {
      default: text('right-label', ''),
    },
    hideClearBtn: {
      default: boolean('hide-clear-btn', false),
    },
    autofocus: {
      default: boolean('autofocus', true),
    },
    rules: {
      default: array('rules', ruleValue),
    },
    type: {
      default: optionsKnob('type', textInputTypes, 'text', optionsObj),
    },
    showBlockie: {
      default: boolean('show-blockie', false),
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false),
    },
    resolvedAddr: {
      default: text('resolved-addr', ''),
    },
    hint: {
      default: text('hint', ''),
    },
    persistentHint: {
      default: boolean('persistent-hint', false),
    },
    isReadOnly: {
      default: boolean('isReadOnly', false),
    },
    image: {
      default: files('image', '.png, .svg', ''),
    },
    id: {
      default: number('id', null),
    },
    errorMessages: {
      default: text('error-messages', ''),
    },
    buyMoreStr: {
      default: text('buy-more-str', ''),
    },
    maxBtnObj: {
      default: object('max-btn-obj', maxBtnObj),
    },
    hidePasswordIcon: {
      default: boolean('hide-password-icon', false),
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    },
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-input ref="input" :hide-password-icon="hidePasswordIcon" :autofocus="autofocus" :buy-more-str="buyMoreStr" :max-btn-obj="maxBtnObj" :error-messages="errorMessages" :persistent-hint="persistentHint" :image="image" :id="id" :hint="hint" :resolved-addr="resolvedAddr" :show-blockie="showBlockie" :has-no-border="hasNoBorder" :rules="rules" :hide-clear-btn="hideClearBtn" :right-label="rightLabel" :disabled="disabled" :label="label" :placeholder="placeholder" :value="value" :type="type" :is-read-only="isReadOnly"
    />
  </div>`,
});
