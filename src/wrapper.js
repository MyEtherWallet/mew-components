import MewButton from './components/MewButton/MewButton.vue';
import MewSuperButton from './components/MewSuperButton/MewSuperButton.vue';
import MewAddressSelect from './components/MewAddressSelect/MewAddressSelect.vue';
import MewBlockie from './components/MewBlockie/MewBlockie.vue';
import MewInfoCard from './components/MewInfoCard/MewInfoCard.vue';
import MewTooltip from './components/MewTooltip/MewTooltip.vue';
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
import MewToggle from './components/MewToggle/MewToggle.vue';
import MewToast from './components/MewToast/MewToast.vue';
import MewTokenContainer from './components/MewTokenContainer/MewTokenContainer.vue';
import MewBadge from './components/MewBadge/MewBadge.vue';
import MewNotification from './components/MewNotification/MewNotification.vue';
import MewWarningSheet from './components/MewWarningSheet/MewWarningSheet.vue';
import MewIcon from './components/MewIcon/MewIcon.vue';
import MewChart from './components/MewChart/MewChart.vue';
import MewTransformHash from './components/MewTransformHash/MewTransformHash.vue';
import MewCopy from './components/MewCopy/MewCopy.vue';
import MewSheet from './components/MewSheet/MewSheet.vue';
import MewTextArea from './components/MewTextArea/MewTextArea.vue';
import MewSearch from './components/MewSearch/MewSearch.vue';
import MewDropdown from './components/MewDropdown/MewDropdown.vue';

// import Vue from 'vue';
// import wrap from '@vue/web-component-wrapper';

// const CustomElement = wrap(Vue, MewButton);

// window.customElements.define('mew-button', CustomElement);

const Components = {
  MewButton,
  MewSuperButton,
  MewBlockie,
  MewInfoCard,
  MewTooltip,
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
  MewToast,
  MewNotification,
  MewWarningSheet,
  MewAddressSelect,
  MewBadge,
  MewBanner,
  MewCarousel,
  MewProgressBar,
  MewTable,
  MewToggle,
  MewTokenContainer,
  MewIcon,
  MewChart,
  MewTransformHash,
  MewCopy,
  MewSheet,
  MewTextArea,
  MewSearch,
  MewDropdown
};

// Declare install function executed by Vue.use()
export function install() {
  if (install.installed) return;
  install.installed = true;
}

// Create module definition for Vue.use()
const plugin = {
  install,
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
