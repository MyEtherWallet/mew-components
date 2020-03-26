<template>
  <div class="wrapper">
    <mew-button
      title="Title"
      subtitle="Subtitle"
      tag="#tag"
      color-theme="outline"
      note="Not Recommended"
      :titleIcon="iconChecked"
    />
    <br />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";
import iconChecked from "/Users/jessicapeng/mew-components/src/assets/images/icons/icon-checked.png";

export default {
  title: "Outline",
  components: {
    "mew-button": MewSuperButton
  },
  data() {
    return {
      iconChecked: iconChecked
    };
  }
};
</script>

<style scoped>
.wrapper {
  background-color: var(--v-dark-blue-base);
  height: 100%;
}
</style>
