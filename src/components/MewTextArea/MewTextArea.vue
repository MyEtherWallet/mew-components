    <!--
  =====================================================================================
    Mew Text Area 
  =====================================================================================
  -->
<template>
  <v-textarea outlined :label="label" :value="inputValue"/>
</template>

<script>
export default {
  data() {
    return {
      inputValue : null
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal !== oldVal) {
         this.$emit('input', newVal) 
      }
    },
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.inputValue = newVal;
      }
    }
  },
  mounted() {
    this.inputValue = this.value;
  },
  props: {
    label: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: [String, Array]
    }
  }
};
</script>
