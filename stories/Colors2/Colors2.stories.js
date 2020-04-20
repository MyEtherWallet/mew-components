import {
  withKnobs,
  boolean
} from '@storybook/addon-knobs';

export default {
  title: 'Colors2',
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
      primaryShades: [ 
        {name: 'primary base', hex: '#05c0a5'}, 
        {name: 'primary lighten-1', hex: '#baede6'},
        {name: 'primary lighten-2', hex: '#dcfff9'},
        {name: 'primary lighten-3', hex: '#e4f1f1'},
        {name: 'primary lighten-4', hex: '#f2fafa'},
        {name: 'primary lighten-5', hex: '#f5fdfb'},
        {name: 'primary darken-1', hex: '#56c5b4'},
        {name: 'primary darken-2', hex: '#00c0a5'},
        {name: 'primary darken-3', hex: '#1eb19b'},
        {name: 'primary darken-4', hex: '#0baa93'}
      ]
      ,
      secondaryShades: [
        {name: 'secondary base', hex: '#5a78f0'},
        {name: 'secondary lighten-1', hex: '#7895f2'},
        {name: 'secondary lighten-2', hex: '#7fdefb'},
        {name: 'secondary lighten-3', hex: '#d6dffa'},
        {name: 'secondary lighten-4', hex: '#f9fafe'},
        {name: 'secondary darken-1', hex: '#184f90'}
      ]
      ,
      basicShades: [
        {name: 'basic base', hex: '#0b1a40'},
        {name: 'basic lighten-1', hex: '#a9bcd2'},
        {name: 'basic lighten-2', hex: '#c5ccd3'}
        ,{name: 'basic lighten-3', hex: '#f5f7f8'}
      ],
      warningShades: [
        {name: 'warning base', hex: '#ff7700'},
        {name: 'warning lighten-1', hex: '#f5a623'},
        {name: 'warning lighten-2', hex: '#ffaf8f'}
      ],
      errorShades: [
        {name: 'error base', hex: '#ff7700'},
        {name: 'error lighten-1', hex: '#ffd7dc'},
        {name: 'error lighten-2', hex: '#fff8f9'}
      ],
      disabledShades: [
        {name: 'disabled base', hex: '#cecece'},
        {name: 'disabled lighten-1', hex: '#e0e0e0'},
        {name: 'disabled lighten-2', hex: '#f2f4fa'},
        {name: 'disabled lighten-5', hex: '#fff'},
        {name: 'disabled darken-1', hex: '#999999'},
      ]
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
      // console.error('sdfsdf', this.$vuetify.theme)
    }
  },
  template: `
    <div>
    <br />
    <v-row align="center">
      <v-card
        v-for="shade in primaryShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text>
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
      <v-card
        color="success"
        outlined
        tile
        width="100"
        height="100"
        > 
        <v-card-text class="white--text">
          <div style="font-size: 12px">success</div>
          <div style="font-size: 12px">#2cc479</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row align="center">
      <v-card
        v-for="shade in secondaryShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text>
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row align="center">
      <v-card
        v-for="shade in basicShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text :class="shade.name === 'basic base' ? 'white--text' : ''">
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
      <v-card
      color="title"
      outlined
      tile
      width="100"
      height="100"
      > 
      <v-card-text class="white--text">
        <div style="font-size: 12px">title</div>
        <div style="font-size: 12px">#0b2840</div>
      </v-card-text>
      </v-card>
      <v-card
      color="text"
      outlined
      tile
      width="100"
      height="100"
      > 
      <v-card-text>
        <div style="font-size: 12px">text</div>
        <div style="font-size: 12px">#667f9b</div>
      </v-card-text>
      </v-card>
    </v-row>
    <v-row align="center">
      <v-card
        v-for="shade in errorShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text>
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row align="center">
      <v-card
        v-for="shade in warningShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text>
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row align="center">
      <v-card
        v-for="shade in disabledShades"
        :key="shade.name"
        :color="shade.name"
        outlined
        tile
        width="100"
        height="100"
      > 
        <v-card-text>
          <div style="font-size: 12px">{{shade.name}}</div>
          <div style="font-size: 12px">{{shade.hex}}</div>
        </v-card-text>
      </v-card>
    </v-row>
  </div>`
});