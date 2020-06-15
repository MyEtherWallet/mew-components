import MewButton from './components/MewButton/MewButton.vue';
import MewSuperButton from './components/MewSuperButton/MewSuperButton.vue';
import AddressSelect from './components/AddressSelect/AddressSelect.vue';
import Blockie from './components/Blockie/Blockie.vue';
import InfoCard from './components/InfoCard/InfoCard.vue';
import InfoTooltip from './components/InfoTooltip/InfoTooltip.vue';
import MewBanner from './components/MewBanner/MewBanner.vue';
import MewCarousel from './components/MewCarousel/MewCarousel.vue';
import MewCheckbox from './components/MewCheckbox/MewCheckbox.vue';
import MewExpandPanel from './components/MewExpandPanel/MewExpandPanel.vue';
import MewInput from './components/MewInput/MewInput.vue';
import MewMenu from './components/MewMenu/MewMenu.vue';
import MewModule from './components/MewModule/MewModule.vue';
import MewOverlay from './components/MewOverlay/MewOverlay.vue';
import MewPopup from './components/MewPopup/MewPopup.vue';
import MewProgressBar from './components/MewProgressBar/MewProgressBar.vue';
import MewSelect from './components/MewSelect/MewSelect.vue';
import MewStepper from './components/MewStepper/MewStepper.vue';
import MewSwitch from './components/MewSwitch/MewSwitch.vue';
import MewTabs from './components/MewTabs/MewTabs.vue';
import MewTable from './components/MewTable/MewTable.vue';
import MewToggleButton from './components/MewToggleButton/MewToggleButton.vue';
import Toast from './components/Toast/Toast.vue';
import TokenContainer from './components/TokenContainer/TokenContainer.vue';
import TxBadge from './components/TxBadge/TxBadge.vue';
import TxNotification from './components/TxNotification/TxNotification.vue';
import WarningSheet from './components/WarningSheet/WarningSheet.vue';
import MewIcon from './components/MewIcon/MewIcon.vue';

// import Vue from 'vue';
// import wrap from '@vue/web-component-wrapper';

// const CustomElement = wrap(Vue, MewButton);

// window.customElements.define('mew-button', CustomElement);

const Components = {
  MewButton,
  MewSuperButton,
  Blockie,
  InfoCard,
  InfoTooltip,
  MewCheckbox,
  MewExpandPanel,
  MewInput,
  MewMenu,
  MewModule,
  MewOverlay,
  MewPopup,
  MewSelect,
  MewStepper,
  MewSwitch,
  MewTabs,
  Toast,
  TxNotification,
  WarningSheet,
  AddressSelect,
  TxBadge,
  MewBanner,
  MewCarousel,
  MewProgressBar,
  MewTable,
  MewToggleButton,
  TokenContainer,
  MewIcon
}

// Declare install function executed by Vue.use()
export function install() {
  if (install.installed) return;
  install.installed = true;
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

export default Components;