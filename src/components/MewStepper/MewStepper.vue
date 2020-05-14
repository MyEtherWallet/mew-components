<template>
  <v-stepper
    light
    class="mew-stepper"
    v-model="onStep"
  >
    <v-stepper-header class="justify-center">
      <v-stepper-step
        :class="[ 'font-weight-medium' ,onStep === item.step ? 'active' : '', onStep > item.step ? 'complete' : '' ]"
        color="expandHeader"
        v-for="(item, i) in items"
        :key="i"
        :step="item.name"
      />
    </v-stepper-header>

    <v-stepper-items
      v-for="(item, i) in items"
      :key="i"
    > 
      <v-stepper-content :step="onStep">
        <slot :name="'stepperContent' + onStep" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    onStep: {
      type: Number,
      default: 1
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
      border-left: 20px solid var(--v-superPrimary-base);
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

  .v-stepper__step:not(.active):not(.complete):not(.v-stepper__step--error) .v-stepper__step__step {
    background-color: var(--v-superPrimary-base) !important;
    // border: 1px solid var(--v-disabled-base);
    color: var(--v-textSecondary-base);
  }

  .active {
    cursor: auto;
    .v-stepper__step__step {
      background: var(--v-expandHeader-base) !important;
    }
    &:after {
        border-left: 20px solid var(--v-expandHeader-base);
    }
  }

  .complete {
    cursor: auto;
    .v-stepper__step__step {
      background-color: var(--v-textSecondary-base) !important;
    }

    &:after {
      border-left: 20px solid var(--v-textSecondary-base) !important;
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

        
  .v-stepper__step:first-of-type:before,
  .v-stepper__step:last-child:after {
    display: none; 
  }
    
  .v-stepper__step:first-of-type .v-stepper__step__step{
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

