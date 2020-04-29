<template>
  <v-stepper
    class="mew-stepper"
    :v-model="onStep"
  >
    <v-stepper-header class="justify-center">
      <v-stepper-step
        :class="[ onStep === item.step ? 'active' : '']"
        color="expandHeader"
        v-for="(item, i) in items"
        :key="i"
        :complete="onStep > item.step"
        :step="item.name"
        @click="onClick()"
      />
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      onStep: 1
    }
  },
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  mounted() {
    console.error('step', this.onStep)
  },
  methods: {
    onClick() {
      this.onStep += 1;
    }
  }
}
</script>

<style lang="scss">
.mew-stepper {
  .v-stepper__header {
    height: 100%;
  }
  .v-stepper__step {
    cursor: pointer;
    margin-left: -16px;
    padding-right: 0;

    .right-border-img {
      height: 100px;
      top: -12px;
      right: -7px;
      position: absolute;
      z-index: 1;
    }

    &:after {
      content: "";  
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-left: 20px solid rgba(0, 0, 0, 0.38);
      position: absolute; 
      right: -20px;
      top: 24px;
      z-index: 1;
    }
    &:before {
      content: "";  
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-left: 20px solid var(--v-white-base);
      position: absolute; 
      left: 24px; 
      top: 24px;
    }
  }

  .active {
    .v-stepper__step__step {
      background: var(--v-expandHeader-base) !important;
    }
  }

  .v-stepper__step--complete, .active {
    cursor: auto;
    &:after {
      border-left: 20px solid var(--v-expandHeader-base);
    }
  }

  .v-stepper__step__step {
    border-radius: 0 !important;
    margin-right: 0 !important;
    padding: 20px 40px;
    width: 100%;
  }

        
  .v-stepper__step:first-child:before,
  .v-stepper__step:last-child:after {
    display: none; 
  }
    
  .v-stepper__step:first-child .v-stepper__step__step{
    border-top-left-radius: 10px !important; 
    border-bottom-left-radius: 10px !important;
  }

  .v-stepper__step:last-child .v-stepper__step__step{
    border-top-right-radius: 10px !important; 
    border-bottom-right-radius: 10px !important;
    padding-right: 40px;
  }
}

		
</style>

