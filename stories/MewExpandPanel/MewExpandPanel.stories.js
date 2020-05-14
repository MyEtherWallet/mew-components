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
  { name: 'Network', subtext: 'ETH - myetherapi.com' }, 
  { name: 'Address to interact with' , subtext: ''}
]

export const MEWExpandPanel = () => ({
  components: { 'mew-expand-panel': MewExpandPanel },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    panelItems: {
      default: object('panel-items', items)
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
      :panel-items="panelItems"
    >
      <template v-slot:panelBody0>
        <span>Panel slot example</span>
      </template>
    </mew-expand-panel>
  </div>`
});
