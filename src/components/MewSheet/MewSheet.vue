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
    min-width="600"
    width="100%"
    color="white"
    class="mew-sheet rounded-lg"
  >
    <slot name="content" />
  </v-sheet>
</template>

<script>
export default {
};
</script>


<style lang="scss">
.mew-sheet {
   box-shadow: 0 12px 17px rgb(21 29 63 / 3%);
}

</style>
