<template>
  <div>
    <mew-button
      btnStyle="transparent"
      title="Error Transparent"
      colorTheme="error"
    />
    <br />
    <mew-button btnStyle="outline" title="Error Outline" colorTheme="error" />
    <br />
    <mew-button
      btnStyle="background"
      title="Error Background"
      colorTheme="error"
    />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";

export default {
  title: "Error",
  components: {
    "mew-button": MewSuperButton
  }
};
</script>
