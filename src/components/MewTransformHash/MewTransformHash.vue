<template>
  <span
    class="d-flex justify-end hash-container"
  >
    <span>
      {{ getFirstPart(hash) }}</span>
    <span class="truncate">{{ getMiddlePart(hash) }}</span>
    <span>{{ getLastPart(hash) }}</span>
  </span>
</template>

<script>
export default {
  name: 'MewTransformHash',
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
      return addr.slice(0, 6);
    },
    getMiddlePart(addr) {
      const n = addr.length;
      return addr.slice(6, n - 6);
    },
    getLastPart(addr) {
      const n = addr.length;
      return addr.slice(n - 6, n);
    },
    getEllipsis(str) {
      return str.substr(0, 6) + '...' + str.substr(str.length-6, str.length);
    }
  }
}
</script>

<style lang="scss">
.hash-container {
  max-width: 100%;
}
</style>