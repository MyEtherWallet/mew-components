import {
  withKnobs,
  boolean,
  number,
  text,
  // object,
  // text
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

export const MEWLightTable = () => ({
  components: { MewLightTable },
  props: {
    hasFullWidth: {
      default: boolean('hasFullWidth', false)
    },
    hoverEffect: {
      default: boolean('hoverEffect', false)
    },
    background: {
      default: boolean('background', false)
    },
    mobileBackground: {
      default: boolean('mobileBackground', false)
    },
    borderAround: {
      default: boolean('borderAround', false)
    },
    borderTopBottom: {
      default: boolean('borderTopBottom', false)
    },
    borderTop: {
      default: boolean('borderTop', false)
    },
    borderBottom: {
      default: boolean('borderBottom', false)
    },
    divider: {
      default: boolean('divider', false)
    },
    flat: {
      default: boolean('flat', false)
    },
    paddingAround: {
      default: boolean('paddingAround', false)
    },
    paddingSide: {
      default: boolean('paddingSide', false)
    },
    roundCorner: {
      default: boolean('roundCorner', false)
    },
    notablePadding: {
      default: boolean('notablePadding', false)
    },
    loading: {
      default: boolean('loading', false)
    },
    loaderCount: {
      default: number('loaderCount', 1)
    },
    title: {
      default: text('title', '')
    },
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-table
      :loading="loading"
      :has-color="hasColor"
      :has-select="hasSelect"
      :table-data="loading ? [] : hasSelect ? tableSelectData : tableData"
      :table-headers="hasSelect ? tableSelectHeaders : tableHeaders"
      :no-data-text="noDataText"
      @selectedRow="onSelect"
      @selectedAll="onSelectAll"
      @onClick="onClick"
    />
    
  </div>`,
  methods: {
    onSelect(newVal) {
      // eslint-disable-next-line no-console
      console.log('selected:', newVal);
    },
    onSelectAll(newVal) {
      // eslint-disable-next-line no-console
      console.log('selected all:', newVal);
    },
    onClick(newVal) {
      // eslint-disable-next-line no-console
      console.log('on click, row:', newVal);
    }
  }
});
