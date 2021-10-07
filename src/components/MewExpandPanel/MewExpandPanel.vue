<template>
  <!--
  =====================================================================================
    Mew Expand Panel
  =====================================================================================
  -->
  <v-expansion-panels
    v-model="expandIdxArr"
    :accordion="isAccordion"
    multiple
    :class="expandPanelsClasses"
    :flat="true"
  >
    <v-expansion-panel
      :class="!isAccordion ? 'mb-2' : ''"
      v-for="(item, i) in panelItems"
      :key="i"
    >
      <!--
    =====================================================================================
      Panel Header 
    =====================================================================================
    -->
      <v-expansion-panel-header
        :class="[
          'pa-5',
        ]"
        :color="isGreyTheme ? 'rgba(90, 103, 138, 0.08)' : 'white'"
      >
        <!--
    =====================================================================================
      Panel Header - Left 
    =====================================================================================
    -->
        <div class="d-flex align-center mew-body font-weight-medium surface--text">
          {{ item.name }}
        </div>
        <!--
    =====================================================================================
      Panel Header - Right
    =====================================================================================
    -->
        <div
          slot="actions"
          class="d-flex align-center justify-center"
        >
          <span class="inputLabel--text mew-body mr-5 text-right">{{ item.subtext }}</span>
          <!--
  =====================================================================================
    Chevron icon to toggle expand
  =====================================================================================
  -->
          <v-icon v-if="!isExpanded(i)">
            mdi-chevron-down
          </v-icon>
          <v-icon v-else>
            mdi-chevron-down
          </v-icon>
        </div>
      </v-expansion-panel-header>
      <!--
  =====================================================================================
    Panel Content, has slot: 'panelBody' + the number of the panel (used to place content in the panel body)
  =====================================================================================
  -->
      <v-expansion-panel-content color="white">
        <slot :name="'panelBody' + (i + 1)" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>

export default {
  name: 'MewExpandPanel',
  data() {
    return {
      expandIdxArr: [],
    };
  },
  props: {
    /**
     * Expands the panel index.
     */
    idxToExpand: {
      type: Number,
      default: 0,
    },
    /**
     * Accepts an array of panel objects, i.e [{ name: '', subtext: '' }]
     */
    panelItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isGreyTheme: {
      type: Boolean,
      default: false
    },
    isAccordion: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    idxToExpand(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.expandIdxArr = newVal;
      }
    },
  },
  computed: {
    expandPanelsClasses() {
      const classes = ['mew-expand-panel', 'rounded-lg'];
      if (this.isGreyTheme) {
        classes.push('grey-theme');
      }
      if (!this.isAccordion) {
        classes.push('split-panels');
      }
      return classes;
    }
  },
  mounted() {
    console.error("dafsad", this.isAccordion)
    this.expandIdxArr = this.idxToExpand;
  },
  methods: {
    isExpanded(idx) {
      if (
        (Array.isArray(this.expandIdxArr) && this.expandIdxArr.includes(idx)) ||
        this.expandIdxArr === idx
      ) {
        return true;
      }
      return false;
    }
  },
};
</script>

<style lang="scss">
.mew-expand-panel {
  &.v-expansion-panels--accordion {
    &.grey-theme {
      border: 1px solid rgba(90, 103, 138, 0.24);
      .v-expansion-panel {
        border-bottom: 1px solid rgba(90, 103, 138, 0.24);
      }
      .v-expansion-panel:last-child {
        border-bottom: none;
      }
    }
  }

  .v-expansion-panel {
    .v-expansion-panel-content__wrap {
      padding: 0;
    }
    // &.v-expansion-panel--active {
    //   margin-top: 0;
    // }
  }
}
</style>
