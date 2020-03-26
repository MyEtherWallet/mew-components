<template>
  <div class="wrapper">
    <mew-button
      btn-style="transparent"
      title="White Transparent"
      color-theme="white"
    />
    <br />
    <mew-button btn-style="outline" title="White Outline" color-theme="white" />
    <br />
    <mew-button
      btn-style="background"
      title="White Background"
      color-theme="white"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "White",
  components: {
    "mew-button": MewButton
  }
};
</script>

<style>
.wrapper {
  background-color: var(--v-primary-base);
  height: 100%;
}
</style>
