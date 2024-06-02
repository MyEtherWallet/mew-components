<!--
  =====================================================================================
    Mew Text Area 
  =====================================================================================
  -->
<template>
  <v-textarea
    class="mew-text-area"
    outlined
    :rules="rules"
    :label="label"
    :value="inputValue"
  />
</template>

<script setup>
import { ref, watch, onMounted, defineProps } from 'vue';

const inputValue = ref(null);

watch(inputValue, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    this.$emit('input', newVal);
  }
});
watch(props.value, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    inputValue.value = newVal;
  }
});

onMounted(() => {
  inputValue.value = this.value;
});
const props = defineProps({
  /**
   * Text area label.
   */
  label: {
    default: '',
    type: String,
  },
  /**
   * Text area value.
   */
  value: {
    default: '',
    type: [String, Array],
  },
  /**
   * For validating your input - accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message.
   */
  rules: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>
