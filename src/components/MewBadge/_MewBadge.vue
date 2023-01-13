<template>
  <!--
  =====================================================================================
    Mew Badge - currently used in mew-notifications.
  =====================================================================================
  -->
  <span
    :class="[
      getBadgeType(),
      'text-center',
      'white--text',
      'px-3',
      'py-1',
      'rounded',
      'mew-caption',
    ]"
    >{{ badgeTitle }}</span
  >
</template>

<script setup>
const badgeTypes = {
  warning: 'warning',
};

const props = defineProps({
  /**
   * Badge types: 'in', 'out', 'swap, 'error', 'warning'
   */
  badgeType: {
    type: String,
    default: '',
  },
  /**
   * Badge title
   */
  badgeTitle: {
    type: String,
    default: '',
  },
});

const getBadgeType = () => {
  if (props.badgeType.toLowerCase() === badgeTypes.warning) {
    return 'warning darken-2';
  }
  return props.badgeType;
};
</script>
