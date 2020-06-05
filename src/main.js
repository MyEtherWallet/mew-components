/* eslint-disable no-unused-vars */
import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import MaterialIcons from './assets/fonts/Material-Icons';
import Roboto from './assets/fonts/Roboto';
import PtMono from './assets/fonts/PT-Mono';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h()
}).$mount('#app');
