<template>
  <div>
    <mew-button
      btnStyle="transparent"
      title="Disabled Transparent"
      colorTheme="disabled"
    />
    <br />
    <mew-button
      btnStyle="outline"
      title="Disabled Outline"
      colorTheme="disabled"
    />
    <br />
    <mew-button
      btnStyle="background"
      title="Disabled Background"
      colorTheme="disabled"
    />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";

export default {
  title: "Disabled",
  components: {
    "mew-button": MewSuperButton
  }
};
</script>
