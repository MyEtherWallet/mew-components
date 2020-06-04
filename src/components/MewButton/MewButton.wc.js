import MewButton from './MewButton';
import vuetify from '@/plugins/vuetify';

export default {
  vuetify,
  props: MewButton.props,
  components: {
    MewButton
  },
  render (createElement) {
    // eslint-disable-next-line no-console
    console.log(this)
    return createElement('v-app', [
      createElement(MewButton, {
      props: this.$options.propsData,
      on: this.$listeners
    })
    ])
  }
}
// <template>
//   <v-app>
//     <mew-button
//       :title="title"
//     />
//   </v-app>
// </template>
// <script>
// import MewButton from './MewButton';
// import vuetify from '@/plugins/vuetify';
// export default {
//   inheritAttrs: false,
//   props: MewButton.props,
//   vuetify,
//   components: {
//     MewButton,
//   },
//   mounted(){
//     // eslint-disable-next-line no-console
//     console.log(this.$attrs, this)
//   }
// };
// </script>
// <style lang="scss" scoped>
// @import '../../../node_modules/vuetify/dist/vuetify.min.css';
// </style>