import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';

export default {
  title: 'MewColors',
  decorators: [withKnobs]
};

export const All = () => ({
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    }
  },
  data() {
    return {
      mewColors: [ {
        shades: [
          {name: 'emerald100', lightHex: '#f5fdfb', darkHex: '#151a29'},
          {name: 'blue100', lightHex: '#F3F5FB', darkHex: '#F3F5FB'},
          {name: 'blue500', lightHex: '#5a78f0', darkHex: '#5a78f0'}
        ]
      },
      {
        shades: [ 
          {name: 'primary base', lightHex: '#05c0a5'}, 
          {name: 'primaryHover', lightHex: '#1eb19b', darkHex: '#1eb19b'}, 
          {name: 'primaryActive', lightHex: '#56c5b4', darkHex: '#56c5b4'},
          {name: 'primaryOutlineActive', lightHex: '#baede6', darkHex: '#15796a'},
        ]
      }, {
        shades: [
          {name: 'secondaryOutlineActive', lightHex: '#d6dffa', darkHex: '#2e3c75'}
        ]
      },
      {
        shades: [
          {name: 'error base', lightHex: '#ff445b', darkHex: '#ff445b'},
          {name: 'error lighten-1', lightHex: '#ffd7dc', darkHex: '#ffd7dc'},
          {name: 'error lighten-2', lightHex: '#e96071', darkHex: '#e96071'},
          {name: 'errorOutlineActive', lightHex: '#ffd7dc', darkHex: '#651f28'},
        ]
      },
      {
        shades: [
          {name: 'basic base', lightHex: '#0b1a40', darkHex: '#151A29'},
          {name: 'basicOutlineActive', lightHex: '#c5ccd3', darkHex: '#3d4e6'}
        ]
      },
      {
        shades: [
          {name: 'titlePrimary', lightHex: '#0b2840', darkHex: '#95aed8'},
          {name: 'titleSecondary', lightHex: '#4E5A6E', darkHex: '#4E5A6E'},
          {name: 'textPrimary', lightHex: '#707D9E', darkHex: '#707D9E'},
          {name: 'textSecondary', lightHex: '#999999', darkHex: '#999999'},
          {name: 'textPrimaryModule', lightHex: '#667f9b', darkHex: '#95aed8'},
          {name: 'textSecondaryModule', lightHex: '#999999', darkHex: '#95aed8'},
          {name: 'captionPrimary', lightHex: '#a9bcd2', darkHex: '#a9bcd2'}
        ]
      },
      {
        shades: [
          {name: 'superPrimary base', lightHex: '#f2fafa', darkHex: '#242c48'},
          {name: 'superPrimary darken1', lightHex: '#e3f2f2', darkHex: '#e3f2f2'},
          {name: 'superPrimaryHover', lightHex: '#f5fdfb', darkHex: '#00c0a5'},
          {name: 'tagLabel', lightHex: '#6d89a6', darkHex: '#95aed8'},
          {name: 'buttonSelect', lightHex: '#D7F5F4', darkHex: '#D7F5F4'}
        ]
      },
      {
        shades: [
          {name: 'selectActive', lightHex: '#dcfff9', darkHex: '#2e3c75'},
          {name: 'selectHover', lightHex: '#E5EAEE', darkHex: '#2c3448'},
          {name: 'selectHeaderBg', lightHex: '#F8FAFC', darkHex: '#F8FAFC'},
          {name: 'selectBorder', lightHex: '#F1F1F1', darkHex: '#F1F1F1'},
          {name: 'expandHeader', lightHex: '#184f90', darkHex: '#184f90'}
        ]
      },
      {
        shades: [
          {name: 'success', lightHex: '#2cc479', darkHex: '#2cc479'},
          {name: 'warning', lightHex: '#FFF2DC', darkHex: '#0f1320' },
          {name: 'warning darken-1', lightHex: '#f5a623', darkHex: '#f5a623'},
          {name: 'warning darken-2', lightHex: '#ff7700', darkHex: '#ff7700'}
        ]
      },
      {
        shades: [
          {name: 'txIn', lightHex: '#7895f2', darkHex: '#7895f2'},
          {name: 'txOut', lightHex: '#ffaf8f', darkHex: '#ffaf8f'},
          {name: 'swap', lightHex: '#7fdefb', darkHex: '#0f1320'},
          {name: 'swapDisable', lightHex: '#f8f8f8', darkHex: '#0f1320'},
          {name: 'tableHeader', lightHex: '#f9f9f9', darkHex: '#0f1320'}
        ]
      },
      {
        shades: [
          {name: 'disabled', lightHex: '#cecece', darkHex: '#1f2b42'},
          {name: 'white', lightHex: '#fff', darkHex: '#fff'},
          {name: 'black', lightHex: '#000', darkHex: '#000'},
          {name: 'textBlack', lightHex: '202124', darkHex: '202124'},
          {name: 'textBlack2', lightHex: '5F6368', darkHex: '5F6368'},
          {name: 'mewBg', lightHex: '#fff', darkHex: '#151a29'},
          {name: 'walletBg', lightHex: '#f2f4fa', darkHex: '#151a29'},
          {name: 'boxShadow', lightHex: '#ececec', darkHex: '#3c3c3c'}
        ]
      },
      {
        shades: [
          {name: 'inputBorder', lightHex: '#e0e0e0', darkHex: '#6679fb'},
          {name: 'inputDisabled', lightHex: '#cecece', darkHex: '#1f2b42'},
          {name: 'inputLabel', lightHex: '#6d89a6', darkHex: '#4e5a6e'},
          {name: 'maxButton', lightHex: '#F6F8FD', darkHex: '#F6F8FD'},
          {name: 'searchInput', lightHex: '#f2f4fa', darkHex: '#f2f4fa'},
          {name: 'searchText', lightHex: '#96a8b6', darkHex: '#96a8b6'},
          {name: 'dropdownBorder', lightHex: '#05c0a5', darkHex: '#7e90a7'},
          {name: 'progressBar', lightHex: '#F3FAFA', darkHex: '#151A29'},
          {name: 'surface', lightHex: '#192133', darkHex: '#192133'},
        ]
      }
    ],
    newColors: [
      {
        shades: [
          {name: 'backgroundWallet', lightHex: '#F2F4FA', darkHex: '#000000'},
          {name: 'backgroundOverlay', lightHex: '#F2FAFA', darkHex: '#000000'},
          {name: 'backgroundGrey', lightHex: '#F8F9FB', darkHex: '#000000'}
        ]
      },
      {
        shades: [
          {name: 'whiteAlways', lightHex: '#FFFFFF', darkHex: '#FFFFFF'},
          {name: 'whiteBackground', lightHex: '#FFFFFF', darkHex: '#192439'},
          {name: 'whitePopup', lightHex: '#FFFFFF', darkHex: '#202b43'}
        ]
      },
      {
        shades: [
          {name: 'textDark', lightHex: '#192133', darkHex: '#ccd4e6'},
          {name: 'textMedium', lightHex: '#5A678A', darkHex: '#626e86'},
          {name: 'textLight', lightHex: '#939FB9', darkHex: '#3a4562'}
        ]
      },
      {
        shades: [
          {name: 'greenPrimary', lightHex: '#05C0A5', darkHex: '#06d9b9'},
          {name: 'greenMedium', lightHex: '#C3F0E9', darkHex: '#107e7a'},
          {name: 'greenLight', lightHex: '#EBFAF8', darkHex: '#154853'}
        ]
      },
      {
        shades: [
          {name: 'greyPrimary', lightHex: '#5A678A', darkHex: '#5a678a'},
          {name: 'greyMedium', lightHex: '#D7DAE3', darkHex: '#323d57'},
          {name: 'greyLight', lightHex: '#F2F3F6', darkHex: '#26324a'}
        ]
      },
      {
        shades: [
          {name: 'bluePrimary', lightHex: '#4B83E8', darkHex: '#6292eb'},
          {name: 'blueMedium', lightHex: '#D4E1F9', darkHex: '#355288'},
          {name: 'blueLight', lightHex: '#EEF3FD', darkHex: '#283a5d'}
        ]
      },
      {
        shades: [
          {name: 'redPrimary', lightHex: '#FF445B', darkHex: '#ff5d70'},
          {name: 'redMedium', lightHex: '#FFD2D8', darkHex: '#8c4155'},
          {name: 'redLight', lightHex: '#FFF0F2', darkHex: '#473044'}
        ]
      },
      {
        shades: [
          {name: 'orangePrimary', lightHex: '#F5A623', darkHex: '#f6af3c'},
          {name: 'orangeMedium', lightHex: '#FBDBA7', darkHex: '#87693b'},
          {name: 'orangeLight', lightHex: '#FEF4E5', darkHex: '#45403a'}
        ]
      },
      {
        shades: [
          {name: 'disabledPrimary', lightHex: '#CECECE', darkHex: '#606670'},
          {name: 'disabledMedium', lightHex: '#E0E0E0', darkHex: '#383f4a'},
          {name: 'disabledLight', lightHex: '#F6F6F6', darkHex: '#242d3e'}
        ]
      },
    ]
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  methods: {
    getClasses(shade) {
      const classes = [];
      if (shade.name === 'textDark' || shade.name === 'black' || shade.name === 'textBlack' || shade.name === 'expandHeader' || shade.name === 'basic base' || shade.name === 'titlePrimary') {
        return 'white--text';
      }

      if ((shade.name === 'superPrimary' || shade.name === 'superPrimaryHover' || shade.name === 'white' || shade.name === 'searchInput') && this.$vuetify.theme.dark) {
        return 'black--text';
      }

      return classes;
    }
  },
  template: `
    <div>
    <br />
    <div class="mew-heading-2">New colors (Light)</div>
    <br />
    <v-row align="center" v-for="( color, idx) in newColors" :key="color + idx">
      <v-card
        v-for="shade in color.shades"
        :key="shade.name"
        :color="shade.lightHex"
        outlined
        tile
        width="170"
        height="80"
      > 
        <v-card-text class="pa-0">
          <div><span class="pa-1" style="background-color: #ffffff73; font-size: 10px">{{shade.name}}</span></div>
          <div><span class="pa-1" style="background-color: #ffffff73; font-size: 10px">{{shade.lightHex}}</span></div>
        </v-card-text>
      </v-card>
    </v-row>


    <br />
    <br />
    <br />
    <div class="mew-heading-2">New colors (Dark)</div>
    <br />
    <v-row align="center" v-for="( color, idx) in newColors" :key="color + idx">
      <v-card
        v-for="shade in color.shades"
        :key="shade.name"
        :color="shade.darkHex"
        outlined
        tile
        width="170"
        height="80"
      > 
        <v-card-text class="pa-0">
          <div><span class="pa-1" style="background-color: #ffffff73; font-size: 10px">{{shade.name}}</span></div>
          <div><span class="pa-1" style="background-color: #ffffff73; font-size: 10px">{{shade.darkHex}}</span></div>
        </v-card-text>
      </v-card>
    </v-row>


    <br />
    <br />
    <br />
    <div class="mew-heading-2">Old colors</div>
    <br />
    <v-row align="center" v-for="( color, idx) in mewColors" :key="color + idx">
      <v-card
        v-for="shade in color.shades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="170"
        height="80"
      > 
        <v-card-text :class="getClasses(shade)">
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{$vuetify.theme.dark ? shade.darkHex :shade.lightHex}}</div>
        </v-card-text>
      </v-card>
    </v-row>
  </div>`
});
