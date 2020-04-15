import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@/assets/styles/global.scss";

import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSheet,
  VSnackbar,
  VSparkline,
  VToolbar,
  VTextField,
  VLayout,
  VSelect,
  VCombobox
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCardText,
    VCol,
    VContainer,
    VContent,
    VDialog,
    VDivider,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSheet,
    VSnackbar,
    VSparkline,
    VToolbar,
    VTextField,
    VLayout,
    VSelect,
    VCombobox
  }
});

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#05c0a5",
        secondary: "#5a78f0",
        accent: "#cdf2ee",
        error: "#FF445B",
        info: "#003945",
        success: "#4CAF50",
        warning: "#ff9800",
        cerise: "#e96071",
        violet: "#7070e3",
        independence: "#536d8b",
        spruce: "#506175",
        disabled: "#cecece",
        "disabled-super": "#C5C5C5",
        white: "#ffffff",
        basic: "#0b2840",
        "light-green": "#F1FAFA",
        "police-strobe": "#25b0e8",
        "dark-independence": "#334758",
        "naples-yellow": "#fcb755",
        "primary-silver": "#f2f4fa",
        "light-mint": "#f2fafa",
        "disabled-1": "#d8d8d8",
        "disabled-2": "#999",
        "grey-1": "#96a8b6",
        "yellow-1": "#f5a623",
        "dark-blue": "#184f90",
        "light-grey": "#e0e0e0",
        "input-label": "#6d89a6",
        "input-placeholder": "#96a8b6",
        "select-border": "#a3b7cf",
        "primary-hover": "#0BAA93",
        "primary-active": "#0A8170"
      },
      dark: {
        primary: "#0b2840",
        secondary: "#5a78f0",
        accent: "#cdf2ee",
        error: "#FF445B",
        info: "#003945",
        success: "#4CAF50",
        warning: "#ff9800",
        cerise: "#e96071",
        violet: "#7070e3",
        independence: "#536d8b",
        spruce: "#506175",
        disabled: "#cecece",
        "disabled-super": "#C5C5C5",
        white: "#ffffff",
        basic: "#0b2840",
        "light-green": "#F1FAFA",
        "police-strobe": "#25b0e8",
        "dark-independence": "#334758",
        "naples-yellow": "#fcb755",
        "primary-silver": "#f2f4fa",
        "light-mint": "#f2fafa",
        "disabled-1": "#d8d8d8",
        "disabled-2": "#999",
        "grey-1": "#96a8b6",
        "yellow-1": "#f5a623",
        "dark-blue": "#184f90"
      }
    }
  }
});
