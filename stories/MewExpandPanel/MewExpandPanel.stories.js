import {
  withKnobs,
  boolean,
  object,
  number,
  text
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
  { name: 'Network', subtext: 'ETH - myetherapi.com', colorTheme: 'superPrimary' }, 
  { name: 'Address to interact with' ,  subtext: '', tooltip: 'Tooltip', colorTheme: 'errorOutlineActive'},
  { name: 'crypto.eth', hasActiveBorder: true, colorTheme: 'superPrimary', warningBadge: {
    color: 'warning darken-2',
    text: 'Expire soon'
  } }, 
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
      default: number('idx-to-expand', 1)
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
    </mew-expand-panel>
  </div>`
});
