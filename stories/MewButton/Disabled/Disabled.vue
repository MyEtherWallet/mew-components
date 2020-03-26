<template>
  <div>
    <mew-button
      btn-style="transparent"
      title="Disabled Transparent"
      color-theme="disabled"
    />
    <br />
    <mew-button
      btn-style="outline"
      title="Disabled Outline"
      color-theme="disabled"
    />
    <br />
    <mew-button
      btn-style="background"
      title="Disabled Background"
      color-theme="disabled"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "Disabled",
  components: {
    "mew-button": MewButton
  }
};
</script>
