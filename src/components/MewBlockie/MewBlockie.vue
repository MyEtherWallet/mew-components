<template>
  <div>
    <div style="position: relative">
      <img
        ref="printable"
        :src="PrintableBlockieImg"
        alt="Blockie Image"
        class="printable-blockie-image"
      />
      <div v-if="!printable" class="inset-shadow"></div>
    </div>
    <img v-if="currency" alt="icon" class="currency-icon" :src="currency" />
  </div>
</template>

<script>
import Blockies from '@/helpers/blockies.js';

export default {
  name: 'MewBlockie',
  props: {
    /**
     * Currency image url
     */
    currency: {
      type: String,
      default: ''
    },
    /**
     * Valid address
     */
    address: {
      type: String,
      default: ''
    },
    /**
     * Blockie width
     */
    width: {
      type: String,
      default: '64px'
    },
    /**
     * Blockie height
     */
    height: {
      type: String,
      default: '64px'
    },
    printable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scale: 16,
      size: 8,
      PrintableBlockieImg: null
    };
  },
  watch: {
    address() {
      this.setBlockie();
    },
    width() {
      this.setBlockie();
    },
    height() {
      this.setBlockie();
    },
    scale() {
      this.setBlockie();
    },
    size() {
      this.setBlockie();
    }
  },
  mounted() {
    this.createPrintableBlockie();
  },
  methods: {
    createPrintableBlockie() {
      this.PrintableBlockieImg = Blockies({
        seed: this.address ? this.address.toLowerCase() : '',
        size: this.size,
        scale: this.scale
      }).toDataURL();
      this.$refs.printable.style.width = this.width;
      this.$refs.printable.style.height = this.height;
    }
  }
};
</script>

<style lang="scss" scoped>
.inset-shadow {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: inset 0px 0px 4px #939393;
  height: 100%;
  width: 100%;
}
.printable-blockie-image {
  display: block;
  border-radius: 50%;
}
</style>
