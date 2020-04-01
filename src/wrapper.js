// Import vue component
import MewButton from "./components/MewButton/MewButton.vue";
import MewSuperButton from "./components/MewSuperButton/MewSuperButton.vue";

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  // Object.keys(Components).forEach(name => {
  //   Vue.component(name, Components[name]);
  // });
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export const MewButton = MewButton, MewSuperButton = MewSuperButton;
