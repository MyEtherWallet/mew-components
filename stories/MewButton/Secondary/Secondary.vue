<template>
  <div>
    <mew-button
      btn-style="transparent"
      title="Secondary Transparent"
      color-theme="secondary"
    />
    <br />
    <mew-button
      btn-style="outline"
      title="Secondary Outline"
      color-theme="secondary"
    />
    <br />
    <mew-button
      btn-style="background"
      title="Secondary Background"
      color-theme="secondary"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "Secondary",
  components: {
    "mew-button": MewButton
  }
};
</script>
