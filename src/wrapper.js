import button from './components/MewButton/MewButton.vue';
import superButton from './components/MewSuperButton/MewSuperButton.vue';
import addressSelect from './components/AddressSelect/AddressSelect.vue';
import blockie from './components/Blockie/Blockie.vue';
import infoCard from './components/InfoCard/InfoCard.vue';
import infoTooltip from './components/InfoTooltip/InfoTooltip.vue';
import mewCheckbox from './components/MewCheckbox/MewCheckbox.vue';
import mewExpandPanel from './components/MewExpandPanel/MewExpandPanel.vue';
import mewInput from './components/MewInput/MewInput.vue';
import mewMenu from './components/MewMenu/MewMenu.vue';
import mewModule from './components/MewModule/MewModule.vue';
import mewOverlay from './components/MewOverlay/MewOverlay.vue';
import mewPopup from './components/MewPopup/MewPopup.vue';
import mewSelect from './components/MewSelect/MewSelect.vue';
import mewStepper from './components/MewStepper/MewStepper.vue';
import mewSwitch from './components/MewSwitch/MewSwitch.vue';
import mewTabs from './components/MewTabs/MewTabs.vue';
import toast from './components/Toast/Toast.vue';
import txBadge from './components/TxBadge/TxBadge.vue';
import txNotification from './components/TxNotification/TxNotification.vue';
import warningSheet from './components/WarningSheet/WarningSheet.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('MewButton', button);
  Vue.component('MewSuperButton', superButton);
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // eslint-disable-next-line no-undef
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export const MewButton = button,
  MewSuperButton = superButton,
  Blockie = blockie,
  InfoCard = infoCard,
  InfoTooltip = infoTooltip,
  MewCheckbox = mewCheckbox,
  MewExpandPanel = mewExpandPanel,
  MewInput = mewInput,
  MewMenu = mewMenu,
  MewModule = mewModule,
  MewOverlay = mewOverlay,
  MewPopup = mewPopup,
  MewSelect = mewSelect,
  MewStepper = mewStepper,
  MewSwitch = mewSwitch,
  MewTabs = mewTabs,
  Toast = toast,
  TxBadge = txBadge,
  TxNotification = txNotification,
  WarningSheet = warningSheet,
  AddressSelect = addressSelect;
