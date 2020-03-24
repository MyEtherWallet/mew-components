// Import vue component
import MewButton from "./components/MewButton/MewButton.vue";
import Vue from "vue";

const Components = {
  MewButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

// To allow use as module (npm/webpack/etc.) export component
export default Components;

// // Declare install function executed by Vue.use()
// export function install(Vue) {
//   if (install.installed) return;
//   install.installed = true;
//   Vue.component("MewButton", mewButton);
// }

// // Create module definition for Vue.use()
// const plugin = {
//   install
// };

// // Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;

// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }