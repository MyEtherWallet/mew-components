/* eslint-disable no-unused-vars */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const app = createApp({
  render: (h) => h(),
});

app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');
