<template>
  <div>
    <mew-button
      btnStyle="transparent"
      text="MEW Transparent"
      colorTheme="mew"
      @click="action"
    />
    <code>
      <mew-button
        btnStyle="transparent"
        text="MEW Transparent"
        colorTheme="mew"
        @click="action"
      />
    </code>
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
  </div>
</template>

<script>
import MewButton from "../MewButton.vue";
import { action } from '@storybook/addon-actions';

export default {
  title: "MewThemeButton",
  components: {
    "mew-button": MewButton
  },
  methods: {
    action() {
      action("clicked");
    }
  }
};
</script>
