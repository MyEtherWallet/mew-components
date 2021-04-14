<template>
  <v-dialog max-width="500" :value="show">
    <v-sheet class="py-6 px-4">
      <!--
        =====================================================================================
          Dialog Header
        =====================================================================================
        -->
      <v-row class="header-container">
        <v-col cols="11" align-self="center">
          <p class="mew-heading-2 text-center">{{ title }}</p>
        </v-col>
        <v-icon size="large" color="grey cursor--pointer icon" @click="close"
          >mdi-close</v-icon
        >
      </v-row>
      <!--
        =====================================================================================
          Dialog Body
        =====================================================================================
        -->
      <slot name="dialogBody">
        <div>This is a test value</div>
      </slot>
      <!--
        =====================================================================================
          Dialog action
        =====================================================================================
        -->
      <v-row>
        <v-col cols="12" class="text-center">
          <mew-button
            @click.native="btnAction"
            btn-size="xlarge"
            :title="btnText"
            :disabled="btnEnabled"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-dialog>
</template>

<script>
export default {
  name: "MewModal",
  props: {
    /**
     * Title that shows at the top of the modal
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Close function from parent.
     */
    close: {
      type: Function,
      default: () => {},
    },
    /**
     * Show passed from parent
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets button to disabled depending on parent case
     */
    btnEnabled: {
      type: Boolean,
      default: true,
    },
    /**
     * Method to call for modal button
     */
    btnAction: {
      type: Function,
      default: () => {},
    },
    /**
     * Button text
     */
    btnText: {
      type: String,
      default: "Confirm and Send",
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  .icon {
    right: 5px;
    position: absolute;
  }
}
</style>
