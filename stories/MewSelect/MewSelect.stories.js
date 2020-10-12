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

const itemsArray = [{ name: 'ETH', value: 'Ethereum', img: ethereumIcon }, { name: 'DAI', value: 'Makerdao', img: ethereumIcon }];

export const MEWSelect = () => ({
  components: { MewSelect },
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
    value: {
      default: object('value', {})
    },
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    hasFilter: {
      default: boolean('has-filter', false)
    },
    filterPlaceholder: {
      default: text('filter-placeholder', 'Search token name')
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
    <mew-select :filter-placeholder="filterPlaceholder" :has-filter="hasFilter" :label="label" :items="items" :disabled="disabled" :value="value"
    />
  </div>`
});
