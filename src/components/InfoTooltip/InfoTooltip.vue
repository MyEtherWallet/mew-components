<template>
  <div>
    <v-tooltip
      color="white titlePrimary--text"
      top
    >
      <template v-slot:activator="{ on }"> 
        <v-icon
          class="cursor-pointer"
          color="searchText"
          v-on="on"
        >
          mdi-information
        </v-icon>
      </template>
      <span>{{ text }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'InfoTooltip',
  props: {
    /**
     * The tooltip text.
     */
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
