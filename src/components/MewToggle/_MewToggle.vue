<template>
  <!--
=====================================================================================
  Mew Toggle 
=====================================================================================
-->
  <div>
    <v-btn-toggle
      :mandatory="true"
      v-model="onBtn"
      :borderless="true"
      class="mew-toggle"
      v-if="isCustom"
    >
      <div
        :class="getClasses()"
        color="mewBg"
        @click="onBtnClick(btn)"
        v-for="(btn, i) in buttonGroup"
        :key="btn + i"
      >
        <!--
=====================================================================================
  Slot: 'btn' + number of btn (used to place custom ui in a specific toggle button)
=====================================================================================
-->
        <slot :name="'btn' + (i + 1)" />
      </div>
    </v-btn-toggle>
    <v-btn-toggle
      :mandatory="isDefault"
      v-model="onBtn"
      :borderless="true"
      class="mew-toggle"
      v-if="!isCustom"
    >
      <v-btn
        :class="getClasses()"
        color="mewBg"
        @click="onBtnClick(btn)"
        v-for="(btn, i) in buttonGroup"
        :key="btn + i"
      >
        {{ btn }}
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch, computed } from 'vue';

const buttonTypes = ref({
  custom: 'custom',
  default: 'default',
  percentage: 'percentage',
});
const onBtn = ref(null);

const props = defineProps({
  /**
   * Controls which toggle button index is active.
   */
  onToggleBtnIdx: {
    type: Number,
    default: 0,
  },
  /**
   * Accepts an array of button names.
   */
  buttonGroup: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /**
   * Applies the button type: 'custom', 'percentage', 'default'. Custom is used when you need to use the slots.
   */
  buttonType: {
    type: String,
    default: 'default',
  },
});
onMounted(() => {
  onBtn.value = props.onToggleBtnIdx;
});

watch(props.onToggleBtnIdx, () => {
  onBtn.value = props.onToggleBtnIdx;
});

const onBtnClick = (btn) => {
  this.$emit('onBtnClick', btn);
};
const getClasses = () => {
  if (props.buttonType.toLowerCase() === buttonTypes.value.default) {
    return 'mew-caption default-btn';
  }

  if (props.buttonType.toLowerCase() === buttonTypes.value.percentage) {
    return 'percentage-btn';
  }
};

const isDefault = computed(() => {
  return props.buttonType.toLowerCase() === buttonTypes.value.default;
});
const isCustom = computed(() => {
  return props.buttonType.toLowerCase() === buttonTypes.value.custom;
});
</script>

<style lang="scss" scoped>
.mew-toggle {
  border-radius: 6px;
  .v-btn {
    border-radius: 6px;
    opacity: 1;
    padding: 0;
    // default btn group
    &.default-btn {
      color: var(--v-textPrimary-base);
      font-weight: normal !important;
      height: 25px !important;
      min-width: 31px !important;
      margin-right: 5px;
      &.v-btn--active {
        background-color: var(--v-blue500-base) !important;
        color: var(--v-white-base);
        font-weight: bold !important;
      }
    }

    // percentage btn group
    &.percentage-btn {
      color: var(--v-titlePrimary-base);
      height: 33px !important;
      margin-right: 15px;
      width: 49px !important;
      text-transform: capitalize;
      &.v-btn--active {
        background-color: var(--v-white-base) !important;
        border: 1px solid var(--v-primary-base) !important;
        color: var(--v-primary-base) !important;

        &:before {
          opacity: 0;
        }
      }

      .v-ripple__container {
        color: var(--v-white-base) !important;
      }
    }
  }
}
</style>
