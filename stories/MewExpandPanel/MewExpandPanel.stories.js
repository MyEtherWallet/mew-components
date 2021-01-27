import {
  withKnobs,
  boolean,
  object,
  number,
  text
} from '@storybook/addon-knobs';
import MewExpandPanel from '@/components/MewExpandPanel/MewExpandPanel.vue';
import MewButton from '@/components/MewButton/MewButton.vue';

export default {
  title: 'MewExpandPanel',
  parameters: {
    component: MewExpandPanel
  },
  decorators: [withKnobs]
};

const items = [
  { name: 'Network', hasActiveBorder: true, subtext: 'ETH - myetherapi.com', colorTheme: 'superPrimary', warningBadge: {
    color: 'warning darken-2',
    text: 'Expire soon'
  } }, 
  { name: 'Address to interact with' ,  subtext: '', tooltip: 'Tooltip', colorTheme: 'errorOutlineActive'}
]

export const MEWExpandPanel = () => ({
  components: { MewExpandPanel, MewButton },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    panelItems: {
      default: object('panel-items', items)
    },
    isToggle: {
      default: boolean('is-toggle', false)
    },
    hasDividers: {
      default: boolean('has-dividers', false)
    },
    idxToExpand: {
      default: number('idx-to-expand', 1)
    },
    rightActionText: {
      default: text('right-action-text', 'Buy Domain')
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
      :right-action-text="rightActionText"
      :has-dividers="hasDividers" 
      :is-toggle="isToggle"
      :idx-to-expand="idxToExpand"
      :panel-items="isToggle ? [panelItems[0]] : panelItems"
    >
      <template v-slot:panelBody1>
        <span>Panel slot example</span>
      </template>
      <template v-slot:panelBody2>
        <span>Panel slot example 2</span>
      </template>
    </mew-expand-panel>
  </div>`
});
