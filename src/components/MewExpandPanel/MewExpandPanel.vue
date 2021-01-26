<template>
  <v-expansion-panels
    v-model="expandIdxArr"
    :multiple="isToggle"
    class="mew-expand-panel"
    :flat="true"
  >
    <v-expansion-panel
      :disabled="item.disabled"
      v-for="(item,i) in panelItems"
      :key="i"  
    >
      <v-divider v-if="hasDividers" />
      <v-expansion-panel-header
        :class="['titlePrimary--text', 'mew-heading-3', isToggle ? 'pa-3 no-pointer-events' : 'pa-5']"
        :color="item.colorTheme"
      > 
        <div class="header-container">
          <span :class="['ml-2','mew-heading-3', item.tooltip? 'd-flex align-center' :'']"> 
            {{ item.name }}
            <mew-tooltip
              class="ml-1"
              :text="item.tooltip"
              v-if="item.tooltip"
            />
          </span>
          <span
            v-if="!item.tooltip && item.warningBadge"
            :class="[item.warningBadge.color, 'ml-2', 'text-center', 'white--text', 'px-2', 'py-1', 'badge-type', 'mew-caption']"
          >{{ item.warningBadge.text }}</span>
        </div>

        <div
          slot="actions"
          class="d-flex align-center justify-centers"
        >
          <span
            class="inputLabel--text mew-body mr-2"
          >{{ item.subtext }}</span>
          <slot name="mewExpandPanelActions" />
          <mew-switch
            ref="switch"
            v-if="isToggle && !disabled"
          />
          <span v-if="!isToggle && !disabled">
            <img
              v-if="!isExpanded(i)"
              height="30"
              class="edit-icon"
              src="@/assets/images/icons/edit.svg"
            >
            <v-icon v-if="isExpanded(i)">
              mdi-chevron-down
            </v-icon>
          </span>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="white">
        <slot :name="'panelBody' + (i + 1)" />
      </v-expansion-panel-content>
      <v-divider v-if="hasDividers" />
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import MewSwitch from '@/components/MewSwitch/MewSwitch.vue';
import MewTooltip from '@/components/MewTooltip/MewTooltip.vue';

export default {
  name: 'MewExpandPanel',
  components: {
    MewSwitch,
    MewTooltip
  },
  data() {
    return {
      expandIdxArr: []
    }
  },   
  props: {
    /**
     * Applies dividers to the expand panel.
     */
    idxToExpand: {
      type: Number,
      default: 0
    },
    /**
     * Applies dividers to the expand panel.
     */
    hasDividers: {
      type: Boolean,
      default: false
    },
    /**
     * Turns the panel actions to a toggle btn. The subtext attribute in panelItems becomes the switch label.
     */
    isToggle: {
      type: Boolean,
      default: false
    },
    /**
     * Accepts an array of panel objects, i.e [{ name: '', tooltip: '', subtext: '', link: '', disabled: false }]
     */
    panelItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
  },
  watch: {
    idxToExpand(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.expandIdxArr = newVal;
      }
    }
  },
  mounted() {
    this.expandIdxArr = this.idxToExpand;
  },
  methods: {
    setToggle(val) {
      if (val === true && !this.expandIdxArr.includes(0)) {
        this.expandIdxArr.push(0)
      }
      if (val === false && this.expandIdxArr.includes(0)) {
        this.expandIdxArr.pop();
      }
      this.$refs.switch[0].setToggle(val);
    },
    isExpanded(idx) {
      if (typeof this.expandIdxArr === 'array' && this.expandIdxArr.includes(idx)) {
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
  .badge-type {
    border-radius: 4px;
    font-size: 11px !important;
  }
}
</style>