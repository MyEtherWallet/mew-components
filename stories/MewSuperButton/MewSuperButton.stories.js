import {
  withKnobs,
  text,
  boolean,
  optionsKnob,
  number
} from '@storybook/addon-knobs';
import MewSuperButton from '@/components/MewSuperButton/MewSuperButton.vue';
import MewSuperButtonDoc from './MewSuperButtonDoc.mdx';

export default {
  title: 'MewSuperButton',
  decorators: [withKnobs],
  parameters: {
    component: MewSuperButton,
    docs: {
      page: MewSuperButtonDoc
    }
  }
};

const colorThemeOptions = {
  basic: 'basic',
  primary: 'primary',
  outline: 'outline'
};

const optionsObj = {
  display: 'inline-radio'
};

const iconTypes = {
  mdi: 'mdi',
  mew: 'mew'
}

export const MEWSuperButton = () => ({
  components: { 'mew-super-button': MewSuperButton },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    title: {
      default: text('title', 'MEW Super Button')
    },
    subtitle: {
      default: text('subtitle', 'Subtitle')
    },
    tag: {
      default: text('tag', 'Tag')
    },
    note: {
      default: text('note', '')
    },
    isNew: {
      default: boolean('is-new', false)
    },
    isColumn: {
      default: boolean('is-column', false)
    },
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    titleIcon: {
      default: text('title-icon', '')
    },
    rightIcon: {
      default: text('right-icon', '')
    },
    iconType: {
      default: optionsKnob(
        'icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    colsNum: {
      default: number('cols-num', 9)
    },
    fontClass: {
      default: text('font-class', 'mew-heading-3')
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
    <mew-super-button
      :icon-type="iconType"
      :cols-num="colsNum"
      :font-class="fontClass"
      :isColumn="isColumn"
      :title="title"
      :subtitle="subtitle"
      :tag="tag"
      :titleIcon="titleIcon"
      :rightIcon="rightIcon"
      :note="note"
      :isNew="isNew"
      :colorTheme="colorTheme"
      :disabled="disabled"
    />
  </div>`
});
