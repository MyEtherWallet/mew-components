<template lang="html">
  <div ref="identicon" class="address-identicon" />
</template>
<script>
import Blockies from "@/helpers/blockies.js";
export default {
  name: "Blockie",
  props: {
    /**
     * Valid address
     */
    address: {
      type: String,
      default: ""
    },
    /**
     * Blockie width
     */
    width: {
      type: String,
      default: "64px"
    },
    /**
     * Blockie height
     */
    height: {
      type: String,
      default: "64px"
    },
    /**
     * Blockie size
     */
    size: {
      type: Number,
      default: 8
    },
    /**
     * Blockie scale
     */
    scale: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {};
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
    this.setBlockie();
  },
  methods: {
    setBlockie() {
      console.error('this', this.address)
      const data = Blockies({
        seed: this.address ? this.address.toLowerCase() : "",
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
</style>
