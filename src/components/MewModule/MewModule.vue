<template>
    <!--
  =====================================================================================
    Mew Module
  =====================================================================================
  -->
  <v-sheet 
    :class="[ hasElevation ? 'module-box-shadow' : '', 'full-width', 'module-container']"
    :color="colorType"
    :height="hasFullHeight ? '100%' : 'auto'"
  >
    <!--
  =====================================================================================
    Module header
  =====================================================================================
  -->
    <v-container fluid>
      <v-row
        align="center"
        justify="space-between"
      >
        <div :class="['left-wrapper pl-8 py-4 d-flex flex-row justify-center align-center', hasIndicator ? 'indicator' : '']">
          <div class="left-icon mr-2" v-if="showIcon(icon)">
            <img
              v-if="iconAlign.toLowerCase() === iconAlignments.left"
              :src="icon"
              height="50"
              alt="left icon"
            >
          </div>
          <div class="d-flex flex-column">
            <span v-if="subtitle" class="mew-heading-3 textPrimaryModule--text text-uppercase">{{ subtitle }}</span>
            <span v-if="title" :class="['titlePrimary--text', titleSize]">{{ title }}</span>
            <span v-if="caption" class="mew-body textSecondaryModule--text font-weight-bold">{{ caption }}</span>
          </div>
          <div class="right-icon" v-if="showIcon(icon)">
            <img
              v-if="iconAlign.toLowerCase() === iconAlignments.right"
              :src="icon"
              height="50"
              alt="right icon"
            >
          </div>
    <!--
  =====================================================================================
    Slot: leftHeaderContainer (used to place custom ui on the left)
  =====================================================================================
  -->
          <slot name="leftHeaderContainer" />
        </div>
        <div class="right-wrapper pr-10 pt-2">
      <!--
  =====================================================================================
    Slot: rightHeaderContainer (used to place custom ui on the right)
  =====================================================================================
  -->
          <slot name="rightHeaderContainer" />
        </div>
      </v-row>  
      <!--
  =====================================================================================
    Module Body
  =====================================================================================
  -->
      <v-row
        align="center"
        justify="center"
      >
      <!--
  =====================================================================================
    Slot: moduleBody (used to place custom ui on the body content)
  =====================================================================================
  -->
        <v-container class="pa-3 pa-md-10" fluid> 
          <slot name="moduleBody" />
        </v-container>
      </v-row> 
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'MewModule',
  data() {
    return {
        iconAlignments: {
        left: 'left',
        right: 'right'
      },
    }
  },
  props: {
    /**
     * The icon url. Inserts an icon next to the title.
     */
    icon: {
      type: [ String, Array],
      default: ''
    },
     /**
     * Aligns the icon: left, right, or none.
     */
    iconAlign: {
      type: String,
      default: 'none'
    },
    /**
     * Background color
     */
    colorType: {
      type: String,
      default: ''
    },
    /**
     * The title of the module.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * The subtitle of the module.
     */
    subtitle: {
      type: String,
      default: ''
    },
    /**
     * The caption of the module.
     */
    caption: {
      type: String,
      default: ''
    },
    /**
     * Title size class.
     */
    titleSize: {
      type: String,
      default: 'mew-heading-2'
    },
    /**
     * Displays indicator.
     */
    hasIndicator: {
      type: Boolean,
      default: false
    },
    /**
     * Adds elevation to the module.
     */
    hasElevation: {
      type: Boolean,
      default: false
    },
    /**
     * Adjusts the module to 100% height.
     */
    hasFullHeight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showIcon(src) {
      if (src === '' || src.length <= 0 ) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
.module-container {
  border-radius: 12px;
  &.module-box-shadow {
     box-shadow: 0 12px 17px rgb(21 29 63 / 3%) !important;
  }
  .indicator {
    border-left: 4px solid var(--v-primary-base);
    min-height: 30px;
  }
}
</style>