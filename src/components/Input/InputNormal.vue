<template>
  <v-text-field
    :label="title"
    :placeholder="placeholder"
    outlined
    color="teal accent-4"
    v-model="input1"
    :persistent-hint="showhint"
    :hint="hint"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: String,
    showhint: Boolean,
    hint: String
  },
  data: () => ({
    input1: ""
  }),
  watch: {
    input1(newValue) {
      this.$emit("input", newValue);
    }
  },
  mounted() {
    this.input1 = this.value;
  }
};
</script>
