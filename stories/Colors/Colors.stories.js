import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';

export default {
  title: 'Colors',
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
          {name: 'primary base', lightHex: '#05c0a5'}, 
          {name: 'primaryHover', lightHex: '#1eb19b', darkHex: '#1eb19b'}, 
          {name: 'primaryActive', lightHex: '#56c5b4', darkHex: '#56c5b4'},
          {name: 'primaryOutlineActive', lightHex: '#baede6', darkHex: '#15796a'}
        ]
      }, {
        shades: [
          {name: 'secondary base', lightHex: '#5a78f0', darkHex: '#5a78f0'},
          {name: 'secondaryOutlineActive', lightHex: '#d6dffa', darkHex: '#2e3c75'}
        ]
      },
      {
        shades: [
          {name: 'error base', lightHex: '#ff7700', darkHex: '#ff445b'},
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
          {name: 'textPrimary', lightHex: '#667f9b', darkHex: '#4e5a6e'},
          {name: 'textSecondary', lightHex: '#999999', darkHex: '#999999'},
          {name: 'captionPrimary', lightHex: '#a9bcd2', darkHex: '#a9bcd2'}
        ]
      },
      {
        shades: [
          {name: 'superPrimary base', lightHex: '#f2fafa', darkHex: '#f2fafa'},
          {name: 'superPrimary darken1', lightHex: '#e3f2f2', darkHex: '#e3f2f2'},
          {name: 'superPrimaryHover', lightHex: '#f5fdfb', darkHex: '#00c0a5'},
        ]
      },
      {
        shades: [
          {name: 'selectActive', lightHex: '#dcfff9', darkHex: '#2e3c75'},
          {name: 'selectHover', lightHex: '#f0f0f0', darkHex: '#2c3448'},
          {name: 'expandHeader', lightHex: '#184f90', darkHex: '#184f90'}
        ]
      },
      {
        shades: [
          {name: 'success', lightHex: '#2cc479', darkHex: '#2cc479'},
          {name: 'warning', lightHex: '#FFF2DC', darkHex: '#FFF2DC' },
          {name: 'warning darken-1', lightHex: '#f5a623', darkHex: '#f5a623'}
        ]
      },
      {
        shades: [
          {name: 'txIn', lightHex: '#7895f2', darkHex: '#7895f2'},
          {name: 'txOut', lightHex: '#ffaf8f', darkHex: '#ffaf8f'},
          {name: 'swap', lightHex: '#184f90', darkHex: '#0f1320'},
          {name: 'swapDisable', lightHex: '#f8f8f8', darkHex: '#0f1320'}
        ]
      },
      {
        shades: [
          {name: 'disabled', lightHex: '#cecece', darkHex: '#1f2b42'},
          {name: 'white', lightHex: '#fff', darkHex: '#fff'}
        ]
      },
      {
        shades: [
          {name: 'inputBorder', lightHex: '#e0e0e0', darkHex: '#6679fb'},
          {name: 'inputDisabled', lightHex: '#cecece', darkHex: '#1f2b42'},
          {name: 'inputLabel', lightHex: '#6d89a6', darkHex: '#4e5a6e'},
          {name: 'searchInput', lightHex: '#f2f4fa', darkHex: '#f2f4fa'},
          {name: 'searchText', lightHex: '#96a8b6', darkHex: '#96a8b6'},
          {name: 'dropdownBorder', lightHex: '#05c0a5', darkHex: '#7e90a7'},
          {name: 'progressBar', lightHex: '#F3FAFA', darkHex: '#151A29'},
        ]
      }
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
      if (shade.name === 'expandHeader' || shade.name === 'basic base' || shade.name === 'titlePrimary') {
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
