<template>
  <v-stepper :v-model="onStep ">
    <v-stepper-header>
      <v-stepper-step :complete="onStep > 1" step="1">1</v-stepper-step>
      <v-stepper-step :complete="onStep > 2" step="2">2</v-stepper-step>
      <v-stepper-step :complete="onStep > 3" step="3">3</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      onStep: 1
    }
  }
}
</script>

<style lang="scss">
</style>

