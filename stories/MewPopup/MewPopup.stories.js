  import {
  withKnobs,
  boolean,
  text,
  object
} from '@storybook/addon-knobs';
import MewPopup from '@/components/MewPopup/MewPopup.vue';
import MewPopupDoc from './MewPopup.mdx';

export default {
  title: 'MewPopup',
  parameters: {
    component: MewPopup,
    docs: {
      page: MewPopupDoc
    }
  },
  decorators: [withKnobs]
};

const btnTexts = {
  close: 'Cancel',
  action: 'Confirm'
}

export const MEWPopup = () => ({
  components: { MewPopup },
  data() {
    return {
      isPopupOpen: true
    }
  },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    show: {
      default: boolean('show', true)
    },
    title: {
      default: text('title', 'Are you sure you want to log out?')
    },
    btnEnabled: {
      default: boolean('btn-enabled', true)
    },
    btnTexts: {
      default: object('btn-texts', btnTexts)
    },
    scrollable: {
      default: boolean('scrollable', false)
    },
    width: {
      default: text('width', '600')
    },
    hasButtons: {
      default: boolean('has-buttons', true)
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
    <mew-popup
      :show="show"
      :title="title"
      :btn-action="btnAction"
      :btn-texts="btnTexts"
      :btn-enabled="btnEnabled"
      :scrollable="scrollable"
      :width="width"
      :has-buttons="hasButtons"
    > 
      <div>This is a slot value.</div>
    </mew-popup>
  </div>`,
  methods: {
    btnAction() {
      // eslint-disable-next-line no-console
      console.log('btn action clicked')
    },
    onClick(btn) {
      this.isPopupOpen = false;
      // eslint-disable-next-line no-console
      console.log('Clicked:', btn)
    }
  }
});
