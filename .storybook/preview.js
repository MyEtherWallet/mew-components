import vuetifyConfig from "../src/plugins/vuetify";
import "vuetify/src/styles/main.sass";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";

const newViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "900px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "700px",
    },
  },
};

export const decorators = [
  () => ({
    vuetify: vuetifyConfig,
    template:
      '<v-app :style="noBackground"><v-main><v-container><v-layout column><story/></v-layout></v-container></v-main></v-app>',
    data: () => {
      return {
        noBackground: {
          background: "none",
        },
      };
    },
  }),
];

export const parameters = {
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } },
  backgrounds: {
    values: [
      { name: "white", value: "#fff" },
      { name: "dark-blue", value: "#184f90" },
      { name: "dark mode", value: "#151a29" },
      { name: "light-green", value: "#f5fdfb" },
    ],
  },
  docs: {
    inlineStories: true,
    container: DocsContainer,
    page: DocsPage,
  },
};
