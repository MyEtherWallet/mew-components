<template>
  <v-expansion-panels
    v-model="expandIdxArr"
    multiple
    class="mew-expand-panel"
    :flat="true"
  >
    <v-expansion-panel
      v-for="(item,i) in panelItems"
      :key="i"  
    >
      <v-expansion-panel-header
        class="basic--text mew-heading-3 pa-8"
        color="white"
      > 
        <div class="header-container">
          <span> {{ item.name }} </span>
          <span
            v-if="!isToggle"
            class="inputLabel--text mew-body ml-2"
          >{{ item.subtext }}</span>
        </div>

        <div
          slot="actions"
          class="d-flex align-center justify-centers"
        >
          <mew-switch
            v-if="isToggle"
            :label="item.subtext"
          />
          <span v-if="!isToggle">
            <img
              v-if="!isExpand(i)"
              height="30"
              class="edit-icon"
              src="@/assets/images/icons/icon-edit-green.png"
            >
            <!-- need to change icon once jack provides it -->
            <v-icon v-if="isExpand(i)">
              mdi-chevron-down
            </v-icon>
          </span>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="white">
        <slot :name="'panelBody' + i" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import MewSwitch from '@/components/MewSwitch/MewSwitch.vue';


export default {
  components: {
    'mew-switch': MewSwitch
  },
  data() {
    return {
      expandIdxArr: []
    }
  },   

  props: {
  /**
   * Turns the panel actions to a toggle btn. The subtext attribute in panelItems becomes the switch label.
   */
  isToggle: {
    type: Boolean,
    default: false
  },
  /**
   * Accepts an array of panel objects, i.e [{ name: '', subtext: '' }]
   */
    panelItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    isExpand(idx) {
      if (this.expandIdxArr.includes(idx)) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style lang="scss">
.mew-expand-panel {
  .v-expansion-panel  {
    border-radius: 12px;
    margin-bottom: 10px;
  }
  .v-expansion-panel-header,  .v-expansion-panel-content {
    border-radius: 12px;
  }
}
</style>