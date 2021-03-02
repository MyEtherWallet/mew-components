<template>
  <v-sheet
    min-width="600"
    width="100%"
    color="mewSheet"
    class="mew-sheet rounded-lg"
  >
    <slot />
  </v-sheet>
</template>

<script>
export default {
};
</script>


<style lang="scss">
.mew-sheet {
  box-shadow: 0 0 15px var(--v-boxShadow-base) !important;
}

</style>
