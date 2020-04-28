<template>
  <v-stepper :v-model="onStep ">
    <v-stepper-header class="justify-center">
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

.v-stepper__step__step {
  display: none;
}

.v-stepper__step {
  background-color: var(--v-textSecondary-base) !important;
  height: 100%; 
  margin-right: 10px;
  width: 100%;
  &:after {
    content: "";  
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 40px solid var(--v-textSecondary-base);
    position: absolute; 
    right: -40px;
    top: 0;
    z-index: 1;
  }
  &:before {
    content: "";  
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 40px solid var(--v-white-base);
    position: absolute; 
    left: 0; 
    top: 0;
  }
}
	
.v-stepper__step:first-child {
  border-top-left-radius: 10px; border-bottom-left-radius: 10px;
}
.v-stepper__step:first-child:before {
display: none; 
}

.v-stepper__step:last-child {
padding-right: 40px;
border-top-right-radius: 10px; border-bottom-right-radius: 10px;
}
.v-stepper__step:last-child:after {
display: none; 
}

.v-stepper__step:hover {
background: #357DFD;
color:#fff;
}

.v-stepper__step:hover:after {
border-left-color: #357DFD;
  color:#fff;
}
		
		
</style>

