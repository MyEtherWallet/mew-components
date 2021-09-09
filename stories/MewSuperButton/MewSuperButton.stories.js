import {
  withKnobs,
  text,
  boolean,
  optionsKnob,
  number
} from '@storybook/addon-knobs';
import MewSuperButton from '@/components/MewSuperButton/MewSuperButton.vue';
import MewSuperButtonDoc from './MewSuperButton.mdx';

export default {
  title: 'MewSuperButton',
  decorators: [withKnobs],
  parameters: {
    component: MewSuperButton,
    docs: {
      page: MewSuperButtonDoc,
      inlineStories: true
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
  components: { MewSuperButton },
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
    titleIconClass: {
      default: text('title-icon-class', '')
    },
    titleIcon: {
      default: text('title-icon', '')
    },
    rightIcon: {
      default: text('right-icon', 'ensManager')
    },
    titleIconType: {
      default: optionsKnob(
        'title-icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    rightIconType: {
      default: optionsKnob(
        'right-icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    rightColsNum: {
      default: number('right-cols-num', 3)
    },
    leftColsNum: {
      default: number('left-cols-num', 9)
    },
    fontClass: {
      default: text('font-class', 'mew-heading-3')
    },
    hideRightCol: {
      default: boolean('hide-right-col', false)
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
      :right-cols-num="rightColsNum"
      :left-cols-num="leftColsNum"
      :title-icon-type="titleIconType"
      :right-icon-type="rightIconType"
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
      :title-icon-class="titleIconClass"
      :hide-right-col="hideRightCol"
    />
  </div>`
});



export const ColumnButton = () => ({
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
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    titleIconClass: {
      default: text('title-icon-class', '')
    },
    titleIcon: {
      default: text('title-icon', '')
    },
    titleIconType: {
      default: optionsKnob(
        'title-icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    rightIconType: {
      default: optionsKnob(
        'right-icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    rightColsNum: {
      default: number('right-cols-num', 3)
    },
    leftColsNum: {
      default: number('left-cols-num', 9)
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
      :right-cols-num="rightColsNum"
      :left-cols-num="leftColsNum"
      :title-icon-type="titleIconType"
      :right-icon-type="rightIconType"
      :font-class="fontClass"
      :isColumn="true"
      :title="title"
      :subtitle="subtitle"
      :tag="tag"
      :titleIcon="titleIcon"
      rightIcon="bicycle"
      :note="note"
      :isNew="isNew"
      :colorTheme="colorTheme"
      :disabled="disabled"
      :title-icon-class="titleIconClass"
    />
  </div>`
});


export const IconButton = () => ({
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
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    titleIconClass: {
      default: text('title-icon-class', '')
    },
    titleIcon: {
      default: text('title-icon', '')
    },
    titleIconType: {
      default: optionsKnob(
        'title-icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    rightIconType: {
      default: optionsKnob(
        'right-icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    rightColsNum: {
      default: number('right-cols-num', 3)
    },
    leftColsNum: {
      default: number('left-cols-num', 9)
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
      :right-cols-num="rightColsNum"
      :left-cols-num="leftColsNum"
      title-icon-type="mew"
      right-icon-type="mdi"
      :font-class="fontClass"
      :isColumn="false"
      :title="title"
      :subtitle="subtitle"
      :tag="tag"
      titleIcon="message"
      rightIcon="mdi-abugida-thai"
      :note="note"
      :isNew="isNew"
      :colorTheme="colorTheme"
      :disabled="disabled"
      :title-icon-class="titleIconClass"
    />
  </div>`
});

export const ContentSlotButton = () => ({
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
    colorTheme: {
      default: optionsKnob(
        'color-theme',
        colorThemeOptions,
        'primary',
        optionsObj
      )
    },
    titleIconClass: {
      default: text('title-icon-class', '')
    },
    titleIcon: {
      default: text('title-icon', '')
    },
    titleIconType: {
      default: optionsKnob(
        'title-icon-type',
        iconTypes,
        '',
        optionsObj
      )
    },
    rightIconType: {
      default: optionsKnob(
        'right-icon-type',
        iconTypes,
        iconTypes.mew,
        optionsObj
      )
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    rightColsNum: {
      default: number('right-cols-num', 3)
    },
    leftColsNum: {
      default: number('left-cols-num', 9)
    },
    fontClass: {
      default: text('font-class', 'mew-heading-3')
    },
    isColumn: {
      default: boolean('is-column', false)
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
      :right-cols-num="rightColsNum"
      :left-cols-num="leftColsNum"
      :is-column="isColumn"
      :font-class="fontClass"
      :title="title"
      :subtitle="subtitle"
      :tag="tag"
      :note="note"
      :isNew="isNew"
      :colorTheme="colorTheme"
      :disabled="disabled"
      :title-icon-class="titleIconClass"
    >
      <template v-slot:contentSlot>
        <span>This is the content slot</span>
        <v-icon>mdi-chevron-down</v-icon>
      </template>
    </mew-super-button>
  </div>`
});
