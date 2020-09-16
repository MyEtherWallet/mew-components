import {
  withKnobs,
  boolean,
  object
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
  { name: 'Network', subtext: 'ETH - myetherapi.com', colorTheme: 'superPrimary', warningBadge: {
    color: 'warning darken-2',
    text: 'Expire soon'
  } }, 
  { name: 'Address to interact with' , subtext: '', tooltip: 'Tooltip', colorTheme: 'errorOutlineActive'}
]

export const MEWExpandPanel = () => ({
  components: { 'mew-expand-panel': MewExpandPanel },
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
    interactiveContent: {
      default: boolean('interactive-content', false)
    },
    hasDividers: {
      default: boolean('has-dividers', false)
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
      :has-dividers="hasDividers" 
      :is-toggle="isToggle"
      :interactive-content="interactiveContent"
      :panel-items="isToggle ? [panelItems[0]] : panelItems"
    >
      <template v-slot:panelBody1>
        <span>Panel slot example</span>
        <button>
        {{ interactiveContent ? 'Click me':'You cant click me' }}
        </button>
      </template>
    </mew-expand-panel>
  </div>`
});
