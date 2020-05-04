<template>
  <div>
    <span :class="[badgeType, 'text-center', 'white--text', 'px-3', 'py-1', 'badge-type', 'mew-caption']">{{ badgeTypes[badgeType] }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgeTypes: {
        txIn: 'In',
        txOut: 'Out',
        swap: 'Swap',
        error: 'Expired'
      }
    }
  },
  props: {
    /**
     * Badge types: 'txIn', 'txOut', 'swap, 'error'
     */
    badgeType: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="scss" scoped>
.badge-type {
  border-radius: 4px;
}
</style>