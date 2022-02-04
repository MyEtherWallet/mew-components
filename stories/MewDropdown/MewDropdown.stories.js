import {
  withKnobs,
  boolean,
  text
} from '@storybook/addon-knobs';
import MewDropdown from '@/components/MewDropdown/MewDropdown.vue';
import MewDropdownDoc from './MewDropdown.mdx';

export default {
  title: 'MewDropdown',
  parameters: {
    component: MewDropdown,
    docs: {
      page: MewDropdownDoc,
      inlineStories: true
    }
  },
  decorators: [withKnobs]
};


export const MEWDropdown = () => ({
  components: { MewDropdown },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    popupTitle: {
      default: text('popupTitle', 'Select a derivation path')
    },
    isOpened: {
      default: boolean('isOpened', false)
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
    <mew-dropdown
      :is-opened="isOpened"
      :popup-title="popupTitle"
    >
      <template #activatorBtnText>
        <span class="titlePrimary--text mew-body capitalize">
          Ethereum 
          
          </span>
        <span class="textSecondary--text mew-body capitalize">M/44’/60’/0’</span>
      </template>
      <template #cardContent>
        <div>Card Content Slot</div>
      </template>
    </mew-dropdown>
  </div>`
});
