import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import MewSelect from '@/components/MewSelect/MewSelect.vue';
import ethereumIcon from '@/assets/images/icons/footer/eth.png'
import bitcoinIcon from '@/assets/images/icons/footer/btc.png'

export default {
  title: 'MewSelect',
  parameters: {
    component: MewSelect
  },
  decorators: [withKnobs]
};

const swapItemsArray = [{
  text: 'Select Token',
  imgs: [bitcoinIcon, ethereumIcon, bitcoinIcon, ethereumIcon],
  total: '150',
  divider: true,
  selectTokenLabel: true
},
{header: 'My Wallet'},
{ hasNoEth: true, disabled: true, text: 'Your wallet is empty.', linkText: 'Buy ETH', link: 'https://ccswap.myetherwallet.com/#/'},
{ header: 'Other Tokens'},
{ name: 'ETH', subtext: 'Ethereum', symbol: 'ETH', value: 'Ethereum', img: ethereumIcon, price: '3000'}, 
{ name: 'DAI',  subtext: 'Makerdao', symbol: 'DAI', value: 'Makerdao', tokenBalance: '20.22',  img: "", totalBalance: '40000', price: '2000'},
{ name: 'AAVE',  subtext: 'Aave', symbol: 'AAVE', value: 'Aave', tokenBalance: '1.34',  img: ethereumIcon, totalBalance: '234.3430', price: '454.000'}];

const itemsArray = [{ name: 'ETH', subtext: 'Ethereum', value: 'Ethereum', img: ethereumIcon }, { name: 'DAI', value: 'Makerdao',  subtext: 'Makerdao', img: ethereumIcon }];

export const MEWSelect = () => ({
  components: { MewSelect },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    },
    label: {
      default: text('label', 'label')
    },
    items: {
      default: object('items', itemsArray)
    },
    swapItems: {
      default: object('swap-items', swapItemsArray)
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
    isSwap: {
      default: boolean('is-swap', true)
    },
    loading: {
      default: boolean('loading', false)
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
    <mew-select :loading="loading" :is-swap="isSwap" :filter-placeholder="filterPlaceholder" :has-filter="hasFilter" :label="label" :items="isSwap ? swapItems : items" :disabled="disabled" :value="value"
    />
  </div>`
});
