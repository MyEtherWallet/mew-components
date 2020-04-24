<template>
  <v-stepper :v-model="true">
    <v-stepper-header>
      <v-stepper-step step="1">Name of step</v-stepper-step>
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