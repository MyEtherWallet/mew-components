<!--
=====================================================================================
  Mew Sheet 
  TODO: need to come back to this to add dark mode and figure out if we actually 
  need this sheet
  slot: content (used to place custom ui in the body)
=====================================================================================
-->
<template>
  <v-sheet
    color="mewBg"
    :class="[$vuetify.theme.dark ? 'box-shadow-dark' : 'box-shadow-light']"
  >
    <slot />
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mew-component--white-sheet.box-shadow-light {
  border-radius: 10px;
  box-shadow: 0 0 15px var(--v-boxShadow-base) !important;
}
.mew-component--white-sheet.box-shadow-dark {
  border-radius: 10px;
  box-shadow: 0 0 15px #3c3c3c !important;
}
</style>
