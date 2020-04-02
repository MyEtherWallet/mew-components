import { configure, addDecorator, addParameters } from '@storybook/vue';
import Vue from 'vue';
import vuetifyConfig from "../src/plugins/vuetify";
import "vuetify/src/styles/main.sass";
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// From https://github.com/nidkil/vuetify-with-storybook
const vuetifyViewports = {
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      width: '1904px'
    },
    type: 'desktop'
  },
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      width: '600px'
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      width: '960px'
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      width: '1264px'
    },
    type: 'tablet'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      width: '4096px'
    },
    type: 'desktop'
  }
}
configureViewport({
  defaultViewport: 'VuetifyMd',
  viewports: {
    ...vuetifyViewports,
    ...INITIAL_VIEWPORTS
  }
});

addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><v-content><v-container><v-layout column><story/></v-layout></v-container></v-content></v-app>',
}));

addParameters({
  backgrounds: [
    { name: "light", value: "#eeeeee" },
    { name: "dark", value: "#222222" }
  ]
});