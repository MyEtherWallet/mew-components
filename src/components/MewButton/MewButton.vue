<template>
  <div>
    <v-btn
      x-large
      depressed
      v-text="label"
      :disabled="disabled"
      :color="color"
      :outlined="outlined"
      :text="onlyText"
    ></v-btn>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
    color: String,
    outlined: Boolean,
    onlyText: Boolean
  }
};
</script>