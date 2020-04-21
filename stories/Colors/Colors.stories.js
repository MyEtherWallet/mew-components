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
          {name: 'primary base', hex: '#05c0a5'}, 
          {name: 'primaryHover', lightHex: '#1eb19b', darkHex: '#1eb19b'}, 
          {name: 'primaryActive', lightHex: '#56c5b4', darkHex: '#56c5b4'},
          {name: 'primaryOutlineHover', lightHex: '#05c0a5', darkHex: '#03292c'},
          {name: 'primaryOutlineActive', lightHex: '#baede6', darkHex: '#15796a'}
        ]
      }, {
        shades: [
          {name: 'secondary base', hex: '#5a78f0', darkHex: '#5a78f0'},
          {name: 'secondaryOutlineHover', lightHex: '#f9fafe', darkHex: '#182040'},
          {name: 'secondaryOutlineActive', lightHex: '#d6dffa', darkHex: '#2e3c75'}
        ]
      },
      {
        shades: [
          {name: 'error base', lightHex: '#ff7700', darkHex: '#ff445b'},
          {name: 'errorOutlineHover', lightHex: '#fff8f9', darkHex: '#361317'},
          {name: 'errorOutlineActive', lightHex: '#ffd7dc', darkHex: '#651f28'},
        ]
      },
      {
        shades: [
          {name: 'basic base', lightHex: '#0b1a40', darkHex: '#151A29'},
          {name: 'basicOutlineHover', lightHex: '#f5f7f8', darkHex: '#1e2a3e'},
          {name: 'basicOutlineActive', lightHex: '#c5ccd3', darkHex: '#3d4e6'}
        ]
      },
      {
        shades: [
          {name: 'title', lightHex: '#0b2840', darkHex: '#95aed8'},
          {name: 'text', lightHex: '#667f9b', darkHex: '#4e5a6e'},
          {name: 'text2', lightHex: '#999999', darkHex: '#999999'},
          {name: 'caption', lightHex: '#a9bcd2', darkHex: '#a9bcd2'}
        ]
      },
      {
        shades: [
          {name: 'superPrimary', lightHex: '#f2fafa', darkHex: '#f2fafa'},
          {name: 'superPrimaryHover', lightHex: '#00c0a5', darkHex: '#00c0a5'},
          {name: 'superPrimaryActive', lightHex: '#e4f1f1', darkHex: '#e4f1f1'}
        ]
      },
      {
        shades: [
          {name: 'selectActive', lightHex: '#dcfff9', darkHex: '#2e3c75'},
          {name: 'selectHover', lightHex: '#f0f0f0', darkHex: '#2c3448'}
        ]
      },
      {
        shades: [
          {name: 'success', lightHex: '#2cc479', darkHex: '#2cc479'},
          {name: 'warning', lightHex: '#ff7700'},
          {name: 'warning lighten-1', lightHex: '#f5a623'}
        ]
      },
      {
        shades: [
          {name: 'txIn', lightHex: '#7895f2', darkHex: '#7895f2'},
          {name: 'txOut', lightHex: '#ffaf8f', darkHex: '#ffaf8f'},
          {name: 'swap', lightHex: '#184f90', darkHex: '#0f1320'},
          {name: 'swapDisable', lightHex: '#f8f8f8', darkHex: '#f8f8f8'}
        ]
      },
      {
        shades: [
          {name: 'disabled', lightHex: '#cecece', darkHex: '#1f2b42'},
        ]
      },
      {
        shades: [
          {name: 'inputBorder', lightHex: '#e0e0e0', darkHex: '#4e5a6e'},
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
      if (shade.name === 'basic base' || shade.name === 'title') {
        return 'white--text';
      }

      if ((shade.name === 'superPrimary' || shade.name === 'superPrimaryActive' || shade.name === 'swapDisable') && this.$vuetify.theme.dark) {
        return 'black--text';
      }

      return classes;
    }
  },
  template: `
    <div>
    <br />
    <v-row align="center" v-for="( color, idx) in mewColors" key="color + idx">
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
