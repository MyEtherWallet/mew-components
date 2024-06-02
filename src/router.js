import { createRouter } from 'vue-router';
import Main from './views/MainView.vue';

export default new createRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
});
