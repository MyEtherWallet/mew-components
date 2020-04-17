import { addDecorator, addParameters } from '@storybook/vue';
import vuetifyConfig from '../src/plugins/vuetify';
import 'vuetify/src/styles/main.sass';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

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
  template: '<v-app :style="noBackground"><v-content><v-container><v-layout column><story/></v-layout></v-container></v-content></v-app>',
  data() {
    return {
      noBackground: {
        background: 'none'
      }
    }
  }
}));

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff' },
    { name: 'dark-blue', value: '#184f90' },
    { name: 'light-green', value: '#cdf4ee'}
  ],
  docs: {
    container: DocsContainer,
    page: DocsPage,
  }
});