import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import MewSelect from '@/components/MewSelect/MewSelect.vue';
import ethereumIcon from '@/assets/images/icons/footer/eth.png'
export default {
  title: 'MewSelect',
  parameters: {
    component: MewSelect
  },
  decorators: [withKnobs]
};

const itemsArray = [{ name: 'ETH', subtext: 'Ethereum',  value: 'Ethereum', img: ethereumIcon }];

export const MEWSelect = () => ({
  components: { 'mew-select': MewSelect },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    },
    label: {
      default: text('select-label', 'label')
    },
    items: {
      default: object('items', itemsArray)
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
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
    <mew-select :label="label" :items="items" :disabled="disabled"
    />
  </div>`
});
