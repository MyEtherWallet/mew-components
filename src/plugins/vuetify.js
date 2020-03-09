import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

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
        error: "#a70015",
        info: "#003945",
        success: "#4CAF50",
        warning: "#ff9800",
        cerise: "#e96071",
        violet: "#7070e3",
        independence: "#536d8b",
        spruce: "#506175",
        silver: "#cecece",
        "dark-space": "#0b2840",
        "police-strobe": "#25b0e8",
        "dark-independence": "#334758",
        "naples-yellow": "#fcb755",
        "primary-silver": "#f2f4fa",
        "light-mint": "#f2fafa",
        "disabled-1": "#d8d8d8",
        "disabled-2": "#999",
        "grey-1": "#96a8b6",
        "yellow-1": "#ffe9c5"
      }
    }
  }
});
