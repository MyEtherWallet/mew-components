<template>
  <div>
    <img
      :height="imgHeight"
      v-if="!isPng"
      :src="`../assets/images/icons/${iconName}.svg`"
    >
    <img
      :height="imgHeight"
      v-if="isPng"
      :src="`../assets/images/icons/footer/${iconName}.png`"
    >
  </div>
</template>

<script>

export default {
  props: {
    /**
     * Icon name
     */
      iconName: {
      type: String,
      default: ''
    },
    /**
     * Return true if it is png.
     */
      isPng: {
      type: Boolean,
      default: false
    },
    /**
     * Image height
     */
      imgHeight: {
      type: Number,
      default: 40
    }
  }
}

</script>