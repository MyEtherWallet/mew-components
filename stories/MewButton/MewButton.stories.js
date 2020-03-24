import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MewButton from './MewButton.vue';
import MewTheme from './MewTheme';
// import Simple from './SimpleTheme';

export default {
  title: "MewButton",
  component: MewButton
};

export const MEW = () => MewTheme;
