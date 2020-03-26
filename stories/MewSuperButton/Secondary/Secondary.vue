<template>
  <div>
    <mew-button
      btnStyle="transparent"
      title="Secondary Transparent"
      colorTheme="secondary"
    />
    <br />
    <mew-button
      btnStyle="outline"
      title="Secondary Outline"
      colorTheme="secondary"
    />
    <br />
    <mew-button
      btnStyle="background"
      title="Secondary Background"
      colorTheme="secondary"
    />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";

export default {
  title: "Secondary",
  components: {
    "mew-button": MewSuperButton
  }
};
</script>
