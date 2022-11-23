import {
  withKnobs,
  boolean,
  number,
  text,
  object
} from '@storybook/addon-knobs';
import MewLightTable from '@/components/MewLightTable/MewLightTable.vue';
import MewLightTableDoc from './MewLightTable.mdx';

export default {
  title: 'MewLightTable',
  parameters: {
    component: MewLightTable,
    docs: {
      page: MewLightTableDoc
    } 
  },
  decorators: [withKnobs]
};

const tableHeaders = [
  'TOKEN',
  'PRICE',
  'MARKET CAP',
  '24H',
  'BALANCE',
  ''
]

const tableData = [
  {
    token: 'ETH',
    tokenImg: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png',
    price: '$1,122.97',
    cap: '$278.65B',
    change: '5.75',
    status: '+',
    balance: [
      '2.2674',
      '$3,343.98'
    ],
    callToAction: [
      {
        title: 'Swap',
        method: data => onClick(data.token),
        btnStyle: 'outline',
        colorTheme: 'greenPrimary'
      }
    ]
  },
  {
    token: 'AAVE',
    tokenImg: 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-logo/128/ic_aave-512.png',
    price: '$22.97',
    cap: '$28.17B',
    change: '0.75',
    status: '-',
    balance: [
      '2.2674',
      '$43.98'
    ],
    callToAction: [
      {
        title: 'Swap',
        method: data => onClick(data.token),
        btnStyle: 'outline',
        colorTheme: 'greenPrimary'
      }
    ]
  },
  {
    token: 'MATIC',
    tokenImg: 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-logo/128/ic_polygon-512.png',
    price: '$0.97',
    cap: '$78.64B',
    change: '1.75',
    status: '+',
    balance: [
      '2,267.4523',
      '$1,943.98'
    ],
    callToAction: []
  },
]

function onClick(item) {
  console.log('clicked', item)
}

export const MEWLightTable = () => ({
  components: { MewLightTable },
  props: {
    isMobile: {
      default: boolean('is-mobile', false)
    },
    loading: {
      default: boolean('loading', false)
    },
    loaderCount: {
      default: number('loader-count', 1)
    },
    title: {
      default: text('title', '')
    },
    tableHeaders: {
      default: object('table-headers', tableHeaders)
    },
    tableData: {
      default: object('table-data', tableData)
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
    <mew-light-table
      :loading="loading"
      :loader-count="loaderCount"
      :table-data="loading ? [] : tableData"
      :table-headers="tableHeaders"
      :is-mobile="isMobile"
      :title="title"
    />
    
  </div>`
});
