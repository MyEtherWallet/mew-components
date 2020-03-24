import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MewButton from './MewButton';
import MewTheme from './MewTheme';
// import Simple from './SimpleTheme';

export default {
  title: "MewButton"
};

export const MEWTheme = () =>  ({
  components: { "mew-button": MewButton },
  template: `
    <div>
    <mew-button
      btnStyle="transparent"
      text="MEW Transparent"
      colorTheme="mew"
      @click="action"
    />
    <br/>
    <mew-button
      btnStyle="outline"
      text="MEW Outline"
      colorTheme="mew"
      @click="action"
    />
    <br/>
    <mew-button
      btnStyle="background"
      text="MEW Background"
      colorTheme="mew"
      @click="action"
    />
  </div>`
});

export const MEWOutline = () => ({
  components: { "mew-button": MewButton },
  template:
    '<mew-button btnStyle="outline" text="MEW Outline" colorTheme="mew"></mew-button>'
});
