<template>
  <div>
    <div
      v-show="address"
      style="position: relative"
      :style="`width: ${width}; height: ${height}`"
    >
      <img
        ref="blockie"
        :src="blockieImg"
        alt="Blockie Image"
        style="display: block; border-radius: 50%"
      />

      <!--
      =====================================================================
      Inset shadow on edge of blockie image
      =====================================================================
      -->
      <div v-if="!flat" class="inset-shadow" />
    </div>
    <img v-if="currency" alt="icon" class="currency-icon" :src="currency" />
  </div>
</template>

<script setup>
import Blockies from '@/helpers/blockies.js';
import { ref, onMounted, watch, defineProps } from 'vue';

const props = defineProps({
  /**
   * Currency image url
   */
  currency: {
    type: String,
    default: '',
  },
  /**
   * Valid address
   */
  address: {
    type: String,
    default: '',
  },
  /**
   * Blockie width
   */
  width: {
    type: String,
    default: '64px',
  },
  /**
   * Blockie height
   */
  height: {
    type: String,
    default: '64px',
  },
  /**
   * Remove inset shadow
   */
  flat: {
    type: Boolean,
    default: false,
  },
});

const scale = ref(16);
const size = ref(8);
const blockieImg = ref(null);

watch([props.address, props.width, props.height, scale, size], () => {
  createBlockie;
});

onMounted(() => {
  createBlockie();
});

const createBlockie = () => {
  blockieImg.value = Blockies({
    seed: props.address ? props.address.toLowerCase() : '',
    size: size.value,
    scale: scale.value,
  }).toDataURL();
  this.$refs.blockie.style.width = props.width;
  this.$refs.blockie.style.height = props.height;
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
</style>
