<template>
  <div>
    <mew-button
      btn-style="transparent"
      title="Basic Transparent"
      color-theme="basic"
    />
    <br />
    <mew-button btn-style="outline" title="Basic Outline" color-theme="basic" />
    <br />
    <mew-button
      btn-style="background"
      title="Basic Background"
      color-theme="basic"
    />
  </div>
</template>

<script>
import MewButton from "../MewButton";

export default {
  title: "Basic",
  components: {
    "mew-button": MewButton
  }
};
</script>
