import {
  withKnobs,
  boolean,
  object
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
  { name: 'Network', subtext: 'ETH - myetherapi.com', colorTheme: 'superPrimary', warningBadge: {
    color: 'warning darken-2',
    text: 'Expire soon'
  } }, 
  { name: 'Address to interact with' , subtext: '', tooltip: 'Tooltip', colorTheme: 'errorOutlineActive'}
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
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  methods: {
    clear() {
      this.$refs.expandPanel.setToggle(false);
    }
  },
  template: `
    <div>
    <br />
    <mew-expand-panel
      ref="expandPanel"
      :has-dividers="hasDividers" 
      :is-toggle="isToggle"
      :panel-items="isToggle ? [panelItems[0]] : panelItems"
    >
      <template v-slot:panelBody1>
        <span>Panel slot example</span>
      </template>
    </mew-expand-panel>
  </div>`
});
