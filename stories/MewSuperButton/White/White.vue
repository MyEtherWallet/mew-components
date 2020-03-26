<template>
  <div class="wrapper">
    <mew-button
      btnStyle="transparent"
      title="White Transparent"
      colorTheme="white"
    />
    <br />
    <mew-button btnStyle="outline" title="White Outline" colorTheme="white" />
    <br />
    <mew-button
      btnStyle="background"
      title="White Background"
      colorTheme="white"
    />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";

export default {
  title: "White",
  components: {
    "mew-button": MewSuperButton
  }
};
</script>

<style>
.wrapper {
  background-color: var(--v-primary-base);
  height: 100%;
}
</style>
