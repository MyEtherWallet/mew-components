<template>
  <!--
  =====================================================================================
  Mew Blockie
  =====================================================================================
  -->
  <div>
    <!--
    ===========================================================================
    Blockie to print
    ===========================================================================
    -->
    <img
      v-if="printable"
      ref="printable"
      :src="PrintableBlockieImg"
      alt="Blockie Image"
      class="printable-blockie-image"
    />

    <!--
    ===========================================================================
    Blockie to display
    ===========================================================================
    -->
    <div v-else>
      <div ref="identicon" class="address-identicon" />
      <img v-if="currency" alt="icon" class="currency-icon" :src="currency" />
    </div>
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
    /**
     * Printable blockie image
     */
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
    // Create printable blockie image
    if (this.printable) this.createPrintableBlockie();
    else this.setBlockie();
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
    },
    setBlockie() {
      const data = Blockies({
        seed: this.address ? this.address.toLowerCase() : '',
        size: this.size,
        scale: this.scale
      }).toDataURL();
      this.$refs.identicon.style.width = this.width;
      this.$refs.identicon.style.height = this.height;
      this.$refs.identicon.style.backgroundImage = `url('${data}')`;
    }
  }
};
</script>

<style lang="scss" scoped>
.address-identicon {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset rgba(255, 255, 255, 0.25) 0 2px 2px,
    inset rgba(0, 0, 0, 0.6) 0 -1px 8px;
  height: 100%;
  width: 100%;
}
// box-shadow removed for print quality
.printable-blockie-image {
  display: block;
  border-radius: 50%;
}
</style>
