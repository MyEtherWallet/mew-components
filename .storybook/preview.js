import { addDecorator, addParameters } from '@storybook/vue';
import vuetifyConfig from '../src/plugins/vuetify';
import 'vuetify/src/styles/main.sass';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

configureViewport({
  defaultViewport: 'VuetifyMd',
  viewports: {
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
  viewport: { viewports: INITIAL_VIEWPORTS },
  backgrounds: [
    { name: 'white', value: '#fff' },
    { name: 'dark-blue', value: '#184f90' },
    { name: 'dark mode', value: '#151a29'},
    { name: 'light-green', value: '#cdf4ee'}
  ],
  docs: {
    inlineStories: true,
    container: DocsContainer,
    page: DocsPage,
  }
});