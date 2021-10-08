import {
  withKnobs,
  boolean,
  object,
  array,
  number
} from '@storybook/addon-knobs';
import MewExpandPanel from '@/components/MewExpandPanel/MewExpandPanel.vue';

export default {
  title: 'MewExpandPanel',
  parameters: {
    component: MewExpandPanel
  },
  decorators: [withKnobs]
};

const items = [
  { name: 'Network', toggleTitle: 'Manage' }, 
  { name: 'Address to interact with' },
  { name: 'crypto.eth' }, 
]

export const MEWExpandPanel = () => ({
  components: { MewExpandPanel },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    panelItems: {
      default: object('panel-items', items)
    },
    isGreyTheme: {
      default: boolean('is-grey-theme', true)
    },
    isAccordion: {
      default: boolean('is-accordion', true)
    },
    idxToExpand: {
      default: array('idx-to-expand', [1])
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
    <mew-expand-panel
      ref="expandPanel"
      :is-accordion="isAccordion"
      :is-grey-theme="isGreyTheme" 
      :idx-to-expand="idxToExpand"
      :panel-items="panelItems"
    >
      <template v-slot:panelBody1>
        <span>Panel slot example</span>
      </template>
      <template v-slot:panelBody2>
        <span>Panel slot example 2</span>
      </template>
      <template v-slot:panelBody3>
        <span>Panel slot example 3</span>
      </template>
    </mew-expand-panel>
  </div>`
});
