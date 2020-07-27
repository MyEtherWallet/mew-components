<template>
  <span
    class="d-flex hash-container"
  >
    <span>
      {{ getFirstPart(hash) }}</span>
    <span class="truncate">{{ getMiddlePart(hash) }}</span>
    <span>{{ getLastPart(hash) }}</span>
  </span>
</template>

<script>
export default {
  props: {
    /**
     * Hash
     */
    hash: {
      type: String,
      default: ''
    }
  },
  methods: {
    getFirstPart(addr) {
      return addr.slice(0, 7);
    },
    getMiddlePart(addr) {
      const n = addr.length;
      return addr.slice(7, n - 7);
    },
    getLastPart(addr) {
      const n = addr.length;
      return addr.slice(n - 7, n);
    },
    getEllipsis(str) {
      return str.substr(0, 6) + '...' + str.substr(str.length-7, str.length);
    }
  }
}
</script>

<style lang="scss">
.hash-container {
  max-width: 90%;
}
</style>