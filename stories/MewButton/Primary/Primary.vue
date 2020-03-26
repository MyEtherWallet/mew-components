<template>
  <div>
    <mew-button
      btn-style="transparent"
      title="Primary Transparent"
      color-theme="primary"
    />
    <br />
    <mew-button
      btn-style="outline"
      title="Primary Outline"
      color-theme="primary"
    />
    <br />
    <mew-button
      btn-style="background"
      title="Primary Background"
      color-theme="primary"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "Primary",
  components: {
    "mew-button": MewButton
  }
};
</script>
