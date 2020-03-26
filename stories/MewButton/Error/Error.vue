<template>
  <div>
    <mew-button
      btn-style="transparent"
      title="Error Transparent"
      color-theme="error"
    />
    <br />
    <mew-button btn-style="outline" title="Error Outline" color-theme="error" />
    <br />
    <mew-button
      btn-style="background"
      title="Error Background"
      color-theme="error"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "Error",
  components: {
    "mew-button": MewButton
  }
};
</script>
