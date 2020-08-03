<template>
  <div>
    <span :class="[getBadgeType(), 'text-center', 'white--text', 'px-3', 'py-1', 'badge-type', 'mew-caption']">{{ badgeTitle }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgeTypes: {
        warning: 'warning'
      }
    }
  },
  props: {
    /**
     * Badge types: 'txIn', 'txOut', 'swap, 'error', 'warning'
     */
    badgeType: {
      type: String,
      default: ''
    },    
    /**
     * Badge title
     */
    badgeTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    getBadgeType() {
      if (this.badgeType.toLowerCase() === this.badgeTypes.warning ) {
        return 'warning darken-2';
      }
      return this.badgeType;
    }
  }
}
</script>


<style lang="scss" scoped>
.badge-type {
  border-radius: 4px;
}
</style>