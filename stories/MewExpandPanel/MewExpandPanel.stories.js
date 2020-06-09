import {
  withKnobs,
  boolean,
  object,
  optionsKnob
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
  { name: 'Network', subtext: 'ETH - myetherapi.com' }, 
  { name: 'Address to interact with' , subtext: '', tooltip: 'Tooltip'}
]

const warningBage = {
  color: 'warning darken-2',
  text: 'Expire soon'
}

const colorThemeOptions = 
  { white: 'white',
    superPrimary: 'superPrimary',
    errorOutlineActive: 'errorOutlineActive'};

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
    hasDividers: {
      default: boolean('has-dividers', false)
    },
    colorTheme: {
      default: optionsKnob('color-theme', colorThemeOptions, colorThemeOptions.white, { display: 'inline-radio' })
    },
    warningBadge: {
      default: object('warning-badge', warningBage)
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
      :warning-badge="warningBadge"
      :color-theme="colorTheme"
      :has-dividers="hasDividers" 
      :is-toggle="isToggle"
      :panel-items="isToggle ? [panelItems[0]] : panelItems"
    >
      <template v-slot:panelBody0>
        <span>Panel slot example</span>
      </template>
    </mew-expand-panel>
  </div>`
});
