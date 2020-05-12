<template>
  <div>
    <v-expansion-panels :flat="true">
      <v-expansion-panel
        v-for="(item,i) in panelItems"
        :key="i"
      >
        <v-expansion-panel-header
          expand-icon="mdi-pencil-outline"
          class="white--text font-weight-medium"
          :color="item.color"
        >
          {{ item.name }}

          <div
            slot="actions"
            class="d-flex align-center justify-centers"
          >
            <span class="white--text mr-4 font-weight-regular">{{ item.rightText }}</span>
            <img
              height="20"
              class="edit-icon"
              src="@/assets/images/icons/icon-edit.png"
            >
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="white">
          <slot :name="'panelBody' + i" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  props: {
    panelItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
}
</script>

<style lang="scss">


</style>