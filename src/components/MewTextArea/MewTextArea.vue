    <!--
  =====================================================================================
    Mew Text Area 
  =====================================================================================
  -->
<template>
  <v-textarea outlined :label="label" :value="value"/>
</template>

<script>
export default {
  props: {
    label: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  }
};
</script>
