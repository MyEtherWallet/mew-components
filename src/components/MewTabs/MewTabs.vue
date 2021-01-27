<template>
  <div>
    <v-tabs
      :class="[hasUnderline ? 'mew-tabs-underline' : '', isBlock ? 'mew-tabs-block elevation-2' : '']"
      background-color="transparent"
      color="titlePrimary"
      :centered="isCentered"
      slider-size="3"
      v-model="onTab"
      :hide-slider="isBlock || isVertical"
      :grow="isBlock"
      :vertical="isVertical"
      :align-with-title="!isBlock && !isVertical && !isCentered"
    >
      <v-tab
        :class="[isBlock ? 'mew-tab-block' : 'mew-heading-2', 'capitalize']"
        v-for="(item, i) in items"
        :key="item + i"
      >
        {{ item.name }}
      </v-tab>
      <v-tabs-items v-model="onTab">
        <v-tab-item
          v-for="(item, i) in items"
          :key="item + i"
        >
          <v-slide-x-reverse-transition
            :hide-on-leave="true"
            mode="out-in"
          >
            <slot :name="'tabItemContent' + (i + 1)" />
          </v-slide-x-reverse-transition>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>

    <div
      v-for="(item, i) in items"
      :key="item + i"
    >
      <v-slide-x-reverse-transition
        :hide-on-leave="true"
        mode="out-in"
      >
        <slot
          v-if="onTab === i"
          :name="'tabContent' + (i + 1)"
        />
      </v-slide-x-reverse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MewTabs',
  data() {
    return {
      onTab: null
    }
  },
  props: {
    /**
     * Sets the active tab.
     */
    activeTab: {
      type: Number,
      default: 0
    },
    /**
     * Sets the tabs as vertical.
     */
    hasUnderline: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the tabs as vertical.
     */
    isVertical: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the tabs to the center of the page.
     */
    isCentered: {
      type: Boolean,
      default: false
    },
    /**
     * Tab content
     */
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /**
     * Shows the tab as a block. 
     */
    isBlock: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('onNextStep');
    }
  },
  mounted() {
    this.onTab = this.activeTab;
  },
  watch: {
    activeTab(newVal) {
      this.onTab = newVal;
    },
    onTab(newVal) {
      this.$emit('onTab', newVal)
    }
  }
}
</script>

<style lang="scss">
.mew-tabs-underline {
  .v-slide-group__content {
    border-bottom: 1px solid var(--v-inputBorder-base);
  }
}
.mew-tabs-block {
  border-radius: 12px !important;

  .mew-tab-block {
    background-color: var(--v-white-base);
    color: var(--v-basic-base) !important;
  }

  .v-tab--active {
    background: var(--v-basic-base);
    color: var(--v-white-base) !important;
  }

  .mew-tab-block:first-of-type {
    border-radius: 12px 0px 0px 12px;
  }

  .mew-tab-block:last-of-type {
    border-radius: 0px 12px 12px 0px;
  }
}
</style>

