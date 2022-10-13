/* eslint-disable no-unused-vars */
import { createApp } from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { createPinia } from 'pinia';

const app = createApp({
  render: (h) => h(),
});
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount('#app');
