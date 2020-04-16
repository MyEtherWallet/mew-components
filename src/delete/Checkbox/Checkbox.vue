<template>
  <v-checkbox
    class="the-checkbox-component-aaeff97c707f505af0ea3e32e276dcd7"
    :label="checkbox1 ? labelChecked : labelUnchecked"
    v-model="checkbox1"
    color="teal accent-4"
  ></v-checkbox>
</template>

<script>
export default {
  props: {
    labelChecked: String,
    labelUnchecked: String
  },
  data: () => ({
    checkbox1: false
  }),
  watch: {
    checkbox1(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style lang="scss">
/*
@import "@/global.scss";
.the-checkbox-component-aaeff97c707f505af0ea3e32e276dcd7 {
  .v-icon.v-icon {
    //font-size: 30px;
  }
  .theme--light.v-icon {
    color: #e0e0e0;
  }
  .v-input--selection-controls__ripple {
    //left: -10px;
  }
  .v-input--selection-controls__input {
    //margin-right: 12px;
  }
  .theme--light.v-label {
    color: $checkbox--inactive--font-color;
  }

  &.v-input--is-label-active {
    .theme--light.v-label {
      color: $checkbox--active--font-color;
    }
  }
}
*/
</style>
