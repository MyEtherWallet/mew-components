

export default {
  title: 'Colors'
};

export const All = () => ({
  data() {
    return {
      shades: [ 
        {name: 'primary base', hex: '#05c0a5'}, 
        {name: 'primary lighten-1', hex: '#baede6'},
        {name: 'primary lighten-2', hex: '#dcfff9'},
        {name: 'primary lighten-3', hex: '#e4f1f1'},
        {name: 'primary lighten-4', hex: '#f2fafa'},
        {name: 'primary lighten-5', hex: '#f5fdfb'},
        {name: 'primary darken-1', hex: '#56c5b4'},
        {name: 'primary darken-2', hex: '#00c0a5'},
        {name: 'primary darken-3', hex: '#1eb19b'},
        {name: 'primary darken-4', hex: '#0baa93'}]
    }
  },
  template: `
    <div>
    <br />
    <v-row align="center">
      <v-card
        v-for="shade in shades"
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
