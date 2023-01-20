import {
  withKnobs,
  boolean,
  number,
  text
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
    fullWidth: {
      default: boolean('full-width', false)
    },
    hoverEffect: {
      default: boolean('hover-effect', false)
    },
    background: {
      default: boolean('background', true)
    },
    mobileBackground: {
      default: boolean('mobile-background', false)
    },
    borderAround: {
      default: boolean('border-around', true)
    },
    borderTopBottom: {
      default: boolean('border-top-bottom', false)
    },
    borderTop: {
      default: boolean('border-top', false)
    },
    borderBottom: {
      default: boolean('border-bottom', false)
    },
    divider: {
      default: boolean('divider', true)
    },
    flat: {
      default: boolean('flat', false)
    },
    paddingAround: {
      default: boolean('padding-around', false)
    },
    paddingSide: {
      default: boolean('padding-side', false)
    },
    roundCorner: {
      default: boolean('round-corner', true)
    },
    noTablePadding: {
      default: boolean('no-table-padding', false)
    },
    loading: {
      default: boolean('loading', false)
    },
    loaderCount: {
      default: number('loader-count', 5)
    },
    title: {
      default: text('title', '')
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
  <div class="bgStorybook pa-15">
    <mew-light-table
      :full-width="fullWidth"
      :hover-effect="hoverEffect"
      :background="background"
      :mobile-background="mobileBackground"
      :loading="loading"
      :loader-count="loaderCount"
      :title="title"
      :border-around="borderAround"
      :border-top-bottom="borderTopBottom"
      :border-top="borderTop"
      :border-bottom="borderBottom"
      :divider="divider"
      :flat="flat"
      :padding-around="paddingAround"
      :padding-side="paddingSide"
      :round-corner="roundCorner"
      :no-table-padding="noTablePadding"
    >
      <table>
        <thead>
          <tr>
            <td>TOKEN</td>
            <td>PRICE</td>
            <td>MARKET CAP</td>
            <td>BALANCE</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-size: 12px">ETH</td>
            <td style="font-size: 12px">$1,286.56 / token</td>
            <td style="font-size: 12px">155.1077B</td>
            <td style="font-size: 12px">
            0.715128 ETH
            ($920.05)
            </td>
          </tr>
          <tr>
            <td style="font-size: 12px">ETH</td>
            <td style="font-size: 12px">$1,286.56 / token</td>
            <td style="font-size: 12px">155.1077B</td>
            <td style="font-size: 12px">
            0.715128 ETH
            ($920.05)
            </td>
          </tr>
          <tr>
            <td style="font-size: 12px">ETH</td>
            <td style="font-size: 12px">$1,286.56 / token</td>
            <td style="font-size: 12px">155.1077B</td>
            <td style="font-size: 12px">
            0.715128 ETH
            ($920.05)
            </td>
          </tr>
          <tr>
            <td style="font-size: 12px">ETH</td>
            <td style="font-size: 12px">$1,286.56 / token</td>
            <td style="font-size: 12px">155.1077B</td>
            <td style="font-size: 12px">
            0.715128 ETH
            ($920.05)
            </td>
          </tr>
          <tr>
            <td style="font-size: 12px">ETH</td>
            <td style="font-size: 12px">$1,286.56 / token</td>
            <td style="font-size: 12px">155.1077B</td>
            <td style="font-size: 12px">
            0.715128 ETH
            ($920.05)
            </td>
          </tr>
        </tbody>
      </table>
    </mew-light-table>    
  </div>
  `
});
